import { useState, useEffect } from 'react';
import { X, TrendingDown, AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react';

type DANState = 'idle' | 'listening' | 'thinking' | 'alert' | 'critical';

interface DANProps {
  state?: DANState;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  systemAlert?: {
    type: 'warning' | 'critical' | 'recommendation';
    message: string;
    action?: string;
  } | null;
}

interface ActionChip {
  id: string;
  icon: React.ReactNode;
  label: string;
  category: 'inventory' | 'payout' | 'risk' | 'insight';
}

const ACTION_CHIPS: ActionChip[] = [
  {
    id: 'aging-inventory',
    icon: <Package className="w-4 h-4" />,
    label: 'Why is my inventory aging high?',
    category: 'inventory',
  },
  {
    id: 'optimize-payout',
    icon: <DollarSign className="w-4 h-4" />,
    label: 'Optimize insurance payout',
    category: 'payout',
  },
  {
    id: 'delay-purchases',
    icon: <TrendingDown className="w-4 h-4" />,
    label: 'Should I delay purchases?',
    category: 'risk',
  },
  {
    id: 'risk-forecast',
    icon: <AlertTriangle className="w-4 h-4" />,
    label: 'Show risk forecast',
    category: 'risk',
  },
  {
    id: 'market-trends',
    icon: <TrendingUp className="w-4 h-4" />,
    label: 'What are current market trends?',
    category: 'insight',
  },
];

export function DAN({ 
  state = 'idle', 
  isExpanded = false, 
  onToggleExpand,
  systemAlert 
}: DANProps) {
  const [isHeartbeat, setIsHeartbeat] = useState(false);
  const [showRipples, setShowRipples] = useState(false);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ from: 'user' | 'dan'; text: string }>>([
    { from: 'dan', text: 'Hello! I\'m DAN, your Dealership Navigator. How can I assist you today?' }
  ]);

  // Trigger heartbeat pulse every 6-8 seconds
  useEffect(() => {
    const triggerHeartbeat = () => {
      setIsHeartbeat(true);
      setTimeout(() => setIsHeartbeat(false), 800);
    };

    const initialDelay = Math.random() * 2000 + 1000;
    const initialTimeout = setTimeout(triggerHeartbeat, initialDelay);

    const interval = setInterval(() => {
      triggerHeartbeat();
    }, Math.random() * 2000 + 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // Show ripples when listening or thinking
  useEffect(() => {
    if (state === 'listening' || state === 'thinking') {
      setShowRipples(true);
    } else {
      setShowRipples(false);
    }
  }, [state]);

  // State-based styling
  const stateStyles = {
    idle: {
      glowClass: 'dan-glow-idle',
      pulseSpeed: 'dan-breathe',
      gradientClass: 'dan-radial-glow',
    },
    listening: {
      glowClass: 'dan-glow-listening',
      pulseSpeed: 'dan-breathe-fast',
      gradientClass: 'dan-radial-glow-listening',
    },
    thinking: {
      glowClass: 'dan-glow-thinking',
      pulseSpeed: 'dan-breathe-slow',
      gradientClass: 'dan-radial-glow-thinking',
    },
    alert: {
      glowClass: 'dan-glow-alert',
      pulseSpeed: 'dan-breathe',
      gradientClass: 'dan-radial-glow',
    },
    critical: {
      glowClass: 'dan-glow-critical',
      pulseSpeed: 'dan-breathe-fast',
      gradientClass: 'dan-radial-glow',
    },
  };

  const currentStyle = stateStyles[state];

  const handleChipClick = (chip: ActionChip) => {
    setSelectedChip(chip.id);
    setMessages(prev => [...prev, { from: 'user', text: chip.label }]);
    
    // Simulate DAN response
    setTimeout(() => {
      let response = '';
      switch (chip.id) {
        case 'aging-inventory':
          response = 'Your inventory aging is 12% above optimal. I recommend focusing on sedan models (45-60 days old) and increasing promotional campaigns for SUVs over 75 days.';
          break;
        case 'optimize-payout':
          response = 'Current payout efficiency: 78%. I can optimize by bundling 3 pending claims and negotiating with Tier-1 insurers. Expected improvement: +15% cash flow.';
          break;
        case 'delay-purchases':
          response = 'Market forecast shows 8% price correction in 14-21 days. Recommend delaying luxury segment purchases. Economy segment: proceed as planned.';
          break;
        case 'risk-forecast':
          response = 'Risk Level: Medium. Main factors: Seasonal demand drop (22%), interest rate changes (18%). Mitigation strategies available.';
          break;
        case 'market-trends':
          response = 'EV adoption up 34%, SUV demand stable (+2%), sedans declining (-8%). Recommend adjusting inventory mix accordingly.';
          break;
      }
      setMessages(prev => [...prev, { from: 'dan', text: response }]);
      setSelectedChip(null);
    }, 1200);
  };

  return (
    <>
      <style>{`
        /* LAYER 2 - Interaction States Animations */
        @keyframes dan-breathe {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.03) translateY(-2px); }
        }

        @keyframes dan-breathe-fast {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.04) translateY(-3px); }
        }

        @keyframes dan-breathe-slow {
          0%, 100% { transform: scale(1) translateY(0px); }
          50% { transform: scale(1.02) translateY(-1px); }
        }

        @keyframes dan-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @keyframes dan-glow-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }

        @keyframes dan-glow-pulse-fast {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.7; }
        }

        @keyframes dan-glow-pulse-listening {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.75; }
        }

        @keyframes dan-glow-pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes dan-heartbeat {
          0% { transform: scale(1); opacity: 1; }
          30% { transform: scale(1.15); opacity: 0.8; }
          60% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes dan-halo-heartbeat {
          0% { transform: scale(1); opacity: 0.25; }
          30% { transform: scale(1.2); opacity: 0.4; }
          60% { transform: scale(1.1); opacity: 0.35; }
          100% { transform: scale(1); opacity: 0.25; }
        }

        /* LAYER 3 - Voice/Activity Ripples */
        @keyframes dan-ripple {
          0% { 
            transform: scale(1); 
            opacity: 0.18; 
          }
          100% { 
            transform: scale(2.5); 
            opacity: 0; 
          }
        }

        @keyframes dan-ripple-delay {
          0% { 
            transform: scale(1); 
            opacity: 0.18; 
          }
          100% { 
            transform: scale(2.5); 
            opacity: 0; 
          }
        }

        /* Alert State - Amber Ring Pulse */
        @keyframes dan-alert-ring {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        /* Critical State - Red Pulse */
        @keyframes dan-critical-pulse {
          0% { opacity: 0; transform: scale(1); }
          30% { opacity: 0.2; transform: scale(1.15); }
          100% { opacity: 0; transform: scale(1.3); }
        }

        /* Apply animations */
        .dan-breathe {
          animation: dan-breathe 2.5s ease-in-out infinite;
        }

        .dan-breathe-fast {
          animation: dan-breathe-fast 1.8s ease-in-out infinite;
        }

        .dan-breathe-slow {
          animation: dan-breathe-slow 3.5s ease-in-out infinite;
        }

        .dan-glow-idle {
          animation: dan-glow-pulse 2.5s ease-in-out infinite;
        }

        .dan-glow-listening {
          animation: dan-glow-pulse-listening 1.8s ease-in-out infinite;
        }

        .dan-glow-thinking {
          animation: dan-glow-pulse-slow 3.5s ease-in-out infinite;
        }

        .dan-glow-alert {
          animation: dan-glow-pulse 2.5s ease-in-out infinite;
        }

        .dan-glow-critical {
          animation: dan-glow-pulse-fast 1.8s ease-in-out infinite;
        }

        .dan-heartbeat {
          animation: dan-heartbeat 0.8s ease-out forwards;
        }

        .dan-halo-heartbeat {
          animation: dan-halo-heartbeat 0.8s ease-out forwards;
        }

        .dan-ripple {
          animation: dan-ripple 2s ease-out infinite;
        }

        .dan-ripple-delay {
          animation: dan-ripple-delay 2s ease-out infinite 1s;
        }

        .dan-alert-ring {
          animation: dan-alert-ring 4s ease-in-out infinite;
        }

        .dan-critical-pulse {
          animation: dan-critical-pulse 0.6s ease-out;
        }

        /* Radial gradient glows */
        .dan-radial-glow {
          background: radial-gradient(
          rgba(43, 93, 173, 0.9) 0%,
rgba(43, 103, 192, 1) 40%,
rgba(49, 103, 192, 1) 100%
          );
        }

        .dan-radial-glow-listening {
          background: radial-gradient(
            circle at center,
            rgba(95, 168, 255, 0.7) 0%,
            rgba(31, 94, 255, 1) 35%,
            rgba(31, 94, 255, 1) 100%
          );
        }

        .dan-radial-glow-thinking {
          background: radial-gradient(
            circle at center,
            rgba(95, 168, 255, 0.5) 0%,
            rgba(20, 70, 200, 1) 45%,
            rgba(20, 70, 200, 1) 100%
          );
        }

        /* Panel slide animation */
        @keyframes dan-panel-slide {
          from { 
            opacity: 0;
            transform: translateX(20px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }

        .dan-panel-enter {
          animation: dan-panel-slide 0.3s ease-out forwards;
        }

        /* Dragging styles */
        .dragging {
          position: fixed;
          z-index: 51;
        }
      `}</style>

      <div
        className="fixed z-50"
        style={{
          bottom: '32px',
          right: '32px',
        }}
      >
        {/* LAYER 4 - Expanded Chat Panel */}
        {isExpanded && (
          <div 
            className="absolute right-6 bottom-25 sm:bottom-0 sm:right-24 mb-0 mr-0 dan-panel-enter"
            style={{ width: '340px', maxWidth: '90vw' }}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Panel Header */}
              <div className="bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] p-3 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs tracking-wide">DAN</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Dealership Navigator</h3>
                      <p className="text-white/80 text-xs">AI Command Center</p>
                    </div>
                  </div>
                  <button
                    onClick={onToggleExpand}
                    className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* LAYER 5 - System Intelligence Alert */}
              {systemAlert && (
                <div className={`p-3 border-b ${
                  systemAlert.type === 'critical' 
                    ? 'bg-red-50 border-red-200' 
                    : systemAlert.type === 'warning'
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="flex items-start space-x-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      systemAlert.type === 'critical' ? 'bg-red-100' :
                      systemAlert.type === 'warning' ? 'bg-amber-100' :
                      'bg-blue-100'
                    }`}>
                      <AlertTriangle className={`w-4 h-4 ${
                        systemAlert.type === 'critical' ? 'text-red-600' :
                        systemAlert.type === 'warning' ? 'text-amber-600' :
                        'text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-900 font-semibold leading-snug">{systemAlert.message}</p>
                      {systemAlert.action && (
                        <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold mt-1 inline-flex items-center">
                          {systemAlert.action} →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Conversation Area */}
              <div className="h-40 overflow-y-auto p-3 space-y-2.5 bg-gradient-to-br from-gray-50 to-white">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl px-3 py-2 shadow-sm ${
                        msg.from === 'user'
                          ? 'bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white'
                          : 'bg-white border border-gray-200 text-gray-900'
                      }`}
                    >
                      <p className="text-xs leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                ))}
                {selectedChip && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 rounded-xl px-3 py-2 shadow-sm">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full animate-pulse" />
                        <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-1.5 h-1.5 bg-[#0066CC] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Chips */}
              <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2 font-bold uppercase tracking-wide">Quick Actions</p>
                <div className="space-y-1.5">
                  {ACTION_CHIPS.map((chip) => (
                    <button
                      key={chip.id}
                      onClick={() => handleChipClick(chip)}
                      disabled={selectedChip !== null}
                      className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white border border-gray-200 hover:border-[#0066CC] transition-all disabled:opacity-50 disabled:cursor-not-allowed group shadow-sm hover:shadow"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#003D7A] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                        {chip.icon}
                      </div>
                      <span className="text-xs text-gray-900 group-hover:text-[#0066CC] font-semibold text-left flex-1">
                        {chip.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* LAYER 1 - DAN Core Bubble */}
        <div
          className="cursor-pointer group relative"
          onClick={onToggleExpand}
          style={{
            left: '0',
            top: '0',
          }}
        >
          {/* Container for all layers - applies breathing */}
          <div className={`relative ${currentStyle.pulseSpeed}`}>
            {/* LAYER 2 - Alert State Amber Ring */}
            {state === 'alert' && (
              <div
                className="absolute inset-0 rounded-full dan-alert-ring pointer-events-none"
                style={{
                  width: '96px',
                  height: '96px',
                  border: '2px solid #FFB703',
                  transform: 'scale(1.4)',
                }}
              />
            )}

            {/* LAYER 2 - Critical State Red Pulse */}
            {state === 'critical' && (
              <div
                className="absolute inset-0 rounded-full dan-critical-pulse pointer-events-none"
                style={{
                  width: '96px',
                  height: '96px',
                  background: 'rgba(255, 77, 79, 0.2)',
                  filter: 'blur(20px)',
                }}
              />
            )}

            {/* LAYER 3 - Voice/Activity Ripples */}
            {showRipples && (
              <>
                <div
                  className="absolute inset-0 rounded-full dan-ripple pointer-events-none"
                  style={{
                    width: '92px',
                    height: '92px',
                    border: '1px solid rgba(95, 168, 255, 0.5)',
                    left: '0',
                    top: '0',
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full dan-ripple-delay pointer-events-none"
                  style={{
                    width: '92px',
                    height: '92px',
                    border: '1px solid rgba(95, 168, 255, 0.5)',
                    left: '0',
                    top: '0',
                  }}
                />
              </>
            )}

            {/* Outer halo ring - pale ice-blue */}
            <div
              className={`absolute inset-0 rounded-full ${
                isHeartbeat ? 'dan-halo-heartbeat' : ''
              }`}
              style={{
                width: '96px',
                height: '96px',
                background: 'rgba(169, 212, 255, 0.25)',
                filter: 'blur(18px)',
                transform: 'scale(1.3)',
              }}
            />

            {/* Outer glow layer - animated */}
            <div
              className={`absolute inset-0 rounded-full ${currentStyle.glowClass} ${
                isHeartbeat ? 'dan-heartbeat' : ''
              }`}
              style={{
                width: '96px',
                height: '96px',
                background: state === 'listening' 
                  ? 'rgba(95, 168, 255, 0.55)' 
                  : 'rgba(95, 168, 255, 0.4)',
                filter: 'blur(20px)',
              }}
            />

            {/* Main circle with radial gradient */}
            <div
              className={`relative rounded-full shadow-2xl ${currentStyle.gradientClass} ${
                isHeartbeat ? 'dan-heartbeat' : ''
              }`}
              style={{
                width: '92px',
                height: '92px',
                boxShadow:
                  'inset 0 2px 8px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(31, 94, 255, 0.4)',
              }}
            >
              {/* Inner highlight for glass effect */}
              <div
                className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-6 rounded-full"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                }}
              />

              {/* DAN text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-white font-bold tracking-wider select-none"
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  DAN
                </span>
              </div>
            </div>

            {/* Interaction ripple on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{
                  width: '96px',
                  height: '96px',
                  background: 'rgba(95, 168, 255, 0.3)',
                  animationDuration: '2s',
                }}
              />
            </div>
          </div>

          {/* Tooltip on hover (only when collapsed) */}
          {!isExpanded && (
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="glass-premium rounded-lg px-4 py-2 shadow-xl whitespace-nowrap">
                <p className="text-sm text-gray-900 font-medium">
                  {state === 'idle' && 'Ask DAN anything'}
                  {state === 'listening' && 'DAN is listening...'}
                  {state === 'thinking' && 'DAN is thinking...'}
                  {state === 'alert' && 'DAN has insights'}
                  {state === 'critical' && 'Urgent: Review needed'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}