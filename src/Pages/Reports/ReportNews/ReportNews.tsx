import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FetchIndiaData } from '../../../utils/APICalls';
import { toast } from 'sonner';
import BrandNames from "../../../Data/BrandNamesSegmentWise.json";
import { MonthlyAnalysisIndia } from '../../../DashboardComponents';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaChartBar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Line } from "react-chartjs-2";
import { LogoWithName } from '../../../assets/Images/SVG';



const monthlyData = [
  { month: 'January', retail2025: 16444, retail2026: 18500, id: 1, mom: null, yoy: 12.5 },
  { month: 'February', retail2025: 15796, retail2026: 18200, id: 2, mom: -1.6, yoy: 15.2 },
  { month: 'March', retail2025: 11083, retail2026: 12000, id: 3, mom: -34.1, yoy: 8.3 },
];

 

export default function App() {


      const [PanIndiaData, setPanIndiaData] = useState([]);

    useEffect(() => {
    const FetchVahanPortal3 = async () => {
      toast.promise(
        (async () => {
          const result = await FetchIndiaData();
          // console.log(result);

          setPanIndiaData(
            BrandNames.map((brandName) =>
              result.data.data?.find((obj) => obj.brand === brandName)
            )?.filter(Boolean)
          );
        })(),
        // {
        //   loading: "Loading Country Data",
        //   success: "Country Data Loaded",
        //   error: "Error Loading Country Data",
        //   position: "bottom-center",
        // }
      );
    };
    FetchVahanPortal3();
    const interval = setInterval(FetchVahanPortal3, 10 * 60 * 1000);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <LogoWithName height={'35'}/>
          </div>

          <div className="text-lg sm:text-xl font-medium text-gray-900 order-3 sm:order-2">
            Market Intelligence Note
          </div>

          <div className="text-left sm:text-right order-2 sm:order-3">
            <div className="text-sm text-gray-600">{new Date().toLocaleDateString('en-us',{month:'long',year:"numeric",day:'numeric'})}</div>
            <div className="text-sm text-gray-600">India | Passenger Vehicles</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="mb-3">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
            Kia India Q1 Sales: Headline Growth vs Underlying Monthly Reality
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-6 sm:mb-10">
          <p className="text-sm sm:text-base text-gray-600">
            A comparison of reported Q1 growth narratives vs dealer-level retail data
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
          {/* Media Narrative */}
          <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Reported Narrative</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm sm:text-base text-gray-700">"Kia India records strong Q1 growth (~11.6%)"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm sm:text-base text-gray-700">"Best-ever March performance"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm sm:text-base text-gray-700">"Positive momentum across the quarter"</span>
              </li>
            </ul>
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-300">
              <p className="text-xs text-gray-500">Source: Industry publications</p>
            </div>
          </div>

          {/* AutoTrends Reality */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border-2 border-gray-200 shadow-sm">
            <div className="border-l-4 pl-3 sm:pl-4 mb-4" style={{ borderColor: '#0285FF' }}>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Ground Reality (AutoTrends Data)</h3>
            </div>
            <ul className="space-y-2 sm:space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm sm:text-base text-gray-700"><span className="font-medium">January:</span> Strong</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm sm:text-base text-gray-700"><span className="font-medium">February:</span> Stable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm sm:text-base text-gray-700"><span className="font-medium">March:</span> Significant decline in retail momentum</span>
              </li>
            </ul>

            {/* Key Highlight */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4 text-red-600" />
                <span className="text-xs sm:text-sm font-semibold text-red-900">March Month-on-Month Growth</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-red-600">-34%</div>
              <p className="text-xs text-red-700 mt-1">Q1 growth driven primarily by early-quarter performance</p>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-6 sm:mb-10 bg-white rounded-xl  shadow-sm">
       
          {/* <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyData} key="retail-chart">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" key="grid" />
              <XAxis
                dataKey="month"
                tick={{ fill: '#666', fontSize: 11 }}
                axisLine={{ stroke: '#e5e5e5' }}
                key="x-axis"
              />
              <YAxis
                tick={{ fill: '#666', fontSize: 11 }}
                axisLine={{ stroke: '#e5e5e5' }}
                label={{ value: 'Retail Volume', angle: -90, position: 'insideLeft', style: { fill: '#666', fontSize: 11 } }}
                key="y-axis"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '6px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                key="tooltip"
              />
              <Line
                type="monotone"
                dataKey="retail2026"
                stroke="#0285FF"
                strokeWidth={2}
                dot={{ fill: '#0285FF', r: 4 }}
                activeDot={{ r: 6 }}
                key="line"
              />
            </LineChart>
          </ResponsiveContainer> */}
            <MonthlyAnalysis PanIndiaData={PanIndiaData} />
        
        </div>

        {/* Data Table */}
        <div className="mb-6 sm:mb-10 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Year-on-Year Comparison: Q1 2025 vs Q1 2026</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Q1 2025
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Q1 2026
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    YoY Growth
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Difference
                  </th>
                  <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {monthlyData.map((row) => {
                  const difference = row.retail2026 - row.retail2025;
                  return (
                    <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium text-gray-900">
                        {row.month}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-600 text-right font-mono">
                        {row.retail2025.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-900 text-right font-mono font-semibold">
                        {row.retail2026.toLocaleString()}
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-right">
                        <span className={row.yoy < 0 ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold'}>
                          {row.yoy > 0 ? '+' : ''}{row.yoy}%
                        </span>
                      </td>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-right font-mono">
                        <span className={difference >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                          {difference >= 0 ? '+' : ''}{difference.toLocaleString()}
                        </span>
                      </td>
                      
                      <td className="px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">
                        {row.yoy >= 15 ? (
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 whitespace-nowrap">
                            Strong Growth
                          </span>
                        ) : row.yoy >= 10 ? (
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap">
                            Moderate Growth
                          </span>
                        ) : row.yoy >= 5 ? (
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 whitespace-nowrap">
                            Slow Growth
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 whitespace-nowrap">
                            Declining
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="px-4 sm:px-6 py-3 bg-gray-50 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs text-gray-600">
              <span>Q1 2025 Total: <span className="font-semibold text-gray-900">{monthlyData.reduce((sum, row) => sum + row.retail2025, 0).toLocaleString()}</span> units</span>
              <span>Q1 2026 Total: <span className="font-semibold text-gray-900">{monthlyData.reduce((sum, row) => sum + row.retail2026, 0).toLocaleString()}</span> units</span>
              <span className="sm:text-right">Overall YoY: <span className="font-semibold text-green-600">+11.9%</span></span>
            </div>
          </div>
        </div>

        {/* Key Observations */}
        <div className="mb-6 sm:mb-10">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Key Observations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▪</span>
                <span className="text-gray-700 text-xs sm:text-sm">Quarterly growth masks intra-quarter volatility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▪</span>
                <span className="text-gray-700 text-xs sm:text-sm">March shows significant drop in retail momentum</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▪</span>
                <span className="text-gray-700 text-xs sm:text-sm">Growth narrative driven by Jan–Feb performance</span>
              </li>
            </ul>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▪</span>
                <span className="text-gray-700 text-xs sm:text-sm">Possible gap between dispatch and actual retail</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▪</span>
                <span className="text-gray-700 text-xs sm:text-sm">Dealer-level data shows early signs of demand softening</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-6 sm:mb-10 bg-blue-50 rounded-lg p-4 sm:p-6 border border-blue-100">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Why This Matters for OEMs & Dealers</h3>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▸</span>
              <span className="text-gray-700 text-xs sm:text-sm">Inventory planning decisions depend on monthly trends, not just quarterly aggregates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▸</span>
              <span className="text-gray-700 text-xs sm:text-sm">BBND and stock pressure may rise if retail slows but dispatch continues</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xs sm:text-sm" style={{ color: '#0285FF' }}>▸</span>
              <span className="text-gray-700 text-xs sm:text-sm">Dealer-level visibility is critical for accurate demand assessment</span>
            </li>
          </ul>
        </div>

        {/* AutoTrends Positioning */}
        <div className="mb-6 sm:mb-10 rounded-lg p-4 sm:p-6 border-2 shadow-md" style={{ borderColor: '#0285FF', backgroundColor: '#f8fbff' }}>
          <h3 className="text-base sm:text-lg font-semibold mb-3" style={{ color: '#0285FF' }}>AutoTrends Insight Layer</h3>
          <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
            AutoTrends tracks real-time dealer-level retail data, enabling visibility beyond aggregated quarterly reporting.
          </p>
          <div className="text-gray-700 text-xs sm:text-sm">
            <p className="font-medium mb-2">This helps OEMs and dealers:</p>
            <ul className="space-y-2 ml-3 sm:ml-4">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>Detect demand shifts early</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>Identify stock pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>Make better allocation decisions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 sm:pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              <div>Source: AutoTrends.ai Dealer Network Data</div>
              <div className="mt-1">Note: Data based on real-time retail tracking across dealerships</div>
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-700 italic">
              "Quarterly numbers tell a story. Monthly data tells the truth."
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



const MonthlyAnalysis = ({PanIndiaData}) => {
 

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
    item?.brand
      .toLowerCase()
      .includes(dealershipDetails?.dealership_brand.toLowerCase())
  )?.[0]?.brand;

  


  const [selectedBrandIndiaMonthly, setselectedBrandIndiaMonthly] =
    useState(dealershipBrand);

    useEffect(()=>{
      setselectedBrandIndiaMonthly(dealershipBrand)
    
      
    },[dealershipBrand])

  const [selectedBrandIndiaMonthlyView, setselectedBrandIndiaMonthlyView] =
    useState(false);


    const allMonths = ["Jan", "Feb", "Mar"];


  const currentMonthIndex = new Date().getMonth();
  const currentYear = new Date().getFullYear();

const data10 = {
  labels: allMonths || [],
  datasets: PanIndiaData
    ?.filter((data) => data.brand === selectedBrandIndiaMonthly)
    .flatMap((data) =>
      (data?.monthly || []).map((dat, i) => {
        const col = colors[i];
        const months = Object.keys(dat || {}).filter((k) => k !== "year");
        
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
    ),
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
    <div className="w-full flex items-stretch justify-between gap-[1rem] bg-white rounded-[12px]">
      <div className="w-[100%] border-[1px] border-[#cfcfd5] rounded-[12px] p-[1rem] flex flex-col gap-[1rem] ">
        <div className="flex items-center justify-between">
          <h1 className="font-1 font-medium text-[1rem] flex items-center gap-[.5rem]">
            <FaChartBar />
            Monthly Retail Trend
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
          <Line data={data10} options={options2} />
        </div>

          <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm text-red-600">
            <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">Sharp decline in March</span>
          </div>
      </div>
    </div>
  );
};