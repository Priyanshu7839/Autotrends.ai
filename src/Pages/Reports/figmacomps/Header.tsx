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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-8 lg:gap-12">
              <Link to="/" className="flex items-center gap-2">
                <div className="text-xl sm:text-2xl font-semibold text-black">
                  AutoTrends<span className="text-[#0285FF]">.ai</span>
                </div>
              </Link>
              <div className="hidden sm:block text-[#403F3F]">Reports</div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <Link 
                to="/saved" 
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                  location.pathname === '/saved' 
                    ? 'bg-gray-100 text-black' 
                    : 'text-[#403F3F] hover:bg-gray-50'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span className="hidden sm:inline">Saved Reports</span>
              </Link>
              
              <Link 
                to="/builder" 
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-[#0285FF] text-white hover:bg-[#0270e0] transition-colors text-sm sm:text-base"
              >
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Generate Report</span>
                <span className="sm:hidden">New</span>
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