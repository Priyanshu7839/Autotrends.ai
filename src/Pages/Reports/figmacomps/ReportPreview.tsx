import { useReport } from '../ReportContext';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import RTOData from "../../../Data/RTOData.json";
import PanIndiaData from "../../../Data/PanIndiaData.json";

import { FaChartBar } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Line as Lined} from 'react-chartjs-2';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// Mock data for charts
const trendData = [
  { id: 'jan', month: 'Jan', value: 4200 },
  { id: 'feb', month: 'Feb', value: 4500 },
  { id: 'mar', month: 'Mar', value: 4800 },
  { id: 'apr', month: 'Apr', value: 4600 },
  { id: 'may', month: 'May', value: 5100 },
  { id: 'jun', month: 'Jun', value: 5400 },
];

const marketShareData = [
  { brand: 'Maruti', units: 12500, share: 42.5, yoy: 2.3 },
  { brand: 'Hyundai', units: 7200, share: 24.5, yoy: 0.8 },
  { brand: 'Tata', units: 4800, share: 16.3, yoy: 5.2 },
  { brand: 'Mahindra', units: 2900, share: 9.9, yoy: 3.1 },
  { brand: 'Kia', units: 1980, share: 6.8, yoy: 1.5 },
];

const tivData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  tiv2025: [792, 522, 464, 619, 506, 458, 434, 347, 573, 1012, 553, 419],
  tiv2026: [941, 582, 268, null, null, null, null, null, null, null, null, null],
  kiaShare2025: [55, 42, 34, 41, 38, 31, 30, 25, 31, 60, 29, 29],
  kiaShare2026: [51, 39, 16, null, null, null, null, null, null, null, null, null],
};

const brandComparisonData = [
  { month: 'Jan', '2025': 22500, '2026': 30500 },
  { month: 'Feb', '2025': 19800, '2026': 25300 },
  { month: 'Mar', '2025': 22800, '2026': 15000 },
  { month: 'Apr', '2025': 22300, '2026': null },
  { month: 'May', '2025': 17500, '2026': null },
  { month: 'Jun', '2025': 18900, '2026': null },
  { month: 'Jul', '2025': 19800, '2026': null },
  { month: 'Aug', '2025': 19200, '2026': null },
  { month: 'Sep', '2025': 17200, '2026': null },
  { month: 'Oct', '2025': 33800, '2026': null },
  { month: 'Nov', '2025': 24100, '2026': null },
  { month: 'Dec', '2025': 20800, '2026': null },
];


