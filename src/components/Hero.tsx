import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-blue-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://raw.githubusercontent.com/your-username/your-repo/main/submersible-pumps.jpg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'repeat',
          transform: 'rotate(-15deg) scale(1.5)',
          filter: 'blur(2px)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left animate-fade-in-up">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Premium Submersible</span>
              <span className="block text-blue-200">Pumps & Spareparts</span>
            </h1>
            <p className="mt-3 text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl">
              Authorized dealer of V-4, V-6, V-8, New Markety, and Tiger pumps.
              Quality assured ISI submersible pumps and genuine spare parts.
            </p>
            <div className="mt-5 sm:flex sm:justify-start md:mt-8">
              <div className="rounded-md shadow animate-bounce">
                <a
                  href="#featured-products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-transparent rounded-lg" />
              <img
                src="https://raw.githubusercontent.com/your-username/your-repo/main/submersible-pumps.jpg"
                alt="Submersible Pumps Collection"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 object-contain bg-white/10 backdrop-blur-sm p-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 text-gray-50"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 8.33333C960 0 1056 0 1152 8.33333C1248 16.6667 1344 33.3333 1392 41.6667L1440 50V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}