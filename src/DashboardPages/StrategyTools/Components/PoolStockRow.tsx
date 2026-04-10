import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ChevronDown, ChevronRight, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { PoolStockRecord } from "../data/poolStockData";

interface PoolStockRowProps {
  record: PoolStockRecord;
}

export function PoolStockRow({ record }: PoolStockRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getMatchIcon = () => {
    switch (record.matchStatus) {
      case 'full':
        return <CheckCircle2 className="w-5 h-5 text-[#10B981]" />;
      case 'partial':
        return <AlertCircle className="w-5 h-5 text-[#F59E0B]" />;
      case 'missing':
        return <XCircle className="w-5 h-5 text-[#EF4444]" />;
    }
  };

  const getMatchBadge = () => {
    switch (record.matchStatus) {
      case 'full':
        return <Badge className="bg-[#10B981] text-white text-xs">Full Match</Badge>;
      case 'partial':
        return <Badge className="bg-[#F59E0B] text-white text-xs">Partial Match</Badge>;
      case 'missing':
        return <Badge className="bg-[#EF4444] text-white text-xs">Missing</Badge>;
    }
  };

  const getBorderColor = () => {
    switch (record.matchStatus) {
      case 'full':
        return 'border-l-[#10B981]';
      case 'partial':
        return 'border-l-[#F59E0B]';
      case 'missing':
        return 'border-l-[#EF4444]';
    }
  };

  return (
    <Card 
      className={`bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all cursor-pointer border-l-4 ${getBorderColor()} hover:border-[#0285FF]/20`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-4">
        <div className="flex items-center gap-4">
          {/* Match Indicator */}
          <div className="flex items-center gap-2 w-32">
            <div className="bg-white rounded-full p-1 shadow-sm">
              {getMatchIcon()}
            </div>
            {getMatchBadge()}
          </div>

          {/* ASM Name */}
          <div className="flex-1 min-w-[120px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>ASM Name</div>
            <div className="text-sm text-gray-900">{record.asmName}</div>
          </div>

          {/* Model Code */}
          <div className="flex-1 min-w-[100px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>Model Code</div>
            <div className="text-sm text-gray-900">{record.modelCode}</div>
          </div>

          {/* Trim */}
          <div className="flex-1 min-w-[120px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>Trim</div>
            <div className="text-sm text-gray-900">{record.trim}</div>
          </div>

          {/* Exterior Color */}
          <div className="flex-1 min-w-[120px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>Exterior Color</div>
            <div className="text-sm text-gray-900">{record.exteriorColor}</div>
          </div>

          {/* Interior Color */}
          <div className="flex-1 min-w-[100px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>Interior</div>
            <div className="text-sm text-gray-900">{record.interiorColor}</div>
          </div>

          {/* Pool Stock */}
          <div className="flex-1 min-w-[80px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>Pool Stock</div>
            <div className="text-sm text-gray-900" style={{ fontWeight: 600 }}>{record.allIndiaPoolStock}</div>
          </div>

          {/* VNA Number */}
          <div className="flex-1 min-w-[100px]">
            <div className="text-xs text-[#0285FF] mb-0.5" style={{ fontWeight: 500 }}>VNA Number</div>
            <div className="text-sm text-gray-900">{record.vnaNumber}</div>
          </div>

          {/* Expand Icon */}
          <div className="bg-[#0285FF]/10 p-1.5 rounded-lg">
            {isExpanded ? (
              <ChevronDown className="w-5 h-5 text-[#0285FF]" />
            ) : (
              <ChevronRight className="w-5 h-5 text-[#0285FF]" />
            )}
          </div>
        </div>

        {/* Expanded View */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-6">
              {/* OEM Data */}
              <div className="space-y-3">
                <h4 className="text-sm text-gray-700" style={{ fontWeight: 600 }}>
                  OEM Data
                </h4>
                {record.oemData ? (
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Trim:</span>
                      <span className="text-gray-900">{record.oemData.trim}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Exterior Color:</span>
                      <span className="text-gray-900">{record.oemData.exteriorColor}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Interior Color:</span>
                      <span className="text-gray-900">{record.oemData.interiorColor}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Stock:</span>
                      <span className="text-gray-900">{record.oemData.stock}</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 rounded-lg p-3 text-sm text-red-700">
                    No OEM data available
                  </div>
                )}
              </div>

              {/* Dealer Data */}
              <div className="space-y-3">
                <h4 className="text-sm text-gray-700" style={{ fontWeight: 600 }}>
                  Dealer Data
                </h4>
                {record.dealerData ? (
                  <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Trim:</span>
                      <span className={`text-gray-900 ${record.oemData?.trim !== record.dealerData.trim ? 'bg-yellow-100 px-1 rounded' : ''}`}>
                        {record.dealerData.trim}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Exterior Color:</span>
                      <span className={`text-gray-900 ${record.oemData?.exteriorColor !== record.dealerData.exteriorColor ? 'bg-yellow-100 px-1 rounded' : ''}`}>
                        {record.dealerData.exteriorColor}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Interior Color:</span>
                      <span className={`text-gray-900 ${record.oemData?.interiorColor !== record.dealerData.interiorColor ? 'bg-yellow-100 px-1 rounded' : ''}`}>
                        {record.dealerData.interiorColor}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Stock:</span>
                      <span className={`text-gray-900 ${record.oemData?.stock !== record.dealerData.stock ? 'bg-yellow-100 px-1 rounded' : ''}`}>
                        {record.dealerData.stock}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 rounded-lg p-3 text-sm text-red-700">
                    No dealer data available
                  </div>
                )}
              </div>
            </div>

            {/* Insights */}
            {record.insights && record.insights.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="text-sm text-blue-900 mb-2" style={{ fontWeight: 600 }}>
                  Insights
                </h4>
                <ul className="space-y-1">
                  {record.insights.map((insight, index) => (
                    <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}