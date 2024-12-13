import { useEffect, useState } from "react";
export const heroImages = [
  {
    title: "Ahisarga - 2025",
    key: "one",
    thumbnail: "/assets/HeroAssets/Abhisarga1.jpg",
  },
  {
    title: "Cultural Events",
    key: "two",
    thumbnail: "/assets/HeroAssets/CulturalEvents1.jpg",
  },
  {
    title: "Pro Shows",
    key: "three",
    thumbnail: "/assets/HeroAssets/ProShow1.jpg",
  },
  {
    title: "Ahisarga - 2025",
    key: "four",
    thumbnail: "/assets/HeroAssets/Abhisarga2.jpg",
  },
  {
    title: "Cultural Events",
    key: "five",
    thumbnail: "/assets/HeroAssets/CulturalEvents2.jpg",
  },
  {
    title: "Ahisarga - 2025",
    key: "six",
    thumbnail: "/assets/HeroAssets/Abhisarga3.jpg",
  },
  {
    title: "Cultural Events",
    key: "seven",
    thumbnail: "/assets/HeroAssets/CulturalEvents3.jpg",
  },
  {
    title: "CEO of Geek for Geeks - 2024",
    key: "eight",
    thumbnail: "/assets/HeroAssets/CEO.jpg",
  },
  {
    title: "Cultural Events",
    key: "nine",
    thumbnail: "/assets/HeroAssets/CulturalEvents4.jpg",
  },
  {
    title: "Pro Shows",
    key: "ten",
    thumbnail: "/assets/HeroAssets/ProShow2.jpg",
  },
  {
    title: "Exciting Prizes",
    key: "eleven",
    thumbnail: "/assets/HeroAssets/ExicitingPrizes1.jpg",
  },
  {
    title: "Exciting Prizes",
    key: "twelve",
    thumbnail: "/assets/HeroAssets/ExicitingPrizes2.jpg",
  },
  {
    title: "Pro Shows",
    key: "thirteen",
    thumbnail: "/assets/HeroAssets/ProShow3.jpg",
  },
  {
    title: "Ahisarga - 2025",
    key: "fourteen",
    thumbnail: "/assets/HeroAssets/Abhisarga5.jpg",
  },
  {
    title: "Ahisarga - 2025",
    key: "fifteen",
    thumbnail: "/assets/HeroAssets/Abhisarga4.jpg",
  },
];

export const usePreloadImages = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
      });
    };

    const loadImages = async () => {
      try {
        const loadedSrcs = await Promise.all(
          heroImages.map((image) =>
            preloadImage(image.thumbnail)
          )
        );
        setLoadedImages(
          heroImages.filter((image) =>
            loadedSrcs.includes(image.thumbnail)
          )
        );
        setIsLoading(false);
      } catch (error) {
        const failedImages = heroImages.filter(
          (image) =>
            !loadedImages.some(
              (loaded) => loaded.thumbnail === image.thumbnail
            )
        );
        setErrors(failedImages);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [heroImages]);

  return { loadedImages, isLoading, errors };
};
