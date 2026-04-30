import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Locations from './pages/Locations';
import AppPromo from './pages/AppPromo';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { LocationProvider } from './context/LocationContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LocationProvider>
      <CartProvider>
        <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-[#E51636]/10 selection:text-[#E51636]">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/app" element={<AppPromo />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </LocationProvider>
  );
}
