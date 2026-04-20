import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}

export function KPICard({ title, value, icon: Icon, color = "#0285FF" }: KPICardProps) {
  return (
    <Card className="p-5  bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0285FF]/30 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0285FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-black">{title}</p>
          <p className="text-2xl text-gray-900" style={{ fontWeight: 600 }}>
            {value}
          </p>
        </div>
        <div
          className="p-2.5 rounded-lg shadow-sm"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
    </Card>
  );
}