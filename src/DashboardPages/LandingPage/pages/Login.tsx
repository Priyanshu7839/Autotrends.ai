import { Lock, Mail, Building2, Bot, ArrowLeft, HelpCircle, Sparkles, Shield, Zap, TrendingUp, Eye, EyeClosed } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { AnimatedGradient } from '../components/background/AnimatedGradient';
import { FloatingParticles } from '../components/background/FloatingParticles';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { LoginDealer } from '../../../utils/APICalls';
import { setDealershipdetails } from '../../../Store/DealershipDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [dealerDetails,setDealerDetails] = useState({
    email:'',
    password:''
  })
   const [showPassword, setShowPassword] = useState(false);
  const dealershipDetails = useSelector((state) => state.DealershipDetails);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
   
     if(dealerDetails.email === "" && dealerDetails.password === "") {
            toast.error("Please Enter Your Email & Password")
          }
          else if(dealerDetails.email === ""){
            toast.error("Please Enter Your Email")
          }
          else if(dealerDetails.password === ""){
            toast.error("Please Enter your Password")
          }
    
        if (dealerDetails.email !== "" && dealerDetails.password !== "") {
          setIsLoading(true);
          const response = await LoginDealer(dealerDetails);
    
          if(response.data.msg === 'Dealer Email Not Found'){
            toast.error("Please Check Your Email")
          
          }
          if(response.data.msg === 'Wrong Password'){
            toast.error("Please Check Your Password")
          }
    
          if (response && response.data.msg === "Logged IN") {
            const dealer = response.data.user;
            if(response?.data?.role === 'Manager'){
              toast.success(`Welcome ${response?.data?.name}, Manager of the Dealership`, {
                           action: {
      label: "✕",
      onClick: () => toast.dismiss(),
    },
                          });
            }
    
            if(response?.data?.role === 'Principal'){
              toast.success(`Welcome ${response?.data?.name}, Owner of the Dealership`, {
                            action: {
      label: "✕",
      onClick: () => toast.dismiss(),
    },
                          })
            }
            
           dispatch( setDealershipdetails({
            id:dealer?.pk_id,
              dealership_name: dealer?.dealership_name,
              dealership_brand: dealer?.dealership_brand,
              contact: dealer?.contact,
              city: dealer?.city,
              dealership_state: dealer?.dealership_state,
              loggedIn: true,
              accessToken: "",
              lat: dealer.lat,
              lon: dealer.lon,
              role:response?.data?.role,
              user_name:response?.data?.name,
              userID:response?.data?.user_id
            }))
    
            
          }
        } 

        setIsLoading(false)

  };
  useEffect(() => {
        if (dealershipDetails.loggedIn && dealershipDetails?.role !=='ASM') {
          navigate("/Dashboard");
        }
        else if(dealershipDetails.loggedIn && dealershipDetails?.role ==='ASM'){
          navigate("/Dashboard/poolstock")
        }
      }, [dealershipDetails.loggedIn]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Animated Background Effects */}
      <AnimatedGradient />
      <FloatingParticles />

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center ">
          {/* Left Column - Login Form */}
          <div className="glass-card h-full rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl border border-white/20 shadow-2xl">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#0066CC] transition-all duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium tracking-wide">Back to Home</span>
            </Link>

            {/* Logo */}
            <div className="mb-8 lg:mb-10">
              <div className="text-3xl lg:text-4xl tracking-tight mb-2">
                <span className="gradient-text font-semibold">AutoTrends</span>
                <span className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] bg-clip-text text-transparent">.ai</span>
              </div>
              <p className="text-sm font-medium tracking-wide text-gray-500">Dealer Platform</p>
            </div>

            {/* Title */}
            <div className="mb-8 lg:mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3 bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] bg-clip-text text-transparent font-semibold tracking-tight">
                Dealer Login
              </h1>
              <p className="text-gray-600 font-medium tracking-wide">Access your AutoTrends Command Center</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6 ">
             

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2.5 text-gray-700 tracking-wide"
                >
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Mail className={`w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-[#0066CC]' : 'text-gray-400'}`} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={dealerDetails.email}
                    onChange={(e)=>{setDealerDetails({...dealerDetails,email:e.target.value})}}
                    placeholder="your.email@dealership.com"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 lg:py-4 rounded-xl glass-card-dark border border-gray-200/60 
                      focus:border-[#0066CC] focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 
                      transition-all duration-300 font-medium tracking-wide
                      hover:border-gray-300 hover:shadow-md"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-semibold mb-2.5 text-gray-700 tracking-wide"
                >
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <Lock className={`w-5 h-5 transition-colors ${focusedField === 'password' ? 'text-[#0066CC]' : 'text-gray-400'}`} />
                  </div>
                  <input
                    id="password"
                     type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                     value={dealerDetails.password}
                    onChange={(e)=>{setDealerDetails({...dealerDetails,password:e.target.value})}}
                    onFocus={() => setFocusedField('password')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 lg:py-4 rounded-xl glass-card-dark border border-gray-200/60 
                      focus:border-[#0066CC] focus:outline-none focus:ring-2 focus:ring-[#0066CC]/20 
                      transition-all duration-300 font-medium tracking-wide
                      hover:border-gray-300 hover:shadow-md"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                   {showPassword ?
                    <Eye
                    onClick={()=>{setShowPassword(!showPassword)}}
                    className={`w-5 h-5 transition-colors ${focusedField === 'password' ? 'text-[#0066CC]' : 'text-gray-400'}`} />:
                    <EyeClosed
                    onClick={()=>{setShowPassword(!showPassword)}}
                    
                    className={`w-5 h-5 transition-colors ${focusedField === 'password' ? 'text-[#0066CC]' : 'text-gray-400'}`} />}
                  </div>
                </div>

                 
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-4 lg:pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full px-6 py-4 rounded-xl font-semibold tracking-wide
                    transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Logging in...
                    </span>
                  ) : (
                    'Login to Dashboard'
                  )}
                </button>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold tracking-wide
                      transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Request Access
                  </button>
                  <button
                    type="button"
                    className="btn-outline px-6 py-3 rounded-xl text-sm font-semibold tracking-wide
                      transition-all duration-300 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Forgot Password
                  </button>
                </div>
              </div>
            </form>

            {/* Security Badge */}
            <div className="mt-8 pt-6 border-t border-gray-200/60">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-[#0066CC]" />
                <span className="font-medium tracking-wide">
                  256-bit SSL Encrypted • SOC 2 Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - What's New & Features (Desktop Only) */}
          <div className="space-y-6">
            {/* What's New Section - Deep Blue Glassmorphic */}
            <div className="relative rounded-2xl lg:rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0066CC] via-[#0052A3] to-[#003D7A] border border-white/20">
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-300/20 
                    flex items-center justify-center backdrop-blur-sm border border-yellow-300/30
                    shadow-md shadow-yellow-500/10">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">What's New</h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20
                    hover:bg-white/15 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0
                        shadow-[0_0_8px_rgba(250,204,21,0.6)] group-hover:shadow-[0_0_12px_rgba(250,204,21,0.8)] transition-shadow" />
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1.5 font-semibold tracking-tight text-white">Instant Payout Engine Live</h3>
                        <p className="text-sm font-medium text-white/70 tracking-wide leading-relaxed">
                          Get your F&I payouts instantly, we settle with partners
                        </p>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className="text-xs font-semibold text-yellow-400 tracking-wide">Dec 2025</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-300/30 text-emerald-200 text-xs font-semibold tracking-wide">
                            NEW
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20
                    hover:bg-white/15 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0
                        shadow-[0_0_8px_rgba(52,211,153,0.6)] group-hover:shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-shadow" />
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1.5 font-semibold tracking-tight text-white">DAN AI Navigator Active</h3>
                        <p className="text-sm font-medium text-white/70 tracking-wide leading-relaxed">
                          Smart alerts and insights now running on all dashboards
                        </p>
                        <span className="inline-block text-xs font-semibold text-white/60 tracking-wide mt-2">Nov 2025</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/20
                    hover:bg-white/15 transition-all duration-300 hover:shadow-lg group">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0
                        shadow-[0_0_8px_rgba(192,132,252,0.6)] group-hover:shadow-[0_0_12px_rgba(192,132,252,0.8)] transition-shadow" />
                      <div className="flex-1 min-w-0">
                        <h3 className="mb-1.5 font-semibold tracking-tight text-white">Multi-Rooftop Dashboard</h3>
                        <p className="text-sm font-medium text-white/70 tracking-wide leading-relaxed">
                          Manage all your locations from a single view
                        </p>
                        <span className="inline-block text-xs font-semibold text-white/60 tracking-wide mt-2">Oct 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DAN Advantage Badge */}
            <div className="glass-card rounded-2xl lg:rounded-3xl p-6 sm:p-8 backdrop-blur-xl 
              border-2 border-[#0066CC]/40 shadow-xl relative overflow-hidden group
              hover:border-[#0066CC]/60 transition-all duration-300">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 via-transparent to-[#0052A3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0066CC]/20 to-[#0052A3]/20 
                    flex items-center justify-center backdrop-blur-sm
                    shadow-[0_0_24px_rgba(0,102,204,0.3)]">
                    <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#0066CC]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-gray-900">DAN Preview</h3>
                    <p className="text-xs font-semibold text-[#0066CC] tracking-wide uppercase">AI Insights Waiting</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-600 tracking-wide leading-relaxed">
                  Once logged in, DAN will provide personalized insights about your inventory, payouts, and market trends in real-time.
                </p>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1.5 rounded-full glass-card-dark border border-[#0066CC]/20 
                    text-xs font-semibold text-gray-700 tracking-wide flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#0066CC]" />
                    Real-time Alerts
                  </span>
                  <span className="px-3 py-1.5 rounded-full glass-card-dark border border-[#0066CC]/20 
                    text-xs font-semibold text-gray-700 tracking-wide flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#0066CC]" />
                    Market Insights
                  </span>
                </div>
              </div>
            </div>

            {/* Support Contact */}
            <div className="glass-card rounded-2xl lg:rounded-3xl p-5 sm:p-6 backdrop-blur-xl border border-white/20 shadow-lg
              hover:border-[#0066CC]/30 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-gray-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 tracking-wide">Need help logging in?</p>
                  <a 
                    href="mailto:support@autotrends.ai" 
                    className="text-sm font-semibold bg-gradient-to-r from-[#0066CC] to-[#0052A3] bg-clip-text text-transparent 
                      hover:from-[#0052A3] hover:to-[#003D7A] transition-all tracking-wide break-all"
                  >
                    support@autotrends.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}