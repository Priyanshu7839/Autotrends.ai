import { BarChart3, Package, Users, Shield, CreditCard, Database } from 'lucide-react';

const values = [
  {
    icon: BarChart3,
    title: 'Market Analytics',
    description: 'India → State → RTO level insights',
    color: 'blue'
  },
  {
    icon: Package,
    title: 'Inventory & Ageing Intelligence',
    description: 'Real-time stock visibility and DOS tracking',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Lead & Conversion Pipeline',
    description: 'Track every lead from inquiry to delivery',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Insurance Payout Tracking',
    description: 'Monitor commission status in real-time',
    color: 'orange'
  },
  {
    icon: CreditCard,
    title: 'Finance Payout Tracking',
    description: 'Complete visibility on finance earnings',
    color: 'pink'
  },
  {
    icon: Database,
    title: 'Secure Data Sync',
    description: 'Vahan / CRM / Upload integration',
    color: 'indigo'
  }
];

const colorMap: Record<string, { gradient: string; shadow: string; iconColor: string; border: string }> = {
  blue: { gradient: 'from-blue-500/20 to-cyan-500/20', shadow: 'shadow-cyan-500/10', iconColor: 'text-cyan-500', border: 'border-cyan-500/30' },
  green: { gradient: 'from-emerald-500/20 to-green-500/20', shadow: 'shadow-emerald-500/10', iconColor: 'text-emerald-500', border: 'border-emerald-500/30' },
  purple: { gradient: 'from-purple-500/20 to-violet-500/20', shadow: 'shadow-purple-500/10', iconColor: 'text-purple-500', border: 'border-purple-500/30' },
  orange: { gradient: 'from-amber-500/20 to-orange-500/20', shadow: 'shadow-amber-500/10', iconColor: 'text-amber-500', border: 'border-amber-500/30' },
  pink: { gradient: 'from-pink-500/20 to-rose-500/20', shadow: 'shadow-pink-500/10', iconColor: 'text-pink-500', border: 'border-pink-500/30' },
  indigo: { gradient: 'from-indigo-500/20 to-blue-500/20', shadow: 'shadow-indigo-500/10', iconColor: 'text-indigo-500', border: 'border-indigo-500/30' }
};

export function CoreValues() {
  return (
    <section id="product" className="py-16 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 gradient-text">
            Everything You Need to Run Your Dealership
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto capitalize">
            A complete platform designed for the modern Indian automotive dealer
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colors = colorMap[value.color];
            
            return (
              <div
                key={index}
                className="glass-card card-3d rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.gradient} backdrop-blur-sm border ${colors.border} flex items-center justify-center mb-4 shadow-md ${colors.shadow}`}>
                  <Icon className={`w-7 h-7 ${colors.iconColor}`} strokeWidth={2} />
                </div>
                <h3 className="text-xl mb-2 text-[#0066CC]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}