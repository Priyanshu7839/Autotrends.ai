import { Bot, AlertTriangle, Clock, TrendingUp, ShoppingCart, Zap, Award, Sparkles, ArrowRight } from 'lucide-react';

export function DANUpgraded() {
  return (
    <section id="dan" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gray-900" />
            <span className="text-sm font-semibold text-gray-900">DAN ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            Meet DAN — your Dealer AutoTrends Navigator
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto capitalize">
            AI co-pilot that monitors, predicts, and soon executes actions on your behalf
          </p>
        </div>

        {/* DAN Capabilities Timeline */}
        <div className="glass-premium card-3d rounded-2xl p-8 sm:p-12 mb-8 relative overflow-hidden shadow-lg">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#0066CC]/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="relative">
            <h3 className="text-2xl mb-8 text-[#0066CC] text-center">DAN Capabilities</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Inventory Risk Prediction */}
              <div className="glass-card-dark card-3d rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 flex items-center justify-center mx-auto mb-4 shadow-md shadow-amber-500/10">
                  <AlertTriangle className="w-7 h-7 text-amber-500" strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-[#0066CC]">Inventory Risk Prediction</h4>
                <p className="text-sm text-gray-600">AI alerts on aging stock</p>
                <div className="mt-3 inline-flex items-center space-x-1 text-xs text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span>Active</span>
                </div>
              </div>

              {/* Payout Delay Detection */}
              <div className="glass-card-dark card-3d rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-500/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center mx-auto mb-4 shadow-md shadow-red-500/10">
                  <Clock className="w-7 h-7 text-red-500" strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-[#0066CC]">Payout Delay Detection</h4>
                <p className="text-sm text-gray-600">Track overdue payments</p>
                <div className="mt-3 inline-flex items-center space-x-1 text-xs text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span>Active</span>
                </div>
              </div>

              {/* Partner Ranking */}
              <div className="glass-card-dark card-3d rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center mx-auto mb-4 shadow-md shadow-purple-500/10">
                  <Award className="w-7 h-7 text-purple-500" strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-[#0066CC]">Partner Ranking</h4>
                <p className="text-sm text-gray-600">Best F&I partners</p>
                <div className="mt-3 inline-flex items-center space-x-1 text-xs text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span>Active</span>
                </div>
              </div>

              {/* Purchase Recommendations */}
              <div className="glass-card-dark card-3d rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 shadow-md shadow-cyan-500/10">
                  <ShoppingCart className="w-7 h-7 text-cyan-500" strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-[#0066CC]">Purchase Recommendations</h4>
                <p className="text-sm text-gray-600">AI buying guidance</p>
                <div className="mt-3 inline-flex items-center space-x-1 text-xs text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span>Active</span>
                </div>
              </div>

              {/* Incentive Optimization */}
              <div className="glass-card-dark card-3d rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-500/10">
                  <TrendingUp className="w-7 h-7 text-emerald-500" strokeWidth={2} />
                </div>
                <h4 className="mb-2 text-[#0066CC]">Incentive Optimization</h4>
                <p className="text-sm text-gray-600">Maximize earnings</p>
                <div className="mt-3 inline-flex items-center space-x-1 text-xs text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon: Auto-Actions */}
        <div className="glass-premium card-3d rounded-2xl p-8 sm:p-12 relative overflow-hidden border-2 border-purple-500/30 shadow-lg">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#0066CC]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative">
            <div className="flex flex-col sm:flex-row   items-center justify-between gap-6">
              <div className="flex flex-col gap-6 sm:gap-0 items-start sm:flex-row sm:items-center space-x-4">
                <div className="w-22 h-22 rounded-xl bg-gradient-to-br from-[#0066CC]/20 to-[#0066CC]/20 backdrop-blur-sm border border-[#0066CC]/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-[#0066CC]/10">
              {/* <Sparkles  className="w-4 h-4 text-white" strokeWidth={2} /> */}
              <h1 className=" text-[#0066CC] text-2xl">DAN</h1>
            </div>
                <div>
                  <div className="flex sm:items-center items-start gap-[1rem] sm:gap-0 space-x-2 mb-2 sm:flex-row flex-col">
                    <h3 className="text-2xl text-[#0066CC]">Auto-Actions by DAN</h3>
                    <div className="fintech-badge px-3 py-1 rounded-full inline-flex items-center space-x-1">
                      <Sparkles className="w-4 h-4 text-[#0066CC]" />
                      <span className="text-xs text-[#0066CC]">Coming Soon</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Let DAN execute approved workflows autonomously — purchase approvals, payout routing, and intelligent decisioning
                  </p>
                </div>
              </div>
              <button className="bg-white/15 backdrop-blur-md border border-white/30 text-[#0066CC] px-6 py-3 rounded-xl hover:bg-white/25 transition-all whitespace-nowrap inline-flex items-center space-x-2 shadow-lg">
                <span>View DAN Roadmap</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}