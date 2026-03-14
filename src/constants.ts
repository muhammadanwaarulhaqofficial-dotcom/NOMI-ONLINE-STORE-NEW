import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 12500,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    description: 'High-fidelity sound with noise cancellation.',
    isTrending: true,
  },
  {
    id: '2',
    name: 'Luxury Wrist Watch',
    price: 8500,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    description: 'Elegant design for every occasion.',
    isTrending: true,
  },
  {
    id: '3',
    name: 'Smart Home Hub',
    price: 15000,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=1000&auto=format&fit=crop',
    description: 'Control your home with ease.',
  },
  {
    id: '4',
    name: 'Designer Leather Wallet',
    price: 3500,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1000&auto=format&fit=crop',
    description: 'Genuine leather with premium finish.',
  },
  {
    id: '5',
    name: 'Fast Charging Magnetic Power Bank',
    price: 5500,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop',
    description: 'High-capacity portable power for your devices.',
  },
  {
    id: '6',
    name: 'Premium Carbon Fiber Phone Case',
    price: 3200,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1581351123004-757df051db8e?q=80&w=1000&auto=format&fit=crop',
    description: 'Ultra-durable protection with a sleek finish.',
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Muhammad Ubaid',
    rating: 5,
    text: 'Good shop and respected store keeper. Highly recommended for quality products.',
    date: '2024-02-15',
  },
  {
    id: '2',
    author: 'Raja Farash',
    rating: 4,
    text: 'Nice store with great service. Found exactly what I was looking for.',
    date: '2024-01-20',
  },
  {
    id: '3',
    author: 'Ahmed Khan',
    rating: 5,
    text: 'Best online shopping experience in Mansehra. Trustworthy and reliable.',
    date: '2024-03-01',
  }
];
