
export type ProductCategory = '所有商品' | '飾品' | '應援道具';

export interface Product {
  id: number;
  name: string;
  price: string;
  category: ProductCategory;
  imageUrl: string;
  description: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}
