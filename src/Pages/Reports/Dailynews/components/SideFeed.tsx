import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const sideNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Maruti eVX Launch Creates 8-Week Waiting Period - Dealers Rush to Secure Allocation',
    time: '1h ago',
    source: 'ETAuto',
    image: 'https://images.unsplash.com/photo-1639302610362-4c86747e8680?w=200&h=120&fit=crop',
    category: 'New Launch',
    excerpt: 'First-ever Maruti EV sees record bookings, dealers report margins of ₹65,000 per unit',
    content: 'Maruti Suzuki\'s first electric vehicle, the eVX, launched yesterday with overwhelming response, creating instant waiting periods of 6-8 weeks across major metros. Dealers are reporting margins of ₹65,000 per unit with minimal discounting, the highest for any Maruti model in recent years. The company has allocated 12,000 units for May-June delivery.',
  },
  {
    id: 2,
    title: 'Tata Nexon CNG Hits 45,000 Bookings in 15 Days - Supply Crunch Expected',
    time: '2h ago',
    source: 'AutoCar India',
    image: 'https://images.unsplash.com/photo-1726412181429-1a8fb23fc3e0?w=200&h=120&fit=crop',
    category: 'Hot Models',
    excerpt: 'Twin-cylinder CNG technology drives unprecedented demand for compact SUV variant',
    content: 'Tata Motors\' Nexon CNG with twin-cylinder technology has received 45,000 bookings since its April 21 launch, surpassing company expectations by 80%. Dealers report that 65% of bookings are conquest customers switching from petrol hatchbacks, attracted by running costs of just ₹1.80/km. Production is being ramped up to meet 4-month waiting periods.',
  },
  {
    id: 3,
    title: 'May Insurance Premiums Rise 12% - Dealers Absorb Cost to Maintain Sales Momentum',
    time: '3h ago',
    source: 'FADA Report',
    image: 'https://images.unsplash.com/photo-1633711507230-f6554ef4d9fa?w=200&h=120&fit=crop',
    category: 'Insurance',
    excerpt: 'Annual premium hike hits customers, dealers offer creative financing solutions',
    content: 'Insurance premium increases effective May 1 have added ₹4,500-₹8,000 to on-road prices across segments. To maintain booking momentum, 68% of dealers are absorbing part of the increase or offering extended warranty bundles at discounted rates. F&I managers report restructuring deals to keep EMIs unchanged despite higher premiums.',
  },
  {
    id: 4,
    title: 'Karnataka Announces ₹10,000 Additional EV Subsidy - Bangalore Dealers See Surge',
    time: '4h ago',
    source: 'Economic Times Auto',
    image: 'https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?w=200&h=120&fit=crop',
    category: 'Policy',
    excerpt: 'State government tops up FAME III benefits, creating price advantage over neighboring states',
    content: 'Karnataka government announced today an additional ₹10,000 subsidy for EV purchases, stacking on top of FAME III benefits. Bangalore dealers report immediate spike in walk-ins for Tata Tiago EV and MG Comet, with several dealers in Tamil Nadu and Telangana reporting customers traveling to Karnataka showrooms for better pricing.',
  },
  {
    id: 5,
    title: 'Pre-Owned Compact SUV Prices Jump 8% in April - Best Seller Segment for Dealers',
    time: '5h ago',
    source: 'Cars24 Dealer Report',
    image: 'https://images.unsplash.com/photo-1635744179243-46f2d590310b?w=200&h=120&fit=crop',
    category: 'Used Cars',
    excerpt: 'Strong retail demand and limited supply push used Venue, Sonet, Nexon values higher',
    content: 'Used compact SUV prices have surged 8% month-on-month in April 2026, with 2-3 year old Hyundai Venue, Kia Sonet, and Tata Nexon models seeing the strongest appreciation. Dealers report average selling time of just 11 days compared to 28 days for sedans, with gross margins averaging ₹48,000 per unit on compact SUVs.',
  },
];

interface SideFeedProps {
  onSelect: (article: NewsArticle) => void;
}

export function SideFeed({ onSelect }: SideFeedProps) {
  return (
    <div className="space-y-4">
      {sideNews.map((news) => (
        <div
          key={news.id}
          onClick={() => onSelect(news)}
          className="flex gap-4 cursor-pointer group hover:bg-gray-50 rounded-xl p-3 -m-3 transition-colors"
        >
          <ImageWithFallback
            src={news.image}
            alt={news.title}
            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-sm leading-snug text-gray-900 mb-2 group-hover:text-[#0b85ff] transition-colors line-clamp-3">
              {news.title}
            </h3>
            <span className="text-xs text-gray-500">{news.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
