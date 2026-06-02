import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const allArticles: NewsArticle[] = [
  {
    id: 0,
    title: 'BREAKING: Hyundai Creta Electric Launched at ₹18.5 Lakh - Dealers Report 12,000 Bookings in First Hour',
    source: 'AutoCar India',
    time: '30 mins ago',
    image: 'https://images.unsplash.com/photo-1769961232204-d4813077b08a?w=1200&h=675&fit=crop',
    category: 'Breaking News',
  },
  {
    id: 1,
    title: 'Mahindra Scorpio Classic Production Halted - Dealers Rush to Clear Remaining Stock',
    time: '1h ago',
    source: 'ETAuto',
    image: 'https://images.unsplash.com/photo-1625037669880-959e0b2f4410?w=200&h=120&fit=crop',
    category: 'Industry News',
  },
  {
    id: 2,
    title: 'GST Council Meeting Today: Auto Industry Seeks 5% Cut on Hybrid Vehicles',
    time: '2h ago',
    source: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1774979300787-bd3563a085b8?w=200&h=120&fit=crop',
    category: 'Policy',
  },
  {
    id: 3,
    title: 'Kia Carens Facelift Teased for May 22 Launch - Dealers Begin Pre-Launch Bookings',
    time: '3h ago',
    source: 'CarDekho',
    image: 'https://images.unsplash.com/photo-1727893512947-8bdc773ceb02?w=200&h=120&fit=crop',
    category: 'Upcoming',
  },
  {
    id: 4,
    title: 'Mumbai Dealers Report 40% Spike in Sunroof Variant Demand Post Heatwave',
    time: '3h ago',
    source: 'AutoCar India',
    image: 'https://images.unsplash.com/photo-1698358894604-a2406c8715e6?w=200&h=120&fit=crop',
    category: 'Market Trends',
  },
  {
    id: 5,
    title: 'ICICI Bank Launches 7.99% Auto Loan Rate for EVs - Lowest in Industry',
    time: '4h ago',
    source: 'MoneyControl',
    image: 'https://images.unsplash.com/photo-1761014586555-947a9555d302?w=200&h=120&fit=crop',
    category: 'Finance',
  },
  {
    id: 6,
    title: 'Maruti Fronx Crosses 1 Lakh Sales Milestone in Just 13 Months - Fastest Ever',
    source: 'AutoCar India',
    time: '2h ago',
    image: 'https://images.unsplash.com/photo-1769961233320-86fd8b295b33?w=600&h=400&fit=crop',
    category: 'Milestones',
  },
  {
    id: 7,
    title: 'Toyota Announces ₹2,800 Crore Bangalore Plant Expansion for EV Production',
    source: 'ETAuto',
    time: '3h ago',
    image: 'https://images.unsplash.com/photo-1677163488586-e70b17e59aab?w=600&h=400&fit=crop',
    category: 'Manufacturing',
  },
  {
    id: 8,
    title: 'Skoda-VW India Dealer Profitability Jumps 64% - Slavia, Kushaq Lead Recovery',
    source: 'MoneyControl Auto',
    time: '4h ago',
    image: 'https://images.unsplash.com/photo-1763181037211-aae76c2282b8?w=600&h=400&fit=crop',
    category: 'Dealer Profits',
  },
  {
    id: 9,
    title: 'AI-Powered CRM Tools Show 31% Improvement in Lead Conversion - Dealers Invest Big',
    source: 'SIAM Digital Report',
    time: '5h ago',
    image: 'https://images.unsplash.com/photo-1774752369880-ceb3979848d3?w=600&h=400&fit=crop',
    category: 'Technology',
  },
  {
    id: 10,
    title: 'Tata Safari Gold Edition Margins Hit ₹1.15 Lakh - Limited Run Creates Premium Pricing',
    source: 'ZigWheels Pro',
    time: '5h ago',
    image: 'https://images.unsplash.com/photo-1748214547306-360d11024747?w=600&h=400&fit=crop',
    category: 'Special Editions',
  },
  {
    id: 11,
    title: 'Ceramic Coating & PPF Services Generate ₹18,000 Average Revenue Per New Car Sale',
    source: 'FADA Aftermarket Report',
    time: '6h ago',
    image: 'https://images.unsplash.com/photo-1654267195847-7425c45bf5e6?w=600&h=400&fit=crop',
    category: 'Aftermarket',
  },
  {
    id: 12,
    title: 'Honda City Hybrid Waiting Period Drops to 2 Weeks as Production Doubles',
    source: 'Team-BHP Forums',
    time: '7h ago',
    image: 'https://images.unsplash.com/photo-1605801936998-a39a1518b03c?w=600&h=400&fit=crop',
    category: 'Inventory Update',
  },
  {
    id: 13,
    title: 'OLX Autos Partners with 800 Dealers for Certified Pre-Owned Program',
    source: 'Economic Times Auto',
    time: '8h ago',
    image: 'https://images.unsplash.com/photo-1729539853641-d5b4aadff618?w=600&h=400&fit=crop',
    category: 'Used Cars',
  },
  {
    id: 14,
    title: 'Citroen Expands to 50 New Cities - Dealer Recruitment Drive Offers ₹3.5 Cr Investment',
    source: 'AutoCar India',
    time: '9h ago',
    image: 'https://images.unsplash.com/photo-1769961232787-66bb70f227fe?w=600&h=400&fit=crop',
    category: 'Network Expansion',
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
