import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'V8 Pro Submersible Pump',
    description: '2HP High-Performance Pump with ISI Mark',
    price: 15999,
    images: ['https://tiimg.tistatic.com/fp/1/006/162/v3-v4-v6-v8-submersible-pumps-732.jpg'],
    rating: 4.5,
    reviews: 128,
  },
  {
    id: '2',
    name: 'Premium Copper Winding Wire',
    description: 'High-quality enamel copper winding wire',
    price: 4599,
    images: ['https://image.made-in-china.com/2f0j00VgRkwqeCSjcs/Good-Quality-15-Swg-Coil-Winding-Copper-Wire-5swg-Cupper-Cu-Magnet-Wire-180-Degree-Enameled-Wire.webp'],
    rating: 4.8,
    reviews: 89,
  },
  {
    id: '3',
    name: 'HDP Pipe Bundle',
    description: 'Heavy-duty HDP pipes with fittings',
    price: 2999,
    images: ['https://cdn.dotpe.in/longtail/store-items/8549723/SsUFMX7l.webp'],
    rating: 4.3,
    reviews: 256,
  },
];

export default function FeaturedProducts() {
  return (
    <div className="bg-white py-12" id="featured-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our most popular and highly-rated products
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-contain w-full h-64 rounded-t-lg p-4 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4 flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}