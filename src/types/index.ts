export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  specifications: {
    power: string;
    flowRate: string;
    head: string;
    voltage: string;
    material: string;
  };
  rating: number;
  reviews: number;
  stock: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
}