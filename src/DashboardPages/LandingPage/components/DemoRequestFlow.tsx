import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Check, Phone, MessageCircle, Calendar, Clock } from 'lucide-react';

interface DemoRequestFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Puducherry', 'Jammu & Kashmir', 'Ladakh'
];

const CAR_BRANDS = [
  'Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Mahindra', 'Kia', 'Honda',
  'Toyota', 'Renault', 'Nissan', 'Volkswagen', 'Skoda', 'MG', 'Jeep',
  'Ford', 'Citroen', 'BYD', 'Others'
];

const DEMO_FOCUS_OPTIONS = [
  { id: 'market', label: 'Market & RTO Analytics', icon: '📊' },
  { id: 'inventory', label: 'Inventory & BBND Tracking', icon: '🚗' },
  { id: 'leads', label: 'Lead Management (Meta + WhatsApp)', icon: '📱' },
  { id: 'insurance', label: 'Instant Insurance Payouts', icon: '🛡️' },
  { id: 'finance', label: 'Instant Finance Payouts', icon: '💳' },
  { id: 'multi', label: 'Multi-Rooftop / Dealer Group View', icon: '🏢' },
  { id: 'dan', label: 'DAN (AI Insights)', icon: '🤖' }
];

export function DemoRequestFlow({ isOpen, onClose }: DemoRequestFlowProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    dealershipName: '',
    city: '',
    state: '',
    brands: [] as string[],
    rooftops: '',
    contactName: '',
    mobile: '',
    otp: '',
    demoFocus: [] as string[],
    demoType: '',
    scheduledDate: '',
    scheduledTime: ''
  });

  const [otpTimer, setOtpTimer] = useState(60);
  const [canResendOtp, setCanResendOtp] = useState(false);

  useEffect(() => {
    if (step === 2 && otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (otpTimer === 0) {
      setCanResendOtp(true);
    }
  }, [step, otpTimer]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBrandToggle = (brand: string) => {
    setFormData(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const handleDemoFocusToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      demoFocus: prev.demoFocus.includes(id)
        ? prev.demoFocus.filter(f => f !== id)
        : [...prev.demoFocus, id]
    }));
  };

  const resendOtp = () => {
    setOtpTimer(60);
    setCanResendOtp(false);
    // Mock OTP resend
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container - Full screen on mobile, centered modal on desktop */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-2xl md:rounded-2xl bg-white md:shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#cfcfd7]">
          <div className="flex items-center space-x-4 flex-1 flex-col gap-2">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="w-8 h-8 rounded-lg glass-card-dark flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 text-[#0066CC]" />
              </button>
            )}
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all ${
                    s === step
                      ? 'w-8 bg-gradient-to-r from-[#0066CC] to-[#003D7A]'
                      : s < step
                      ? 'w-6 bg-[#0066CC]/50'
                      : 'w-6 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 hidden sm:inline">
              Step {step} of 5
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg glass-card-dark flex items-center justify-center hover:bg-white/10 transition-colors ml-4"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {/* STEP 1: DEALER DETAILS */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl gradient-text mb-2">Request a Dealer Demo</h2>
                <p className="text-gray-900">Tell us about your dealership (30 seconds)</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-900 mb-2">Dealership Name</label>
                  <input
                    type="text"
                    value={formData.dealershipName}
                    onChange={(e) => setFormData({ ...formData, dealershipName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none transition-colors text-gray-900 placeholder:text-gray-500"
                    placeholder="e.g., ABC Motors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-900 mb-2">City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none transition-colors text-gray-900 placeholder:text-gray-500"
                      placeholder="e.g., Mumbai"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-900 mb-2">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none transition-colors text-gray-900"
                    >
                      <option value="">Select State</option>
                      {INDIAN_STATES.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-900 mb-2">Brand(s) Sold</label>
                  <div className="flex flex-wrap gap-2">
                    {CAR_BRANDS.map(brand => (
                      <button
                        key={brand}
                        onClick={() => handleBrandToggle(brand)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          formData.brands.includes(brand)
                            ? 'bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white shadow-lg shadow-blue-500/40'
                            : 'glass-card-dark text-gray-900 hover:bg-white/50'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-900 mb-2">Number of Rooftops</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['1', '2–5', '5+'].map(option => (
                      <button
                        key={option}
                        onClick={() => setFormData({ ...formData, rooftops: option })}
                        className={`px-4 py-3 rounded-xl text-sm transition-all ${
                          formData.rooftops === option
                            ? 'bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white shadow-lg shadow-blue-500/40'
                            : 'glass-card-dark text-gray-900 hover:bg-white/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-900 mb-2">Contact Name</label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none transition-colors text-gray-900 placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-900 mb-2">Mobile Number *</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none transition-colors text-gray-900 placeholder:text-gray-500"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: OTP VERIFICATION */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl gradient-text mb-2">Verify Your Number</h2>
                <p className="text-gray-900">We'll send a one-time password to your mobile</p>
              </div>

              <div className="glass-card-dark rounded-xl p-6 space-y-6">
                <div>
                  <label className="block text-sm text-gray-900 mb-3">Enter 6-digit OTP</label>
                  <div className="flex gap-2 justify-center">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl glass-card-dark border-2 border-white/20 rounded-xl focus:border-[#0066CC] focus:outline-none transition-colors text-gray-900"
                        onChange={(e) => {
                          const value = e.target.value;
                          if (value && index < 5) {
                            const next = e.target.nextElementSibling as HTMLInputElement;
                            next?.focus();
                          }
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 flex items-center justify-center shadow-md shadow-cyan-500/10">
                      <Clock className="w-3 h-3 text-cyan-300" strokeWidth={2} />
                    </div>
                    <span className="text-sm text-gray-900">
                      {otpTimer > 0 ? `${otpTimer}s remaining` : 'OTP expired'}
                    </span>
                  </div>
                  {canResendOtp && (
                    <button
                      onClick={resendOtp}
                      className="text-sm text-[#0066CC] hover:underline font-medium"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                  <p className="text-xs text-gray-900 text-center">
                    OTP verification helps us secure dealer access and payouts.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: DEMO FOCUS SELECTION */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl gradient-text mb-2">What would you like to see in the demo?</h2>
                <p className="text-gray-900">Select all that apply</p>
              </div>

              <div className="grid gap-3">
                {DEMO_FOCUS_OPTIONS.map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleDemoFocusToggle(option.id)}
                    className={`glass-card-dark rounded-xl p-4 text-left transition-all hover:scale-[1.02] ${
                      formData.demoFocus.includes(option.id)
                        ? 'glass-glow-blue ring-2 ring-[#0066CC] shadow-xl shadow-blue-500/30'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-gray-900">{option.label}</span>
                      </div>
                      {formData.demoFocus.includes(option.id) && (
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-400/20 backdrop-blur-sm border border-emerald-300/30 flex items-center justify-center shadow-md shadow-emerald-500/10">
                          <Check className="w-4 h-4 text-emerald-300" strokeWidth={2} />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: DEMO SCHEDULING */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl gradient-text mb-2">Choose How You'd Like to Proceed</h2>
                <p className="text-gray-900">Pick your preferred option</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Instant Connect */}
                <div className="glass-card-dark rounded-xl p-6 space-y-4">
                  <h3 className="text-lg text-gray-900">Instant Connect</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setFormData({ ...formData, demoType: 'call' })}
                      className={`w-full px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all ${
                        formData.demoType === 'call'
                          ? 'bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white shadow-lg shadow-blue-500/40'
                          : 'glass-card-dark text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, demoType: 'whatsapp' })}
                      className={`w-full px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all ${
                        formData.demoType === 'whatsapp'
                          ? 'bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white shadow-lg shadow-blue-500/40'
                          : 'glass-card-dark text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp Now</span>
                    </button>
                  </div>
                </div>

                {/* Schedule Demo */}
                <div className="glass-card-dark rounded-xl p-6 space-y-4">
                  <h3 className="text-lg text-gray-900">Schedule Demo</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setFormData({ ...formData, demoType: 'schedule' })}
                      className={`w-full px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all ${
                        formData.demoType === 'schedule'
                          ? 'bg-gradient-to-r from-[#0066CC] via-[#0052A3] to-[#003D7A] text-white shadow-lg shadow-blue-500/40'
                          : 'glass-card-dark text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Pick a Time</span>
                    </button>

                    {formData.demoType === 'schedule' && (
                      <div className="space-y-3 pt-3">
                        <input
                          type="date"
                          value={formData.scheduledDate}
                          onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                          className="w-full px-4 py-2 rounded-lg glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none text-sm text-gray-900"
                          min={new Date().toISOString().split('T')[0]}
                        />
                        <select
                          value={formData.scheduledTime}
                          onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
                          className="w-full px-4 py-2 rounded-lg glass-card-dark border border-white/20 focus:border-[#0066CC] focus:outline-none text-sm text-gray-900"
                        >
                          <option value="">Select Time</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                        <p className="text-xs text-gray-900 text-center">30-minute demo • IST timezone</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: CONFIRMATION */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400/20 to-green-400/20 backdrop-blur-sm border border-emerald-300/30 flex items-center justify-center mx-auto mb-4 shadow-md shadow-emerald-500/10">
                  <Check className="w-8 h-8 text-emerald-300" strokeWidth={2} />
                </div>
                <h2 className="text-2xl sm:text-3xl gradient-text mb-2">Your Demo Is Confirmed</h2>
                <p className="text-gray-900">We're excited to show you AutoTrends.ai</p>
              </div>

              <div className="glass-card-dark rounded-xl p-6 space-y-4">
                <div className="grid gap-3">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-900">Dealership</span>
                    <span className="text-gray-900">{formData.dealershipName || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-900">Contact</span>
                    <span className="text-gray-900">{formData.contactName || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-900">Mobile</span>
                    <span className="text-gray-900">{formData.mobile}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span className="text-gray-900">Demo Focus</span>
                    <span className="text-gray-900 text-right">{formData.demoFocus.length} topics</span>
                  </div>
                  {formData.demoType === 'schedule' && formData.scheduledDate && (
                    <>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-gray-900">Date</span>
                        <span className="text-gray-900">{new Date(formData.scheduledDate).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-white/10">
                        <span className="text-gray-900">Time</span>
                        <span className="text-gray-900">{formData.scheduledTime}</span>
                      </div>
                    </>
                  )}
                  <div className="flex justify-between py-2">
                    <span className="text-gray-900">Assigned Specialist</span>
                    <span className="text-gray-900">AutoTrends Team</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm text-gray-900 text-center">
                  You'll receive confirmation via WhatsApp and SMS.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <button className="px-6 py-3 rounded-xl glass-card-dark text-gray-900 hover:bg-white/50 transition-all flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Add to Calendar</span>
                </button>
                <button className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-all flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Support</span>
                </button>
              </div>

              <p className="text-xs text-gray-900 text-center pt-4">
                AutoTrends uses secure OTP verification and audit logs for all dealer access.
              </p>
            </div>
          )}
        </div>

        {/* Footer CTA - Sticky on Mobile */}
        {step < 5 && (
          <div className="p-4 sm:p-6 border-t border-[#cfcfd7] bg-white/50 backdrop-blur-lg">
            <div className="flex gap-3">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 rounded-xl glass-card-dark text-gray-900 hover:bg-white/50 transition-all"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="flex-1 btn-primary px-6 py-3 rounded-xl inline-flex items-center justify-center space-x-2 animate-pulse-glow"
              >
                <span>
                  {step === 1 && 'Continue'}
                  {step === 2 && 'Verify & Proceed'}
                  {step === 3 && 'Schedule Demo'}
                  {step === 4 && 'Confirm Demo'}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="p-4 sm:p-6 border-t border-white/10 bg-white/50 backdrop-blur-lg">
            <button
              onClick={onClose}
              className="w-full btn-primary px-6 py-3 rounded-xl"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}