import { useState } from 'react';
import { useReport } from '../ReportContext';
import { ModeSelector } from './ModeSelector';
import { Crown, Download } from 'lucide-react';

interface FilterPanelProps {
  onExport: () => void;
}

export function FilterPanel({ onExport }: FilterPanelProps) {
  const { mode, filters, setFilters } = useReport();
  
  const handleDataOptionToggle = (option: keyof typeof filters.dataOptions) => {
    setFilters({
      ...filters,
      dataOptions: {
        ...filters.dataOptions,
        [option]: !filters.dataOptions[option],
      },
    });
  };


  const crowns =[true,true ,true,false,false,false,false,false,false,false,true]

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl mb-4 text-black font-semibold">Report Configuration</h2>
        <ModeSelector />
      </div>

      {/* Geography */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-black">Geography</h3>
        <div className="space-y-2">
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">Country</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.country || ''}
              onChange={(e) => setFilters({ ...filters, country: e.target.value })}
            >
              <option value="">Select Country</option>
              <option value="india">India</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">State</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.state || ''}
              onChange={(e) => setFilters({ ...filters, state: e.target.value })}
            >
              <option value="">Select State</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="karnataka">Karnataka</option>
              <option value="delhi">Delhi</option>
              <option value="tamil-nadu">Tamil Nadu</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">City</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.city || ''}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
            >
              <option value="">Select City</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="delhi">Delhi</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">RTO</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.rto || ''}
              onChange={(e) => setFilters({ ...filters, rto: e.target.value })}
            >
              <option value="">Select RTO</option>
              <option value="mh-01">MH-01 Mumbai Central</option>
              <option value="ka-01">KA-01 Bangalore</option>
              <option value="dl-01">DL-01 Delhi</option>
            </select>
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-black">Brand</h3>
        <div className="space-y-2">
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">Primary Brand</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.primaryBrand || ''}
              onChange={(e) => setFilters({ ...filters, primaryBrand: e.target.value })}
            >
              <option value="">Select Brand</option>
              <option value="hyundai">Hyundai</option>
              <option value="kia">Kia</option>
              <option value="maruti">Maruti Suzuki</option>
              <option value="tata">Tata Motors</option>
              <option value="mahindra">Mahindra</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">Competitor Brands</label>
            <div className="space-y-1 text-sm">
              {['Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Mahindra', 'Kia'].map((brand) => (
                <label key={brand} className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-[#403F3F]">{brand}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-black">Category</h3>
        <select 
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
          value={filters.category || ''}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="2w">2W - Two Wheeler</option>
          <option value="3w">3W - Three Wheeler</option>
          <option value="pv">PV - Passenger Vehicle</option>
          <option value="cv">CV - Commercial Vehicle</option>
          <option value="tractor">Tractor</option>
          <option value="ce">CE - Construction Equipment</option>
        </select>
      </div>

      {/* Time */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-black">Time Period</h3>
        <div className="space-y-2">
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">Frequency</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.timeFrame || ''}
              onChange={(e) => setFilters({ ...filters, timeFrame: e.target.value })}
            >
              <option value="">Select Frequency</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-[#403F3F] mb-1">Compare With</label>
            <select 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
              value={filters.compareWith || ''}
              onChange={(e) => setFilters({ ...filters, compareWith: e.target.value })}
            >
              <option value="">Select Comparison</option>
              <option value="previous">Previous Period</option>
              <option value="yoy">Year over Year</option>
              <option value="last3fy">Last 3 FY</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dealer Inputs (if Dealer Mode) */}
      {mode === 'dealer' && (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-black">Dealer Information</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-xs text-[#403F3F] mb-1">Dealer Name</label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
                placeholder="Enter dealer name"
                value={filters.dealerName || ''}
                onChange={(e) => setFilters({ ...filters, dealerName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-[#403F3F] mb-1">Branch</label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
                placeholder="Enter branch"
                value={filters.dealerBranch || ''}
                onChange={(e) => setFilters({ ...filters, dealerBranch: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs text-[#403F3F] mb-1">Dealer Code</label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0285FF]"
                placeholder="Enter dealer code"
                value={filters.dealerCode || ''}
                onChange={(e) => setFilters({ ...filters, dealerCode: e.target.value })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Data Options */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-black">Data Options</h3>
        <div className="space-y-2">
          {Object.entries(filters.dataOptions).map(([key, value],i) => (
            <label key={key} className="flex items-center justify-between gap-2 text-sm">
             <div className='flex items-center gap-2'> <input 
                type="checkbox" 
                className="rounded border-gray-300"
                disabled={!crowns[i]}
                checked={value}
                onChange={() => handleDataOptionToggle(key as keyof typeof filters.dataOptions)}
              />
              <span className="text-[#403F3F] capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span></div>
              {!crowns[i]&& <Crown size={14} color='#ffd900' />}
              
            </label>
          ))}
        </div>
      </div>

      {/* Export Button */}
      <button 
        onClick={onExport}
        className="w-full px-4 py-3 rounded-lg bg-[#0285FF] text-white hover:bg-[#0270e0] transition-colors flex items-center justify-center gap-2"
      >
        <Download className="w-4 h-4" />
        <span>Export Report</span>
      </button>
    </div>
  );
}