export function ReportPreview() {
  const { mode, reportType, filters } = useReport();

  const reportTitle = mode === 'oem' 
    ? `${filters.primaryBrand || 'Brand'} India – Market Intelligence Report`
    : 'Dealer Performance Report';

  const geography = [filters.rto, filters.city, filters.state, filters.country]
    .filter(Boolean)
    .join(', ') || 'All India';

  const period = filters.timeFrame === 'monthly' ? 'March 2026' : 
                 filters.timeFrame === 'quarterly' ? 'Q1 2026' : 
                 'Week 12, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        {/* Dynamic Branding Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between border-b border-gray-200 pb-4 sm:pb-6 gap-4">
          <div>
            <div className="text-xl sm:text-2xl lg:text-3xl mb-2 text-black font-semibold">{reportTitle}</div>
            <div className="text-xs sm:text-sm text-[#403F3F] space-y-1">
              <div><span className="font-medium">Geography:</span> {geography}</div>
              <div><span className="font-medium">Brand:</span> {filters.primaryBrand || 'Not Selected'}</div>
              <div><span className="font-medium">Period:</span> {period}</div>
              <div><span className="font-medium">Category:</span> {filters.category?.toUpperCase() || 'All'}</div>
            </div>
          </div>
          <div className="text-left sm:text-right">
            {mode === 'oem' && (
              <div className="text-xs text-[#403F3F] mb-2">Powered by AutoTrends.ai</div>
            )}
            <div className="text-xs text-[#403F3F]">
              Generated: {new Date().toLocaleDateString('en-IN', { 
                day: 'numeric', 
                month: 'short', 
                year: 'numeric' 
              })}
            </div>
          </div>
        </div>

        {/* KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {mode === 'dealer' ? (
            <>
              <KPICard key="retail-units" title="Retail Units" value="1,248" change="+12.5%" positive />
              <KPICard key="market-share" title="Market Share" value="8.2%" change="+0.8%" positive />
              {/* <KPICard key="bbnd-units" title="BBND Units" value="320" change="-5.2%" positive />
              <KPICard key="inventory-days" title="Inventory Days" value="18" change="-3" positive />
              <KPICard key="finance-pct" title="Finance %" value="68%" change="+2.1%" positive />
              <KPICard key="insurance-pct" title="Insurance %" value="82%" change="+1.5%" positive /> */}
              <KPICard key="growth-pct" title="Growth %" value="12.5%" change="+2.3%" positive />
            </>
          ) : (
            <>
              <KPICard key="oem-market-share" title="Market Share" value="24.5%" change="+0.8%" positive />
              <KPICard key="oem-rank" title="Rank" value="#2" change="→" neutral />
              <KPICard key="oem-gap" title="Gap to #1" value="18.0%" change="-1.5%" positive />
              <KPICard key="oem-growth" title="Growth vs Segment" value="+3.2%" change="+1.1%" positive />
              <KPICard key="oem-throughput" title="Dealer Throughput" value="142" change="+8" positive />
              <KPICard key="oem-bbnd" title="BBND Pressure" value="12%" change="-2%" positive />
              <KPICard key="oem-finance" title="Finance Opportunity" value="₹124Cr" change="+15%" positive />
              <KPICard key="oem-insurance" title="Insurance Opportunity" value="₹48Cr" change="+12%" positive />
            </>
          )}
        </div>

        {/* Main Table */}
        <div>
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4 text-black">Market Share Breakdown</h3>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden sm:rounded-lg border-t border-b sm:border border-gray-200">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-xs font-medium text-[#403F3F]">OEM</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-medium text-[#403F3F]">Units</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-medium text-[#403F3F]">Share %</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-xs font-medium text-[#403F3F]">YoY</th>
                      <th className="px-3 sm:px-4 py-2 sm:py-3 text-center text-xs font-medium text-[#403F3F]">Rank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {marketShareData.map((row, idx) => (
                      <tr key={row.brand} className="hover:bg-gray-50">
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-black">{row.brand}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right text-[#403F3F]">
                          {row.units.toLocaleString()}
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right text-black font-medium">
                          {row.share}%
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-right">
                          <span className={row.yoy > 0 ? 'text-green-600' : 'text-red-600'}>
                            {row.yoy > 0 ? '+' : ''}{row.yoy}%
                          </span>
                        </td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm text-center text-[#403F3F]">
                          #{idx + 1}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        {/* <div>
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4 text-black">Trend Analysis</h3>
          <SimpleTrendChart data={trendData} />
        </div> */}

        <MonthlyAnalysisRTO selectedRTO={'jhansi'}/>
        <OEMVs/>


        {/* TIV Comparison Section */}
        <div>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg text-black font-semibold">TIV Comparison for Kia in JhansiRTO</h3>
            {/* <div className="flex gap-2">
              <select className="text-xs border border-gray-300 rounded px-2 py-1 text-[#0285FF]">
                <option>Kia</option>
                <option>Hyundai</option>
                <option>Maruti</option>
              </select>
              <select className="text-xs border border-gray-300 rounded px-2 py-1 text-[#0285FF]">
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
              <select className="text-xs border border-gray-300 rounded px-2 py-1 text-[#0285FF]">
                <option>2026</option>
                <option>2025</option>
                <option>2024</option>
              </select>
            </div> */}
          </div>
          <TIVComparisonTable data={tivData} />
        </div>

        {/* Key Insights */}
        <div>
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4 text-black">Key Insights</h3>
          <div className="space-y-3">
            <InsightItem 
              text={mode === 'dealer' 
                ? "Retail performance exceeded targets by 12.5% driven by strong demand in compact SUV segment"
                : `${filters.primaryBrand || 'Brand'} gained +0.8% market share in selected RTO, outperforming segment growth`
              }
            />
            <InsightItem 
              text="Diesel mix declining at 8% YoY, CNG rising rapidly with 15% growth"
            />
            <InsightItem 
              text="BBND buildup reduced by 5.2%, indicating improved inventory management"
            />
            <InsightItem 
              text={mode === 'oem'
                ? "Regional dealer throughput improved by 8 units per dealer, suggesting stronger sales execution"
                : "Finance penetration at 68% presents opportunity to capture additional ₹24L revenue"
              }
            />
          </div>
        </div>

        {/* Recommended Actions */}
        <div>
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4 text-black">Recommended Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <ActionCard 
              title="Inventory Optimization"
              description={mode === 'dealer' 
                ? "Increase CNG variant stock by 20% to meet rising demand"
                : "Reduce BBND pressure by optimizing dispatch to high-performing RTOs"
              }
            />
            <ActionCard 
              title="Revenue Enhancement"
              description={mode === 'dealer'
                ? "Push finance penetration to 75% targeting ₹24L additional revenue"
                : "Target finance opportunity of ₹124Cr through dealer incentive programs"
              }
            />
            <ActionCard 
              title="Market Positioning"
              description={mode === 'dealer'
                ? "Focus on compact SUV segment where growth is 18% above segment"
                : "Strengthen position in top 5 RTOs to close gap with market leader"
              }
            />
            <ActionCard 
              title="Competitive Strategy"
              description={mode === 'dealer'
                ? "Target Mahindra customers with competitive trade-in offers"
                : "Capitalize on Tata's inventory pressure in premium segment"
              }
            />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 sm:pt-6 text-xs text-[#403F3F]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <div className="mb-1">Source: FADA / AutoTrends Intelligence</div>
              {mode === 'oem' && (
                <div className="font-medium text-red-600">Confidential – Internal Use Only</div>
              )}
            </div>
            <div className="text-left sm:text-right">
              Powered by <span className="font-medium text-[#0285FF]">AutoTrends.ai</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ 
  title, 
  value, 
  change, 
  positive = true,
  neutral = false 
}: { 
  title: string; 
  value: string; 
  change: string; 
  positive?: boolean;
  neutral?: boolean;
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="text-xs text-[#403F3F] mb-1">{title}</div>
      <div className="text-2xl mb-1 text-black">{value}</div>
      <div className={`text-xs flex items-center gap-1 ${
        neutral ? 'text-[#403F3F]' : positive ? 'text-green-600' : 'text-red-600'
      }`}>
        {!neutral && (positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />)}
        <span>{change}</span>
      </div>
    </div>
  );
}

function InsightItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-[#0285FF] mt-2 flex-shrink-0" />
      <p className="text-sm text-[#403F3F] leading-relaxed">{text}</p>
    </div>
  );
}

function ActionCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#0285FF]/5 border border-[#0285FF]/20 rounded-lg p-4">
      <h4 className="text-sm font-medium text-black mb-2">{title}</h4>
      <p className="text-xs text-[#403F3F] leading-relaxed">{description}</p>
    </div>
  );
}

