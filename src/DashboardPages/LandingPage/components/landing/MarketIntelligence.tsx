import { MapPin, TrendingUp, Award, Target, Sparkles, ChevronRight, BarChart3, Globe, Building2 } from 'lucide-react';
import { useState } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import Map from '../../../../assets/Images/map.png'

type GeographyLevel = 'country' | 'state' | 'rto';

const BRAND_DATA = {
  country: [
    { brand: 'Maruti Suzuki', share: 42.3, trend: '+2.1%', color: 'from-blue-400 to-blue-600' },
    { brand: 'Hyundai', share: 18.7, trend: '+1.3%', color: 'from-purple-400 to-purple-600' },
    { brand: 'Tata Motors', share: 13.2, trend: '+3.8%', color: 'from-green-400 to-green-600' },
    { brand: 'Mahindra', share: 9.8, trend: '+0.9%', color: 'from-orange-400 to-orange-600' },
  ],
  state: [
    { brand: 'Maruti Suzuki', share: 47.5, trend: '+3.2%', color: 'from-blue-400 to-blue-600' },
    { brand: 'Tata Motors', share: 16.8, trend: '+5.1%', color: 'from-green-400 to-green-600' },
    { brand: 'Hyundai', share: 15.2, trend: '+1.8%', color: 'from-purple-400 to-purple-600' },
    { brand: 'Mahindra', share: 11.3, trend: '+2.4%', color: 'from-orange-400 to-orange-600' },
  ],
  rto: [
    { brand: 'Maruti Suzuki', share: 52.1, trend: '+4.7%', color: 'from-blue-400 to-blue-600' },
    { brand: 'Tata Motors', share: 19.4, trend: '+6.3%', color: 'from-green-400 to-green-600' },
    { brand: 'Hyundai', share: 12.8, trend: '+2.1%', color: 'from-purple-400 to-purple-600' },
    { brand: 'Mahindra', share: 9.2, trend: '+1.5%', color: 'from-orange-400 to-orange-600' },
  ],
};

const STATES = [
  { name: 'Maharashtra', rtos: 'MH-01 to MH-51', highlight: true },
  { name: 'Karnataka', rtos: 'KA-01 to KA-70', highlight: false },
  { name: 'Tamil Nadu', rtos: 'TN-01 to TN-99', highlight: false },
  { name: 'Gujarat', rtos: 'GJ-01 to GJ-38', highlight: false },
  { name: 'Delhi', rtos: 'DL-01 to DL-13', highlight: false },
];

