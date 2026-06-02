import { ImageWithFallback } from './figma/ImageWithFallback';
import { RelatedNews } from './RelatedNews';
import type { NewsArticle } from '../types';
import { ArrowLeft } from 'lucide-react';

interface NewsDetailProps {
  article: NewsArticle;
  onBack: () => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export function NewsDetail({ article, onBack, onSelectArticle }: NewsDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Article */}
      <div className="lg:col-span-2">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#0b85ff] mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to news</span>
        </button>

        <article>
          {article.category && (
            <span className="inline-block px-3 py-1 bg-[#0b85ff] text-white text-sm rounded-full mb-4">
              {article.category}
            </span>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 sm:mb-8">
            <span className="text-gray-900">{article.source}</span>
            <span>•</span>
            <span>{article.time}</span>
          </div>

          <ImageWithFallback
            src={article.image}
            alt={article.title}
            className="w-full rounded-xl sm:rounded-2xl mb-6 sm:mb-8"
          />

          {article.excerpt && (
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 border-l-4 border-[#0b85ff] pl-4 sm:pl-6">
              {article.excerpt}
            </p>
          )}

          <div className="prose prose-lg max-w-none">
            {article.content?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>

      {/* Related News Sidebar */}
      <div className="lg:col-span-1">
        <RelatedNews
          currentArticleId={article.id}
          onSelectArticle={onSelectArticle}
        />
      </div>
    </div>
  );
}
