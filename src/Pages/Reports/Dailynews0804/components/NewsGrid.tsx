import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const newsArticles: NewsArticle[] = [
  {
    id: 6,
    title: 'Maruti Fronx Crosses 1 Lakh Sales Milestone in Just 13 Months - Fastest Ever',
    source: 'AutoCar India',
    time: '2h ago',
    image: 'https://images.unsplash.com/photo-1769961233320-86fd8b295b33?w=600&h=400&fit=crop',
    category: 'Milestones',
    excerpt: 'Compact SUV coupe becomes fastest Maruti model to reach 1 lakh sales, dealer margins average ₹48,000',
    content: 'Maruti Suzuki\'s Fronx has achieved the 1 lakh sales milestone in just 13 months since launch, making it the fastest Maruti model ever to reach this mark. Dealers attribute success to aggressive pricing at ₹7.5-13.5 lakh and strong hybrid option. The model has become a profit driver with average dealer margins of ₹48,000 per unit and minimal discounting.',
  },
  {
    id: 7,
    title: 'Toyota Announces ₹2,800 Crore Bangalore Plant Expansion for EV Production',
    source: 'ETAuto',
    time: '3h ago',
    image: 'https://images.unsplash.com/photo-1677163488586-e70b17e59aab?w=600&h=400&fit=crop',
    category: 'Manufacturing',
    excerpt: 'New production line to roll out 1 lakh EVs annually from 2027, dealer network expansion planned',
    content: 'Toyota Kirloskar Motor announced a ₹2,800 crore investment to add an EV-dedicated production line at its Bidadi plant near Bangalore. The facility will produce 1 lakh electric vehicles annually starting 2027. Toyota also announced plans to add 120 new dealerships across tier-2 and tier-3 cities by 2028, with focus on EV sales and service infrastructure.',
  },
  {
    id: 8,
    title: 'Skoda-VW India Dealer Profitability Jumps 64% - Slavia, Kushaq Lead Recovery',
    source: 'MoneyControl Auto',
    time: '4h ago',
    image: 'https://images.unsplash.com/photo-1763181037211-aae76c2282b8?w=600&h=400&fit=crop',
    category: 'Dealer Profits',
    excerpt: 'Improved inventory turns and higher F&I penetration transform dealer economics',
    content: 'Skoda and Volkswagen dealers in India reported a 64% improvement in profitability in Q1 2026 compared to last year, driven by the success of Slavia and Kushaq models. Average dealer RoI has improved to 14.2% from 8.7% last year. Improved parts availability, faster inventory turns averaging 42 days, and F&I penetration of 82% have transformed dealer economics.',
  },
  {
    id: 9,
    title: 'AI-Powered CRM Tools Show 31% Improvement in Lead Conversion - Dealers Invest Big',
    source: 'SIAM Digital Report',
    time: '5h ago',
    image: 'https://images.unsplash.com/photo-1774752369880-ceb3979848d3?w=600&h=400&fit=crop',
    category: 'Technology',
    excerpt: 'Predictive analytics help sales teams prioritize hot leads, reduce follow-up time by 40%',
    content: 'Dealers who have adopted AI-powered CRM systems are reporting 31% improvement in lead-to-booking conversion rates. The systems use predictive analytics to score leads and recommend optimal follow-up timing. Sales consultants report 40% reduction in time spent on cold leads, allowing them to focus on high-intent customers. 450+ dealer groups have deployed these systems.',
  },
  {
    id: 10,
    title: 'Tata Safari Gold Edition Margins Hit ₹1.15 Lakh - Limited Run Creates Premium Pricing',
    source: 'ZigWheels Pro',
    time: '5h ago',
    image: 'https://images.unsplash.com/photo-1748214547306-360d11024747?w=600&h=400&fit=crop',
    category: 'Special Editions',
    excerpt: 'Only 2,500 units planned, dealers report zero discounting and instant bookings',
    content: 'Tata Motors\' Safari Gold Edition launched yesterday with just 2,500 units planned is commanding dealer margins of ₹1.15 lakh, the highest for any Tata model. Priced at ₹28.8 lakh, the limited edition features gold accents, premium Benecke-Kaliko leather, and exclusive 19-inch alloys. Dealers report all units may be booked within 10 days with zero discounting.',
  },
  {
    id: 11,
    title: 'Ceramic Coating & PPF Services Generate ₹18,000 Average Revenue Per New Car Sale',
    source: 'FADA Aftermarket Report',
    time: '6h ago',
    image: 'https://images.unsplash.com/photo-1654267195847-7425c45bf5e6?w=600&h=400&fit=crop',
    category: 'Aftermarket',
    excerpt: 'Protection packages becoming standard attachment, dealers set up in-house facilities',
    content: 'Paint protection film (PPF) and ceramic coating services are generating an average ₹18,000 in additional revenue per new vehicle sale as 64% of buyers opt for protection packages. Dealers are setting up in-house detailing bays instead of outsourcing, improving margins from 15% to 45%. Premium SUV buyers are spending ₹45,000-₹80,000 on full-body PPF.',
  },
  {
    id: 12,
    title: 'Honda City Hybrid Waiting Period Drops to 2 Weeks as Production Doubles',
    source: 'Team-BHP Forums',
    time: '7h ago',
    image: 'https://images.unsplash.com/photo-1605801936998-a39a1518b03c?w=600&h=400&fit=crop',
    category: 'Inventory Update',
    excerpt: 'Honda ramps up production from 2,000 to 4,000 units monthly, dealers expect immediate deliveries',
    content: 'Honda has doubled City Hybrid production to 4,000 units per month, reducing waiting periods from 8-10 weeks to just 2 weeks. Dealers who were rationing bookings are now accepting unlimited orders. The move comes as Honda targets 50% hybrid mix in City sales, up from current 38%. Dealer margins remain healthy at ₹58,000 per unit.',
  },
  {
    id: 13,
    title: 'OLX Autos Partners with 800 Dealers for Certified Pre-Owned Program',
    source: 'Economic Times Auto',
    time: '8h ago',
    image: 'https://images.unsplash.com/photo-1729539853641-d5b4aadff618?w=600&h=400&fit=crop',
    category: 'Used Cars',
    excerpt: 'OEM-backed certification and buyback guarantee transform used car retail',
    content: 'OLX Autos has partnered with 800 authorized dealers nationwide to launch a certified pre-owned program with OEM backing. Vehicles get 167-point inspection, 1-year warranty, and 30-day exchange guarantee. Dealers earn ₹12,000 per certification plus improved margins of ₹38,000 versus ₹28,000 on non-certified inventory. Program aims to certify 50,000 vehicles in 2026.',
  },
  {
    id: 14,
    title: 'Citroen Expands to 50 New Cities - Dealer Recruitment Drive Offers ₹3.5 Cr Investment',
    source: 'AutoCar India',
    time: '9h ago',
    image: 'https://images.unsplash.com/photo-1769961232787-66bb70f227fe?w=600&h=400&fit=crop',
    category: 'Network Expansion',
    excerpt: 'French brand targets 300 touchpoints by year-end with flexible dealership formats',
    content: 'Citroen India announced expansion into 50 new tier-2 and tier-3 cities by December 2026, targeting a 300-touchpoint network. The company is offering flexible dealership formats - full 3S facilities requiring ₹8.5 crore investment, or compact showroom+service outlets needing ₹3.5 crore. Early dealer partners for C3 Aircross report margins averaging ₹62,000 per unit.',
  },
];

interface NewsGridProps {
  onSelect: (article: NewsArticle) => void;
}

export function NewsGrid({ onSelect }: NewsGridProps) {
  return (
    <div>
      <h2 className="text-xl text-gray-900 mb-6">Latest News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => onSelect(article)}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#0b85ff] hover:shadow-md transition-all cursor-pointer group"
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-5">
              <h3 className="text-base text-gray-900 leading-snug mb-3 group-hover:text-[#0b85ff] transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{article.source}</span>
                <span>•</span>
                <span>{article.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
