import { ReportMode, useReport } from '../ReportContext';

export function ModeSelector() {
  const { mode, setMode } = useReport();

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-sm text-[#403F3F]">Report Mode:</span>
      <div className="inline-flex rounded-lg bg-gray-100 p-1">
        <button
          onClick={() => setMode('dealer')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
            mode === 'dealer'
              ? 'bg-white text-black shadow-sm'
              : 'text-[#403F3F] hover:text-black'
          }`}
        >
          Dealer
        </button>
        <button
          onClick={() => setMode('oem')}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
            mode === 'oem'
              ? 'bg-white text-black shadow-sm'
              : 'text-[#403F3F] hover:text-black'
          }`}
        >
          OEM
        </button>
      </div>
    </div>
  );
}
