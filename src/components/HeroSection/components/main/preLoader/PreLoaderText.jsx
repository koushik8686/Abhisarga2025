import { motion } from "framer-motion";
import { textVariants } from "../../../constants/animations";

export const PreLoaderText = () => {
  return (
    <motion.div
      className="relative z-10"
      variants={textVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="text-7xl md:text-8xl font-bold text-white tracking-wider">
        Abhisarga
        <span className="block text-center text-5xl md:text-6xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          2025
        </span>
      </h1>
    </motion.div>
  );
};
