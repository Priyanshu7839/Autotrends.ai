import { X } from 'lucide-react';
import { ReportPreview } from './ReportPreview';

interface SampleReportModalProps {
  onClose: () => void;
}

export function SampleReportModal({ onClose }: SampleReportModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-auto" onClick={onClose}>
      <div className="bg-gray-50 rounded-xl shadow-xl max-w-5xl w-full mx-4 my-8 p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl text-black mb-1">Sample Report Preview</h2>
            <p className="text-sm text-[#403F3F]">Example of a generated market intelligence report</p>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-[#403F3F]" />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto">
          <ReportPreview />
        </div>
      </div>
    </div>
  );
}
