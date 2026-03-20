import { Building2, Database, TrendingUp } from 'lucide-react';

export function TrustStrip() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 sm:px-12 py-6 shadow-lg relative overflow-hidden">
          {/* Subtle shimmer effect */}
          <div className="absolute inset-0 animate-shimmer opacity-30"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center sm:text-left relative z-10">
            <div className="flex items-center space-x-3">
              <Building2 className="w-5 h-5 text-[#0066CC]" />
              <p className="text-gray-600">
                <span className="text-[#0066CC] font-semibold">Used by 20+ Dealerships</span>
              </p>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-gray-200/50"></div>
            
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-[#0066CC]" />
              <p className="text-gray-600">
                <span className="text-[#0066CC] font-semibold">Scaling to 100 Dealers / 500 Rooftops</span>
              </p>
            </div>
            
            
            <div className="hidden sm:block w-px h-8 bg-gray-200/50"></div>

            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5 text-[#0066CC]" />
              <p className="text-gray-600">
                <span className="text-[#0066CC] font-semibold">Powering Real-time Data</span>
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
}