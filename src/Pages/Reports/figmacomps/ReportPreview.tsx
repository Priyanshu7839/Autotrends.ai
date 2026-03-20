import { useReport } from '../ReportContext';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useMemo } from 'react';

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

const chartData = [
  { id: "maruti", name: "Maruti", value: 38.5 },
  { id: "hyundai", name: "Hyundai", value: 24.2 },
  { id: "tata", name: "Tata", value: 16.1 },
  { id: "mahindra", name: "Mahindra", value: 10.5 },
  { id: "kia", name: "Kia", value: 7.4 },
  { id: "others", name: "Others", value: 3.3 },
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        {/* Dynamic Branding Header */}
        <div className="flex items-start justify-between border-b border-gray-200 pb-6">
          <div>
            <div className="text-3xl mb-2 text-black font-semibold">{reportTitle}</div>
            <div className="text-sm text-[#403F3F] space-y-1">
              <div><span className="font-medium">Geography:</span> {geography}</div>
              <div><span className="font-medium">Brand:</span> {filters.primaryBrand || 'Not Selected'}</div>
              <div><span className="font-medium">Period:</span> {period}</div>
              <div><span className="font-medium">Category:</span> {filters.category?.toUpperCase() || 'All'}</div>
            </div>
          </div>
          <div className="text-right">
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
        <div className="grid grid-cols-4 gap-4">
          {mode === 'dealer' ? (
            <>
              <KPICard key="retail-units" title="Retail Units" value="1,248" change="+12.5%" positive />
              <KPICard key="market-share" title="Market Share" value="8.2%" change="+0.8%" positive />
              <KPICard key="bbnd-units" title="BBND Units" value="320" change="-5.2%" positive />
              <KPICard key="inventory-days" title="Inventory Days" value="18" change="-3" positive />
              <KPICard key="finance-pct" title="Finance %" value="68%" change="+2.1%" positive />
              <KPICard key="insurance-pct" title="Insurance %" value="82%" change="+1.5%" positive />
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
          <h3 className="text-lg mb-4 text-black font-semibold">Market Share Breakdown</h3>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#403F3F]">OEM</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#403F3F]">Units</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#403F3F]">Share %</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#403F3F]">YoY</th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-[#403F3F]">Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {marketShareData.map((row, idx) => (
                  <tr key={row.brand} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-black">{row.brand}</td>
                    <td className="px-4 py-3 text-sm text-right text-[#403F3F]">
                      {row.units.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-black font-medium">
                      {row.share}%
                    </td>
                    <td className="px-4 py-3 text-sm text-right">
                      <span className={row.yoy > 0 ? 'text-green-600' : 'text-red-600'}>
                        {row.yoy > 0 ? '+' : ''}{row.yoy}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-center text-[#403F3F]">
                      #{idx + 1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart */}
        <div>
          <h3 className="text-lg mb-4 text-black font-semibold">Trend Analysis</h3>
          <SimpleTrendChart data={trendData} />
        </div>

         <div className="mb-8">
        <h3 className="mb-4 text-[16px] font-semibold" style={{ color: "#000000" }}>
          Market Share Distribution
        </h3>
        <div className="rounded-lg border p-6" style={{ borderColor: "#E5E5E5" }}>
          <div className="space-y-4">
            {chartData.map((item) => {
              const maxValue = 40; // Scale for visualization
              const barWidth = (item.value / maxValue) * 100;
              
              return (
                <div key={item.id}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[13px] font-medium" style={{ color: "#000000" }}>
                      {item.name}
                    </span>
                    <span className="text-[13px] font-semibold" style={{ color: "#0285FF" }}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-8 w-full rounded" style={{ backgroundColor: "#F3F4F6" }}>
                    <div
                      className="h-full rounded transition-all"
                      style={{
                        width: `${barWidth}%`,
                        backgroundColor: "#0285FF",
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: "#E5E5E5" }}>
            <span className="text-[11px]" style={{ color: "#403F3F" }}>0%</span>
            <span className="text-[11px]" style={{ color: "#403F3F" }}>Market Share</span>
            <span className="text-[11px]" style={{ color: "#403F3F" }}>40%</span>
          </div>
        </div>
      </div>

        {/* Key Insights */}
        <div>
          <h3 className="text-lg mb-4 text-black font-semibold">Key Insights</h3>
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
          <h3 className="text-lg mb-4 text-black font-semibold">Recommended Actions</h3>
          <div className="grid grid-cols-2 gap-4">
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
        <div className="border-t border-gray-200 pt-6 text-xs text-[#403F3F]">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-1">Source: FADA / AutoTrends Intelligence</div>
              {mode === 'oem' && (
                <div className="font-medium text-red-600">Confidential – Internal Use Only</div>
              )}
            </div>
            <div className="text-right">
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