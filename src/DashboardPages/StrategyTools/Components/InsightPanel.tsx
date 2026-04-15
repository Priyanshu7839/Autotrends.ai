import { Card } from "./ui/card";
import { TrendingUp, AlertTriangle, Target, MapPin } from "lucide-react";

export function InsightPanel() {
  const insights = [
    {
      icon: AlertTriangle,
      text: "12% stock not visible at dealer level",
      color: "#F59E0B"
    },
    {
      icon: Target,
      text: "Top mismatch in trims: XUV700 AX7",
      color: "#EF4444"
    },
    {
      icon: TrendingUp,
      text: "Color mismatch highest in white variants",
      color: "#F59E0B"
    },
    {
      icon: MapPin,
      text: "Delhi RTO showing highest discrepancy",
      color: "#EF4444"
    }
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-[#0285FF]/5 border border-[#0285FF]/20 shadow-lg sticky top-4">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#0285FF]/20">
        <div className="w-1 h-6 bg-[#0285FF] rounded-full"></div>
        <h3 className="text-lg text-gray-900">Pool Stock Insights</h3>
      </div>
      
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div 
              className="p-2 rounded-lg flex-shrink-0"
              style={{ backgroundColor: `${insight.color}15` }}
            >
              <insight.icon 
                className="w-4 h-4" 
                style={{ color: insight.color }}
              />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              {insight.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm text-gray-700 mb-3" style={{ fontWeight: 600 }}>
          Recommendations
        </h4>
        <ul className="space-y-2">
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-[#0285FF] mt-0.5">•</span>
            <span>Review XUV700 trim allocations</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-[#0285FF] mt-0.5">•</span>
            <span>Update dealer visibility for missing stock</span>
          </li>
          <li className="text-sm text-gray-600 flex items-start gap-2">
            <span className="text-[#0285FF] mt-0.5">•</span>
            <span>Sync color codes across systems</span>
          </li>
        </ul>
      </div>
    </Card>
  );
}