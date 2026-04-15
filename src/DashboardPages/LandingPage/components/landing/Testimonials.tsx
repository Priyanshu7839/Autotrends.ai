import { Quote, Star, TrendingUp, CheckCircle } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "AutoTrends eliminated our 60-day insurance payout wait. We now get paid instantly and our cash flow has never been better. The ROI was immediate.",
    author: "Rajesh Malhotra",
    role: "General Manager",
    company: "Malhotra Motors (Hyundai)",
    location: "Delhi NCR",
    metric: "₹2.4 Cr",
    metricLabel: "payouts processed",
    avatar: "RM",
    color: "blue"
  },
  {
    quote: "The BB&D stock tracking alone saved us ₹18L in blocked capital. Add the instant finance payouts, and AutoTrends paid for itself in the first month.",
    author: "Priya Sharma",
    role: "Finance Head",
    company: "Sharma Auto Group (Kia)",
    location: "Mumbai",
    metric: "₹18L",
    metricLabel: "capital unblocked",
    avatar: "PS",
    color: "green"
  },
  {
    quote: "DAN AI predicted our slow-moving inventory before we even realized it. We adjusted pricing and cleared 12 cars in 3 weeks. This is dealer intelligence on steroids.",
    author: "Vikram Reddy",
    role: "Owner & CEO",
    company: "Reddy Automobiles (Maruti)",
    location: "Hyderabad",
    metric: "12 cars",
    metricLabel: "cleared in 3 weeks",
    avatar: "VR",
    color: "purple"
  },
  {
    quote: "Meta lead tracking + WhatsApp automation gave us 43% more conversions. AutoTrends doesn't just track data—it makes us money every single day.",
    author: "Amit Patel",
    role: "Sales Director",
    company: "Patel Motors (Toyota)",
    location: "Ahmedabad",
    metric: "+43%",
    metricLabel: "lead conversion",
    avatar: "AP",
    color: "orange"
  }
];

const TRUST_LOGOS = [
  { name: "Hyundai Dealers", count: "247+" },
  { name: "Maruti Dealers", count: "312+" },
  { name: "Kia Dealers", count: "156+" },
  { name: "Toyota Dealers", count: "189+" },
  { name: "Tata Dealers", count: "203+" },
  { name: "Mahindra Dealers", count: "140+" }
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 glass-card-dark px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-[#0066CC] fill-current" />
            <span className="text-sm text-gray-900">Trusted by 1,247+ dealerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
            Real Dealers. Real Results.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From single-rooftop dealers to multi-location groups, AutoTrends is transforming Indian dealerships.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-premium rounded-2xl p-6 sm:p-8 relative hover:scale-[1.02] transition-all card-3d"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#0066CC]" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#0066CC] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md border backdrop-blur-sm ${
                    testimonial.color === 'blue' ? 'bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border-cyan-300/30 shadow-cyan-500/10' :
                    testimonial.color === 'green' ? 'bg-gradient-to-br from-emerald-400/20 to-green-400/20 border-emerald-300/30 shadow-emerald-500/10' :
                    testimonial.color === 'purple' ? 'bg-gradient-to-br from-purple-400/20 to-violet-400/20 border-purple-300/30 shadow-purple-500/10' :
                    'bg-gradient-to-br from-amber-400/20 to-orange-400/20 border-amber-300/30 shadow-amber-500/10'
                  }`}>
                    <span className={`text-sm font-semibold ${
                      testimonial.color === 'blue' ? 'text-cyan-600' :
                      testimonial.color === 'green' ? 'text-emerald-600' :
                      testimonial.color === 'purple' ? 'text-purple-600' :
                      'text-amber-600'
                    }`}>
                      {testimonial.avatar}
                    </span>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="text-right">
                  <div className={`text-xl font-semibold ${
                    testimonial.color === 'blue' ? 'text-[#0066CC]' :
                    testimonial.color === 'green' ? 'text-green-600' :
                    testimonial.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`}>
                    {testimonial.metric}
                  </div>
                  <div className="text-xs text-gray-600">{testimonial.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Logos Strip */}
        <div className="glass-card-dark rounded-2xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-lg text-gray-900">Powering dealerships across all major OEMs</h3>
            </div>
            <p className="text-sm text-gray-600">1,247+ rooftops and growing every day</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST_LOGOS.map((logo, idx) => (
              <div
                key={idx}
                className="glass-premium rounded-xl p-4 text-center hover:scale-105 transition-all"
              >
                <div className="text-2xl gradient-text mb-1">{logo.count}</div>
                <div className="text-xs text-gray-600">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mt-8">
          <div className="glass-card-dark rounded-xl p-6 text-center">
            <div className="text-3xl gradient-text mb-2">₹450+ Cr</div>
            <p className="text-sm text-gray-600">Total payouts processed</p>
          </div>
          <div className="glass-card-dark rounded-xl p-6 text-center">
            <div className="text-3xl gradient-text mb-2">4.9/5</div>
            <p className="text-sm text-gray-600">Average dealer rating</p>
          </div>
          <div className="glass-card-dark rounded-xl p-6 text-center">
            <div className="text-3xl gradient-text mb-2">&lt;24hrs</div>
            <p className="text-sm text-gray-600">Average onboarding time</p>
          </div>
        </div>
      </div>
    </section>
  );
}