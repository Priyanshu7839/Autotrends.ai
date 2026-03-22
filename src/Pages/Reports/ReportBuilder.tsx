import { useState } from 'react';
import { Header } from './figmacomps/Header';
import { FilterPanel } from './figmacomps/FilterPanel';
import { ReportPreview } from './figmacomps/ReportPreview';
import { ExportModal } from './figmacomps/ExportModal';

export function ReportBuilder() {
  const [showExportModal, setShowExportModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);


  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      {/* <Header /> */}
      
      <div className="flex flexc-col md:flex-row h-[calc(100vh-73px)]">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden fixed bottom-4 right-4 z-20 px-6 py-3 rounded-full bg-[#0285FF] text-white shadow-lg font-medium"
        >
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Left: Filter Panel */}
        <div className={`
          ${showFilters ? 'fixed inset-0 z-10' : 'hidden'}
          lg:block lg:static lg:w-96 
          bg-white border-r border-gray-200 overflow-y-auto
        `}
        
        style={{scrollbarWidth:'none'}}
        >
          <div className="lg:hidden flex justify-between items-center p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-black">Filters</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="text-[#403F3F] hover:text-black"
            >
              ✕
            </button>
          </div>
          <FilterPanel onExport={() => {
            setShowExportModal(true);
            setShowFilters(false);
          }} />
        </div>

        {/* Right: Live Report Preview */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8"
        style={{scrollbarWidth:'none'}}
        >
          <ReportPreview />
        </div>
      </div>

      {showExportModal && (
        <ExportModal onClose={() => setShowExportModal(false)} />
      )}
    </div>
  );
}
