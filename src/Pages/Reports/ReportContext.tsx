import { createContext, useContext, useState, ReactNode } from 'react';

export type ReportMode = 'dealer' | 'oem';

export type ReportType = 
  | 'market-share'
  | 'retail-growth'
  | 'fuel-mix'
  | 'brand-competition'
  | 'rto-intelligence'
  | 'dealer-benchmark'
  | 'bbnd-inventory'
  | 'finance-insurance';

export interface ReportFilters {
  country?: string;
  state?: string;
  city?: string;
  rto?: string;
  primaryBrand?: string;
  competitorBrands?: string[];
  category?: string;
  timeFrame?: string;
  compareWith?: string;
  dealerName?: string;
  dealerBranch?: string;
  dealerCode?: string;
  dataOptions: {
    marketShare: boolean;
    retailVolume: boolean;
    growth: boolean;
    bbndInventory: boolean;
    inventoryAging: boolean;
    financePenetration: boolean;
    insurancePenetration: boolean;
    fuelMix: boolean;
    segmentSplit: boolean;
    rtoRanking: boolean;
    trendline: boolean;
  };
}

interface ReportContextType {
  mode: ReportMode;
  setMode: (mode: ReportMode) => void;
  reportType: ReportType | null;
  setReportType: (type: ReportType | null) => void;
  filters: ReportFilters;
  setFilters: (filters: ReportFilters) => void;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export function ReportProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ReportMode>('dealer');
  const [reportType, setReportType] = useState<ReportType | null>(null);
  const [filters, setFilters] = useState<ReportFilters>({
    dataOptions: {
      marketShare: true,
      retailVolume: true,
      growth: true,
      bbndInventory: false,
      inventoryAging: false,
      financePenetration: false,
      insurancePenetration: false,
      fuelMix: false,
      segmentSplit: false,
      rtoRanking: false,
      trendline: true,
    },
  });

  return (
    <ReportContext.Provider value={{ mode, setMode, reportType, setReportType, filters, setFilters }}>
      {children}
    </ReportContext.Provider>
  );
}

export function useReport() {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReport must be used within a ReportProvider');
  }
  return context;
}
