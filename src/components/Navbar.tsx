import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Button from './Button';
import { useCart } from '../context/CartContext';
import { useLocation as useAppLocation } from '../context/LocationContext';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const { selectedLocation } = useAppLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Menu', href: '/menu' },
    { name: 'Locations', href: '/locations' },
    { name: 'App', href: '/app' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#E51636] rounded-full flex items-center justify-center text-white font-black text-xl italic shadow-lg shadow-red-100">
              Z
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800 uppercase">
              ZESTY<span className="text-[#E51636]">CO</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex gap-8 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "transition-colors hover:text-[#E51636]",
                    location.pathname === link.href && "text-[#E51636]"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4 pl-8 border-l border-slate-100">
              <Link to="/locations" className="flex items-center text-xs font-bold text-slate-400 hover:text-[#E51636] uppercase tracking-wider">
                <MapPin className="w-4 h-4 mr-2" />
                {selectedLocation?.name.split(' ')[0] || 'Store'}
              </Link>
              
              <Link to="/checkout" className="relative p-2 text-slate-500 hover:text-[#E51636]">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#E51636] text-[8px] font-black text-white shadow-lg ring-2 ring-white">
                    {totalItems}
                  </span>
                )}
              </Link>
              
              <Button size="sm" onClick={() => navigate('/menu')}>
                Order Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <Link to="/checkout" className="relative p-2 text-neutral-600">
                <ShoppingBag className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#E51636] text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                    {totalItems}
                  </span>
                )}
              </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-600 hover:text-[#E51636] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-bold text-neutral-800 border-b border-neutral-50"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-4">
                <Link to="/locations" className="flex items-center px-3 py-2 text-sm font-medium text-neutral-500">
                  <MapPin className="w-5 h-5 mr-2 text-[#E51636]" />
                  {selectedLocation?.name || 'Find a store'}
                </Link>
                <Button className="w-full" size="lg" onClick={() => setIsOpen(false)}>
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
