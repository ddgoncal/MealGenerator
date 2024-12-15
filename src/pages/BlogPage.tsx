import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { FeaturedPost } from '../components/blog/FeaturedPost';
import { BlogCard } from '../components/blog/BlogCard';
import { CategoryFilter } from '../components/blog/CategoryFilter';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const featuredPost = blogPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <div className="inline-block p-2 bg-green-50 rounded-full mb-4">
          <BookOpen className="text-green-600" size={32} />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Nutrition & Health Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover expert insights on nutrition, health, and wellness to support your journey towards a healthier lifestyle.
        </p>
      </div>

      <FeaturedPost post={featuredPost} />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {remainingPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};