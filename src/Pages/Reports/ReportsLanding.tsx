import { Header } from './figmacomps/Header';
import { ModeSelector } from './figmacomps/ModeSelector';
import { ReportTypeCard } from './figmacomps/ReportTypeCard';
import { SampleReportModal } from './figmacomps/SampleReportModal';
import { FeatureHighlight } from './figmacomps/FeatureHighlight';
import { Link } from 'react-router';
import { useState } from 'react';
import { 
  PieChart, 
  TrendingUp, 
  Fuel, 
  Target, 
  MapPin, 
  Award, 
  Package, 
  DollarSign,
  FileText
} from 'lucide-react';
import { ReportType } from './ReportContext';

const reportTypes: Array<{
  type: ReportType;
  icon: typeof PieChart;
  title: string;
  description: string;
}> = [
  {
    type: 'market-share',
    icon: PieChart,
    title: 'Market Share Report',
    description: 'Track brand performance and competitive positioning across regions',
  },
  {
    type: 'retail-growth',
    icon: TrendingUp,
    title: 'Retail Growth Report',
    description: 'Analyze retail volume trends and year-over-year growth patterns',
  },
  {
    type: 'fuel-mix',
    icon: Fuel,
    title: 'Fuel Mix Report',
    description: 'Monitor fuel type distribution and emerging trends in powertrain',
  },
  {
    type: 'brand-competition',
    icon: Target,
    title: 'Brand vs Competition',
    description: 'Compare performance metrics against competitor brands',
  },
  {
    type: 'rto-intelligence',
    icon: MapPin,
    title: 'RTO Intelligence',
    description: 'Regional transport office performance and ranking analysis',
  },
  {
    type: 'dealer-benchmark',
    icon: Award,
    title: 'Dealer Benchmark',
    description: 'Benchmark dealer performance against regional and national averages',
  },
  {
    type: 'bbnd-inventory',
    icon: Package,
    title: 'BBND Inventory Report',
    description: 'Analyze bill-but-not-delivered units and inventory pressure',
  },
  {
    type: 'finance-insurance',
    icon: DollarSign,
    title: 'Finance & Insurance Report',
    description: 'Track F&I penetration rates and identify revenue opportunities',
  },
];

export function ReportsLanding() {
  const [showSampleModal, setShowSampleModal] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
   <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
           {/* Hero Section */}
           <div className="text-center mb-8 sm:mb-12">
             <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-black">
               Generate Market & Dealer Intelligence Reports
             </h1>
             <p className="text-base sm:text-lg lg:text-xl text-[#403F3F] max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
               Generate one-page, export-ready intelligence reports across inventory, market share, 
               fuel mix, and finance & insurance performance.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
               <Link 
                 to="/reports/builder" 
                 className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0285FF] text-white font-medium hover:bg-[#0270e0] transition-colors text-center"
               >
                 Generate Report
               </Link>
               <button 
                 onClick={() => setShowSampleModal(true)}
                 className="w-full sm:w-auto px-8 py-3 rounded-lg border border-[#403F3F] text-[#403F3F] font-medium hover:bg-gray-50 transition-colors"
               >
                 View Sample Reports
               </button>
             </div>
   
             <div className="flex justify-center px-4">
               <ModeSelector />
             </div>
           </div>
   
           {/* Feature Highlight */}
           <FeatureHighlight />
   
           {/* Report Type Cards */}
           <div className="mt-12 sm:mt-16">
             <h2 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-black px-4 sm:px-0">Select Report Type</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
               {reportTypes.map((report) => (
                 <ReportTypeCard
                   key={report.type}
                   type={report.type}
                   icon={report.icon}
                   title={report.title}
                   description={report.description}
                 />
               ))}
             </div>
           </div>
         </main>

      {showSampleModal && (
        <SampleReportModal onClose={() => setShowSampleModal(false)} />
      )}
    </div>
  );
}