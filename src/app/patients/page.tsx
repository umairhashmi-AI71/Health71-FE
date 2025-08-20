'use client';

import { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard-layout';
import { Card, CardContent, CardHeader, Button, Input } from '@/components/ui';
import { apiClient } from '@/lib/api';
import { PatientFhirResponse, FhirPatient } from '@/types/patient';
import { ApiError } from '@/types/auth';
import { 
  Search, 
  User, 
  Shield, 
  Stethoscope, 
  FileText, 
  AlertCircle,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart
} from 'lucide-react';

export default function PatientsPage() {
  const [patientId, setPatientId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [patientData, setPatientData] = useState<PatientFhirResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleExtractDetails = async () => {
    if (!patientId.trim()) {
      setError('Please enter a patient ID');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPatientData(null);

    try {
      const data = await apiClient.getPatientFhirData(patientId.trim());
      setPatientData(data);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to fetch patient data');
    } finally {
      setIsLoading(false);
    }
  };

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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Information</h2>
          <p className="text-gray-600">Search for patient details using Patient ID</p>
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

            {/* Diagnoses */}
            {patientData.diagnoses && patientData.diagnoses.length > 0 && (
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Diagnoses ({patientData.diagnoses.length})
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {patientData.diagnoses.map((diagnosis, index) => (
                      <div key={diagnosis.id} className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Diagnosis #{index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="lg:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                            <p className="text-sm text-gray-900">{diagnosis.code?.text || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Clinical Status</label>
                            <p className="text-sm text-gray-900">{diagnosis.clinicalStatus?.text || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Verification Status</label>
                            <p className="text-sm text-gray-900">{diagnosis.verificationStatus?.text || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
                            <p className="text-sm text-gray-900">{diagnosis.severity?.text || 'N/A'}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Onset Date</label>
                            <p className="text-sm text-gray-900">{formatDate(diagnosis.onsetDateTime)}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Recorded Date</label>
                            <p className="text-sm text-gray-900">{formatDate(diagnosis.recordedDate)}</p>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Recorder</label>
                            <p className="text-sm text-gray-900">{diagnosis.recorder?.display || 'N/A'}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* No Data Message */}
            {patientData && !patientData.patient && (!patientData.coverage || patientData.coverage.length === 0) && (!patientData.encounters || patientData.encounters.length === 0) && (!patientData.diagnoses || patientData.diagnoses.length === 0) && (
              <Card>
                <CardContent className="text-center py-8">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
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
