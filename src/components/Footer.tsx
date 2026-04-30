import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#E51636] rounded-full flex items-center justify-center text-white font-black text-sm italic">
                Z
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">
                ZESTY<span className="text-[#E51636]">CO</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed">
              Serving the perfect crunch with a smile since 1998. Fresh, fast, and inspired by you.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Menu</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li><Link to="/menu" className="hover:text-[#E51636] transition-colors">Sandwiches</Link></li>
              <li><Link to="/menu" className="hover:text-[#E51636] transition-colors">Nuggets</Link></li>
              <li><Link to="/menu" className="hover:text-[#E51636] transition-colors">Waffle Fries</Link></li>
              <li><Link to="/menu" className="hover:text-[#E51636] transition-colors">Beverages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Experience</h4>
            <ul className="space-y-4 text-sm font-semibold text-slate-500">
              <li><Link to="/app" className="hover:text-[#E51636] transition-colors">Zesty Rewards</Link></li>
              <li><Link to="/locations" className="hover:text-[#E51636] transition-colors">Find Locations</Link></li>
              <li><Link to="/about" className="hover:text-[#E51636] transition-colors">Our Standard</Link></li>
              <li><Link to="/contact" className="hover:text-[#E51636] transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em] mb-8">Get the App</h4>
             <div className="flex flex-col gap-3">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 w-fit cursor-pointer hover:opacity-80 transition-opacity" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 w-fit cursor-pointer hover:opacity-80 transition-opacity" />
             </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em]">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Nutrition</a>
          </div>
          <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
            © 2026 ZESTYCO FOODS
          </p>
          <div className="flex gap-4">
             {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-300 hover:text-[#E51636] transition-colors">
                   <Icon className="w-5 h-5" />
                </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
