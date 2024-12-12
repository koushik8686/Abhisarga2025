 

import React, { useState, useEffect } from 'react';
import { carouselData } from './data/carouselData';
import Timeline from './Timeline';
import CarouselSlide from './CarouselSlide';
import Thumbnails from './Thumbnails';
import NavigationArrows from './NavigationArrows';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  console.log(progress);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % carouselData.length);
          return 0;
        }
        return prev + 1;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    setProgress(0);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      {/* <ProgressBar progress={progress} /> */}
      <Timeline 
        total={carouselData.length}
        currentIndex={currentIndex}
        onSelect={handleThumbnailClick}
      />

      <div className="relative h-full">
        {carouselData.map((item, index) => (
          <CarouselSlide
            key={item.id}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </div>

      <Thumbnails
        items={carouselData}
        currentIndex={currentIndex}
        onSelect={handleThumbnailClick}
      />

      <NavigationArrows
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}