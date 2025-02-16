import React from 'react';
import { Droplet, Wrench, Cable, Pipette as PipeWater } from 'lucide-react';

const categories = [
  {
    id: '1',
    name: 'Submersible Pumps',
    description: 'V-4, V-6, V-8, New Markety, and Tiger brands',
    icon: Droplet,
    image: 'https://tiimg.tistatic.com/fp/1/006/162/v3-v4-v6-v8-submersible-pumps-732.jpg',
    additionalImages: [

    ]
  },
  {
    id: '2',
    name: 'Winding Wire',
    description: 'Enamel copper & submersible winding wire',
    icon: Cable,
    image: 'https://m.media-amazon.com/images/I/71FjoJ1WOIL.jpg'
  },
  {
    id: '3',
    name: 'Pipes & Fittings',
    description: 'PVC, GI fittings, and HDP pipes',
    icon: PipeWater,
    image: 'https://tiimg.tistatic.com/fp/2/007/976/high-pressure-resistant-to-corrosion-berlia-black-hdpe-pipes-379.jpg'
  },
  {
    id: '4',
    name: 'Spare Parts',
    description: 'Copper bush and other genuine parts',
    icon: Wrench,
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/385156798/GU/SJ/EE/1582787/copper-bushes.jpg'
  },
];

export default function CategoryGrid() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900">Shop by Category</h2>
          <p className="mt-4 text-lg text-gray-500">
            Quality products for all your water pumping needs
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="relative group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {category.id === '1' ? (
                  <div className="relative h-48">
                    <img
                      src="https://raw.githubusercontent.com/your-username/your-repo/main/submersible-pumps.jpg"
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-contain p-4"
                    />
                  </div>
                ) : (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="object-cover w-full h-48 transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center">
                    <IconComponent className="h-6 w-6 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
                    <h3 className="ml-2 text-lg font-medium text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                </div>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}