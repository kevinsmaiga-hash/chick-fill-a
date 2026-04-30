import React from 'react';
import { motion } from 'motion/react';
import Button from '../components/Button';
import MenuCard from '../components/MenuCard';
import TestimonialCard from '../components/TestimonialCard';
import { MENU_ITEMS } from '../constants';
import { ChevronRight, ArrowRight, Smartphone, Bike, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const featuredItems = MENU_ITEMS.filter(item => item.isPopular).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-hero-gradient pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-red-50 text-[#E51636] rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              Ready in 10 minutes
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Fresh, fast, and <br/>
              <span className="text-[#E51636]">made just for you</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Experience the perfect crunch with our signature pressure-cooked chicken, hand-breaded and served with a heart of gold.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl shadow-red-200" onClick={() => navigate('/menu')}>
                Order Now <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto border-2 border-slate-100" onClick={() => navigate('/locations')}>
                Find a Location
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square bg-red-50 rounded-full flex items-center justify-center">
               <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
               <div className="w-[85%] aspect-[4/3] bg-white rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=1200"
                    alt="Delicious Zesty Chicken Sandwich"
                    className="w-full h-2/3 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-6">
                     <div className="w-3/4 h-3 bg-slate-100 rounded mb-3"></div>
                     <div className="w-1/2 h-3 bg-slate-50 rounded"></div>
                  </div>
               </div>
               <div className="absolute bottom-10 -left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-xl flex items-center gap-3 border border-white/50">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                  <span className="text-xs font-bold text-slate-700 tracking-tight">Best Seller: Zesty Original</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 bg-neutral-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-xs font-bold text-[#E51636] uppercase tracking-[0.2em] mb-3">Our Menu</h2>
              <h3 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter">FEATURED FAVORITES</h3>
            </div>
            <Button variant="outline" onClick={() => navigate('/menu')}>
              View Full Menu <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* App Promotion */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="bg-neutral-900 rounded-[40px] md:rounded-[60px] p-8 md:p-20 overflow-hidden relative group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                   <span className="text-[#E51636] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full mb-8 inline-block italic">Zesty Rewards</span>
                   <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
                     ORDER FASTER, <br />
                     <span className="text-[#E51636]">EARN MORE.</span>
                   </h2>
                   <p className="text-xl text-white/70 mb-10 leading-relaxed font-medium">
                     Skip the line, customize your order, and earn points on every dollar spent. It's the most rewarding way to Zesty.
                   </p>
                   <div className="flex flex-wrap gap-4">
                      <Button size="lg" variant="primary" className="px-10" onClick={() => navigate('/app')}>
                        Get the App
                      </Button>
                      <div className="flex gap-3">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 hover:opacity-80 transition-opacity cursor-pointer" />
                         <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 hover:opacity-80 transition-opacity cursor-pointer" />
                      </div>
                   </div>
                </div>
                <div className="relative">
                   <motion.img 
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                      alt="Mobile App" 
                      className="w-full max-w-md mx-auto aspect-square object-cover rounded-[40px] border-8 border-neutral-800 shadow-2xl skew-x-1 rotate-3"
                      referrerPolicy="no-referrer"
                   />
                </div>
              </div>
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E51636]/20 rounded-full blur-[120px] -z-0 opacity-50 transition-all duration-700 group-hover:bg-[#E51636]/30" />
           </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-neutral-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-[#A5A5A5] uppercase tracking-[0.3em] mb-4">Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter">WHAT OUR GUESTS SAY</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              text="The most consistent service I've ever experienced at any fast food place. The spicy sandwich is addictive!"
              rating={5}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard 
              name="David Chen"
              text="Downloaded the app and it's so easy. Order ahead and pick up in the drive-thru. Saves me 15 minutes daily!"
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            />
            <TestimonialCard 
              name="Emma Wilson"
              text="Cleanest restaurants and friendliest staff. They really go the extra mile. And those waffle fries? Heaven."
              rating={5}
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </div>
      </section>

      {/* Convenience Strip */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
               <div className="flex items-start space-x-6">
                  <div className="p-5 rounded-3xl bg-neutral-50 text-[#E51636] shrink-0">
                    <Bike className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Fast Delivery</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">Hot and fresh delivered right to your doorstep via our preferred partners.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="p-5 rounded-3xl bg-neutral-50 text-[#E51636] shrink-0">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Mobile Pickup</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">Order through the app and pick up in minutes inside or at the drive-thru.</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="p-5 rounded-3xl bg-neutral-50 text-[#E51636] shrink-0">
                    <Star className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Curbside Service</h4>
                    <p className="text-neutral-500 text-sm leading-relaxed">Let us come to you. Park in a designated spot and we'll bring your order out.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#E51636]">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase italic">Ready to get Zesty?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Button size="lg" variant="secondary" className="px-12 py-5 text-xl font-black bg-white text-[#E51636] hover:bg-neutral-100 italic" onClick={() => navigate('/menu')}>
                 ORDER NOW
               </Button>
               <Button variant="ghost" className="text-white hover:bg-white/10 px-12 py-5 text-xl font-black italic">
                  FIND A LOCATION
               </Button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
