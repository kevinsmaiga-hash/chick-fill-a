import React from 'react';
import { Smartphone, Gift, MapPin, FastForward, ArrowRight, Star, Quote } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'motion/react';

const AppPromo = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 pt-24 pb-48 relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left"
            >
              <span className="text-[#E51636] text-[10px] font-black uppercase tracking-[0.3em] bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10 inline-block">Official App</span>
              <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                YOUR POCKET <br />
                <span className="text-[#E51636]">Sized Zesty.</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                Join over 5 million fans ordering smarter. Every order earns you points toward free treats and surprise rewards.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 cursor-pointer hover:scale-105 hover:shadow-2xl shadow-red-500/20 transition-all rounded-lg" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12 cursor-pointer hover:scale-105 hover:shadow-2xl shadow-red-500/20 transition-all rounded-lg" />
              </div>

              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-2 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                <span className="text-white text-sm font-bold ml-2">4.9/5 Rating (1.2M Reviews)</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative mx-auto w-[300px] md:w-[350px] aspect-[9/19] bg-slate-800 rounded-[50px] border-8 border-slate-700 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-3xl z-20" />
                  <img 
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                    alt="App Screenshot" 
                    className="w-full h-full object-cover rounded-[40px] p-2"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating elements */}
                  <div className="absolute -left-10 md:-left-20 top-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 max-w-[160px] animate-bounce-slow">
                    <div className="p-2 bg-green-100 rounded-lg text-green-600"><Gift className="w-5 h-5" /></div>
                    <p className="text-[10px] font-bold text-slate-800">FREE NUGGETS EARNED!</p>
                  </div>
                   <div className="absolute -right-10 md:-right-20 top-1/2 bg-[#E51636] p-4 rounded-2xl shadow-xl flex items-center space-x-3 text-white max-w-[160px] animate-pulse">
                    <div className="p-2 bg-white/20 rounded-lg"><MapPin className="w-5 h-5" /></div>
                    <p className="text-[10px] font-bold uppercase">Pickup location ready</p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Abstract shapes */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-white rounded-t-[100%]" />
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] mb-4">Why use the app?</h2>
            <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight uppercase">PRO BENEFITS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: "Skip the Line",
                desc: "Order ahead and your meal will be fresh and ready when you pull up to the drive-thru or window."
              },
              {
                icon: <Gift className="w-10 h-10" />,
                title: "Earn Rewards",
                desc: "Every purchase gets you closer to free Zesty favorites. Redeem points for snacks, drinks, or full meals."
              },
              {
                icon: <FastForward className="w-10 h-10" />,
                title: "One-Tap Reorder",
                desc: "Save your favorite customized meals and reorder in seconds. Perfect for your daily lunch run."
              }
            ].map((benefit, i) => (
              <div key={i} className="group p-10 rounded-[48px] bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 border border-transparent hover:border-slate-100">
                <div className="w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center text-[#E51636] mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-3">
                  {benefit.icon}
                </div>
                <h4 className="text-2xl font-extrabold text-slate-800 mb-4 tracking-tight uppercase leading-none">{benefit.title}</h4>
                <p className="text-slate-500 font-semibold text-sm leading-relaxed">{benefit.desc}</p>
                <div className="mt-8">
                  <span className="inline-flex items-center text-xs font-black uppercase tracking-widest text-[#E51636] group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Testimonial */}
      <section className="py-32 bg-slate-900 overflow-hidden relative">
         <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center relative z-10">
               <Quote className="w-20 h-20 text-white/5 mx-auto mb-8" />
               <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight mb-12 uppercase">
                 "THE APP IS A GAME CHANGER. I NEVER HAVE TO WAIT IN LINE AT LUNCH. I'VE ALREADY EARNED 5 FREE SANDWICHES THIS YEAR!"
               </h2>
               <div className="flex items-center justify-center gap-6">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" className="w-16 h-16 rounded-full border-2 border-[#E51636]" alt="Customer" referrerPolicy="no-referrer" />
                 <div className="text-left">
                   <p className="text-white text-xl font-bold uppercase tracking-tight">Jamie Peterson</p>
                   <p className="text-slate-400 text-xs uppercase font-black tracking-[0.2em]">Elite Rewards Member</p>
                 </div>
               </div>
            </div>
         </div>
         <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-[#E51636]/20 blur-[100px] rounded-full" />
         <div className="absolute top-0 right-0 translate-x-1/3 w-64 h-64 bg-[#E51636]/10 blur-[100px] rounded-full" />
      </section>

      {/* Final Promo CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="bg-[#E51636] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden group">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase mb-8 leading-[0.9]">Start earning today.</h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">Click below to download the official Zesty Chicken App and get a free Waffle Fry with your first order.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <Button size="lg" variant="secondary" className="w-full sm:w-auto px-12 py-5 text-xl font-black italic">
                   BROWSE REWARDS
                 </Button>
                 <div className="flex gap-4">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 cursor-pointer" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12 cursor-pointer" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AppPromo;
