
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, ProductCategory } from '../types';

const Merchandise: React.FC = () => {
  const [filter, setFilter] = useState<ProductCategory>('所有商品');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: ProductCategory[] = ['所有商品', '飾品', '應援道具'];

  const filteredProducts = filter === '所有商品' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <h2 className="text-4xl md:text-6xl font-rock text-center md:text-left">
          OFFICIAL <span className="text-yellow-400">MERCH</span>
        </h2>
        
        <div className="flex gap-2 p-1 bg-zinc-900 border border-white/10 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${
                filter === cat 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-zinc-900 border border-white/10 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 flex flex-col"
          >
            <div 
              className="aspect-square w-full bg-zinc-800 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-6 py-2 bg-white text-black font-bold transform -rotate-1">VIEW DETAILS</span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs text-yellow-400 font-bold tracking-widest uppercase mb-2">{product.category}</span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">{product.name}</h3>
              <div className="mt-auto flex justify-between items-end">
                <span className="text-2xl font-rock text-gray-100">{product.price}</span>
                <span className="text-xs text-gray-500 italic">估計售價</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-zinc-900 border border-white/20 rounded-2xl overflow-hidden animate-zoom-in"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-all"
              onClick={() => setSelectedProduct(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square bg-zinc-800">
                <img 
                  src={selectedProduct.imageUrl} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col">
                <div className="mb-auto space-y-6">
                  <div>
                    <span className="text-sm text-yellow-400 font-bold uppercase tracking-widest">{selectedProduct.category}</span>
                    <h3 className="text-3xl md:text-4xl font-rock mt-2">{selectedProduct.name}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {selectedProduct.description}
                  </p>
                  <div className="text-3xl font-bold text-white">
                    {selectedProduct.price}
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <div className="p-4 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm flex items-center gap-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>本產品為 JYP Entertainment 官方授權販售正品</span>
                  </div>
                  <button className="w-full py-4 bg-white text-black font-bold hover:bg-yellow-400 transition-all uppercase tracking-widest">
                    加入願望清單
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Merchandise;
