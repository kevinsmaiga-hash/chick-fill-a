import React from 'react';
import { StoreLocation } from '../types';
import Button from './Button';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { useLocation } from '../context/LocationContext';
import { useNavigate } from 'react-router-dom';

interface LocationCardProps {
  location: StoreLocation;
  isSelected?: boolean;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, isSelected }) => {
  const { setSelectedLocation } = useLocation();
  const navigate = useNavigate();

  const handleSelect = () => {
    setSelectedLocation(location);
    navigate('/menu');
  };

  return (
    <div 
      className={`p-6 rounded-3xl border-2 transition-all duration-300 ${
        isSelected 
          ? 'border-[#E51636] bg-[#E51636]/5 ring-4 ring-[#E51636]/5' 
          : 'border-neutral-100 bg-white hover:border-neutral-300'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-neutral-900">{location.name}</h3>
          <p className="text-sm text-[#E51636] font-semibold mt-1">{location.distance} away</p>
        </div>
        {isSelected && (
          <span className="bg-[#E51636] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
            Selected
          </span>
        )}
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-start text-sm text-neutral-600">
          <MapPin className="w-4 h-4 mr-3 mt-0.5 text-neutral-400 shrink-0" />
          <span>{location.address}</span>
        </div>
        <div className="flex items-center text-sm text-neutral-600">
          <Clock className="w-4 h-4 mr-3 text-neutral-400 shrink-0" />
          <span>{location.hours}</span>
        </div>
        <div className="flex items-center text-sm text-neutral-600">
          <Phone className="w-4 h-4 mr-3 text-neutral-400 shrink-0" />
          <span>{location.phone}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1" size="md" onClick={handleSelect}>
          Order From Here
        </Button>
        <Button variant="secondary" size="md" className="sm:w-auto">
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default LocationCard;
