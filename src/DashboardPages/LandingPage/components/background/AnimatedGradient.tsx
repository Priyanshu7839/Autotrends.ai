export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-gradient-radial from-[#0285FF]/20 via-[#0285FF]/5 to-transparent rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-purple-500/5 to-transparent rounded-full blur-3xl animate-float-slower"></div>
      <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-cyan-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl animate-float-slowest"></div>
      
      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyLDEzMywyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
      
      {/* Gradient Beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0285FF]/20 to-transparent animate-beam"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-beam-slow"></div>
    </div>
  );
}
