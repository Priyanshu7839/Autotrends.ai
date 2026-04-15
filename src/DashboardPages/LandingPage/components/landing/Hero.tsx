import { ArrowRight, TrendingUp, Package, MessageCircle, Shield, CreditCard, CheckCircle, Clock, Car, Sparkles } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { useState } from 'react';
import { DemoRequestFlow } from '../DemoRequestFlow';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const LIVE_CHART_DATA = [
  { value: 2.1 },
  { value: 2.3 },
  { value: 2.5 },
  { value: 2.4 },
  { value: 2.6 },
  { value: 2.66 },
];

export function Hero() {
  const [isDemoFlowOpen, setIsDemoFlowOpen] = useState(false);

  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-24  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 gradient-text">
              India's Dealer Command & Control Center
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0 capitalize">
              Real-time market intelligence, inventory operations, and instant finance & insurance payouts — built exclusively for Indian dealerships.
            </p>
            
            {/* Fintech Verified Badge */}
            <div className="inline-flex items-center space-x-2 fintech-badge px-3 sm:px-4 py-2 sm:py-2.5 rounded-full mb-8 relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer w-full"></div>
              <CheckCircle className="w-4 h-4 text-[#0066CC] relative z-10 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-[#0066CC] relative z-10">AutoTrends fronts dealer payouts instantly</span>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary px-8 py-2 rounded-[8px] inline-flex items-center justify-center space-x-2 shadow-lg animate-pulse-glow" onClick={() => setIsDemoFlowOpen(true)}>
                <span>Request Dealer Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="#pricing" className="bg-white/15 backdrop-blur-md border border-white/30 text-[#0066CC] px-8 py-2 rounded-[8px] hover:bg-white/25 transition-all shadow-lg">
                View Dealer Plans
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Dashboard Card */}
            <div className="relative rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] border border-white/20">
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              {/* Header with Badge */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <TrendingUp className="w-4.5 h-4.5 text-cyan-300" strokeWidth={2} />
                  </div>
                  <h3 className="text-white text-xl font-medium">Live Dashboard</h3>
                </div>
                <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-gray-900" />
                  <span className="text-xs font-semibold text-gray-900">DAN ADVANTAGE</span>
                </div>
              </div>
              
              {/* Semi-transparent Stat Cards Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                {/* Inventory Aging */}
                <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-300/30 flex items-center justify-center shadow-md shadow-amber-500/10">
                      <Car className="w-4 h-4 text-amber-300" strokeWidth={2} />
                    </div>
                    <p className="text-xs text-white/60 font-medium">Inventory Aging</p>
                  </div>
                  <div className="flex items-baseline space-x-2">
                    <AnimatedCounter end={87} duration={1500} className="text-3xl text-white font-semibold" />
                    <span className="text-sm text-white/70">cars</span>
                  </div>
                </div>

                {/* Finance Payout */}
                <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-400/20 to-green-400/20 border border-emerald-300/30 flex items-center justify-center shadow-md shadow-emerald-500/10">
                      <CreditCard className="w-4 h-4 text-emerald-300" strokeWidth={2} />
                    </div>
                    <p className="text-xs text-white/60 font-medium">Finance Payout</p>
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-sm text-white/70">₹</span>
                    <AnimatedCounter end={2.66} duration={2000} decimals={2} className="text-3xl text-white font-semibold" />
                    <span className="text-sm text-white/70">Cr</span>
                  </div>
                </div>

                {/* BBND Stock */}
                <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-purple-400/20 to-violet-400/20 border border-purple-300/30 flex items-center justify-center shadow-md shadow-purple-500/10">
                      <Package className="w-4 h-4 text-purple-300" strokeWidth={2} />
                    </div>
                    <p className="text-xs text-white/60 font-medium">BBND Stock</p>
                  </div>
                  <AnimatedCounter end={5} duration={1500} className="text-3xl text-white font-semibold" />
                </div>

                {/* Meta Leads */}
                <div className="rounded-lg p-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all group">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-300/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                      <MessageCircle className="w-4 h-4 text-cyan-300" strokeWidth={2} />
                    </div>
                    <p className="text-xs text-white/60 font-medium">Meta Leads</p>
                  </div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl text-white font-semibold">+</span>
                    <AnimatedCounter end={43} duration={1500} className="text-3xl text-white font-semibold" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 relative z-10 sm:flex-row">
                <button className="flex-1 bg-white text-[#0066CC] px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 font-medium text-sm sm:text-base touch-target">
                  <span>View Full Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-3 rounded-lg hover:bg-white/15 transition-all touch-target">
                  <span className="text-sm font-medium sm:text-base">Export Report</span>
                </button>
                <button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-4 py-3 rounded-lg hover:bg-white/15 transition-all touch-target">
                  <span className="text-sm font-medium sm:text-base">Settings</span>
                </button>
              </div>
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#0066CC]/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#0066CC]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      <DemoRequestFlow isOpen={isDemoFlowOpen} onClose={() => setIsDemoFlowOpen(false)} />
    </section>
  );
}