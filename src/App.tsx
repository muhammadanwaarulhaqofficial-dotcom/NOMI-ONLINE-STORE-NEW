/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  User, 
  Star, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { PRODUCTS, REVIEWS } from './constants';
import { Product } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className={`text-2xl font-serif font-bold tracking-tighter ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                NOMI<span className="text-gold">.</span>
              </h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-5">
              <button className={`${scrolled ? 'text-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
                <Search size={20} />
              </button>
              <button className={`${scrolled ? 'text-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
                <User size={20} />
              </button>
              <button className={`relative ${scrolled ? 'text-charcoal' : 'text-white'} hover:text-gold transition-colors`}>
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} className={scrolled ? 'text-charcoal' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-charcoal' : 'text-white'} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-serif border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden luxury-gradient">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=2000&auto=format&fit=crop" 
            alt="Modern Phone Accessories Store" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block"
          >
            Premium Retail Experience
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl text-white font-serif mb-6 leading-tight"
          >
            Mansehra's Trusted <br /> <span className="italic">Online Store</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            Quality products. Honest prices. Trusted service. Experience the finest selection of electronics, accessories, and household items.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="bg-gold text-white px-10 py-4 rounded-none uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all duration-300 w-full sm:w-auto">
              Shop Now
            </button>
            <button className="border border-white/30 text-white px-10 py-4 rounded-none uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
              Explore Products
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-white/30 mx-auto mb-2"></div>
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} className={s <= 4 ? 'fill-gold text-gold' : 'text-gray-300'} />
                ))}
                <span className="ml-3 font-bold text-xl">4.3</span>
              </div>
              <h3 className="text-3xl font-serif mb-2">Customer Choice</h3>
              <p className="text-gray-500">Trusted by thousands across Pakistan for our commitment to quality and respect.</p>
            </div>
            
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck className="text-gold" />, title: 'Trusted Local Business', desc: 'Serving Mansehra with pride' },
                { icon: <CheckCircle className="text-gold" />, title: 'Quality Products', desc: 'Handpicked for excellence' },
                { icon: <MessageCircle className="text-gold" />, title: 'Friendly Service', desc: 'Respected store keepers' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="shop" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold uppercase tracking-widest text-xs font-bold mb-2 block">Curated Collection</span>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Products</h2>
            </div>
            <div className="flex space-x-4">
              {['All', 'Electronics', 'Accessories', 'Household'].map((cat) => (
                <button key={cat} className="text-sm uppercase tracking-widest font-medium hover:text-gold transition-colors pb-1 border-b-2 border-transparent hover:border-gold">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {product.isTrending && (
                    <div className="absolute top-4 left-4 bg-charcoal text-white text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                      Trending
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={addToCart}
                      className="bg-white text-charcoal px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold hover:text-white transition-all"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={20} />
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1 block">{product.category}</span>
                  <h3 className="text-lg font-serif mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-gold font-bold">Rs. {product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="inline-flex items-center space-x-2 text-sm uppercase tracking-[0.3em] font-bold border-b-2 border-charcoal pb-2 hover:text-gold hover:border-gold transition-all">
              <span>View All Products</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Nomi Online Store</h2>
            <div className="w-24 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Trusted Local Store', 
                desc: 'Serving customers in Mansehra with honesty and reliability for years.',
                icon: <MapPin size={32} className="text-gold" />
              },
              { 
                title: 'Quality Products', 
                desc: 'Carefully selected items that our customers trust for their durability and performance.',
                icon: <TrendingUp size={32} className="text-gold" />
              },
              { 
                title: 'Friendly Customer Service', 
                desc: 'Our customers appreciate the respectful and helpful shopkeeper experience.',
                icon: <User size={32} className="text-gold" />
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-white/10 hover:border-gold/50 transition-all duration-500">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-beige relative z-10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1000&auto=format&fit=crop" 
                  alt="Store Interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-gold/20 -z-0 hidden lg:block"></div>
            </div>
            
            <div>
              <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Where Respect <br /> <span className="italic">Meets Quality</span></h2>
              <p className="text-gray-600 text-lg mb-8 font-light leading-relaxed">
                Nomi Online Store started as a trusted local shop in Mansehra and quickly became known for respectful service and quality products. Our mission is simple — provide customers with reliable products and a shopping experience they can trust.
              </p>
              <p className="text-gray-600 text-lg mb-10 font-light leading-relaxed">
                Whether you visit us at Al Shams Plaza or shop from the comfort of your home, we guarantee the same level of dedication and honesty that has built our reputation in the community.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold">10k+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Happy Customers</p>
                </div>
                <div className="w-[1px] h-10 bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold">500+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Premium Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-10 shadow-sm border border-gray-100 italic">
                <div className="flex mb-6 text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-xs">
                    {review.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-sm not-italic">{review.author}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest not-italic">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-8">Visit Our Store</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-600">Al Shams Plaza, Shinkiari Rd, Mohalla Khan Bahadur, Mansehra, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-600">+92 3XX XXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-600">info@nomionline.store</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <button className="bg-charcoal text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold transition-all">
                  Get Directions
                </button>
              </div>
            </div>
            
            <div className="h-[400px] bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 shadow-xl border border-gold/20">
                  <p className="font-serif font-bold">Nomi Online Store</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Mansehra, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl text-white font-serif mb-8">Shop Quality Products Today</h2>
          <p className="text-gray-400 text-lg mb-12 font-light">Join thousands of satisfied customers who trust Nomi Online Store for their premium needs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gold text-white px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white hover:text-charcoal transition-all w-full sm:w-auto">
              Shop Now
            </button>
            <button className="border border-white/30 text-white px-12 py-5 uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6 tracking-tighter">NOMI<span className="text-gold">.</span></h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Providing Mansehra and all of Pakistan with reliable products and a shopping experience built on trust and respect.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-8">Quick Links</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#shop" className="hover:text-gold transition-colors">Shop</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-8">Customer Support</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-gold transition-colors">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-8">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-6">Subscribe to receive updates on new arrivals and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm w-full focus:outline-none focus:border-gold transition-colors"
                />
                <button className="bg-gold px-4 py-3 hover:bg-white hover:text-charcoal transition-all">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              © 2026 Nomi Online Store. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-30 grayscale hover:grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-30 grayscale hover:grayscale-0 transition-all" />
              <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Cash on Delivery</div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/923XXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-charcoal px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}
