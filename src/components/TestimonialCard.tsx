import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating, image }) => {
  return (
    <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-200'}`}
          />
        ))}
      </div>
      <p className="text-neutral-700 italic mb-6 leading-relaxed">"{text}"</p>
      <div className="flex items-center space-x-3">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="text-sm">
          <p className="font-bold text-neutral-900">{name}</p>
          <p className="text-neutral-500 uppercase text-[10px] tracking-widest font-semibold">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
