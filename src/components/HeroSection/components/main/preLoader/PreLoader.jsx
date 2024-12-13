import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { containerVariants } from "../../../constants/animations";
import { DecorativeLines } from "./DecorativeLines";
import { PreLoaderText } from "./PreLoaderText";

export const PreLoader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onLoadingComplete, 250);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="relative">
            <DecorativeLines />
            <PreLoaderText />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
