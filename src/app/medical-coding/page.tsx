'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, Button, Input } from '@/components/ui';
import { apiClient } from '@/lib/api';
import { PatientFhirResponse, FhirPatient } from '@/types/patient';
import { DiagnosisWithICD10, ICD10Code, DiagnosisSearchRequest } from '@/types/medical-coding';
import { ApiError } from '@/types/auth';
import { 
  Search, 
  User, 
  Shield, 
  Stethoscope, 
  Heart, 
  AlertCircle,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Plus,
  Sparkles
} from 'lucide-react';

export default function MedicalCodingPage() {
  const [patientId, setPatientId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [patientData, setPatientData] = useState<PatientFhirResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [diagnosesWithCodes, setDiagnosesWithCodes] = useState<DiagnosisWithICD10[]>([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);

  const handleExtractDetails = async () => {
    if (!patientId.trim()) {
      setError('Please enter a patient ID');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPatientData(null);
    setDiagnosesWithCodes([]);

    try {
      const data = await apiClient.getPatientFhirData(patientId.trim());
      setPatientData(data);
      
      // Convert diagnoses to DiagnosisWithICD10 format
      if (data.diagnoses) {
        const diagnosesWithICD10 = data.diagnoses.map((diagnosis) => ({
          ...diagnosis,
          icd10Code: '', // Initialize empty ICD10 code field
          suggestedCodes: [], // Initialize empty suggestions
        }));
        setDiagnosesWithCodes(diagnosesWithICD10);
      }
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to fetch patient data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestMedicalCodes = async () => {
    if (!diagnosesWithCodes.length) {
      return;
    }

    setIsLoadingSuggestions(true);

    try {
      // Prepare diagnosis search requests
      const searchRequests: DiagnosisSearchRequest[] = diagnosesWithCodes.map((diagnosis) => ({
        chief_complaint: diagnosis.code?.text || diagnosis.code?.coding?.[0]?.display || 'Unknown diagnosis',
      }));

      // Search for ICD10 codes
      const searchResults = await apiClient.searchDiagnosisCodes(searchRequests);

      // Update diagnoses with suggested codes
      const updatedDiagnoses = diagnosesWithCodes.map((diagnosis, index) => ({
        ...diagnosis,
        suggestedCodes: searchResults[index]?.suggestedCodes || [],
      }));

      setDiagnosesWithCodes(updatedDiagnoses);
    } catch (error) {
      console.error('Failed to get medical code suggestions:', error);
    } finally {
      setIsLoadingSuggestions(false);
    }
  };

  const handleAddCode = (diagnosisIndex: number, code: ICD10Code) => {
    const updatedDiagnoses = [...diagnosesWithCodes];
    updatedDiagnoses[diagnosisIndex].icd10Code = code.code;
    setDiagnosesWithCodes(updatedDiagnoses);
  };

  const handleManualCodeChange = (diagnosisIndex: number, value: string) => {
    const updatedDiagnoses = [...diagnosesWithCodes];
    updatedDiagnoses[diagnosisIndex].icd10Code = value;
    setDiagnosesWithCodes(updatedDiagnoses);
  };

  // Helper functions from patient module
  const formatName = (names?: FhirPatient['name']): string => {
    if (!names || names.length === 0) return 'N/A';
    const name = names[0];
    const given = name.given?.join(' ') || '';
    const family = name.family || '';
    return `${given} ${family}`.trim() || 'N/A';
  };

  const formatAddress = (addresses?: FhirPatient['address']): string => {
    if (!addresses || addresses.length === 0) return 'N/A';
    const address = addresses[0];
    const line = address.line?.join(', ') || '';
    const city = address.city || '';
    const state = address.state || '';
    const postalCode = address.postalCode || '';
    return `${line}, ${city}, ${state} ${postalCode}`.replace(/,\s*,/g, ',').trim() || 'N/A';
  };

  const formatPhone = (telecoms?: FhirPatient['telecom']): string => {
    if (!telecoms) return 'N/A';
    const phone = telecoms.find(t => t.system === 'phone');
    return phone?.value || 'N/A';
  };

  const formatEmail = (telecoms?: FhirPatient['telecom']): string => {
    if (!telecoms) return 'N/A';
    const email = telecoms.find(t => t.system === 'email');
    return email?.value || 'N/A';
  };

  const formatDate = (dateString?: string): string => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString();
  };

  const getAge = (birthDate?: string): string => {
    if (!birthDate) return 'N/A';
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      return (age - 1).toString();
    }
    return age.toString();
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Medical Coding</h2>
          <p className="text-gray-600">Search patient details and assign ICD10 codes to diagnoses</p>
        </div>

        {/* Search Form */}
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Search className="w-5 h-5 mr-2" />
              Patient Lookup
            </h3>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input
                  label="Patient ID"
                  placeholder="Enter Patient ID (e.g., 123456789)"
                  value={patientId}
                  onChange={(e) => setPatientId(e.target.value)}
                  error={error && !patientId.trim() ? error : undefined}
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleExtractDetails}
                  isLoading={isLoading}
                  disabled={isLoading || !patientId.trim()}
                  className="h-10"
                >
                  Extract Details
                </Button>
              </div>
            </div>
            
            {error && patientId.trim() && (
              <div className="mt-4 flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Patient Data */}
        {patientData && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <span>Patient data retrieved successfully for ID: {patientData.patientId}</span>
            </div>

            {/* Patient Demographics */}
            {patientData.patient && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Patient Demographics
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-sm text-gray-900">{formatName(patientData.patient.name)}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Patient ID</label>
                      <p className="text-sm text-gray-900">{patientData.patient.id}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <p className="text-sm text-gray-900">{patientData.patient.gender || 'N/A'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Birth Date</label>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{formatDate(patientData.patient.birthDate)}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                      <p className="text-sm text-gray-900">{getAge(patientData.patient.birthDate)} years</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <p className="text-sm text-gray-900">{patientData.patient.active ? 'Active' : 'Inactive'}</p>
                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{formatAddress(patientData.patient.address)}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <div className="flex items-center space-x-1">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{formatPhone(patientData.patient.telecom)}</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <div className="flex items-center space-x-1">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-900">{formatEmail(patientData.patient.telecom)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Coverage Information */}
            {patientData.coverage && patientData.coverage.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Coverage Information ({patientData.coverage.length})
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientData.coverage.map((coverage, index) => (
                      <div key={coverage.id} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Coverage #{index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <p className="text-sm text-gray-900">{coverage.status || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                            <p className="text-sm text-gray-900">{coverage.type?.text || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Payor</label>
                            <p className="text-sm text-gray-900">{coverage.payor?.[0]?.display || 'N/A'}</p>
                          </div>
                          {coverage.period && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Period Start</label>
                                <p className="text-sm text-gray-900">{formatDate(coverage.period.start)}</p>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Period End</label>
                                <p className="text-sm text-gray-900">{formatDate(coverage.period.end)}</p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Encounters */}
            {patientData.encounters && patientData.encounters.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Stethoscope className="w-5 h-5 mr-2" />
                    Encounters ({patientData.encounters.length})
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientData.encounters.map((encounter, index) => (
                      <div key={encounter.id} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Encounter #{index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                            <p className="text-sm text-gray-900">{encounter.status}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                            <p className="text-sm text-gray-900">{encounter.type?.[0]?.text || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                            <p className="text-sm text-gray-900">{encounter.class?.text || encounter.class?.coding?.[0]?.display || 'N/A'}</p>
                          </div>
                          {encounter.period && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                                <p className="text-sm text-gray-900">{formatDate(encounter.period.start)}</p>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                                <p className="text-sm text-gray-900">{formatDate(encounter.period.end)}</p>
                              </div>
                            </>
                          )}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Service Provider</label>
                            <p className="text-sm text-gray-900">{encounter.serviceProvider?.display || 'N/A'}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Left side - Diagnoses */}
              {diagnosesWithCodes && diagnosesWithCodes.length > 0 && (
                <div className="xl:col-span-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Diagnoses ({diagnosesWithCodes.length})
                      </h3>
                      <Button
                        onClick={handleSuggestMedicalCodes}
                        isLoading={isLoadingSuggestions}
                        disabled={isLoadingSuggestions}
                        className="flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        {isLoadingSuggestions ? 'AI Processing...' : 'Get Medical Codes'}
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {diagnosesWithCodes.map((diagnosis, index) => (
                          <div key={diagnosis.id} className="border border-gray-200 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-3">Diagnosis #{index + 1}</h4>
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                                <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded">{diagnosis.code?.text || 'N/A'}</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Clinical Status</label>
                                  <p className="text-sm text-gray-900">{diagnosis.clinicalStatus?.text || 'N/A'}</p>
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Verification Status</label>
                                  <p className="text-sm text-gray-900">{diagnosis.verificationStatus?.text || 'N/A'}</p>
                                </div>
                              </div>
                              {/* ICD10 Code Input */}
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Assigned ICD10 Code
                                </label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    value={diagnosis.icd10Code || ''}
                                    onChange={(e) => handleManualCodeChange(index, e.target.value)}
                                    placeholder="e.g., R07.1 or select from medical codes →"
                                    className="w-full px-4 py-3 text-base font-mono bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400"
                                  />
                                  {diagnosis.icd10Code && (
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                      <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  Enter code manually or use &quot;Add This Code&quot; from medical codes panel
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Right side - AI Code Suggestions */}
              {diagnosesWithCodes && diagnosesWithCodes.length > 0 && (
                <div className="xl:col-span-1">
                  <Card className="sticky top-6">
                    <CardHeader>
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                        Medical Codes
                      </h3>
                      <p className="text-sm text-gray-600">AI-powered ICD10 code recommendations</p>
                    </CardHeader>
                    <CardContent>
                      {diagnosesWithCodes.some(d => d.suggestedCodes && d.suggestedCodes.length > 0) ? (
                        <div className="space-y-6">
                          {diagnosesWithCodes.map((diagnosis, index) => 
                            diagnosis.suggestedCodes && diagnosis.suggestedCodes.length > 0 ? (
                              <div key={diagnosis.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                                <div className="mb-3">
                                  <h4 className="font-medium text-gray-900 text-sm mb-1">
                                    Diagnosis #{index + 1}
                                  </h4>
                                  <p className="text-xs text-gray-600 truncate">
                                    {diagnosis.code?.text || 'Unknown condition'}
                                  </p>
                                </div>
                                <div className="space-y-3 max-h-80 overflow-y-auto">
                                  {diagnosis.suggestedCodes.map((code, codeIndex) => (
                                    <div key={codeIndex} className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-3 hover:from-blue-100 hover:to-purple-100 transition-all duration-200">
                                      <div className="space-y-2">
                                        <div className="flex justify-between items-start">
                                          <div className="font-mono text-sm font-bold text-blue-700">
                                            {code.code}
                                          </div>
                                          {code.confidence && (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                              {(code.confidence * 100).toFixed(0)}% confidence
                                            </span>
                                          )}
                                        </div>
                                        <div className="text-sm text-gray-900 leading-tight">
                                          {code.description}
                                        </div>
                                        {code.category && (
                                          <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                                            {code.category}
                                          </div>
                                        )}
                                        <Button
                                          size="sm"
                                          onClick={() => handleAddCode(index, code)}
                                          className="w-full flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                                        >
                                          <Plus className="w-3 h-3 mr-1" />
                                          Add This Code
                                        </Button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ) : null
                          )}
                        </div>
                      ) : (
                        <div className="text-center py-12 text-gray-500">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-purple-600" />
                          </div>
                          <h4 className="font-medium text-gray-900 mb-2">AI Ready to Help</h4>
                          <p className="text-sm mb-4">Click &quot;Get Medical Codes&quot; to receive intelligent ICD10 code recommendations</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* No Data Message */}
            {patientData && !patientData.patient && (!patientData.coverage || patientData.coverage.length === 0) && (!patientData.encounters || patientData.encounters.length === 0) && (!patientData.diagnoses || patientData.diagnoses.length === 0) && (
              <Card>
                <CardContent className="text-center py-8">
                  <User className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No patient data found for ID: {patientData.patientId}</p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
