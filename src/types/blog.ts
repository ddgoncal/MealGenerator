export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  category: 'nutrition' | 'health' | 'cooking-tips' | 'lifestyle';
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export type BlogCategory = {
  id: BlogPost['category'];
  name: string;
  description: string;
};