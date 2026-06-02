import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const heroArticle: NewsArticle = {
  id: 0,
  title: 'BREAKING: Hyundai Creta Electric Launched at ₹18.5 Lakh - Dealers Report 12,000 Bookings in First Hour',
  source: 'AutoCar India',
  time: '30 mins ago',
  image: 'https://images.unsplash.com/photo-1769961232204-d4813077b08a?w=1200&h=675&fit=crop',
  category: 'Breaking News',
  excerpt: 'India\'s most popular SUV goes electric with 500km range, dealers scramble to meet overwhelming demand',
  content: `Hyundai Motor India launched the highly anticipated Creta Electric today at ₹18.5 lakh (ex-showroom), creating an instant frenzy with over 12,000 bookings recorded in the first hour alone. Dealers across the country are reporting their booking websites crashing under the load as customers rush to secure India's first mass-market electric SUV.

The Creta Electric features a 500km claimed range on a single charge, 0-100 kmph in 7.9 seconds, and comes loaded with Level 2 ADAS, panoramic sunroof, and dual 10.25-inch displays. Available in three variants - Executive, Premium, and Excellence - prices range from ₹18.5 lakh to ₹24.8 lakh, undercutting competitors by ₹3-4 lakh.

"We've never seen anything like this," said Rajiv Mehra, a Hyundai dealer in Delhi. "Our phone hasn't stopped ringing. We're already looking at 3-4 month waiting periods for the top Excellence variant. Margins are healthy at ₹95,000 per unit, and with the Karnataka state subsidy, customers in Bangalore are getting it for effectively ₹18.4 lakh."

Hyundai has allocated 8,000 units for May-June deliveries, with production ramping up to 12,000 units per month from July. The company expects the Creta Electric to capture 40% of the sub-₹25 lakh EV market by year-end. Dealers are being offered special training programs this weekend to handle customer queries about charging infrastructure and battery warranty.`,
};

interface HeroNewsProps {
  onSelect: (article: NewsArticle) => void;
}

export function HeroNews({ onSelect }: HeroNewsProps) {
  return (
    <div
      onClick={() => onSelect(heroArticle)}
      className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className="aspect-[16/9] relative">
        <ImageWithFallback
          src={heroArticle.image}
          alt="Featured automotive news"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="px-2 sm:px-3 py-1 bg-[#0b85ff] text-white text-xs sm:text-sm rounded-full">
              {heroArticle.category}
            </span>
            <span className="text-white/80 text-xs sm:text-sm">{heroArticle.source}</span>
            <span className="text-white/60 text-xs sm:text-sm">{heroArticle.time}</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-white leading-tight mb-2 sm:mb-3 group-hover:text-[#0b85ff] transition-colors">
            {heroArticle.title}
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl line-clamp-2 sm:line-clamp-none">
            {heroArticle.excerpt}
          </p>
        </div>
      </div>
    </div>
  );
}
