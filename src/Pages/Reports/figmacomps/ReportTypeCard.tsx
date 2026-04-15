import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import { ReportType, useReport } from '../ReportContext';

interface ReportTypeCardProps {
  type: ReportType;
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ReportTypeCard({ type, icon: Icon, title, description }: ReportTypeCardProps) {
  const navigate = useNavigate();
  const { setReportType } = useReport();

  const handleGenerate = () => {
    setReportType(type);
    navigate('/builder');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-[#0285FF]/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-[#0285FF]" />
        </div>
        <h3 className="text-lg mb-2 text-black">{title}</h3>
        <p className="text-sm text-[#403F3F] leading-relaxed">{description}</p>
      </div>
      <button 
        onClick={handleGenerate}
        className="w-full px-4 py-2 rounded-lg border border-[#0285FF] text-[#0285FF] hover:bg-[#0285FF] hover:text-white transition-colors text-sm font-medium"
      >
        Generate
      </button>
    </div>
  );
}
