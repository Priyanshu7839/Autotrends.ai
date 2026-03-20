import { MessageCircle, Share2, Users, TrendingUp, ArrowRight, BarChart3, Sparkles } from 'lucide-react';

export function LeadManagement() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gray-900" />
            <span className="text-xs font-semibold text-gray-900">DAN ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            Dealer-Owned Lead Engine
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto capitalize">
            Unified lead management across Meta, WhatsApp, and traditional channels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Lead Sources */}
          <div className="glass-premium rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg card-3d">
            <h3 className="text-xl sm:text-2xl mb-6 text-[#0066CC]">Lead Sources</h3>
            
            <div className="space-y-4">
              {/* Meta Ads Leads */}
              <div className="glass-card-dark rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-cyan-500/10">
                    <Share2 className="w-6 h-6 text-cyan-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-gray-900">Meta Ads Leads</h4>
                    <p className="text-sm text-gray-600">Facebook & Instagram</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl text-gray-900">43</p>
                  <p className="text-xs text-green-600">This week</p>
                </div>
              </div>

              {/* WhatsApp Leads */}
              <div className="glass-card-dark rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 shadow-lg shadow-green-500/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/10">
                    <MessageCircle className="w-6 h-6 text-emerald-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-gray-900">WhatsApp Leads</h4>
                    <p className="text-sm text-gray-600">Direct messaging</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl text-gray-900">1,682</p>
                  <p className="text-xs text-green-600">Total active</p>
                </div>
              </div>

              {/* Walk-in / Referral */}
              <div className="glass-card-dark rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-purple-500/10">
                    <Users className="w-6 h-6 text-purple-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-gray-900">Walk-in / Referral</h4>
                    <p className="text-sm text-gray-600">Traditional sources</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl text-gray-900">127</p>
                  <p className="text-xs text-gray-600">This month</p>
                </div>
              </div>

              {/* CRM / Online Leads */}
              <div className="glass-card-dark rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/10">
                    <TrendingUp className="w-6 h-6 text-amber-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-gray-900">CRM / Online</h4>
                    <p className="text-sm text-gray-600">Website & portals</p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl text-gray-900">94</p>
                  <p className="text-xs text-gray-600">This month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics & Performance */}
          <div className="glass-premium rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-lg card-3d">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="relative">
              <h3 className="text-2xl mb-6 text-[#0066CC]">Performance</h3>
              
              <div className="space-y-6">
                {/* Conversion Funnel */}
                <div className="glass-card-dark rounded-xl p-5">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-[#0066CC]" />
                    <h4 className="text-[#0066CC]">Conversion Funnel</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Leads</span>
                        <span className="text-gray-900">1,946</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0066CC] w-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Qualified</span>
                        <span className="text-gray-900">847</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0066CC] w-[43%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Test Drive</span>
                        <span className="text-gray-900">324</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-[#0066CC] w-[17%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Converted</span>
                        <span className="text-gray-900">168</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-600 w-[8.6%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Automation */}
                <div className="glass-card-dark rounded-xl p-5">
                  <h4 className="text-[#0066CC] mb-3">WhatsApp Automation</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Auto-responses sent</span>
                    <span className="text-gray-900">1,428</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Response time</span>
                    <span className="text-green-600">&lt; 2 min</span>
                  </div>
                </div>

                {/* Meta Ads Performance */}
                <div className="glass-card-dark rounded-xl p-5">
                  <h4 className="text-[#0066CC] mb-3">Meta Ads Snapshot</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Cost per lead</span>
                    <span className="text-gray-900">₹142</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">ROAS</span>
                    <span className="text-green-600">4.2x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-primary px-8 py-4 rounded-xl inline-flex items-center space-x-2 shadow-lg">
            <span>Connect Meta & WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}