import { Download, Mail, MessageCircle, Send, Link as LinkIcon, Clock, X } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import { ScheduleModal } from './ScheduleModal';

interface ExportModalProps {
  onClose: () => void;
}

export function ExportModal({ onClose }: ExportModalProps) {
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const handleExport = (method: string) => {
    toast.success(`Report ${method} successfully!`);
    onClose();
  };

  const handleSchedule = () => {
    setShowScheduleModal(true);
  };

  const exportOptions = [
    { 
      icon: Download, 
      label: 'Download PDF', 
      description: 'Save report as PDF file',
      action: () => handleExport('downloaded')
    },
    { 
      icon: MessageCircle, 
      label: 'Share via WhatsApp', 
      description: 'Send to WhatsApp contacts',
      action: () => handleExport('sent via WhatsApp')
    },
    { 
      icon: Mail, 
      label: 'Send Email', 
      description: 'Email to stakeholders',
      action: () => handleExport('emailed')
    },
    { 
      icon: Send, 
      label: 'Send Telegram', 
      description: 'Share on Telegram',
      action: () => handleExport('sent via Telegram')
    },
    { 
      icon: LinkIcon, 
      label: 'Copy Link', 
      description: 'Get shareable link',
      action: () => {
        navigator.clipboard.writeText(window.location.origin + '/report/sample-123');
        toast.success('Link copied to clipboard!');
        onClose();
      }
    },
    { 
      icon: Clock, 
      label: 'Schedule Weekly Report', 
      description: 'Auto-generate weekly',
      action: handleSchedule
    },
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
        <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 p-8" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-black">Export Report</h2>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
            >
              <X className="w-5 h-5 text-[#403F3F]" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {exportOptions.map((option) => (
              <button
                key={option.label}
                onClick={option.action}
                className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#0285FF] hover:bg-[#0285FF]/5 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0285FF]/10 flex items-center justify-center flex-shrink-0">
                  <option.icon className="w-5 h-5 text-[#0285FF]" />
                </div>
                <div>
                  <div className="font-medium text-black mb-1">{option.label}</div>
                  <div className="text-sm text-[#403F3F]">{option.description}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <button 
              onClick={onClose}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#403F3F] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {showScheduleModal && (
        <ScheduleModal onClose={() => setShowScheduleModal(false)} />
      )}
    </>
  );
}