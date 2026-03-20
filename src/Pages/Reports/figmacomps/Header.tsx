import { Link, useLocation } from 'react-router';
import { FileText, Clock, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { ScheduleModal } from './ScheduleModal';

export function Header() {
  const location = useLocation();
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <Link to="/" className="flex items-center gap-2">
                <div className="text-2xl font-semibold text-black">
                  AutoTrends<span className="text-[#0285FF]">.ai</span>
                </div>
              </Link>
              <div className="text-[#403F3F]">Reports</div>
            </div>

            <div className="flex items-center gap-4">
              <Link 
                to="/saved" 
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === '/saved' 
                    ? 'bg-gray-100 text-black' 
                    : 'text-[#403F3F] hover:bg-gray-50'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Saved Reports</span>
              </Link>
              
              <Link 
                to="/builder" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0285FF] text-white hover:bg-[#0270e0] transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Generate Report</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {showScheduleModal && (
        <ScheduleModal onClose={() => setShowScheduleModal(false)} />
      )}
    </>
  );
}