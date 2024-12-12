import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NavigationArrows({ onPrev, onNext }) {
  return (
    <>
      <button
        onClick={onPrev}
        className="text-white absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-50"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="text-white absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-50"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
}