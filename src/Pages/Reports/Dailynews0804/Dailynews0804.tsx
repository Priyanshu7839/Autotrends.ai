import { useState } from 'react';
import { HeroNews } from './components/HeroNews';
import { SideFeed } from './components/SideFeed';
import { NewsGrid } from './components/NewsGrid';
import { NewsDetail } from './components/NewsDetail';
import type { NewsArticle } from './types';
import { LogoWithName } from '../../../assets/Images/SVG';
import { Helmet } from "react-helmet-async";

export default function Dailynews0804() {
  const [isTrendingActive, setIsTrendingActive] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  return (
    <>
  


    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <LogoWithName height={'35'}/>
          <button
            onClick={() => setIsTrendingActive(!isTrendingActive)}
            className={`px-4 sm:px-6 py-2 rounded-lg transition-colors whitespace-nowrap ${
              isTrendingActive
                ? 'bg-[#0b85ff] text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
          >
            Trending
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {selectedArticle ? (
          <NewsDetail
            article={selectedArticle}
            onBack={() => setSelectedArticle(null)}
            onSelectArticle={setSelectedArticle}
          />
        ) : (
          <>
            {/* Hero + Side Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <HeroNews onSelect={setSelectedArticle} />
              </div>
              <div>
                <SideFeed onSelect={setSelectedArticle} />
              </div>
            </div>

            {/* News Grid */}
            <NewsGrid onSelect={setSelectedArticle} />
          </>
        )}
      </div>
    </div>
    </>
  );
}
