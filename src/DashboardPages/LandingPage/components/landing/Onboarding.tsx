import { FileText, Upload, MonitorCheck, Zap, Bot, Check } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Dealer Code Issued',
    description: 'Receive your unique identifier'
  },
  {
    icon: Upload,
    title: 'Data Upload / Sync',
    description: 'Connect your systems'
  },
  {
    icon: MonitorCheck,
    title: 'Dashboard Live',
    description: 'Access real-time insights'
  },
  {
    icon: Zap,
    title: 'Payout Engine Enabled',
    description: 'Start instant settlements'
  },
  {
    icon: Bot,
    title: 'DAN Activated',
    description: 'AI intelligence running'
  }
];

export function Onboarding() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            Simple Dealer Onboarding
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto capitalize">
            From signup to full activation in days, not weeks
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block glass-card rounded-3xl p-12">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0066CC]/20 via-[#0066CC] to-[#0066CC]/20"></div>
            
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center mx-auto relative z-10 shadow-md shadow-cyan-500/10">
                        <Icon className="w-6 h-6 text-cyan-500" strokeWidth={2} />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute top-8 left-[calc(50%+2rem)] w-full h-0.5"></div>
                      )}
                    </div>
                    <h3 className="mb-2 text-[#0066CC]">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="glass-card rounded-2xl p-6 flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                    <Icon className="w-6 h-6 text-cyan-500" strokeWidth={2} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-14 left-6 w-0.5 h-10 bg-[#0066CC]/30"></div>
                  )}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-[#0066CC]">{step.title}</h3>
                    {index < 3 && <Check className="w-4 h-4 text-green-600" />}
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}