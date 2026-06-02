import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const sideNews: NewsArticle[] = [
  {
    id: 1,
    title: 'Mahindra Scorpio Classic Production Halted - Dealers Rush to Clear Remaining Stock',
    time: '1h ago',
    source: 'ETAuto',
    image: 'https://images.unsplash.com/photo-1625037669880-959e0b2f4410?w=200&h=120&fit=crop',
    category: 'Industry News',
    excerpt: 'End of an era as Mahindra discontinues ladder-frame classic, offering ₹75,000 discounts',
    content: 'Mahindra has officially halted production of the Scorpio Classic to make way for new electric SUV production lines. Dealers have been instructed to clear remaining stock of approximately 2,800 units by June 15 with aggressive discounts of up to ₹75,000. Collectors and enthusiasts are rushing to secure the last units of the iconic SUV.',
  },
  {
    id: 2,
    title: 'GST Council Meeting Today: Auto Industry Seeks 5% Cut on Hybrid Vehicles',
    time: '2h ago',
    source: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1774979300787-bd3563a085b8?w=200&h=120&fit=crop',
    category: 'Policy',
    excerpt: 'SIAM delegation pushes for GST reduction from 28% to 23% to boost green mobility',
    content: 'The GST Council meeting happening today in New Delhi will review a proposal to reduce GST on strong hybrid vehicles from 28% to 23%. If approved, prices of Toyota Hyryder and Honda City Hybrid could drop by ₹80,000-₹1.2 lakh. Dealers have been instructed to hold delivery of hybrid vehicles pending the decision, expected by 6 PM today.',
  },
  {
    id: 3,
    title: 'Kia Carens Facelift Teased for May 22 Launch - Dealers Begin Pre-Launch Bookings',
    time: '3h ago',
    source: 'CarDekho',
    image: 'https://images.unsplash.com/photo-1727893512947-8bdc773ceb02?w=200&h=120&fit=crop',
    category: 'Upcoming',
    excerpt: 'Updated design, 360-degree camera and new 1.5L turbo diesel expected, bookings start ₹25,000',
    content: 'Kia India has officially teased the Carens facelift scheduled for May 22 launch. Dealers across India have started accepting pre-launch bookings for ₹25,000. Expected updates include revised front fascia, 360-degree camera, ADAS, and a new 1.5L turbo diesel engine. Dealers expect the facelifted Carens to be priced ₹50,000-₹80,000 higher.',
  },
  {
    id: 4,
    title: 'Mumbai Dealers Report 40% Spike in Sunroof Variant Demand Post Heatwave',
    time: '3h ago',
    source: 'AutoCar India',
    image: 'https://images.unsplash.com/photo-1698358894604-a2406c8715e6?w=200&h=120&fit=crop',
    category: 'Market Trends',
    excerpt: 'Record May temperatures drive customers toward premium variants with ventilated seats',
    content: 'Mumbai and Pune dealers are reporting a 40% surge in demand for top variants with panoramic sunroofs and ventilated seats following record-breaking May temperatures touching 42°C. Models like Creta, Seltos, and Grand Vitara are seeing 78% of bookings for top trims versus 62% in March. Dealers are upselling climate comfort features aggressively.',
  },
  {
    id: 5,
    title: 'ICICI Bank Launches 7.99% Auto Loan Rate for EVs - Lowest in Industry',
    time: '4h ago',
    source: 'MoneyControl',
    image: 'https://images.unsplash.com/photo-1761014586555-947a9555d302?w=200&h=120&fit=crop',
    category: 'Finance',
    excerpt: 'Special EV loan scheme offers 1% lower rate than petrol cars, 90% funding available',
    content: 'ICICI Bank launched a special EV financing scheme today offering 7.99% interest rates for electric vehicles, a full 1% lower than the 8.99% rate for petrol/diesel cars. The scheme offers up to 90% funding with tenures up to 7 years. Dealers report this could boost EV conversions by 25-30% as EMIs become more competitive.',
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
