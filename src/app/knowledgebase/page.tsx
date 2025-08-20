'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, Button } from '@/components/ui';
import { apiClient } from '@/lib/api';
import { 
  KnowledgebaseDocument,
  DocumentStatus 
} from '@/types/knowledgebase';
import { ApiError } from '@/types/auth';
import { 
  Upload, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  RefreshCw
} from 'lucide-react';

export default function KnowledgebasePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [documents, setDocuments] = useState<KnowledgebaseDocument[]>([]);
  const [isLoadingDocuments, setIsLoadingDocuments] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadDocuments = useCallback(async () => {
    setIsLoadingDocuments(true);
    try {
      const response = await apiClient.getAllDocuments();
      setDocuments(response);
    } catch (error) {
      console.error('Failed to load documents:', error);
    } finally {
      setIsLoadingDocuments(false);
    }
  }, []);



  useEffect(() => {
    loadDocuments();
    
    // Set up interval to refresh documents every 10 seconds
    const interval = setInterval(() => {
      loadDocuments();
    }, 10000);

    return () => clearInterval(interval);
  }, [loadDocuments]);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setUploadError('Please select a PDF file');
        return;
      }
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        setUploadError('File size must be less than 50MB');
        return;
      }
      setSelectedFile(file);
      setUploadError(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadError('Please select a file');
      return;
    }

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const response = await apiClient.uploadDocument(selectedFile);
      setUploadSuccess(response.message);
      
      // Clear form
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      // Refresh documents list
      await loadDocuments();
      
    } catch (error) {
      const apiError = error as ApiError;
      setUploadError(apiError.message || 'Failed to upload document');
    } finally {
      setIsUploading(false);
    }
  };



  const formatDate = (dateString?: string): string => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case DocumentStatus.UPLOADED: return 'text-green-600 bg-green-50';
      case DocumentStatus.PROCESSING: return 'text-blue-600 bg-blue-50';
      case DocumentStatus.REJECTED: return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case DocumentStatus.UPLOADED: return CheckCircle;
      case DocumentStatus.PROCESSING: return Clock;
      case DocumentStatus.REJECTED: return AlertCircle;
      default: return AlertCircle;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Policy Knowledgebase</h2>
          <p className="text-gray-600">Upload and manage policy documents for the AI knowledgebase</p>
        </div>

        {/* Upload Section */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Upload className="w-5 h-5 mr-2" />
              Upload Policy Document
            </h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* File Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select PDF Document
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Only PDF files up to 50MB are allowed
                </p>
              </div>

              {/* Selected File Info */}
              {selectedFile && (
                <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-900">{selectedFile.name}</span>
                  <span className="text-sm text-blue-600">
                    ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                  </span>
                </div>
              )}

              {/* Upload Button */}
              <div className="flex justify-start">
                <Button
                  onClick={handleUpload}
                  isLoading={isUploading}
                  disabled={isUploading || !selectedFile}
                  className="px-6"
                >
                  {isUploading ? 'Uploading...' : 'Upload Document'}
                </Button>
              </div>

              {/* Upload Messages */}
              {uploadError && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              {uploadSuccess && (
                <div className="flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md">
                  <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{uploadSuccess}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Documents Table */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Uploaded Documents ({documents.length})
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={loadDocuments}
              disabled={isLoadingDocuments}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoadingDocuments ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            {documents.length === 0 ? (
              <div className="text-center py-8">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No documents uploaded yet</p>
                <p className="text-gray-500 text-sm">Upload your first policy document to get started</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Document ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Original Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">File Size</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Uploaded At</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((doc) => {
                      const StatusIcon = getStatusIcon(doc.status);
                      return (
                        <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{doc.documentId}</td>
                          <td className="py-3 px-4 text-gray-700">{doc.originalName}</td>
                          <td className="py-3 px-4 text-gray-600">
                            {(Number(doc.fileSize) / (1024 * 1024)).toFixed(2)} MB
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {doc.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{formatDate(doc.createdAt)}</td>
                          <td className="py-3 px-4 text-gray-600">{formatDate(doc.updatedAt)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
