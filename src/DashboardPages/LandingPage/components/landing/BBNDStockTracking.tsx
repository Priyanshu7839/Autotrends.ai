import { Package, AlertTriangle, Clock, TrendingDown, Lightbulb } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

export function BBNDStockTracking() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gray-900" />
            <span className="text-xs font-semibold text-gray-900">DAN ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            BBND & Dead Stock Intelligence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto capitalize">
            Advanced inventory analytics to prevent stock aging and optimize purchasing
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* BBND Units */}
          <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 card-3d">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-400/20 backdrop-blur-sm border border-amber-400/30 flex items-center justify-center mb-4 shadow-md shadow-amber-500/10">
              <Package className="w-6 h-6 text-amber-500" strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 mb-2">BBND Units</h3>
            <div className="flex items-baseline space-x-2 mb-1">
              <AnimatedCounter end={5} duration={1500} className="text-3xl text-gray-900" />
            </div>
            <p className="text-sm text-gray-600">Active units</p>
          </div>

          {/* Age > 75 Days */}
          <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 card-3d">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-rose-400/20 backdrop-blur-sm border border-red-400/30 flex items-center justify-center mb-4 shadow-md shadow-red-500/10">
              <Clock className="w-6 h-6 text-red-500" strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 mb-2">Age &gt; 75 Days</h3>
            <div className="flex items-baseline space-x-2 mb-1">
              <AnimatedCounter end={12} duration={1500} className="text-3xl text-gray-900" />
            </div>
            <p className="text-sm text-gray-600">Critical aging</p>
          </div>

          {/* Slow-Moving Models */}
          <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 card-3d">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-400/20 backdrop-blur-sm border border-amber-400/30 flex items-center justify-center mb-4 shadow-md shadow-amber-500/10">
              <TrendingDown className="w-6 h-6 text-amber-500" strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 mb-2">Slow-Moving</h3>
            <div className="flex items-baseline space-x-2 mb-1">
              <AnimatedCounter end={8} duration={1500} className="text-3xl text-gray-900" />
            </div>
            <p className="text-sm text-gray-600">Models flagged</p>
          </div>

          {/* Overstock Risk */}
          <div className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 card-3d">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-400/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center mb-4 shadow-md shadow-purple-500/10">
              <AlertTriangle className="w-6 h-6 text-purple-500" strokeWidth={2} />
            </div>
            <h3 className="text-gray-700 mb-2">Overstock Risk</h3>
            <div className="flex items-baseline space-x-2 mb-1">
              <AnimatedCounter end={3} duration={1500} className="text-3xl text-gray-900" />
            </div>
            <p className="text-sm text-gray-600">Variants at risk</p>
          </div>
        </div>

        {/* DAN Insight Card */}
        <div className="relative rounded-2xl p-8 sm:p-10 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] border border-white/20">
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/20 to-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-500/10">
              {/* <Sparkles  className="w-4 h-4 text-white" strokeWidth={2} /> */}
              <h1 className=" text-white">DAN</h1>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                <h3 className="text-2xl text-white">DAN Insight</h3>
                <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1 rounded-full">
                  <Sparkles className="w-3 h-3 text-gray-900" />
                  <span className="text-xs font-semibold text-gray-900">AI RECOMMENDATION</span>
                </div>
              </div>
              <p className="text-lg text-white/90 mb-6">
                Delay purchases by 10 units to keep DOS &lt; 45 days
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-8">
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Current DOS</p>
                  <p className="text-white text-xl font-semibold">52 days</p>
                </div>
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Target DOS</p>
                  <p className="text-green-400 text-xl font-semibold">43 days</p>
                </div>
                <div className="rounded-xl p-4 bg-white/15 backdrop-blur-md border border-white/20">
                  <p className="text-white/70 text-xs mb-1">Impact</p>
                  <p className="text-yellow-400 text-xl font-semibold">₹8.4L saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}