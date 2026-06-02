export interface NewsArticle {
  id: number;
  title: string;
  source: string;
  time: string;
  image: string;
  category?: string;
  excerpt?: string;
  content?: string;
}
