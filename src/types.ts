export type MenuCategory = 'Sandwiches' | 'Nuggets' | 'Sides' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isPopular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  distance: string;
  hours: string;
  phone: string;
}
