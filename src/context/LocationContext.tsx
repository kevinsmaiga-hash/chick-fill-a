import React, { createContext, useContext, useState, ReactNode } from 'react';
import { StoreLocation } from '../types';
import { LOCATIONS } from '../constants';

interface LocationContextType {
  selectedLocation: StoreLocation | null;
  setSelectedLocation: (location: StoreLocation) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState<StoreLocation | null>(LOCATIONS[0]);

  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error('useLocation must be used within a LocationProvider');
  return context;
};
