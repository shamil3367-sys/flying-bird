import React from 'react';
import DestinationCard from './DestinationCard';

const ExploreSection = () => {
  const destinations = [
    { title: 'Morocco', price: '670', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500' },
    { title: 'Paris', price: '670', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500' },
    { title: 'Morocco', price: '670', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500' },
    { title: 'Paris', price: '670', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500' },
    { title: 'Morocco', price: '670', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500' },
    { title: 'Paris', price: '670', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500' },
    { title: 'Morocco', price: '670', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=500' },
    { title: 'Paris', price: '670', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500' },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Together,
            <br />
            Enjoy Together
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            "Travel is more fun when shared! Join friends, family, or like-minded explorers on our expertly planned group trips."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;