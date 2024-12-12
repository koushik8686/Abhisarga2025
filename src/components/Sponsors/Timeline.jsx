import React from 'react';

export default function Timeline({ total, currentIndex, onSelect }) {
  return (
    <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`w-11 h-11 rounded-full flex items-center justify-center transition-all
            ${index === currentIndex 
              ? 'bg-orange-500 scale-110 shadow-lg shadow-orange-500/40' 
              : 'bg-white/10 hover:bg-white/20'}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}