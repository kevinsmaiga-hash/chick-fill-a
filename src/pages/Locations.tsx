import React from 'react';
import { LOCATIONS } from '../constants';
import LocationCard from '../components/LocationCard';
import { useLocation } from '../context/LocationContext';
import { Search, Map as MapIcon, Navigation } from 'lucide-react';
import Button from '../components/Button';

const Locations = () => {
  const { selectedLocation } = useLocation();

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="bg-white border-b border-neutral-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter italic mb-4 uppercase leading-tight">Find a Zesty near you</h1>
          <p className="text-neutral-500 mb-10 font-medium">Over 2,000 restaurants across the country serving fresh flavors.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Enter zip code or city..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#E51636] font-medium transition-all"
              />
            </div>
            <Button size="lg" className="sm:w-auto flex items-center justify-center">
              <Navigation className="w-4 h-4 mr-2" /> Use my location
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-neutral-900">Search Results</h2>
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{LOCATIONS.length} Stores Found</span>
            </div>
            {LOCATIONS.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                isSelected={selectedLocation?.id === location.id}
              />
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-7 h-[600px] lg:h-auto rounded-[40px] overflow-hidden bg-neutral-200 border-8 border-white shadow-xl relative group">
            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.98,40.75,12,0/800x800?access_token=pk.placeholder')] bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/20 backdrop-blur-[2px]">
              <div className="bg-white p-8 rounded-full shadow-2xl mb-6">
                 <MapIcon className="w-12 h-12 text-[#E51636]" />
              </div>
              <div className="bg-white/90 backdrop-blur-md px-8 py-6 rounded-3xl text-center max-w-xs shadow-xl border border-white">
                <p className="font-black text-neutral-900 uppercase italic tracking-tighter text-xl mb-1">Interactive Map</p>
                <p className="text-sm text-neutral-500 font-medium">Select a store from the list to see it on the map and check local traffic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
