import React from 'react';

export default function ProgressBar({ progress }) {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-50">
      <div 
        className="h-full bg-orange-500 transition-all duration-75 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}