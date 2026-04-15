import { Clock, TrendingUp, Users, Shield, Eye } from 'lucide-react';

const outcomes = [
  {
    icon: Clock,
    title: 'Reduce inventory ageing',
    value: '< 30 days',
    color: 'blue'
  },
  {
    icon: TrendingUp,
    title: 'Faster payout realization',
    value: '3x speed',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Higher lead conversion',
    value: '+25%',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Zero payout leakage',
    value: '100%',
    color: 'orange'
  },
  {
    icon: Eye,
    title: 'Multi-rooftop visibility',
    value: 'Real-time',
    color: 'indigo'
  }
];

const colorMap: Record<string, { gradient: string; shadow: string; text: string; iconColor: string; border: string }> = {
  blue: { gradient: 'from-blue-500/20 to-cyan-500/20', shadow: 'shadow-cyan-500/10', text: 'text-[#0066CC]', iconColor: 'text-cyan-500', border: 'border-cyan-500/30' },
  green: { gradient: 'from-emerald-500/20 to-green-500/20', shadow: 'shadow-emerald-500/10', text: 'text-green-600', iconColor: 'text-emerald-500', border: 'border-emerald-500/30' },
  purple: { gradient: 'from-purple-500/20 to-violet-500/20', shadow: 'shadow-purple-500/10', text: 'text-purple-600', iconColor: 'text-purple-500', border: 'border-purple-500/30' },
  orange: { gradient: 'from-amber-500/20 to-orange-500/20', shadow: 'shadow-amber-500/10', text: 'text-orange-600', iconColor: 'text-amber-500', border: 'border-amber-500/30' },
  indigo: { gradient: 'from-indigo-500/20 to-blue-500/20', shadow: 'shadow-indigo-500/10', text: 'text-indigo-600', iconColor: 'text-indigo-500', border: 'border-indigo-500/30' }
};

export function Outcomes() {
  return (
    <section id="outcomes" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            Real Impact on Your Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Measurable outcomes that transform dealer operations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;
            const colors = colorMap[outcome.color];
            
            return (
              <div
                key={index}
                className="glass-card card-3d rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border ${colors.border} flex items-center justify-center mx-auto mb-4 shadow-md ${colors.shadow}`}>
                  <Icon className={`w-7 h-7 ${colors.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-[#0066CC]">{outcome.title}</h3>
                <p className={`text-xl ${colors.text}`}>{outcome.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}