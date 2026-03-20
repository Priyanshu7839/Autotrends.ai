import { Building2, Users, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Dual Persona Support',
    description: 'Seamlessly switch between Dealer and OEM modes for tailored insights',
  },
  {
    icon: Zap,
    title: 'One-Page Intelligence',
    description: 'Export-ready reports designed for quick decision-making',
  },
  {
    icon: Users,
    title: 'White-Label Ready',
    description: 'Dynamic branding adapts to OEM partners automatically',
  },
  {
    icon: Shield,
    title: 'Enterprise Grade',
    description: 'Confidential reporting with institutional-quality design',
  },
];

export function FeatureHighlight() {
  return (
    <div className="mt-24 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl mb-3 text-black font-semibold">
          Unified Intelligence Layer for Dealers & OEMs
        </h2>
        <p className="text-[#403F3F] max-w-2xl mx-auto">
          A premium report generation platform powering operational and strategic decisions 
          across the automotive ecosystem
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="w-14 h-14 rounded-xl bg-[#0285FF]/10 flex items-center justify-center mx-auto mb-4">
              <feature.icon className="w-7 h-7 text-[#0285FF]" />
            </div>
            <h3 className="text-lg mb-2 text-black font-medium">{feature.title}</h3>
            <p className="text-sm text-[#403F3F] leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
