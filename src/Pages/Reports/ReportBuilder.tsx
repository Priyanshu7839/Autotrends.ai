import { useState } from 'react';
import { Header } from './figmacomps/Header';
import { FilterPanel } from './figmacomps/FilterPanel';
import { ReportPreview } from './figmacomps/ReportPreview';
import { ExportModal } from './figmacomps/ExportModal';

export function ReportBuilder() {
  const [showExportModal, setShowExportModal] = useState(false);

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto">
      {/* <Header /> */}
      
      <div className="flex h-[calc(100vh-73px)]">
        {/* Left: Filter Panel */}
        <div className="w-96 border-r border-gray-200 overflow-y-auto" style={{scrollbarWidth:'none'}}>
          <FilterPanel onExport={() => setShowExportModal(true)} />
        </div>

        {/* Right: Live Report Preview */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8" style={{scrollbarWidth:'none'}}>
          <ReportPreview />
        </div>
      </div>

      {showExportModal && (
        <ExportModal onClose={() => setShowExportModal(false)} />
      )}
    </div>
  );
}
