import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/dateFormatter';

export const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Blog
      </Link>

      <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
            {post.category.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-gray-500">{formatDate(post.publishedAt)}</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};