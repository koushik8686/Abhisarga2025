"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  LayoutGroup,
} from "framer-motion";

// Memoize the product card to prevent unnecessary re-renders
const MemoizedProductCard = React.memo(
  ({ product, translate }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        style={{
          x: translate,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 10,
          },
        }}
        className="group/product h-96 w-[30rem] relative flex-shrink-0"
      >
        <motion.img
          src={product.thumbnail}
          alt={product.title}
          initial={{ opacity: 0.8 }}
          animate={{
            opacity: isHovered ? 0.7 : 1,
          }}
          transition={{
            duration: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          height="600"
          width="600"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 0.8 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 h-full w-full bg-black pointer-events-none"
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 text-white text-lg font-semibold"
        >
          {product.title}
        </motion.h2>
      </motion.div>
    );
  }
);

MemoizedProductCard.displayName = "ImageCard";

export const HeroParallax = ({ products }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // More refined and smooth spring configuration
  const springConfig = {
    stiffness: 100, // Slightly lower stiffness for more relaxed motion
    damping: 20, // Reduced damping for smoother transitions
    mass: 1.1, // Slight adjustment to mass for more natural feel
  };

  // Create smoother, more gradual transformations
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 750]), // Slightly reduced max translation
    { ...springConfig, restSpeed: 0.01 } // Added rest speed for subtle settling
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -750]),
    { ...springConfig, restSpeed: 0.01 }
  );

  // More nuanced and subtle 3D transformations
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]), // Wider range for softer rotation
    { ...springConfig, restSpeed: 0.005 }
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]), // Slightly increased initial rotation
    { ...springConfig, restSpeed: 0.005 }
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-500, 350]), // Adjusted range for smoother movement
    { ...springConfig, restSpeed: 0.01 }
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.2, 1]), // Softer opacity transition
    { ...springConfig, restSpeed: 0.005 }
  );

  // Divide products into rows
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  return (
    <LayoutGroup>
      <div
        ref={ref}
        className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto 
        [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Header />

        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="transform-gpu"
        >
          {/* First Row - Reversed */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product) => (
              <MemoizedProductCard
                key={product.key}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>

          {/* Second Row - Normal */}
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product) => (
              <MemoizedProductCard
                key={product.key}
                product={product}
                translate={translateXReverse}
              />
            ))}
          </motion.div>

          {/* Third Row - Reversed */}
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <MemoizedProductCard
                key={product.key}
                product={product}
                translate={translateX}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </LayoutGroup>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white"
      >
        WELCOME TO <br />
        ABHISARGA 2025
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="max-w-full sm:max-w-2xl text-sm sm:text-base md:text-xl mt-4 sm:mt-8 text-neutral-200"
      >
        A Techno-Cultural fest of IIIT Sricity
      </motion.p>
    </div>
  );
};

export default HeroParallax;
