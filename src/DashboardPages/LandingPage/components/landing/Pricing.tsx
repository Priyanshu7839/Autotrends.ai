import { Check, Sparkles, Zap, Building2, TrendingUp, Users, BarChart3, Smartphone, Shield, CreditCard, ChevronRight, MonitorCog,BanknoteArrowUp,Handshake } from 'lucide-react';

interface PricingProps {
  onRequestDemo: () => void;
}

const BASE_PLANS = [
  {
    name: 'Starter',
    price: '9,999',
    period: 'per rooftop / month',
    description: 'For single-location dealerships',
    icon: MonitorCog,
    color: 'blue',
    popular: false,
    features: [
      'Market analytics (India / State / RTO)',
      'Inventory upload & ageing',
      'Basic lead dashboard',
      'BB&D stock visibility (read-only)',
      'Reports & exports',
      'Email + WhatsApp support'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Growth',
    price: '24,999',
    period: 'per rooftop / month',
    description: 'For serious dealerships',
    icon: BanknoteArrowUp,
    color: 'blue',
    popular: true,
    features: [
      'Everything in Starter',
      'Full BB&D stock tracking',
      'Lead management (Meta + WhatsApp)',
      'WhatsApp automation',
      'Team roles (Manager / Sales Manager)',
      'Performance analytics',
      'Priority support'
    ],
    cta: 'Request Demo'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '₹50k–₹1L+ per rooftop / month',
    description: 'For dealer groups',
    icon: Handshake ,
    color: 'blue',
    popular: false,
    features: [
      'Everything in Growth',
      'Multi-rooftop dashboard',
      'Central reporting',
      'Custom analytics',
      'API access',
      'Dedicated account manager',
      'Onboarding + training'
    ],
    cta: 'Contact Sales'
  }
];

const ADD_ON_MODULES = [
  {
    name: 'Workforce & Attendance',
    price: '₹2,999 – ₹4,999',
    period: 'per rooftop / month',
    icon: Users,
    features: [
      'Attendance (OTP + GPS)',
      'Field staff tracking',
      'TA/DA automation',
      'Incentive computation'
    ]
  },
  {
    name: 'Advanced Analytics + DAN AI',
    price: '₹4,999 – ₹9,999',
    period: 'per rooftop / month',
    icon: BarChart3,
    features: [
      'Predictive inventory risk',
      'Payout delay detection',
      'Purchase recommendations',
      'Incentive optimization'
    ]
  },
  {
    name: 'Meta Ads + Social Lead Engine',
    price: '₹2,999',
    period: 'per rooftop / month',
    icon: Smartphone,
    features: [
      'Meta lead sync',
      'Campaign performance',
      'Cost vs conversion analytics',
      'Bundled free with Growth plan'
    ]
  }
];

const FINTECH_MODULES = [
  {
    name: 'Instant Insurance Payout',
    icon: Shield,
    tagline: 'Eliminate 30–90 day delays',
    pricing: '1.0% – 1.5% of insurance premium',
    alt: '₹500–₹800 per policy',
    description: 'AutoTrends fronts dealer commission. Insurance company settles later.',
    color: 'green'
  },
  {
    name: 'Instant Finance Payout',
    icon: CreditCard,
    tagline: 'Get paid instantly on loan bookings',
    pricing: '0.25% – 0.50% of loan value',
    alt: '10–15% of dealer commission',
    description: 'AutoTrends fronts bank/NBFC commission. Settles later with lender.',
    color: 'blue'
  }
];

export function Pricing({ onRequestDemo }: PricingProps) {
  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
   
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066CC]/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-400 px-3 py-1.5 rounded-full mb-6 shadow-lg shadow-yellow-400/50">
            <Sparkles className="w-3.5 h-3.5 text-gray-900" />
            <span className="text-xs font-semibold text-gray-900 tracking-wide">DAN ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
            Pricing Built for Dealerships
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Low friction to start. Per-rooftop pricing. Real value from payouts, not just dashboards.
          </p>
        </div>

        

        {/* Base SaaS Plans */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-24">
          {BASE_PLANS.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`glass-premium backdrop-blur-md rounded-3xl p-8 sm:p-10 relative card-3d hover:scale-[1.03] transition-all duration-500 group overflow ${
                  plan.popular ? 'ring-2 ring-[#0066CC] shadow-2xl shadow-[#0066CC]/40' : 'shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>
                 {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white px-6 py-2 rounded-full text-sm shadow-xl shadow-blue-500/50 ">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}
               
                

                <div className="mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0066CC]/20 to-[#0066CC]/20 backdrop-blur-sm border border-[#0066CC]/30 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/50 group-hover:shadow-blue-500/70 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#0066cc]" />
                  </div>

                 
                  <h3 className="text-2xl text-gray-900 mb-3 font-semibold">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-2">
                    {plan.price === 'Custom' ? (
                      <span className="text-5xl font-bold bg-[#0066CC] bg-clip-text text-transparent">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-2xl text-gray-600 font-semibold">₹</span>
                        <span className="text-5xl font-bold bg-[#0066CC]  bg-clip-text text-transparent">{plan.price}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{plan.period}</p>
                </div>

                <button
                  onClick={onRequestDemo}
                  className={`w-full py-4 rounded-xl mb-8 transition-all duration-300 font-semibold relative z-10 ${
                    plan.popular
                      ? 'btn-primary shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-[1.02]'
                      : 'glass-card-dark text-gray-900 hover:bg-white/70 shadow-lg hover:shadow-xl hover:scale-[1.02]'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4 relative z-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-700/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                        <Check className="w-3 h-3 text-emerald-500" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Fintech Layer - The Real Money */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-400/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-4 h-4 text-green-600" />
              <span className="text-xs font-semibold text-green-600 tracking-wide">FINTECH LAYER</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl gradient-text mb-4">
              The Fintech Layer — Where Real Value Lives
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AutoTrends charges dealerships a simple SaaS fee — and makes real money by eliminating payout delays.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {FINTECH_MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.name}
                  className="glass-premium rounded-3xl p-8 sm:p-10 card-3d shadow-2xl hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] hover:scale-[1.03] transition-all duration-500 border border-white/20 group overflow-hidden relative"
                >
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    module.color === 'green' 
                      ? 'from-green-400/5 to-green-600/5' 
                      : 'from-[#0066CC]/5 to-[#003D7A]/5'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                      module.color === 'green' 
                        ? 'bg-gradient-to-br from-amber-400/20 to-orange-400/20 shadow-md shadow-amber-500/10' 
                        : 'bg-gradient-to-br from-emerald-400/20 to-green-400/20 shadow-md shadow-emerald-500/10'
                    }`}>
                      <Icon className={`w-8 h-8 ${module.color === 'green' ? 'text-amber-400' : 'text-emerald-400'}`} />
                    </div>

                    <h4 className="text-2xl sm:text-3xl text-gray-900 mb-3 font-bold">{module.name}</h4>
                    <p className={`text-sm mb-6 font-semibold px-3 py-1.5 rounded-lg inline-block ${
                      module.color === 'green' 
                        ? 'text-amber-400 bg-amber-50 border border-amber-200' 
                        : 'text-emerald-400 bg-emerald-50 border border-emerald-200'
                    }`}>
                      {module.tagline}
                    </p>

                    <div className="mb-6 pb-6 border-b border-white/30">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#0066CC] to-[#003D7A] bg-clip-text text-transparent mb-2">{module.pricing}</div>
                      <div className="text-sm text-gray-600 font-medium">or {module.alt}</div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Prop */}
          <div className="mt-10 bg-gradient-to-br from-[#0066CC]/10 via-[#0052A3]/10 to-[#003D7A]/10 border-2 border-[#0066CC]/40 rounded-2xl p-8 text-center shadow-xl backdrop-blur-md hover:shadow-2xl hover:border-[#0066CC]/60 transition-all duration-500">
            <p className="text-base text-gray-600 leading-relaxed capitalize">
              <span className="text-[#0066CC] font-bold text-lg ">Dealers happily pay this</span> to eliminate 30–90 day delays. 
              <span className="text-gray-600"> No friction. Pure value.</span>
            </p>
          </div>
        </div>

        {/* Add-on Modules */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-400/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-semibold text-purple-600 tracking-wide">ADD-ON MODULES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl gradient-text mb-4">
              Optional Add-on Modules
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto capitalize">
              Extend AutoTrends with specialized modules for workforce, analytics, and lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {ADD_ON_MODULES.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.name}
                  className="glass-card-dark rounded-2xl p-8 hover:scale-[1.05] transition-all duration-500 card-3d shadow-xl hover:shadow-2xl group overflow-hidden relative"
                >
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/5 to-[#003D7A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] flex items-center justify-center mb-6 shadow-xl shadow-blue-500/50 group-hover:shadow-blue-500/70 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                      <Icon className={`w-7 h-7 text-white`} />
                    </div>
                    
                    <h4 className="text-lg text-gray-900 mb-3 font-semibold">{module.name}</h4>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#0066CC] to-[#003D7A] bg-clip-text text-transparent mb-2">{module.price}</div>
                    <p className="text-xs text-gray-600 mb-6 font-medium">{module.period}</p>

                    <div className="space-y-3">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 group/item">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                            <Check className="w-2.5 h-2.5 text-emerald-500" strokeWidth={2} />
                          </div>
                          <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-World Example */}
        <div className="glass-premium rounded-3xl p-10 sm:p-12 mb-12 card-3d shadow-2xl border border-white/20 hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.35)] transition-all duration-500 group overflow-hidden relative">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex items-start space-x-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-green-500/50 group-hover:shadow-green-500/70 group-hover:scale-110 transition-all duration-500">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl text-gray-900 mb-3 font-bold">What a Typical Dealer Pays</h4>
                <p className="text-gray-600 font-medium">Mid-size Kia dealer with 3 rooftops</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-white/30 hover:border-white/50 transition-colors">
                  <span className="text-gray-600 font-medium">Growth Plan (3 rooftops)</span>
                  <span className="text-gray-900 font-bold">₹75,000/mo</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/30 hover:border-white/50 transition-colors">
                  <span className="text-gray-600 font-medium">Workforce add-on (3 rooftops)</span>
                  <span className="text-gray-900 font-bold">₹12,000/mo</span>
                </div>
                <div className="flex justify-between py-3 border-b border-white/30 hover:border-white/50 transition-colors">
                  <span className="text-gray-600 font-medium">Insurance payout fees</span>
                  <span className="text-gray-900 font-bold">~₹2-4L/mo</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600 font-medium">Finance payout fees</span>
                  <span className="text-gray-900 font-bold">~₹1-2L/mo</span>
                </div>
              </div>

              <div className="flex items-center justify-center glass-card-dark rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-3 font-medium">Total annual value</div>
                  <div className="text-4xl sm:text-5xl gradient-text font-bold mb-3">₹1.5–3 Cr</div>
                  <div className="text-sm text-gray-600 font-medium">per dealer group</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0066CC]/10 via-[#0052A3]/10 to-[#003D7A]/10 border-2 border-[#0066CC]/40 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-green-500/50">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900 font-bold">Why this works:</strong> SaaS is sticky, fintech scales with volume, margins expand as payouts scale. 
                  Easy to understand, easier to sell.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Commercial Safeguards */}
        <div className="glass-card-dark rounded-3xl p-8 sm:p-10 mb-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/10">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
              <Shield className="w-6 h-6 text-cyan-300" strokeWidth={2} />
            </div>
            <h4 className="text-xl text-gray-900 font-bold">Commercial Safeguards</h4>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3 group/item">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={2} />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed font-medium">Annual billing discount: 10–15%</span>
            </div>
            <div className="flex items-start space-x-3 group/item">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={2} />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed font-medium">No lock-in for SaaS</span>
            </div>
            <div className="flex items-start space-x-3 group/item">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={2} />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed font-medium">Fintech modules opt-in</span>
            </div>
            <div className="flex items-start space-x-3 group/item">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={2} />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed font-medium">Payout fees only when value is delivered</span>
            </div>
            <div className="flex items-start space-x-3 group/item">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={2} />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed font-medium">Per-rooftop billing scales naturally</span>
            </div>
            <div className="flex items-start space-x-3 group/item">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/20 to-green-600/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-emerald-500/10 group-hover/item:scale-110 transition-all duration-300">
                <Check className="w-3 h-3 text-emerald-500" strokeWidth={2} />
              </div>
              <span className="text-sm text-gray-600 leading-relaxed font-medium">Transparent pricing, no hidden fees</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center glass-premium rounded-3xl p-10 sm:p-14 card-3d shadow-2xl border border-white/20 hover:shadow-[0_25px_70px_-15px_rgba(0,102,204,0.4)] transition-all duration-500 group overflow-hidden relative">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/5 via-[#0052A3]/5 to-[#003D7A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl gradient-text mb-6 font-bold">
              Ready to transform your dealership?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              See AutoTrends in action. Request a personalized demo and discover how we eliminate payout delays.
            </p>
            <button
              onClick={onRequestDemo}
              className="btn-primary px-10 py-5 rounded-xl inline-flex items-center space-x-3 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-[1.05] transition-all duration-500 text-lg group/btn"
            >
              <span>Request Dealer Demo</span>
              <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
            <p className="text-sm text-gray-600 mt-6 font-medium">
              No credit card required • 30-minute personalized demo • See your exact ROI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}