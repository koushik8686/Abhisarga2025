import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { HeroParallaxDemo } from "./HeroParallaxDemo";

const Sparkles = ({ products }) => {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={0.7}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div>
        <HeroParallaxDemo products={products} />
      </div>
    </div>
  );
};

export default Sparkles;
