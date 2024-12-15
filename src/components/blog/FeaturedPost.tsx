import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';
import { formatDate } from '../../utils/dateFormatter';

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <article className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-[4/3] md:aspect-auto">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            Featured Article
          </span>
          
          <Link to={`/blog/${post.id}`}>
            <h2 className="text-3xl font-bold mb-4 hover:text-green-600 transition-colors">
              {post.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">{formatDate(post.publishedAt)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
          >
            Read More <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
};