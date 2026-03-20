import { ArrowRight, MessageCircle } from 'lucide-react';

export function FooterCTA() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-premium card-3d rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-lg">
          {/* Decorative Elements with Enhanced Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#0066CC]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0052A3]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 gradient-text max-w-3xl mx-auto capitalize">
              See your dealership's numbers inside AutoTrends.
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto capitalize">
              Join India's most advanced dealer platform and transform how you run your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="btn-primary px-8 py-4 rounded-xl inline-flex items-center justify-center space-x-2 shadow-lg animate-pulse-glow">
                <span>Request Dealer Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/15 backdrop-blur-md border border-white/30 text-[#0066CC] px-8 py-4 rounded-xl hover:bg-white/25 transition-all inline-flex items-center justify-center space-x-2 shadow-lg">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Inquiry</span>
              </button>
            </div>

            {/* Footer Links */}
            {/* <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 border-t border-gray-200/50 pt-8">
              <a href="#privacy" className="hover:text-[#0066CC] transition-colors">Privacy</a>
              <span className="text-gray-300/50">•</span>
              <a href="#terms" className="hover:text-[#0066CC] transition-colors">Terms</a>
              <span className="text-gray-300/50">•</span>
              <a href="#contact" className="hover:text-[#0066CC] transition-colors">Contact</a>
            </div>

            <p className="text-sm text-gray-600 mt-6">
              © 2025 AutoTrends.ai - Built for Indian Automotive Dealers
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}