"use client"
import React, { useState, useMemo, useCallback } from 'react';
import { Search, Filter, ChevronDown, X } from 'lucide-react';
 
// Mock data based on the screenshot
const mockPatients = [
  {
    id: 1,
    patientName: "Sara Al naoumi",
    mrn: "100103",
    lastUpdated: "1985-07-21",
    agentSuggestion: "Coverage expired → verify new policy",
    coT: "Payer API returned inactive coverage; agent halted claim processing",
    selected: false
  },
  {
    id: 2,
    patientName: "John Smith",
    mrn: "100104",
    lastUpdated: "2024-01-15",
    agentSuggestion: "Prior authorization required",
    coT: "Insurance requires pre-approval for procedure; claim on hold",
    selected: false
  },
  {
    id: 3,
    patientName: "Maria Garcia",
    mrn: "100105",
    lastUpdated: "2024-02-10",
    agentSuggestion: "Coverage expired → verify new policy",
    coT: "Policy lapsed; need updated insurance information",
    selected: false
  },
  {
    id: 4,
    patientName: "David Wilson",
    mrn: "100106",
    lastUpdated: "2024-01-20",
    agentSuggestion: "Billing address mismatch",
    coT: "Patient address differs from insurance records",
    selected: false
  },
  {
    id: 5,
    patientName: "Lisa Johnson",
    mrn: "100107",
    lastUpdated: "2024-03-01",
    agentSuggestion: "Prior authorization required",
    coT: "High-cost procedure requires insurance approval",
    selected: false
  }
];
 
// Simple AG Grid-like table implementation
const PatientList = () => {
  const [patients, setPatients] = useState(mockPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("latest");
  const [showSuggestionFilter, setShowSuggestionFilter] = useState(false);

  // Get unique agent suggestions for filter
  const uniqueSuggestions = useMemo(() => {
    return Array.from(new Set(patients.map(p => p.agentSuggestion)));
  }, [patients]);

  // Filter and sort patients
  const filteredAndSortedPatients = useMemo(() => {
    let filtered = patients.filter(patient => {
      const matchesSearch = patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          patient.mrn.includes(searchTerm);
      const matchesFilter = selectedSuggestions.length === 0 || 
                           selectedSuggestions.includes(patient.agentSuggestion);
      return matchesSearch && matchesFilter;
    });

    // Sort patients
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        case 'oldest':
          return new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime();
        case 'roi':
          // Mock ROI sorting - could be based on priority or cost
          return a.patientName.localeCompare(b.patientName);
        default:
          return 0;
      }
    });

    return filtered;
  }, [patients, searchTerm, selectedSuggestions, sortBy]);

  // Handle row selection
  const handleRowSelect = useCallback((patientId: number, checked: boolean) => {
    setPatients(prev => 
      prev.map(p => p.id === patientId ? { ...p, selected: checked } : p)
    );
  }, []);

  // Handle select all
  const handleSelectAll = useCallback((checked: boolean) => {
    setPatients(prev => prev.map(p => ({ ...p, selected: checked })));
  }, []);

  // Handle suggestion filter toggle
  const toggleSuggestionFilter = useCallback((suggestion: string) => {
    setSelectedSuggestions(prev => 
      prev.includes(suggestion) 
        ? prev.filter(s => s !== suggestion)
        : [...prev, suggestion]
    );
  }, []);

  // Clear filters
  const clearFilters = useCallback(() => {
    setSelectedSuggestions([]);
    setSearchTerm("");
  }, []);

  const selectedCount = patients.filter(p => p.selected).length;
  const allSelected = patients.length > 0 && selectedCount === patients.length;
  const someSelected = selectedCount > 0 && selectedCount < patients.length;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Patient List</h2>
      
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
       
        {/* Agent Suggestion Filter */}
        <div className="relative">
          <button
            onClick={() => setShowSuggestionFilter(!showSuggestionFilter)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <Filter className="h-4 w-4" />
            Filter
            {selectedSuggestions.length > 0 && (
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                {selectedSuggestions.length}
              </span>
            )}
            <ChevronDown className="h-4 w-4" />
          </button>

          {showSuggestionFilter && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="p-3 border-b border-gray-200">
                <h3 className="font-medium text-gray-900">Agent Suggestions</h3>
              </div>
              <div className="p-2 max-h-60 overflow-y-auto">
                {uniqueSuggestions.map((suggestion) => (
                  <label
                    key={suggestion}
                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSuggestions.includes(suggestion)}
                      onChange={() => toggleSuggestionFilter(suggestion)}
                      className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                    />
                    <span className="text-sm text-gray-700">{suggestion}</span>
                  </label>
                ))}
              </div>
              {selectedSuggestions.length > 0 && (
                <div className="p-3 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedSuggestions([])}
                    className="text-sm text-teal-600 hover:text-teal-700"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

 {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search by name or MRN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

       
        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="roi">ROI</option>
        </select>
      </div>

      {/* Active filters */}
      {(selectedSuggestions.length > 0 || searchTerm) && (
        <div className="flex flex-wrap gap-2 mb-4">
          {searchTerm && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Search: {searchTerm}
              <button
                onClick={() => setSearchTerm("")}
                className="hover:bg-blue-200 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          {selectedSuggestions.map((suggestion) => (
            <span
              key={suggestion}
              className="inline-flex items-center gap-1 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm"
            >
              {suggestion}
              <button
                onClick={() => toggleSuggestionFilter(suggestion)}
                className="hover:bg-teal-200 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
          <button
            onClick={clearFilters}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Selection info */}
      {selectedCount > 0 && (
        <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-700">
            {selectedCount} selected
          </span>
          <button
            onClick={() => handleSelectAll(false)}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            Clear selection
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-6 py-3">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    if (el) el.indeterminate = someSelected;
                  }}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                MRN
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Updated
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Agent Suggestion
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                CoT (Why flagged)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAndSortedPatients.map((patient) => (
              <tr
                key={patient.id}
                className={`hover:bg-gray-50 ${patient.selected ? 'bg-blue-50' : ''}`}
              >
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={patient.selected}
                    onChange={(e) => handleRowSelect(patient.id, e.target.checked)}
                    className="h-4 w-4 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {patient.patientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {patient.mrn}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {patient.lastUpdated}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                  <div className="truncate" title={patient.agentSuggestion}>
                    {patient.agentSuggestion}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 max-w-sm">
                  <div className="truncate" title={patient.coT}>
                    {patient.coT}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-teal-600 hover:text-teal-900">
                    <Search className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAndSortedPatients.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No patients found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Submit button */}
      {selectedCount > 0 && (
        <div className="flex justify-end mt-6">
          <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            Submit ({selectedCount})
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientList;