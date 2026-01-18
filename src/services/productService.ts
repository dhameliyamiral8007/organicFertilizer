// Product Service - manages product data for the organic fertilizer e-commerce

export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  features: string[];
  badge?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// Import product images
import vegetableFertilizer from '@/assets/products/vegetable-fertilizer-clean.png';
import flowerFertilizer from '@/assets/products/flower-fertilizer-clean.png';
import organicMatter from '@/assets/products/organic-matter-clean.png';
import organicFertilizer from '@/assets/products/organic-fertilizer-clean.png';

export const products: Product[] = [
  {
    id: 'nisarg-poshan-organic',
    name: 'Nisarg Poshan',
    category: 'general',
    tagline: 'Nourish Your Soil, Naturally!',
    description: 'Premium granularized soil revitalizer made from city compost. Perfect for all types of plants and gardens.',
    price: 299,
    weight: '1 KG',
    image: organicFertilizer,
    features: ['100% Organic', 'City Compost Based', 'All Plant Types', 'Slow Release'],
    badge: 'Best Seller',
  },
  {
    id: 'nisarg-poshan-vegetable',
    name: 'Nisarg Poshan - Vegetable',
    category: 'vegetable',
    tagline: 'Healthy Soil, Healthy Plants, Healthy You!',
    description: 'Specially formulated organic fertilizer for vegetable plants. Boosts growth and yield naturally.',
    price: 349,
    weight: '1 KG',
    image: vegetableFertilizer,
    features: ['Vegetable Specific', 'Higher Yield', 'Chemical Free', 'Rich Nutrients'],
  },
  {
    id: 'nisarg-poshan-flower',
    name: 'Nisarg Poshan - Flower',
    category: 'flower',
    tagline: 'Bloom Brighter, Naturally!',
    description: 'Organic fertilizer specially designed for flowering plants. Enhances bloom quality and fragrance.',
    price: 349,
    weight: '1 KG',
    image: flowerFertilizer,
    features: ['Flower Specific', 'Better Blooms', 'Enhanced Fragrance', 'Long Lasting'],
  },
  {
    id: 'nisarg-shakti',
    name: 'Nisarg Shakti',
    category: 'organic-matter',
    tagline: 'Transform Your Soil, Transform Your Yield',
    description: 'Premium organic matter to enrich soil structure and improve water retention. Foundation for healthy plants.',
    price: 399,
    weight: '1 KG',
    image: organicMatter,
    features: ['Soil Structure', 'Water Retention', 'Microbial Activity', 'Premium Quality'],
    badge: 'New',
  },
];

export const categories: ProductCategory[] = [
  {
    id: 'general',
    name: 'General Purpose',
    description: 'All-purpose organic fertilizers for any plant',
    icon: 'Leaf',
  },
  {
    id: 'vegetable',
    name: 'Vegetable Special',
    description: 'Optimized for vegetable gardens',
    icon: 'Carrot',
  },
  {
    id: 'flower',
    name: 'Flower Special',
    description: 'Enhanced formula for flowering plants',
    icon: 'Flower2',
  },
  {
    id: 'organic-matter',
    name: 'Organic Matter',
    description: 'Soil enrichment and conditioning',
    icon: 'Mountain',
  },
];

export const getProducts = (): Product[] => products;

export const getProductById = (id: string): Product | undefined => 
  products.find(p => p.id === id);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter(p => p.category === category);

export const getCategories = (): ProductCategory[] => categories;

export const getFeaturedProducts = (): Product[] => 
  products.filter(p => p.badge);
