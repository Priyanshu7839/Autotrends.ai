const trendingInsights = [
  {
    id: 1,
    label: 'Pricing Trend',
    title: 'Midsize Sedans Down 8%',
    metric: '-$2,400 avg',
    color: 'text-red-600',
  },
  {
    id: 2,
    label: 'Demand Shift',
    title: 'Hybrid SUVs Surge',
    metric: '+34% inquiries',
    color: 'text-green-600',
  },
  {
    id: 3,
    label: 'New Launch',
    title: 'Rivian R2 Pre-Orders Open',
    metric: '15k+ in 48hrs',
    color: 'text-[#0b85ff]',
  },
  {
    id: 4,
    label: 'Market Alert',
    title: 'Inventory Levels Rising',
    metric: '+12% vs Q1',
    color: 'text-orange-600',
  },
  {
    id: 5,
    label: 'Finance',
    title: 'APR Rates Stabilizing',
    metric: '5.9% avg',
    color: 'text-blue-600',
  },
  {
    id: 6,
    label: 'Trade-In',
    title: 'Truck Values Hold Strong',
    metric: '92% retention',
    color: 'text-green-600',
  },
];

export function TrendingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-xl text-gray-900 mb-6">Dealer Insights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {trendingInsights.map((insight) => (
          <div
            key={insight.id}
            className="p-5 bg-white border border-gray-200 rounded-xl hover:border-[#0b85ff] hover:shadow-sm transition-all cursor-pointer group"
          >
            <div className="text-xs text-gray-500 mb-2">{insight.label}</div>
            <h3 className="text-sm text-gray-900 mb-3 leading-tight">
              {insight.title}
            </h3>
            <div className={`text-base ${insight.color}`}>
              {insight.metric}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
