import { Navigation } from '../components/landing/Navigation';
import { Hero } from '../components/landing/Hero';
import { MarketIntelligence } from '../components/landing/MarketIntelligence';
import { TrustStrip } from '../components/landing/TrustStrip';
import { InstantPayoutEngine } from '../components/landing/InstantPayoutEngine';
import { BBNDStockTracking } from '../components/landing/BBNDStockTracking';
import { LeadManagement } from '../components/landing/LeadManagement';
import { CoreValues } from '../components/landing/CoreValues';
import { DANUpgraded } from '../components/landing/DANUpgraded';
import { Outcomes } from '../components/landing/Outcomes';
import { Testimonials } from '../components/landing/Testimonials';
import { Pricing } from '../components/landing/Pricing';
import { ROICalculator } from '../components/landing/ROICalculator';
import { SecurityStrip } from '../components/landing/SecurityStrip';
import { Onboarding } from '../components/landing/Onboarding';
import { FooterCTA } from '../components/landing/FooterCTA';
import { AnimatedGradient } from '../components/background/AnimatedGradient';
import { FloatingParticles } from '../components/background/FloatingParticles';
import { DAN } from '../components/ui/DAN';
import { useState } from 'react';
import { DemoRequestFlow } from '../components/DemoRequestFlow';
import Footer from '../../../Components/Footer/Footer'

export default function Landing() {
  const [isDemoFlowOpen, setIsDemoFlowOpen] = useState(false);
  const [danState, setDanState] = useState<'idle' | 'listening' | 'thinking' | 'alert' | 'critical'>('idle');
  const [isDanExpanded, setIsDanExpanded] = useState(false);
  const [danSystemAlert, setDanSystemAlert] = useState<{
    type: 'warning' | 'critical' | 'recommendation';
    message: string;
    action?: string;
  } | null>(null);

  const handleDANToggle = () => {
    setIsDanExpanded(!isDanExpanded);
    if (!isDanExpanded) {
      setDanState('listening');
      setTimeout(() => setDanState('idle'), 2000);
    }
  };

  // Simulate system intelligence alerts
  useState(() => {
    // Example: Show alert after 10 seconds
    const alertTimeout = setTimeout(() => {
      setDanState('alert');
      setDanSystemAlert({
        type: 'warning',
        message: 'Inventory aging detected: 3 sedan models over 75 days',
        action: 'View recommendations'
      });
    }, 10000);

    return () => clearTimeout(alertTimeout);
  });

  return (
    <div className="min-h-screen relative pb-20 lg:pb-0">
      {/* Animated Background Effects */}
      <AnimatedGradient />
      <FloatingParticles />
      
      {/* Floating DAN Assistant - All 5 Layers */}
      <DAN 
        state={danState} 
        isExpanded={isDanExpanded}
        onToggleExpand={handleDANToggle}
        systemAlert={danSystemAlert} className="bg-[rgba(0,102,204,0.35)]"
      />
      
      <Navigation onRequestDemo={() => setIsDemoFlowOpen(true)} />
      <Hero />
      <MarketIntelligence />
      <TrustStrip />
      <InstantPayoutEngine />
      <BBNDStockTracking />
      <LeadManagement />
      <CoreValues />
      <DANUpgraded />
      <Outcomes />
      {/* <Testimonials /> */}
      <Pricing onRequestDemo={() => setIsDemoFlowOpen(true)} />
      <ROICalculator onRequestDemo={() => setIsDemoFlowOpen(true)} />
      <SecurityStrip />
      <Onboarding />
      <FooterCTA />
      <Footer/>
      
      {/* Mobile Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 p-3 sm:p-4 glass-nav border-t safe-area-bottom">
        <button 
          className="btn-primary w-full px-6 py-3.5 rounded-xl shadow-lg animate-pulse-glow"
          onClick={() => setIsDemoFlowOpen(true)}
        >
          Request Demo
        </button>
      </div>

      <DemoRequestFlow isOpen={isDemoFlowOpen} onClose={() => setIsDemoFlowOpen(false)} />
    </div>
  );
}