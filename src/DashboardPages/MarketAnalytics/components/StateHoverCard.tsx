
interface StateHoverCardProps {
  stateName: string;
  totalSales: number;
  growth: number;
  topBrand: string;
  topRTO: string;
  x: number;
  y: number;
}

export function StateHoverCard({
  stateName,
  totalSales,
  growth,
  topBrand,
  topRTO,
  x,
  y,
}: StateHoverCardProps) {
  return (
    <div
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0, scale: 0.9 }}
      // transition={{ duration: 0.2 }}
      className="absolute pointer-events-none z-50"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -120%)",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-4 min-w-[240px]">
        <h3 className="font-semibold text-gray-900 mb-3">{stateName}</h3>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Sales</span>
            <span className="font-semibold text-gray-900">
              ₹{(totalSales / 100000).toFixed(1)}L
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Growth</span>
            <span
              className={`font-semibold ${
                growth >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {growth >= 0 ? "+" : ""}
              {growth}%
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Top Brand</span>
            <span className="font-semibold text-gray-900">{topBrand}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Top RTO</span>
            <span className="font-semibold text-gray-900">{topRTO}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