function SimpleTrendChart({ data }: { data: { id: string; month: string; value: number }[] }) {
  const chartWidth = 600;
  const chartHeight = 200;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  
  const values = data.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const valueRange = maxValue - minValue;
  
  // Calculate points for the line
  const points = data.map((d, i) => {
    const x = padding.left + (i / (data.length - 1)) * (chartWidth - padding.left - padding.right);
    const y = padding.top + (1 - (d.value - minValue) / valueRange) * (chartHeight - padding.top - padding.bottom);
    return { x, y, month: d.month, value: d.value };
  });
  
  // Create path string
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  
  return (
    <div className="h-64 bg-gray-50 rounded-lg p-4">
      <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full">
        {/* Y-axis */}
        <line 
          x1={padding.left} 
          y1={padding.top} 
          x2={padding.left} 
          y2={chartHeight - padding.bottom} 
          stroke="#d1d5db" 
          strokeWidth="1" 
        />
        
        {/* X-axis */}
        <line 
          x1={padding.left} 
          y1={chartHeight - padding.bottom} 
          x2={chartWidth - padding.right} 
          y2={chartHeight - padding.bottom} 
          stroke="#d1d5db" 
          strokeWidth="1" 
        />
        
        {/* Y-axis labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const value = minValue + valueRange * ratio;
          const y = padding.top + (1 - ratio) * (chartHeight - padding.top - padding.bottom);
          return (
            <text
              key={`y-label-${i}`}
              x={padding.left - 10}
              y={y}
              textAnchor="end"
              dominantBaseline="middle"
              fill="#403F3F"
              fontSize="12"
            >
              {Math.round(value)}
            </text>
          );
        })}
        
        {/* X-axis labels */}
        {points.map((p, i) => (
          <text
            key={`x-label-${i}`}
            x={p.x}
            y={chartHeight - padding.bottom + 20}
            textAnchor="middle"
            fill="#403F3F"
            fontSize="12"
          >
            {p.month}
          </text>
        ))}
        
        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="#0285FF"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

function TIVComparisonTable({ data }: { data: typeof tivData }) {
  const calculateChange = (val2026: number | null, val2025: number) => {
    if (val2026 === null) return null;
    return val2026 - val2025;
  };

  const calculatePercentChange = (val2026: number | null, val2025: number) => {
    if (val2026 === null || val2025 === 0) return null;
    return ((val2026 - val2025) / val2025) * 100;
  };

  const calculateTotal = (arr: (number | null)[]) => {
    return arr.reduce((sum, val) => sum + (val || 0), 0);
  };

  const tiv2025Total = calculateTotal(data.tiv2025);
  const tiv2026Total = calculateTotal(data.tiv2026);
  const kiaShare2025Total = calculateTotal(data.kiaShare2025);
  const kiaShare2026Total = calculateTotal(data.kiaShare2026);

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden sm:rounded-lg border border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0285FF]">
                <th className="px-3 py-2 text-left text-xs text-white">Months</th>
                {data.months.map((month) => (
                  <th key={month} className="px-3 py-2 text-center text-xs text-white">{month}</th>
                ))}
                <th className="px-3 py-2 text-center text-xs text-white flex items-center justify-center gap-1">
                  Total <Info className="w-3 h-3" />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* TIV 2025 Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">TIV 2025</td>
                {data.tiv2025.map((val, idx) => (
                  <td key={`tiv2025-${idx}`} className="px-3 py-2 text-center text-xs text-black">{val}</td>
                ))}
                <td className="px-3 py-2 text-center text-xs text-black">{tiv2025Total}</td>
              </tr>

              {/* TIV 2026 Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">TIV 2026</td>
                {data.tiv2026.map((val, idx) => (
                  <td key={`tiv2026-${idx}`} className="px-3 py-2 text-center text-xs text-black">
                    {val !== null ? val : '-'}
                  </td>
                ))}
                <td className="px-3 py-2 text-center text-xs text-black">{tiv2026Total}</td>
              </tr>

              {/* Value Change Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">Value Change</td>
                {data.months.map((_, idx) => {
                  const change = calculateChange(data.tiv2026[idx], data.tiv2025[idx]);
                  const isNegative = change !== null && change < 0;
                  return (
                    <td
                      key={`change-${idx}`}
                      className={`px-3 py-2 text-center text-xs ${
                        change === null ? 'text-black' : isNegative ? 'text-red-600' : 'text-black'
                      }`}
                    >
                      {change !== null ? change : '-'}
                    </td>
                  );
                })}
                <td className="px-3 py-2 text-center text-xs text-black">{tiv2026Total - tiv2025Total}</td>
              </tr>

              {/* % Change Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">% Change</td>
                {data.months.map((_, idx) => {
                  const percentChange = calculatePercentChange(data.tiv2026[idx], data.tiv2025[idx]);
                  const isNegative = percentChange !== null && percentChange < 0;
                  return (
                    <td
                      key={`percent-${idx}`}
                      className={`px-3 py-2 text-center text-xs ${
                        percentChange === null ? 'text-black' : isNegative ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                      }`}
                    >
                      {percentChange !== null ? percentChange.toFixed(2) : '-'}
                    </td>
                  );
                })}
                <td className="px-3 py-2 text-center text-xs text-green-600 bg-green-50">
                  {((tiv2026Total - tiv2025Total) / tiv2025Total * 100).toFixed(2)}
                </td>
              </tr>

              {/* Kia Share 2025 Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">Kia Share 2025</td>
                {data.kiaShare2025.map((val, idx) => (
                  <td key={`kia2025-${idx}`} className="px-3 py-2 text-center text-xs text-black">{val}</td>
                ))}
                <td className="px-3 py-2 text-center text-xs text-black">{kiaShare2025Total}</td>
              </tr>

              {/* Kia Share 2026 Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">Kia Share 2026</td>
                {data.kiaShare2026.map((val, idx) => (
                  <td key={`kia2026-${idx}`} className="px-3 py-2 text-center text-xs text-black">
                    {val !== null ? val : '-'}
                  </td>
                ))}
                <td className="px-3 py-2 text-center text-xs text-black">{kiaShare2026Total}</td>
              </tr>

              {/* Kia Share Value Change Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">Value Change</td>
                {data.months.map((_, idx) => {
                  const change = calculateChange(data.kiaShare2026[idx], data.kiaShare2025[idx]);
                  const isNegative = change !== null && change < 0;
                  return (
                    <td
                      key={`kia-change-${idx}`}
                      className={`px-3 py-2 text-center text-xs ${
                        change === null ? 'text-black' : isNegative ? 'text-red-600' : 'text-black'
                      }`}
                    >
                      {change !== null ? change : '-'}
                    </td>
                  );
                })}
                <td className="px-3 py-2 text-center text-xs text-red-600">{kiaShare2026Total - kiaShare2025Total}</td>
              </tr>

              {/* Kia Share % Change Row */}
              <tr className="hover:bg-gray-50">
                <td className="px-3 py-2 text-xs text-[#0285FF] font-medium">% Change</td>
                {data.months.map((_, idx) => {
                  const percentChange = calculatePercentChange(data.kiaShare2026[idx], data.kiaShare2025[idx]);
                  const isNegative = percentChange !== null && percentChange < 0;
                  return (
                    <td
                      key={`kia-percent-${idx}`}
                      className={`px-3 py-2 text-center text-xs ${
                        percentChange === null ? 'text-black' : isNegative ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                      }`}
                    >
                      {percentChange !== null ? percentChange.toFixed(2) : '-'}
                    </td>
                  );
                })}
                <td className="px-3 py-2 text-center text-xs text-red-600 bg-red-50">
                  {((kiaShare2026Total - kiaShare2025Total) / kiaShare2025Total * 100).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function MonthlyAnalysisRTO ({selectedRTO})  {



  
  const colors = [
   "#4caf50",// muted green
    "#00c853",
    "#0b85ff",
    "#ff4c4c",
    "#ffc107",
    "#004080", 
    "#2196f3", // soft blue
    "#ff7043", // mellow orange
    "#d32f2f", // soft red
    "#0288d1", // blue cyan
    "#6d4c41", // coffee brown
    "#9575cd", // soft purple
    "#f06292", // pink but not too neon
    "#aed581", // light green
    "#7986cb", // dusty blue
    "#ba68c8", // light purple
    "#4db6ac", // teal
    "#ffb74d", // light orange
    "#90a4ae", // blue gray
    "#a1887f", // earthy brown
    "#81d4fa", // sky blue
    "#e57373", // faded red
    "#64b5f6", // cool blue
    "#81c784", // garden green
    "#f0b400", // warm mustard
  ];
  const dealershipDetails = useSelector((state) => state.DealershipDetails);



  const dealershipBrand = PanIndiaData?.filter((item) =>
    item.brand
      .toLowerCase()
      .includes(dealershipDetails?.dealership_brand.toLowerCase())
  )[0].brand;
  const [selectedBrandRTOMonthly, setselectedBrandRTOMonthly] =
    useState(dealershipBrand);

  const [selectedBrandRTOMonthlyView, setselectedBrandRTOMonthlyView] =
    useState(false);

  

  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();





  


  
  

 const data10 = {
  labels: allMonths || [],

  datasets:
    RTOData['Agra']
      ?.filter((data) => data?.brand === selectedBrandRTOMonthly) // filter array
      ?.flatMap((data) =>
        (data?.monthly || []).map((dat, i) => {
          console.log(dat)
          const col = colors?.[i] || "blue"; // fallback color
          const months = Object.keys(dat || {}).filter((k) => k !== "year");
          console.log(months)
   const isCurrentYear = Number(dat.year) === Number(currentYear);
   const prevYear = Number(dat.year) === Number(currentYear - 1)
       

        return {
          label: dat.year,
          data: months.map((month, index) => {
            const value = dat?.[month];
           
            if(!(isCurrentYear || prevYear)) return;

            if (!isCurrentYear) return value;

            // 👉 current year logic
            return index <= currentMonthIndex ? value : null;
          }),
          backgroundColor: "rgba(0, 0, 255, 0.1)",
          borderColor: col,
          borderRadius: 0,
          tension: 0.4,
          borderWidth: 1.5,
          pointRadius: 3,
        };
        })
      ) || [], 
};

  const options2 = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Allow the chart to resize according to the container
    plugins: {
      legend: {
        display: false, // Position of the legend ('top', 'bottom', 'left', 'right')
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering over bars
      },
      filler: {
        propagate: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: false,
          borderDash: [4, 4],
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex items-stretch justify-between gap-[1rem] relative   bg-transparent ">
        
      <div className="w-[100%] border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col gap-[1rem] shadow-lg glass-card">
        <div className="flex items-center justify-between">
          <h1 className="font-1 font-medium text-[1rem] flex items-center gap-[.5rem]">
            <FaChartBar />
           Yearly Trend For {selectedBrandRTOMonthly?.split(" ")[0]} in {" "}
            {selectedRTO?.split(" ")?.[0]}
          </h1>

          <div className="flex items-center gap-[1rem]">
            <div className="flex items-center justify-center gap-[.5rem]">
              <span
                className="w-[15px] h-[2px]  rounded-full"
                style={{ background: `${colors?.[1]}` }}
              ></span>{" "}
              <h1 className="text-[.75rem] font-medium ">{new Date().getFullYear() - 1}</h1>
            </div>
            <div className="flex items-center justify-center gap-[.5rem]">
              <span
                className="w-[15px] h-[2px]  rounded-full"
                style={{ background: `${colors?.[2]}` }}
              ></span>{" "}
              <h1 className="text-[.75rem] font-medium ">{new Date().getFullYear()}</h1>
            </div>
          </div>
        
        </div>

        

        <div className="flex items-center justify-start  w-full h-[300px]">
          <Lined data={data10} options={options2} />
        </div>
      </div>
    </div>
  );
}
function OEMVs ({selectedRTO})  {



  
  const colors = [
   "#4caf50",// muted green
    "#00c853",
    "#0b85ff",
    "#ff4c4c",
    "#ffc107",
    "#004080", 
    "#2196f3", // soft blue
    "#ff7043", // mellow orange
    "#d32f2f", // soft red
    "#0288d1", // blue cyan
    "#6d4c41", // coffee brown
    "#9575cd", // soft purple
    "#f06292", // pink but not too neon
    "#aed581", // light green
    "#7986cb", // dusty blue
    "#ba68c8", // light purple
    "#4db6ac", // teal
    "#ffb74d", // light orange
    "#90a4ae", // blue gray
    "#a1887f", // earthy brown
    "#81d4fa", // sky blue
    "#e57373", // faded red
    "#64b5f6", // cool blue
    "#81c784", // garden green
    "#f0b400", // warm mustard
  ];
  const dealershipDetails = useSelector((state) => state.DealershipDetails);



  const dealershipBrand = PanIndiaData?.filter((item) =>
    item.brand
      .toLowerCase()
      .includes(dealershipDetails?.dealership_brand.toLowerCase())
  )[0].brand;
  const [selectedBrandRTOMonthly, setselectedBrandRTOMonthly] =
    useState(dealershipBrand);

  const [selectedBrandRTOMonthlyView, setselectedBrandRTOMonthlyView] =
    useState(false);

  

  const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                   "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();





  


  
  

 const data10 = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  datasets: [
    {
      label: "Kia",
      data: [18000, 20000, 22000, 21000, 23000, 25000, 24000, 26000, 27000, 29000, 30000, 32000],
      borderColor: "rgba(0, 200, 83, 1)",
      backgroundColor: "rgba(0, 200, 83, 0.2)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Maruti",
      data: [40000, 42000, 45000, 43000, 46000, 48000, 47000, 50000, 52000, 54000, 56000, 58000],
      borderColor: "rgba(11, 133, 255, 1)",
      backgroundColor: "rgba(11, 133, 255, 0.2)",
      tension: 0.4,
      fill: true,
    }
  ]
   
};

  const options2 = {
    responsive: true, // Make the chart responsive to screen size
    maintainAspectRatio: false, // Allow the chart to resize according to the container
    plugins: {
      legend: {
        display: false, // Position of the legend ('top', 'bottom', 'left', 'right')
      },
      tooltip: {
        enabled: true, // Show tooltips when hovering over bars
      },
      filler: {
        propagate: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start the x-axis at zero
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: false,
          borderDash: [4, 4],
        },
        ticks: {
          display: true, // Remove x-axis labels
        },
      },
    },
  };

  return (
    <div className="w-full h-full flex items-stretch justify-between gap-[1rem] relative   bg-transparent ">
        
      <div className="w-[100%] border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col gap-[1rem] shadow-lg glass-card">
        <div className="flex items-center justify-between">
          <h1 className="font-1 font-medium text-[1rem] flex items-center gap-[.5rem]">
            <FaChartBar />
            KIA vs MARUTI in Jhansi RTO
          </h1>

          <div className="flex items-center gap-[1rem]">
            <div className="flex items-center justify-center gap-[.5rem]">
              <span
                className="w-[15px] h-[2px]  rounded-full"
                style={{ background: `${colors?.[1]}` }}
              ></span>{" "}
              <h1 className="text-[.75rem] font-medium ">KIA</h1>
            </div>
            <div className="flex items-center justify-center gap-[.5rem]">
              <span
                className="w-[15px] h-[2px]  rounded-full"
                style={{ background: `${colors?.[2]}` }}
              ></span>{" "}
              <h1 className="text-[.75rem] font-medium ">MARUTI</h1>
            </div>
          </div>
        
        </div>

        

        <div className="flex  w-full ">
          {/* <Line data={data10} options={options2} /> */}
          <BrandComparisonChart data={brandComparisonData}/>
        </div>
      </div>
    </div>
  );
}


function  BrandComparisonChart({ data }: { data: typeof brandComparisonData }) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
          <p className="text-xs font-medium text-black mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: {entry.value !== null ? entry.value.toLocaleString() : 'N/A'}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const total2025 = data.reduce((sum, item) => sum + (item['2025'] || 0), 0);
  const total2026 = data.filter(item => item['2026'] !== null).reduce((sum, item) => sum + (item['2026'] || 0), 0);

  return (
    <div className="space-y-4 w-full">
      <div className="h-80 w-full bg-[#f8fafc] rounded-lg p-4 border border-gray-200">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="0" stroke="#e5e7eb" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: '#6b7280', fontSize: 11 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#6b7280', fontSize: 11 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="2025"
              stroke="#22c55e"
              strokeWidth={2}
              dot={{ fill: '#22c55e', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#22c55e' }}
              connectNulls={false}
            />
            <Line
              type="monotone"
              dataKey="2026"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: '#3b82f6' }}
              connectNulls={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Complete Data Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-[#403F3F] font-medium">Month</th>
              <th className="px-3 py-2 text-right text-[#403F3F] font-medium">2025</th>
              <th className="px-3 py-2 text-right text-[#403F3F] font-medium">2026</th>
              <th className="px-3 py-2 text-right text-[#403F3F] font-medium">Change</th>
              <th className="px-3 py-2 text-right text-[#403F3F] font-medium">% Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item) => {
              const change = item['2026'] !== null ? item['2026'] - item['2025'] : null;
              const percentChange = item['2026'] !== null ? ((item['2026'] - item['2025']) / item['2025'] * 100) : null;
              return (
                <tr key={item.month} className="hover:bg-gray-50">
                  <td className="px-3 py-2 text-black">{item.month}</td>
                  <td className="px-3 py-2 text-right text-black">{item['2025'].toLocaleString()}</td>
                  <td className="px-3 py-2 text-right text-black">
                    {item['2026'] !== null ? item['2026'].toLocaleString() : '-'}
                  </td>
                  <td className={`px-3 py-2 text-right ${
                    change === null ? 'text-[#403F3F]' : change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {change !== null ? (change >= 0 ? '+' : '') + change.toLocaleString() : '-'}
                  </td>
                  <td className={`px-3 py-2 text-right ${
                    percentChange === null ? 'text-[#403F3F]' : percentChange >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {percentChange !== null ? (percentChange >= 0 ? '+' : '') + percentChange.toFixed(1) + '%' : '-'}
                  </td>
                </tr>
              );
            })}
            <tr className="bg-gray-50 font-medium">
              <td className="px-3 py-2 text-black">Total</td>
              <td className="px-3 py-2 text-right text-black">{total2025.toLocaleString()}</td>
              <td className="px-3 py-2 text-right text-black">{total2026.toLocaleString()}</td>
              <td className={`px-3 py-2 text-right ${
                (total2026 - total2025) >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {((total2026 - total2025) >= 0 ? '+' : '') + (total2026 - total2025).toLocaleString()}
              </td>
              <td className={`px-3 py-2 text-right ${
                ((total2026 - total2025) / total2025 * 100) >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {(((total2026 - total2025) / total2025 * 100) >= 0 ? '+' : '') + ((total2026 - total2025) / total2025 * 100).toFixed(1)}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}