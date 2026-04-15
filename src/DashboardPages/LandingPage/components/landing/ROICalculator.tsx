import { Calculator, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { Sparkles, IndianRupee, Target, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface ROICalculatorProps {
  onRequestDemo: () => void;
}

export function ROICalculator({ onRequestDemo }: ROICalculatorProps) {
  const [rooftops, setRooftops] = useState(3);
  const [monthlySales, setMonthlySales] = useState(50);
  const [avgLoanValue, setAvgLoanValue] = useState(8);
  const [avgInsurancePremium, setAvgInsurancePremium] = useState(35000);

  // Calculations
  const saasMonthly = rooftops * 24999; // Growth plan
  const saasAnnual = saasMonthly * 12;

  // Finance payout savings (dealers get paid instantly vs 30-90 day wait)
  const monthlyFinanceVolume = monthlySales * avgLoanValue * 100000; // in lakhs to rupees
  const dealerCommission = monthlyFinanceVolume * 0.01; // 1% commission
  const payoutDelayDays = 60;
  const cashFlowSavings = (dealerCommission * payoutDelayDays) / 30; // Working capital freed up

  // Insurance payout savings
  const monthlyInsuranceVolume = monthlySales * avgInsurancePremium;
  const insuranceCommission = monthlyInsuranceVolume * 0.15; // 15% commission
  const insuranceDelaySavings = (insuranceCommission * 60) / 30;

  const totalMonthlySavings = cashFlowSavings + insuranceDelaySavings;
  const totalAnnualSavings = totalMonthlySavings * 12;

  const autoTrendsFinanceFees = monthlyFinanceVolume * 0.0035 * 12; // 0.35% annually
  const autoTrendsInsuranceFees = monthlyInsuranceVolume * 0.012 * 12; // 1.2% annually
  const totalFintechFees = autoTrendsFinanceFees + autoTrendsInsuranceFees;

  const netAnnualSavings = totalAnnualSavings - saasAnnual - totalFintechFees;
  const roi = ((netAnnualSavings / (saasAnnual + totalFintechFees)) * 100).toFixed(0);

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gray-900" />
            <span className="text-xs font-semibold text-gray-900">INTERACTIVE ROI CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
            See Your Real Savings
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Customize the inputs to match your dealership. See exactly how much AutoTrends saves you annually.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Calculator Inputs */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 card-3d">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                <Calculator className="w-5 h-5 text-cyan-500" strokeWidth={2} />
              </div>
              <h3 className="text-xl text-gray-900">Your Dealership Profile</h3>
            </div>
            
            <div className="space-y-6">
              {/* Rooftops */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Number of Rooftops
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={rooftops}
                  onChange={(e) => setRooftops(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #0066CC ${((rooftops - 1)/9) * 100}%, #e5e7eb ${((rooftops - 1) / 9) * 100}%)`
                  }}
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">1</span>
                  <div className="px-4 py-2 bg-gradient-to-br from-[#0066CC] to-[#003D7A] rounded-lg shadow-lg shadow-blue-500/30">
                    <span className="text-2xl text-white font-semibold">{rooftops}</span>
                  </div>
                  <span className="text-xs text-gray-500">10</span>
                </div>
              </div>

              {/* Monthly Sales */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Monthly Car Sales (across all rooftops)
                </label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={monthlySales}
                  onChange={(e) => setMonthlySales(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #0052A3 ${((monthlySales - 10) / 190) * 100}%, #e5e7eb ${((monthlySales - 10) / 190) * 100}%)`
                  }}
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">10</span>
                  <div className="px-4 py-2 bg-gradient-to-br from-[#0052A3] to-[#003D7A] rounded-lg shadow-lg shadow-blue-600/30">
                    <span className="text-2xl text-white font-semibold">{monthlySales}</span>
                    <span className="text-xs text-white/80 ml-1">cars</span>
                  </div>
                  <span className="text-xs text-gray-500">200</span>
                </div>
              </div>

              {/* Avg Loan Value */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Average Loan Value (in Lakhs)
                </label>
                <input
                  type="range"
                  min="3"
                  max="20"
                  value={avgLoanValue}
                  onChange={(e) => setAvgLoanValue(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #0052A3 ${((avgLoanValue - 3) / 17) * 100}%, #e5e7eb ${((avgLoanValue - 3) / 17) * 100}%)`
                  }}
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">₹3L</span>
                  <div className="px-4 py-2 bg-gradient-to-br from-[#0052A3] to-[#0052A3] rounded-lg shadow-lg shadow-blue-500/30">
                    <span className="text-2xl text-white font-semibold">₹{avgLoanValue}L</span>
                  </div>
                  <span className="text-xs text-gray-500">₹20L</span>
                </div>
              </div>

              {/* Avg Insurance Premium */}
              <div>
                <label className="block text-sm text-gray-700 mb-3">
                  Average Insurance Premium
                </label>
                <input
                  type="range"
                  min="20000"
                  max="80000"
                  step="5000"
                  value={avgInsurancePremium}
                  onChange={(e) => setAvgInsurancePremium(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #003D7A ${((avgInsurancePremium - 20000) / 60000) * 100}%, #e5e7eb ${((avgInsurancePremium - 20000) / 60000) * 100}%)`
                  }}
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-gray-500">₹20k</span>
                  <div className="px-4 py-2 bg-gradient-to-br from-[#003D7A] to-[#002855] rounded-lg shadow-lg shadow-blue-900/30">
                    <span className="text-2xl text-white font-semibold">₹{(avgInsurancePremium / 1000).toFixed(0)}k</span>
                  </div>
                  <span className="text-xs text-gray-500">₹80k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Annual Investment */}
            <div className="glass-card rounded-2xl p-6 card-3d">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                  <IndianRupee className="w-5 h-5 text-cyan-500" strokeWidth={2} />
                </div>
                <h4 className="text-gray-900 font-semibold">Your Annual Investment</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-700">SaaS (Growth Plan)</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-gray-500">₹</span>
                    <AnimatedCounter end={saasAnnual / 100000} duration={1000} decimals={2} className="text-lg text-gray-900" />
                    <span className="text-sm text-gray-500">L</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-sm text-gray-700">Fintech Fees (Est.)</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-gray-500">₹</span>
                    <AnimatedCounter end={totalFintechFees / 100000} duration={1000} decimals={2} className="text-lg text-gray-900" />
                    <span className="text-sm text-gray-500">L</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-3 bg-gray-50 rounded-xl px-4 -mx-2">
                  <span className="text-gray-900 font-semibold">Total Cost</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-gray-700">₹</span>
                    <AnimatedCounter end={(saasAnnual + totalFintechFees) / 100000} duration={1000} decimals={2} className="text-2xl text-gray-900 font-semibold" />
                    <span className="text-gray-700">L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Annual Savings */}
            <div className="relative rounded-2xl p-6 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] border border-white/20 card-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-semibold">Your Annual Savings</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-white/30">
                    <span className="text-sm text-white/90">Cash Flow Freed Up</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-white">₹</span>
                      <AnimatedCounter end={totalAnnualSavings / 100000} duration={1000} decimals={2} className="text-lg text-white font-semibold" />
                      <span className="text-sm text-white/80">L</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/30">
                    <span className="text-sm text-white/90">Minus AutoTrends Cost</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-white">-₹</span>
                      <AnimatedCounter end={(saasAnnual + totalFintechFees) / 100000} duration={1000} decimals={2} className="text-lg text-white font-semibold" />
                      <span className="text-sm text-white/80">L</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-white/15 backdrop-blur-md rounded-xl px-4 -mx-2 border border-white/30">
                    <span className="text-white font-semibold">Net Annual Savings</span>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-white text-xl">₹</span>
                      <AnimatedCounter end={netAnnualSavings / 100000} duration={1500} decimals={2} className="text-3xl text-white font-bold" />
                      <span className="text-white text-xl">L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Badge */}
            <div className="relative rounded-2xl p-8 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] border border-white/20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1 rounded-full mb-4">
                  <Target className="w-3 h-3 text-gray-900" />
                  <span className="text-xs font-semibold text-gray-900">YOUR ROI</span>
                </div>
                <div className="mb-4">
                  <div className="flex items-baseline justify-center space-x-2">
                    <AnimatedCounter end={Number(roi)} duration={2000} className="text-5xl sm:text-6xl text-white font-bold" />
                    <span className="text-4xl text-white font-bold">%</span>
                  </div>
                </div>
                <p className="text-white/90 text-sm sm:text-base">
                  AutoTrends pays for itself <strong className="text-yellow-400">{(Number(roi) / 100).toFixed(1)}x over</strong> in year one
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onRequestDemo}
              className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#0066CC] to-[#003D7A] hover:from-[#0052A3] hover:to-[#002855] transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center space-x-2 group card-3d border border-white/20"
            >
              <span className="text-white font-semibold">See This ROI in Action</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-center text-gray-600">
              Book a demo to see your exact numbers with our team
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-600">
            * Calculations based on industry averages. Actual savings vary by dealership volume, loan mix, and insurance penetration. 
            All fintech fees are only charged when value is delivered (no upfront cost).
          </p>
        </div>
      </div>
    </section>
  );
}