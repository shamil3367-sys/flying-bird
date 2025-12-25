import React from 'react';

const TrendingPackages = () => {
  const packages = [
    {
      title: 'Magical Dubai Escape | Perfect Europe Gateway For Couples',
      days: '4N - 5D',
      price: '£740',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
    },
    {
      title: 'Magical Dubai Escape | Perfect Europe Gateway For Couples',
      days: '4N - 5D',
      price: '£740',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600',
    },
    {
      title: 'Magical Dubai Escape | Perfect Europe Gateway For Couples',
      days: '4N - 5D',
      price: '£740',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Packages</h2>
          <p className="text-gray-600">Discover Trending Packages from around the world.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{pkg.days}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 min-h-[3.5rem]">{pkg.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-orange-500">
                    {pkg.price}
                    <span className="text-sm font-normal text-gray-600">/Per Person</span>
                  </div>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm font-semibold">
                    View Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPackages;