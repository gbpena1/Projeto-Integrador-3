// SUPER classe 
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  imageUrl: string;
  type: 'CARD' | 'PACK' | 'ACCESSORY';
}

// SUB classes 
export interface SingleCard extends Product {
  type: 'CARD';
  elementCategory: string;
  rarity: string;
  condition: string;
  language: string;
}
export interface Pack extends Product {
  type: 'PACK';
  collection: string;
  sealedType: string;
  cardCount: number;
}
export interface Accessory extends Product {
  type: 'ACCESSORY';
  brand: string;
  accessoryType: string;
}