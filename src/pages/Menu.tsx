import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory } from '../types';
import MenuCard from '../components/MenuCard';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ChevronRight, Search, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  const categories: (MenuCategory | 'All')[] = ['All', 'Sandwiches', 'Nuggets', 'Sides', 'Drinks'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      {/* Menu Header */}
      <div className="bg-white pt-16 pb-12 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-none mb-4 uppercase">OUR MENU</h1>
              <p className="text-slate-500 font-semibold uppercase text-xs tracking-widest">Hand-breaded flavors & signature sides</p>
            </div>
            
            <div className="relative w-full md:w-[400px]">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5" />
              <input
                type="text"
                placeholder="Find your favorite..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-slate-50 focus:outline-none focus:ring-2 focus:ring-[#E51636] focus:border-transparent bg-slate-50 font-bold text-slate-700 transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#E51636] text-white shadow-xl shadow-red-100'
                    : 'bg-white border-2 border-slate-50 text-slate-400 hover:border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[40px]">
            <Search className="w-16 h-16 text-neutral-200 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900">No items found</h3>
            <p className="text-neutral-500 mt-2">Try adjusting your search or category filters.</p>
            <Button variant="secondary" className="mt-8" onClick={() => { setActiveCategory('All'); setSearchTerm(''); }}>
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      {/* Floating Order Bar (Mobile only sticky requested) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6 lg:hidden">
         <AnimatePresence>
           {totalItems > 0 && (
             <motion.div
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 100, opacity: 0 }}
               className="bg-[#E51636] rounded-2xl shadow-2xl p-4 flex items-center justify-between text-white"
             >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Your Order</p>
                    <p className="font-bold">{totalItems} {totalItems === 1 ? 'item' : 'items'} • ${totalPrice.toFixed(2)}</p>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/checkout')}
                  className="bg-white text-[#E51636] px-6 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-transform"
                >
                  View Order
                </button>
             </motion.div>
           )}
         </AnimatePresence>
      </div>
      
      {/* Desktop Perspective Sticky Column could go here, but prompt requested a simplified cart system */}
    </div>
  );
};

export default Menu;
