export const textVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1], // A smoother cubic bezier curve
    },
  },
  exit: {
    scale: 10, // Reduced scale for less abrupt zoom-out
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export const lineVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1, // Slightly longer duration for smoothness
      delay: 0.3, // Earlier delay to sync better with text
      ease: [0.42, 0, 0.58, 1], // Consistent ease
    },
  },
};

export const containerVariants = {
  initial: {
    opacity: 1,
    scale: 0.9, // Added a slight shrink for a dynamic effect
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.42, 0, 0.58, 1], // Smooth easing
    },
  },
  exit: {
    scale: 1.5, // Reduced scale for a smoother exit
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
