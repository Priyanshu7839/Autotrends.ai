import { Shield, CreditCard, Clock, TrendingUp, Zap, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export function InstantPayoutEngine() {
  return (
    <section id="instant-payouts" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gray-900" />
            <span className="text-sm font-semibold text-gray-900">DAN ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            Instant Payout Engine for Dealers
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto capitalize">
            Get paid instantly. AutoTrends settles with partners later.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* 1. Instant Insurance Payout */}
          <div className="rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 backdrop-blur-sm border border-amber-300/30 flex items-center justify-center shadow-md shadow-amber-500/10">
                  <Shield className="w-7 h-7 text-amber-300" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Instant Insurance Payout</h3>
                  <p className="text-sm text-white/70">Real-time commission settlement</p>
                </div>
              </div>

              {/* Process Flow */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Dealer uploads policy</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>AutoTrends validates & pays dealer instantly</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Insurance company settles later</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Full SLA + audit trail</span>
                </div>
              </div>

              {/* Mini Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl p-3 sm:p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Policies Sold</p>
                  <p className="text-lg sm:text-xl text-white font-semibold">2,847</p>
                </div>
                <div className="rounded-xl p-3 sm:p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Payout Earned</p>
                  <p className="text-lg sm:text-xl text-white font-semibold">₹11.01 Cr</p>
                </div>
                <div className="rounded-xl p-3 sm:p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Outstanding</p>
                  <p className="text-lg sm:text-xl text-white font-semibold">₹2.4L</p>
                </div>
                <div className="rounded-xl p-3 sm:p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Avg Settlement</p>
                  <p className="text-lg sm:text-xl text-white font-semibold">2.1 days</p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-white text-[#0066CC] px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <span>Enable Insurance Payouts</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 2. Instant Finance Payout */}
          <div className="rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A]">
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400/20 to-green-400/20 backdrop-blur-sm border border-emerald-300/30 flex items-center justify-center shadow-md shadow-emerald-500/10">
                  <CreditCard className="w-7 h-7 text-emerald-300" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Instant Finance Payout</h3>
                  <p className="text-sm text-white/70">Immediate commission access</p>
                </div>
              </div>

              {/* Process Flow */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Dealer submits finance case</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>AutoTrends fronts commission instantly</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Bank settles later</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>Auto reconciliation</span>
                </div>
              </div>

              {/* Mini Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Loan Value</p>
                  <p className="text-xl text-white font-semibold">₹142 Cr</p>
                </div>
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Payout Earned</p>
                  <p className="text-xl text-white font-semibold">₹2.66 Cr</p>
                </div>
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Pending Settlement</p>
                  <p className="text-xl text-white font-semibold">₹18.2L</p>
                </div>
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-xs text-white/70 mb-1">Partner Rank</p>
                  <p className="text-xl text-white font-semibold">#2</p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-white text-[#0066CC] px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <span>Enable Finance Payouts</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}