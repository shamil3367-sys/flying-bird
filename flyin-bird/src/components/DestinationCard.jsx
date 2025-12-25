import React from 'react';

const DestinationCard = ({ image, title, price }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer h-64">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm">Starting £{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;