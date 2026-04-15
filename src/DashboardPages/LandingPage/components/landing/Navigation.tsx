import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import { TrendingUp } from 'lucide-react';
import { LogoSvg } from '../../../../assets/Images/SVG';

interface NavigationProps {
  onRequestDemo: () => void;
}

export function Navigation({ onRequestDemo }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 ">
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
             <LogoSvg/>
            </div> */}
            <div className='flex items-center gap-[.5rem]'>
              {/* <h1 className="text-lg tracking-tight text-[#0066CC]">AutoTrends.ai</h1> */}
              <LogoSvg/>
              <p className="text-xs text-gray-600">Powered for Dealers</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#product" className="text-gray-700 hover:text-[#0066CC] transition-colors">
              Product
            </a>
            <a href="#instant-payouts" className="text-gray-700 hover:text-[#0066CC] transition-colors">
              Instant Payouts
            </a>
            <a href="#dan" className="text-gray-700 hover:text-[#0066CC] transition-colors">
              DAN (AI)
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#0066CC] transition-colors">
              Pricing
            </a>
            <Link 
              to="/Dealers/login" 
              className="bg-white/15 backdrop-blur-md border border-white/30 text-[#0066CC] px-6 py-1.5 rounded-[8px] hover:bg-white/25 transition-all shadow-sm"
            >
              Dealer Login
            </Link>
            <button 
              onClick={onRequestDemo}
              className="btn-primary px-6 py-1.5 rounded-[8px] shadow-sm"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#0066CC]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0066CC]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-gray-200/50">
            <a 
              href="#product" 
              className="block px-4 py-2 text-gray-700 hover:text-[#0066CC] hover:bg-white/50 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Product
            </a>
            <a 
              href="#instant-payouts" 
              className="block px-4 py-2 text-gray-700 hover:text-[#0066CC] hover:bg-white/50 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Instant Payouts
            </a>
            <a 
              href="#dan" 
              className="block px-4 py-2 text-gray-700 hover:text-[#0066CC] hover:bg-white/50 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              DAN (AI)
            </a>
            <a 
              href="#pricing" 
              className="block px-4 py-2 text-gray-700 hover:text-[#0066CC] hover:bg-white/50 rounded-xl transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <div className="space-y-2 pt-2">
              <Link 
                to="/login" 
                className="bg-white/15 backdrop-blur-md border border-white/30 text-[#0066CC] block text-center px-6 py-1.5 rounded-xl hover:bg-white/25 transition-all shadow-lg"
              >
                Dealer Login
              </Link>
              <button 
                onClick={() => {
                  onRequestDemo();
                  setIsOpen(false);
                }}
                className="btn-primary w-full px-6 py-2.5 rounded-xl shadow-lg"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}