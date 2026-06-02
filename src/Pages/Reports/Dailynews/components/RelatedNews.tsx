import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const allArticles: NewsArticle[] = [
  {
    id: 0,
    title: 'Pre-Monsoon Sales Surge: Dealers Report 34% Spike in May Bookings Ahead of Festive Season',
    source: 'AutoCar India',
    time: '45 mins ago',
    image: 'https://images.unsplash.com/photo-1769961236211-3046cbcc474d?w=1200&h=675&fit=crop',
    category: 'Market Trends',
  },
  {
    id: 1,
    title: 'Maruti eVX Launch Creates 8-Week Waiting Period - Dealers Rush to Secure Allocation',
    time: '1h ago',
    source: 'ETAuto',
    image: 'https://images.unsplash.com/photo-1639302610362-4c86747e8680?w=200&h=120&fit=crop',
    category: 'New Launch',
  },
  {
    id: 2,
    title: 'Tata Nexon CNG Hits 45,000 Bookings in 15 Days - Supply Crunch Expected',
    time: '2h ago',
    source: 'AutoCar India',
    image: 'https://images.unsplash.com/photo-1726412181429-1a8fb23fc3e0?w=200&h=120&fit=crop',
    category: 'Hot Models',
  },
  {
    id: 3,
    title: 'May Insurance Premiums Rise 12% - Dealers Absorb Cost to Maintain Sales Momentum',
    time: '3h ago',
    source: 'FADA Report',
    image: 'https://images.unsplash.com/photo-1633711507230-f6554ef4d9fa?w=200&h=120&fit=crop',
    category: 'Insurance',
  },
  {
    id: 4,
    title: 'Karnataka Announces ₹10,000 Additional EV Subsidy - Bangalore Dealers See Surge',
    time: '4h ago',
    source: 'Economic Times Auto',
    image: 'https://images.unsplash.com/photo-1615829386703-e2bb66a7cb7d?w=200&h=120&fit=crop',
    category: 'Policy',
  },
  {
    id: 5,
    title: 'Pre-Owned Compact SUV Prices Jump 8% in April - Best Seller Segment for Dealers',
    time: '5h ago',
    source: 'Cars24 Dealer Report',
    image: 'https://images.unsplash.com/photo-1635744179243-46f2d590310b?w=200&h=120&fit=crop',
    category: 'Used Cars',
  },
  {
    id: 6,
    title: 'Summer Service Camps Drive 26% Revenue Surge - Dealers Extend Hours to Meet Demand',
    source: 'AutoCar India',
    time: '3h ago',
    image: 'https://images.unsplash.com/photo-1771340012378-3c86cb649193?w=600&h=400&fit=crop',
    category: 'Fixed Ops',
  },
  {
    id: 7,
    title: 'Hyundai Creta Facelift Pre-Launch Bookings Cross 25,000 - June Delivery Confirmed',
    source: 'ETAuto',
    time: '4h ago',
    image: 'https://images.unsplash.com/photo-1609505864735-f0c0c0314a42?w=600&h=400&fit=crop',
    category: 'New Launch',
  },
  {
    id: 8,
    title: 'RBI Rate Hold Stabilizes Auto Loan EMIs - Conversion Rates Improve 15%',
    source: 'MoneyControl Auto',
    time: '4h ago',
    image: 'https://images.unsplash.com/photo-1770385427634-ef70c1d73a50?w=600&h=400&fit=crop',
    category: 'Finance',
  },
  {
    id: 9,
    title: 'WhatsApp Business API Adoption Crosses 85% - Video Test Drives Go Mainstream',
    source: 'SIAM Digital Report',
    time: '5h ago',
    image: 'https://images.unsplash.com/photo-1706880471107-32928d89757d?w=600&h=400&fit=crop',
    category: 'Technology',
  },
  {
    id: 10,
    title: 'Mahindra XUV700 AX7 Diesel Margins Hit ₹82,000 - Best Performer in ₹20L+ Segment',
    source: 'ZigWheels Pro',
    time: '6h ago',
    image: 'https://images.unsplash.com/photo-1629473998520-366fb3f449c9?w=600&h=400&fit=crop',
    category: 'Margins',
  },
  {
    id: 11,
    title: 'Extended Warranty Penetration Hits 71% - Digital Sign-Up Drives Backend Profits',
    source: 'FADA F&I Report',
    time: '7h ago',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
    category: 'F&I',
  },
  {
    id: 12,
    title: 'Toyota Urban Cruiser Hyryder Allocation Up 40% After Waiting Period Reaches 5 Months',
    source: 'Team-BHP Forums',
    time: '8h ago',
    image: 'https://images.unsplash.com/photo-1565859937791-1f096cc065eb?w=600&h=400&fit=crop',
    category: 'Allocation',
  },
  {
    id: 13,
    title: 'Pre-Owned EV Market Heats Up - Nexon EV Retains 76% Value After 2 Years',
    source: 'Spinny Dealer Platform',
    time: '9h ago',
    image: 'https://images.unsplash.com/photo-1629473997647-637228f53074?w=600&h=400&fit=crop',
    category: 'Used EVs',
  },
  {
    id: 14,
    title: 'BYD Opens Dealer Applications for 50 New Showrooms - Tier-2 City Focus',
    source: 'AutoCar India',
    time: '10h ago',
    image: 'https://images.unsplash.com/photo-1769961233320-86fd8b295b33?w=600&h=400&fit=crop',
    category: 'Franchise',
  },
];

interface RelatedNewsProps {
  currentArticleId: number;
  onSelectArticle: (article: NewsArticle) => void;
}

export function RelatedNews({ currentArticleId, onSelectArticle }: RelatedNewsProps) {
  const relatedArticles = allArticles.filter((article) => article.id !== currentArticleId);

  return (
    <div>
      <h3 className="text-lg text-gray-900 mb-6">Related News</h3>
      <div className="space-y-4">
        {relatedArticles.map((article) => (
          <div
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="flex gap-4 cursor-pointer group hover:bg-gray-50 rounded-xl p-3 -m-3 transition-colors"
          >
            <ImageWithFallback
              src={article.image}
              alt={article.title}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm leading-snug text-gray-900 mb-2 group-hover:text-[#0b85ff] transition-colors line-clamp-3">
                {article.title}
              </h4>
              <span className="text-xs text-gray-500">{article.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
