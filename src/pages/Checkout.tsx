import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useLocation } from '../context/LocationContext';
import Button from '../components/Button';
import { ShoppingBag, Trash2, ChevronLeft, CreditCard, Apple, CheckCircle2, MapPin, Plus, Minus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const Checkout = () => {
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const { selectedLocation } = useLocation();
  const [isOrdered, setIsOrdered] = useState(false);
  const navigate = useNavigate();

  const handleOrder = () => {
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3500);
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-12"
        >
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-10 text-[#E51636]">
             <CheckCircle2 className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter mb-6 uppercase leading-none">ORDER RECEIVED</h1>
          <p className="text-slate-500 text-xl font-medium max-w-sm mx-auto">
            Your feast is being prepped at <br/>
            <span className="text-[#E51636] font-extrabold">{selectedLocation?.name}</span>.
          </p>
        </motion.div>
        <div className="w-full max-w-sm h-1.5 bg-slate-50 rounded-full overflow-hidden mb-12 shadow-inner">
           <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3 }}
              className="h-full bg-[#E51636] shadow-lg shadow-red-200"
           />
        </div>
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] animate-pulse">Redirecting to Dashboard</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-white p-16 rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-50 max-w-md w-full">
           <ShoppingBag className="w-20 h-20 text-slate-100 mx-auto mb-10" />
           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase">YOUR BAG IS EMPTY</h2>
           <p className="text-slate-400 mb-12 font-medium">Ready to discover your next favorite meal?</p>
           <Button className="w-full" size="lg" onClick={() => navigate('/menu')}>
             Explore Menu
           </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-8 py-16 max-w-7xl">
        <button 
          onClick={() => navigate('/menu')}
          className="inline-flex items-center text-sm font-bold text-neutral-500 hover:text-[#E51636] mb-8 transition-colors group"
        >
          <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Menu
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Cart Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm border border-neutral-100">
               <div className="flex items-center justify-between mb-10">
                 <h1 className="text-3xl font-black text-neutral-900 tracking-tighter uppercase italic">Your Order</h1>
                 <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">{totalItems} Items</span>
               </div>

               <div className="space-y-8">
                 {cart.map((item) => (
                   <div key={item.id} className="flex items-start justify-between group">
                     <div className="flex items-start space-x-6">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 rounded-2xl object-cover shrink-0" 
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h3 className="text-lg font-bold text-neutral-900">{item.name}</h3>
                          <p className="text-sm text-neutral-500 mb-4">{item.category}</p>
                          <div className="flex items-center space-x-4">
                             <div className="flex items-center border border-neutral-100 rounded-xl p-1 bg-neutral-50">
                               <button 
                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                 className="p-1 hover:text-[#E51636]"
                               >
                                 <Minus className="w-4 h-4" />
                               </button>
                               <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                               <button 
                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                 className="p-1 hover:text-[#E51636]"
                               >
                                 <Plus className="w-4 h-4" />
                               </button>
                             </div>
                             <button 
                               onClick={() => removeFromCart(item.id)}
                               className="text-xs font-bold text-neutral-400 hover:text-red-500 uppercase tracking-widest"
                             >
                               Remove
                             </button>
                          </div>
                        </div>
                     </div>
                     <p className="text-lg font-black text-neutral-900">${(item.price * item.quantity).toFixed(2)}</p>
                   </div>
                 ))}
               </div>
               
               <div className="mt-12 pt-10 border-t border-neutral-50">
                  <p className="text-xs font-black text-neutral-400 uppercase tracking-[0.2em] mb-6">Upsell: Make it a meal?</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-[#E51636]/30 transition-colors cursor-pointer group">
                        <div className="flex items-center space-x-4 text-sm">
                           <img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=200" className="w-12 h-12 rounded-xl object-cover" alt="Fries" referrerPolicy="no-referrer" />
                           <div>
                              <p className="font-bold">Add Waffle Fries</p>
                              <p className="text-neutral-500">+$2.85</p>
                           </div>
                        </div>
                        <Plus className="w-5 h-5 text-neutral-300 group-hover:text-[#E51636]" />
                     </div>
                      <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-2xl border border-neutral-100 hover:border-[#E51636]/30 transition-colors cursor-pointer group">
                        <div className="flex items-center space-x-4 text-sm">
                           <img src="https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=200" className="w-12 h-12 rounded-xl object-cover" alt="Lemonade" referrerPolicy="no-referrer" />
                           <div>
                              <p className="font-bold">Add Lemonade</p>
                              <p className="text-neutral-500">+$2.45</p>
                           </div>
                        </div>
                        <Plus className="w-5 h-5 text-neutral-300 group-hover:text-[#E51636]" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Checkout Info */}
          <div className="lg:col-span-5">
             <div className="sticky top-32 space-y-6">
                {/* Location Card */}
                <div className="bg-[#E51636] rounded-[40px] p-8 text-white shadow-xl shadow-[#E51636]/20">
                   <div className="flex items-center justify-between mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest opacity-80">Pickup at</h4>
                      <button onClick={() => navigate('/locations')} className="text-[10px] font-bold uppercase tracking-widest underline decoration-white/30 underline-offset-4">Change</button>
                   </div>
                   <div className="flex items-start space-x-4">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xl font-black italic tracking-tighter mb-1 uppercase">{selectedLocation?.name}</p>
                        <p className="text-sm opacity-80">{selectedLocation?.address}</p>
                        <p className="text-xs font-bold mt-4 bg-white/20 inline-block px-3 py-1 rounded-full">{selectedLocation?.hours}</p>
                      </div>
                   </div>
                </div>

                {/* Summary */}
                <div className="bg-white rounded-[40px] p-8 shadow-sm border border-neutral-100">
                   <h4 className="text-lg font-bold text-neutral-900 mb-6 uppercase tracking-tighter italic">Summary</h4>
                   <div className="space-y-4 text-sm font-medium text-neutral-600 mb-8">
                      <div className="flex justify-between">
                         <span>Subtotal</span>
                         <span className="text-neutral-900 font-bold">${totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                         <span>Sales Tax</span>
                         <span className="text-neutral-900 font-bold">${(totalPrice * 0.08).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                         <span>Service Fee</span>
                         <span className="text-green-500 font-bold">FREE</span>
                      </div>
                      <div className="pt-4 border-t border-neutral-50 flex justify-between items-end">
                         <span className="text-lg font-black text-neutral-900 uppercase italic">Total</span>
                         <span className="text-3xl font-black text-[#E51636] tracking-tighter">${(totalPrice * 1.08).toFixed(2)}</span>
                      </div>
                   </div>

                   <hr className="border-neutral-50 mb-8" />

                   <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">Payment Method</p>
                   <div className="flex gap-4 mb-8">
                      <button className="flex-1 bg-neutral-900 text-white p-4 rounded-2xl flex items-center justify-center hover:bg-black transition-colors">
                        <Apple className="w-5 h-5 mr-2" /> Apple Pay
                      </button>
                      <button className="flex-1 bg-neutral-50 border-2 border-neutral-100 text-neutral-900 p-4 rounded-2xl flex items-center justify-center hover:border-neutral-300 transition-all">
                        <CreditCard className="w-5 h-5 mr-3" /> Card
                      </button>
                   </div>

                   <Button className="w-full text-xl py-6 italic uppercase" size="lg" onClick={handleOrder}>
                     Submit Order
                   </Button>
                   <p className="text-center text-[10px] text-neutral-400 mt-4 font-medium italic">
                     By clicking "Submit Order", you agree to our Terms of Use.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
