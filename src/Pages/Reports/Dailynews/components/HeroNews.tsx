import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const heroArticle: NewsArticle = {
  id: 0,
  title: 'Pre-Monsoon Sales Surge: Dealers Report 34% Spike in May Bookings Ahead of Festive Season',
  source: 'AutoCar India',
  time: '45 mins ago',
  image: 'https://images.unsplash.com/photo-1769961236211-3046cbcc474d?w=1200&h=675&fit=crop',
  category: 'Market Trends',
  excerpt: 'Strong consumer demand driven by new model launches and favorable interest rates pushing May to become second-best month of 2026',
  content: `Indian auto dealers are witnessing an unprecedented surge in bookings during the first week of May 2026, with a 34% increase compared to April, marking the strongest start to a month this year. The momentum is being driven by multiple factors including new model launches, competitive financing rates, and consumers rushing to purchase before the monsoon season.

Maruti Suzuki dealers report waiting periods of 6-8 weeks for the new eVX electric SUV, while Tata Motors' Nexon CNG variant has seen bookings cross 45,000 units in just two weeks. Mahindra's XUV400 EV facelift and Hyundai's updated Creta are also contributing significantly to the sales momentum.

"This is the best pre-monsoon period we've seen in five years," said Vinkesh Gulati, President of FADA. "Dealers are optimistic about sustaining this momentum through June, especially with interest rates now stabilizing at 8.5% for auto loans and manufacturers offering exchange bonuses of up to ₹50,000."

The surge comes as dealers prepare for the traditional monsoon slowdown in July-August. Industry experts predict May 2026 could end up as the second-highest sales month of the year after the festive October period, with retail sales expected to cross 3.8 lakh units.`,
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
