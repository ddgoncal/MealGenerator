import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateFormatter';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <Link to={`/blog/${post.id}`}>
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
            {post.category.replace('-', ' ')}
          </span>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Clock size={16} />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        <Link to={`/blog/${post.id}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-green-600 transition-colors">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};