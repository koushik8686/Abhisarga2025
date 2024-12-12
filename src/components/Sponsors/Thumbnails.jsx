import React from 'react';

export default function Thumbnails({ items, currentIndex, onSelect }) {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-5">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onSelect(index)}
            className={`relative w-48 h-28 rounded-xl overflow-hidden group transition-transform
              ${index === currentIndex ? 'scale-105 ring-2 ring-orange-500' : 'scale-90 hover:scale-95'}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <h4 className="text-white text-sm font-semibold">{item.title}</h4>
              <p className="text-xs text-white/70">{item.topic}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
  
}