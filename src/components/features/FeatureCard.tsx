import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  dotColor: string;
  image?: string;
}

interface FeatureCardProps {
  feature: Feature;
  isReversed?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isReversed }) => {
  const { title, description, bulletPoints, icon: Icon, iconBgColor, iconColor, dotColor, image } = feature;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12">
      {!isReversed && image && (
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />
        </div>
      )}
      
      <div className={`w-full md:w-1/2 ${isReversed ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className={`flex items-center gap-4 mb-6`}>
          <div className={`flex items-center justify-center w-14 h-14 ${iconBgColor} rounded-full`}>
            <Icon className={iconColor} size={24} />
          </div>
          <h4 className="text-2xl font-semibold">{title}</h4>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className={`w-1.5 h-1.5 ${dotColor} rounded-full`}></div>
              <span className="text-gray-600">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {isReversed && image && (
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt={title}
            className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
          />
        </div>
      )}
    </div>
  );
};