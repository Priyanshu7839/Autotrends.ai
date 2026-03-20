import { Sidebar } from "../DashboardComponents";
// import DANIMG from "../assets/Images/DANImage.png";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Outlet } from "react-router";
import { DAN } from "../DashboardPages/LandingPage/components/ui/DAN";
import { AnimatedGradient } from "../DashboardPages/LandingPage/components/background/AnimatedGradient";
import { FloatingParticles } from "../DashboardPages/LandingPage/components/background/FloatingParticles";

const DashboardLayout = () => {
  const [DanOpen, setDanOpen] = useState(false);
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
    <div className="flex flex-row gap-[.5rem] pl-[230px] ">
       <AnimatedGradient />
            <FloatingParticles />
       
      <Sidebar />
      <div>
        <Outlet />
      </div>

       <DAN 
              state={danState} 
              isExpanded={isDanExpanded}
              onToggleExpand={handleDANToggle}
              systemAlert={danSystemAlert} className="bg-[rgba(0,102,204,0.35)]"
            />
   
    </div>
  );
};

export default DashboardLayout;
