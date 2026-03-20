import { Header } from './figmacomps/Header';
import { Download, Eye, Share2, RefreshCw, Trash2 } from 'lucide-react';
import { toast } from 'sonner';

interface SavedReport {
  id: string;
  name: string;
  brand: string;
  geography: string;
  date: string;
  type: string;
  mode: 'dealer' | 'oem';
}

const mockReports: SavedReport[] = [
  {
    id: '1',
    name: 'Hyundai Mumbai Market Share',
    brand: 'Hyundai',
    geography: 'MH-01 Mumbai Central',
    date: 'Mar 15, 2026',
    type: 'Market Share Report',
    mode: 'oem',
  },
  {
    id: '2',
    name: 'Dealer Performance Q1',
    brand: 'Maruti Suzuki',
    geography: 'KA-01 Bangalore',
    date: 'Mar 12, 2026',
    type: 'Dealer Benchmark',
    mode: 'dealer',
  },
  {
    id: '3',
    name: 'Kia Fuel Mix Analysis',
    brand: 'Kia',
    geography: 'DL-01 Delhi',
    date: 'Mar 10, 2026',
    type: 'Fuel Mix Report',
    mode: 'oem',
  },
  {
    id: '4',
    name: 'F&I Performance Feb',
    brand: 'Tata Motors',
    geography: 'MH-01 Mumbai Central',
    date: 'Mar 5, 2026',
    type: 'Finance & Insurance Report',
    mode: 'dealer',
  },
  {
    id: '5',
    name: 'BBND Inventory Report',
    brand: 'Mahindra',
    geography: 'All India',
    date: 'Mar 1, 2026',
    type: 'BBND Inventory Report',
    mode: 'oem',
  },
];

export function SavedReports() {
  const handleAction = (action: string, reportName: string) => {
    toast.success(`${reportName} ${action} successfully!`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* <Header /> */}
      
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-black">Saved Reports</h1>
          <p className="text-[#403F3F]">Access and manage your previously generated reports</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#403F3F]">Report Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#403F3F]">Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#403F3F]">Brand</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#403F3F]">Geography</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#403F3F]">Mode</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#403F3F]">Date</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-[#403F3F]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-black">{report.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-[#403F3F]">{report.type}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-[#403F3F]">{report.brand}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-[#403F3F]">{report.geography}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                      report.mode === 'oem' 
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {report.mode.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-[#403F3F]">{report.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => handleAction('viewed', report.name)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-[#403F3F] hover:text-black transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleAction('downloaded', report.name)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-[#403F3F] hover:text-black transition-colors"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleAction('shared', report.name)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-[#403F3F] hover:text-black transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleAction('regenerated', report.name)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-[#403F3F] hover:text-black transition-colors"
                        title="Regenerate"
                      >
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleAction('deleted', report.name)}
                        className="p-2 rounded-lg hover:bg-red-50 text-[#403F3F] hover:text-red-600 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {mockReports.length === 0 && (
          <div className="text-center py-16">
            <div className="text-[#403F3F] mb-4">No saved reports yet</div>
            <a 
              href="/builder" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0285FF] text-white hover:bg-[#0270e0] transition-colors"
            >
              Generate Your First Report
            </a>
          </div>
        )}
      </main>
    </div>
  );
}