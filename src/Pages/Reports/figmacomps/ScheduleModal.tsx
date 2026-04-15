import { X } from 'lucide-react';
import { toast } from 'sonner';

interface ScheduleModalProps {
  onClose: () => void;
}

export function ScheduleModal({ onClose }: ScheduleModalProps) {
  const handleSchedule = () => {
    toast.success('Report scheduled successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-black">Schedule Report</h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
          >
            <X className="w-5 h-5 text-[#403F3F]" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2 text-black">Report Name</label>
            <input 
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              placeholder="e.g., Weekly Market Share Report"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-black">Frequency</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Quarterly</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2 text-black">Delivery Method</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                <span className="text-[#403F3F]">Email</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-[#403F3F]">WhatsApp</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-[#403F3F]">Telegram</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2 text-black">Recipients</label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              rows={3}
              placeholder="Enter email addresses or phone numbers, separated by commas"
            />
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-[#403F3F] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleSchedule}
            className="flex-1 px-4 py-3 rounded-lg bg-[#0285FF] text-white hover:bg-[#0270e0] transition-colors"
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}