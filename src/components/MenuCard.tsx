import React from 'react';
import { MenuItem } from '../types';
import Button from './Button';
import { Plus, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500"
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-slate-50">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        {item.isPopular && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#E51636] shadow-sm">
            Pop Choice
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-extrabold text-slate-800 group-hover:text-[#E51636] transition-colors tracking-tight">
            {item.name}
          </h3>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2">
            {item.category}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-black text-slate-900">
            ${item.price.toFixed(2)}
          </span>
          <Button
            variant="primary"
            size="sm"
            className="w-10 h-10 p-0 rounded-full"
            onClick={() => addToCart(item)}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
