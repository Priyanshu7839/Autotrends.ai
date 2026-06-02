import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../types';

const newsArticles: NewsArticle[] = [
  {
    id: 6,
    title: 'Summer Service Camps Drive 26% Revenue Surge - Dealers Extend Hours to Meet Demand',
    source: 'AutoCar India',
    time: '3h ago',
    image: 'https://images.unsplash.com/photo-1771340012378-3c86cb649193?w=600&h=400&fit=crop',
    category: 'Fixed Ops',
    excerpt: 'Pre-monsoon AC servicing and checkups create record footfall at service centers',
    content: 'Dealer service departments are reporting a 26% surge in revenue during May\'s first week as summer service camps attract record customer footfall. Pre-monsoon AC servicing, wheel alignment, and general checkups are driving an average ₹4,200 per service visit. Many dealers have extended service hours to 8 PM and added Saturday shifts to handle demand.',
  },
  {
    id: 7,
    title: 'Hyundai Creta Facelift Pre-Launch Bookings Cross 25,000 - June Delivery Confirmed',
    source: 'ETAuto',
    time: '4h ago',
    image: 'https://images.unsplash.com/photo-1609505864735-f0c0c0314a42?w=600&h=400&fit=crop',
    category: 'New Launch',
    excerpt: 'Updated design, ADAS features and panoramic sunroof driving strong advance bookings',
    content: 'Hyundai\'s Creta facelift has received over 25,000 pre-launch bookings ahead of its May 16 launch, with dealers reporting 78% opting for top variants with ADAS and panoramic sunroof. The company has confirmed June delivery for early bookers. Dealers expect the facelifted Creta to push monthly sales past 15,000 units by July.',
  },
  {
    id: 8,
    title: 'RBI Rate Hold Stabilizes Auto Loan EMIs - Conversion Rates Improve 15%',
    source: 'MoneyControl Auto',
    time: '4h ago',
    image: 'https://images.unsplash.com/photo-1770385427634-ef70c1d73a50?w=600&h=400&fit=crop',
    category: 'Finance',
    excerpt: 'Stable 8.5% lending rate environment brings customers back to showrooms',
    content: 'RBI\'s decision to hold repo rates has stabilized auto loan interest rates at 8.5%, leading to a 15% improvement in loan conversion rates since April. Dealers report that EMI predictability has reduced customer hesitation, with 72% of purchases now financed versus 68% in March. Banks are also offering pre-approved loans to drive volume.',
  },
  {
    id: 9,
    title: 'WhatsApp Business API Adoption Crosses 85% - Video Test Drives Go Mainstream',
    source: 'SIAM Digital Report',
    time: '5h ago',
    image: 'https://images.unsplash.com/photo-1706880471107-32928d89757d?w=600&h=400&fit=crop',
    category: 'Technology',
    excerpt: 'Dealers using video consultations report 40% reduction in physical visit time',
    content: 'Dealer adoption of WhatsApp Business API has reached 85%, with video test drive previews, virtual showroom tours, and instant financing approvals becoming standard practice. Dealers report that pre-qualified customers spend 40% less time at showrooms while conversion rates have improved to 28% from 22%, significantly improving sales efficiency.',
  },
  {
    id: 10,
    title: 'Mahindra XUV700 AX7 Diesel Margins Hit ₹82,000 - Best Performer in ₹20L+ Segment',
    source: 'ZigWheels Pro',
    time: '6h ago',
    image: 'https://images.unsplash.com/photo-1629473998520-366fb3f449c9?w=600&h=400&fit=crop',
    category: 'Margins',
    excerpt: '4-week waiting period and strong ADAS demand maintain premium pricing power',
    content: 'The Mahindra XUV700 AX7 diesel variant is delivering dealer margins averaging ₹82,000 per unit, the highest in the ₹20+ lakh segment. Strong demand for ADAS-equipped variants and a 4-week waiting period have eliminated discounting entirely. Dealers report that 58% of XUV700 sales are now top-spec AX7, versus 42% six months ago.',
  },
  {
    id: 11,
    title: 'Extended Warranty Penetration Hits 71% - Digital Sign-Up Drives Backend Profits',
    source: 'FADA F&I Report',
    time: '7h ago',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
    category: 'F&I',
    excerpt: 'Tablet-based F&I presentations and QR code contracts improve customer acceptance',
    content: 'Extended warranty penetration has reached 71% in May 2026, up from 63% last year, driven by digital F&I presentation tools and instant policy issuance via QR codes. Dealers now average ₹34,500 in F&I per vehicle retailed, with RSA packages and ceramic coating adding to backend profits. Digital documentation has cut F&I time by 35%.',
  },
  {
    id: 12,
    title: 'Toyota Urban Cruiser Hyryder Allocation Up 40% After Waiting Period Reaches 5 Months',
    source: 'Team-BHP Forums',
    time: '8h ago',
    image: 'https://images.unsplash.com/photo-1565859937791-1f096cc065eb?w=600&h=400&fit=crop',
    category: 'Allocation',
    excerpt: 'Strong hybrid sales prompt production ramp-up, high-volume dealers get priority allocation',
    content: 'Toyota has increased Urban Cruiser Hyryder allocation by 40% for May-June after waiting periods touched 5 months for strong hybrid variants. Top-volume dealers are getting priority allocation of the highly profitable strong hybrid, which commands ₹72,000 average margins. The company aims to reduce waiting periods to 2-3 months by July.',
  },
  {
    id: 13,
    title: 'Pre-Owned EV Market Heats Up - Nexon EV Retains 76% Value After 2 Years',
    source: 'Spinny Dealer Platform',
    time: '9h ago',
    image: 'https://images.unsplash.com/photo-1629473997647-637228f53074?w=600&h=400&fit=crop',
    category: 'Used EVs',
    excerpt: 'Battery health certification and extended warranties make used EVs attractive to dealers',
    content: 'The pre-owned EV market is gaining momentum with 2-year-old Tata Nexon EVs retaining 76% of their ex-showroom value, higher than many petrol SUVs. Dealers report that manufacturer-backed battery health certification and transferable warranties have eliminated buyer hesitation. Used EV volumes are up 140% year-over-year, with gross margins of ₹52,000 per unit.',
  },
  {
    id: 14,
    title: 'BYD Opens Dealer Applications for 50 New Showrooms - Tier-2 City Focus',
    source: 'AutoCar India',
    time: '10h ago',
    image: 'https://images.unsplash.com/photo-1769961233320-86fd8b295b33?w=600&h=400&fit=crop',
    category: 'Franchise',
    excerpt: 'Chinese EV giant targets Nashik, Coimbatore, Indore with exclusive territory offers',
    content: 'BYD India has opened dealer applications for 50 new showrooms across tier-2 cities including Nashik, Coimbatore, Indore, Jaipur, and Chandigarh. The company is offering exclusive territories, low inventory requirements of just 8-10 units, and dealer margins of ₹1.15 lakh per vehicle. Minimum investment is set at ₹4.5 crore including land.',
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