export function MarketIntelligence() {
  const [selectedLevel, setSelectedLevel] = useState<GeographyLevel>('rto');
  const [selectedState, setSelectedState] = useState('Maharashtra');

  const currentData = BRAND_DATA[selectedLevel];
  const topBrand = currentData[0];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gray-900" />
            <span className="text-xs font-semibold text-gray-900">DAN ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
            Market Intelligence Like Never Before
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto capitalize">
            Deep-dive brand performance analytics across India, your state, and your RTO — real-time competitive intelligence at your fingertips
          </p>
        </div>

        {/* Main Intelligence Card */}
        <div className="relative rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] border border-white/20">
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left: Map & Geographic Selector */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                  <MapPin className="w-6 h-6 text-cyan-300" strokeWidth={2} />
                </div>
                <h3 className="text-2xl text-white">Geographic View</h3>
              </div>

              {/* Geography Level Tabs */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedLevel('country')}
                  className={`px-4 py-2.5 rounded-xl transition-all inline-flex items-center space-x-2 ${
                    selectedLevel === 'country'
                      ? 'bg-white text-[#0066CC] shadow-lg'
                      : 'bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">All India</span>
                </button>
                <button
                  onClick={() => setSelectedLevel('state')}
                  className={`px-4 py-2.5 rounded-xl transition-all inline-flex items-center space-x-2 ${
                    selectedLevel === 'state'
                      ? 'bg-white text-[#0066CC] shadow-lg'
                      : 'bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">Your State</span>
                </button>
                <button
                  onClick={() => setSelectedLevel('rto')}
                  className={`px-4 py-2.5 rounded-xl transition-all inline-flex items-center space-x-2 ${
                    selectedLevel === 'rto'
                      ? 'bg-white text-[#0066CC] shadow-lg'
                      : 'bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span className="text-sm">Your RTO</span>
                </button>
              </div>

              {/* Dynamic Map Visual */}
              <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-md border border-white/20">
                <div className="aspect-square max-w-sm mx-auto relative">
                  {/* All India Map */}
                  {selectedLevel === 'country' && (
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 animate-fadeIn">
                      <div className="relative w-full h-full flex items-start justify-center mb-[40px]">
                        {/* Actual India Map SVG */}
                       <img src={Map} className='w-[90%] h-[90%] object-cover'  />
                        
                            <div className='absolute -left-2 top-3'>
                                                       <svg  viewBox="0 0 300 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            {/* Kashmir Region */}
                           

                            {/* Major Cities with Pulsing Dots */}
                            {/* Delhi */}
                            <circle cx="150" cy="90" r="5" fill="#ef4444" className="animate-pulse">
                              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <text x="150" y="78" fill="white" fontSize="10" textAnchor="middle" className="font-semibold drop-shadow">Delhi</text>
                            
                            {/* Mumbai */}
                            <circle cx="110" cy="150" r="5" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.3s' }}>
                              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" begin="0.3s" />
                            </circle>
                            <text x="110" y="138" fill="white" fontSize="10" textAnchor="middle" className="font-semibold drop-shadow">Mumbai</text>
                            
                            {/* Bangalore */}
                            <circle cx="150" cy="220" r="5" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" begin="0.6s" />
                            </circle>
                            <text x="150" y="208" fill="white" fontSize="10" textAnchor="middle" className="font-semibold drop-shadow">Bangalore</text>
                            
                            {/* Kolkata */}
                            <circle cx="205" cy="165" r="5" fill="#22c55e" className="animate-pulse" style={{ animationDelay: '0.9s' }}>
                              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" begin="0.9s" />
                            </circle>
                            <text x="205" y="153" fill="white" fontSize="10" textAnchor="middle" className="font-semibold drop-shadow">Kolkata</text>
                            
                            {/* Chennai */}
                            <circle cx="165" cy="250" r="5" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '1.2s' }}>
                              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite" begin="1.2s" />
                            </circle>
                            <text x="165" y="238" fill="white" fontSize="10" textAnchor="middle" className="font-semibold drop-shadow">Chennai</text>
                        </svg>
                            </div>
                        {/* Bottom Label */}
                        <div className="absolute -bottom-2 left-0 right-0 text-center">
                          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-xl">
                            <Globe className="w-4 h-4 text-white" />
                            <div>
                              <p className="text-white text-sm font-semibold">All India Coverage</p>
                              <p className="text-white/70 text-xs">28 States & 8 Union Territories</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* State Map (Maharashtra Example) */}
                  {selectedLevel === 'state' && (
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 animate-fadeIn">
                      <div className="relative w-full h-full">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Maharashtra State Outline */}
                          <path
                            d="M40,60 L60,45 L85,40 L110,42 L135,48 L155,60 L165,75 L170,95 L168,115 L160,130 L145,145 L125,155 L100,160 L75,158 L55,148 L40,130 L30,110 L28,90 L32,75 Z"
                            fill="none"
                            stroke="white"
                            strokeWidth="4"
                            className="drop-shadow-lg"
                          />
                          {/* Districts/Regions */}
                          <circle cx="100" cy="80" r="6" fill="#3b82f6" className="animate-pulse" />
                          <circle cx="70" cy="100" r="5" fill="#22c55e" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
                          <circle cx="130" cy="95" r="5" fill="#f59e0b" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
                          <circle cx="100" cy="130" r="5" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                          {/* Connection Lines */}
                          <line x1="100" y1="80" x2="70" y2="100" stroke="white" strokeWidth="1" opacity="0.3" />
                          <line x1="100" y1="80" x2="130" y2="95" stroke="white" strokeWidth="1" opacity="0.3" />
                          <line x1="100" y1="80" x2="100" y2="130" stroke="white" strokeWidth="1" opacity="0.3" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center mt-4">
                            <MapPin className="w-14 h-14 text-white/80 mx-auto mb-3 drop-shadow-lg" />
                            <p className="text-white text-lg font-semibold">{selectedState}</p>
                            <p className="text-white/70 text-xs">36 Districts</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* RTO Zone Map (City Level) */}
                  {selectedLevel === 'rto' && (
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 animate-fadeIn">
                      <div className="relative w-full h-full">
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* RTO Zone Grid */}
                          <rect x="40" y="40" width="120" height="120" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
                          <line x1="100" y1="40" x2="100" y2="160" stroke="white" strokeWidth="1" opacity="0.3" />
                          <line x1="40" y1="100" x2="160" y2="100" stroke="white" strokeWidth="1" opacity="0.3" />
                          
                          {/* RTO Zones as Colored Blocks */}
                          <rect x="45" y="45" width="50" height="50" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" rx="4" className="hover:fill-opacity-50 transition-all cursor-pointer" />
                          <rect x="105" y="45" width="50" height="50" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="2" rx="4" className="hover:fill-opacity-50 transition-all cursor-pointer" />
                          <rect x="45" y="105" width="50" height="50" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" rx="4" className="hover:fill-opacity-50 transition-all cursor-pointer" />
                          <rect x="105" y="105" width="50" height="50" fill="#ec4899" fillOpacity="0.3" stroke="#ec4899" strokeWidth="2" rx="4" className="hover:fill-opacity-50 transition-all cursor-pointer" />
                          
                          {/* RTO Labels */}
                          <text x="70" y="73" fill="white" fontSize="10" textAnchor="middle" className="font-semibold">MH-01</text>
                          <text x="130" y="73" fill="white" fontSize="10" textAnchor="middle" className="font-semibold">MH-02</text>
                          <text x="70" y="133" fill="white" fontSize="10" textAnchor="middle" className="font-semibold">MH-03</text>
                          <text x="130" y="133" fill="white" fontSize="10" textAnchor="middle" className="font-semibold">MH-12</text>
                          
                          {/* Highlight Active RTO */}
                          <rect x="105" y="105" width="50" height="50" fill="yellow" fillOpacity="0.2" stroke="yellow" strokeWidth="3" rx="4">
                            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite" />
                          </rect>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/40 px-4 py-2 rounded-xl mb-2">
                              <MapPin className="w-10 h-10 text-yellow-400 mx-auto mb-1" />
                              <p className="text-white text-lg font-semibold">MH-12 Mumbai</p>
                              <p className="text-white/70 text-xs">Your RTO Zone</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* State Selector */}
              {(selectedLevel === 'state' || selectedLevel === 'rto') && (
                <div className="space-y-2">
                  <p className="text-white/70 text-sm mb-3">Select State/RTO:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {STATES.slice(0, 4).map((state) => (
                      <button
                        key={state.name}
                        onClick={() => setSelectedState(state.name)}
                        className={`p-3 rounded-xl text-left transition-all ${
                          selectedState === state.name
                            ? 'bg-white/25 backdrop-blur-md border border-white/40'
                            : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15'
                        }`}
                      >
                        <p className="text-white text-sm font-semibold">{state.name}</p>
                        <p className="text-white/60 text-xs">{state.rtos}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Brand Performance */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-yellow-400/20 backdrop-blur-sm border border-amber-300/30 flex items-center justify-center shadow-md shadow-amber-500/10">
                  <Award className="w-6 h-6 text-amber-300" strokeWidth={2} />
                </div>
                <h3 className="text-2xl text-white">Brand Performance</h3>
              </div>

              {/* Top Performer Card */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 backdrop-blur-md border border-yellow-400/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 text-sm font-semibold">Top Performer</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30">
                    <span className="text-green-400 text-xs font-semibold">{topBrand.trend}</span>
                  </div>
                </div>
                <h4 className="text-white text-2xl mb-2">{topBrand.brand}</h4>
                <div className="flex items-baseline space-x-2">
                  <AnimatedCounter end={topBrand.share} duration={1500} decimals={1} className="text-4xl text-white font-semibold" />
                  <span className="text-white/80 text-xl">% Market Share</span>
                </div>
                <p className="text-white/70 text-sm mt-3">
                  Leading brand in {selectedLevel === 'country' ? 'India' : selectedLevel === 'state' ? selectedState : 'your RTO'}
                </p>
              </div>

              {/* Brand Comparison List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white text-lg">Market Share Comparison</h4>
                  <button className="flex items-center space-x-1 text-white/70 hover:text-white text-sm transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span>View Chart</span>
                  </button>
                </div>

                {currentData.map((brand, index) => (
                  <div
                    key={brand.brand}
                    className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-lg shadow-${brand.color.split('-')[1]}-500/50`}>
                          <span className="text-white font-semibold text-sm">#{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{brand.brand}</p>
                          <p className="text-white/60 text-xs">Market Leader</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-lg font-semibold">{brand.share}%</p>
                        <p className="text-green-400 text-xs">{brand.trend}</p>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${brand.color} transition-all duration-1000`}
                        style={{ width: `${brand.share}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full bg-white text-[#0066CC] px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Get Full Market Report</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bottom Insights Strip */}
          <div className="mt-8 pt-8 border-t border-white/20 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <p className="text-white/70 text-xs mb-1">Fastest Growing</p>
                <p className="text-white font-semibold">Tata Motors</p>
                <p className="text-emerald-400 text-sm">+6.3% YoY</p>
              </div>
              <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <p className="text-white/70 text-xs mb-1">Volume Leader</p>
                <p className="text-white font-semibold">Maruti Suzuki</p>
                <p className="text-white/80 text-sm">52.1% Share</p>
              </div>
              <div className="rounded-xl p-4 bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-white/70 text-xs mb-1">Your Position</p>
                <p className="text-white font-semibold">Top 15%</p>
                <p className="text-cyan-400 text-sm">in RTO MH-12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}