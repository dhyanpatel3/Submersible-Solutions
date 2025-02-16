import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedProducts from './components/FeaturedProducts';
import TrustBadges from './components/TrustBadges';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <TrustBadges />
      </main>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Submersible Mart</h3>
              <p className="text-gray-400">
                India's leading online marketplace for submersible pumps and spare parts.
                We provide high-quality products with excellent customer service.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">
                Email: support@submersiblemart.com<br />
                Phone: 1800-123-4567<br />
                Address: Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 Submersible Mart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;