import { Product, SingleCard, Pack, Accessory } from '../models/product-model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    type: 'CARD',
    name: 'Charizard VMAX', // O valor visível ao cliente continua em português
    price: 250.00,
    stock: 2,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    elementCategory: 'Fogo',
    rarity: 'Rara Secreta',
    condition: 'Near Mint',
    language: 'Português'
  } as SingleCard,
  {
    id: 2,
    type: 'CARD',
    name: 'Blastoise VMAX', // O valor visível ao cliente continua em português
    price: 200.00,
    stock: 3,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
    elementCategory: 'Fogo',
    rarity: 'Rara Secreta',
    condition: 'Near Mint',
    language: 'Português'
  } as SingleCard,
  
  {
    id: 3,
    type: 'PACK',
    name: 'Batalha de Liga: Inteleon VMAX',
    price: 180.00,
    stock: 5,
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png',
    collection: 'Espada e Escudo',
    sealedType: 'Deck',
    cardCount: 60
  } as Pack,
  
  {
    id: 3,
    type: 'ACCESSORY',
    name: 'Shields Sleeves Pokémon (65 unid.)',
    price: 45.00,
    stock: 12,
    imageUrl: 'https://tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg',
    brand: 'Ultra Pro',
    accessoryType: 'Protetor Standard'
  } as Accessory
];