import Hero from "./components/main/Hero";
import { usePreloadImages } from "./constants/heroImages";
import { FloatingDock } from "./components/main/Nav";
import Loader from "./components/main/Loader";
import { useState } from "react";
// import { PreLoader } from "./components/main/preLoader/PreLoader";

const HeroSection = () => {
  const { isLoading, loadedImages } = usePreloadImages();
  const [isLoadingPreLoader, setIsLoadingPreLoader] = useState(false);
  console.log("IMAGES", isLoading);
  console.log("PreLoader", isLoadingPreLoader);

  return (
    <div className=" relative flex flex-col min-h-screen bg-slate-900 relative">
      {/* <PreLoader onLoadingComplete={() => setIsLoadingPreLoader(() => false)} /> */}
      {!isLoadingPreLoader && isLoading && <Loader></Loader>}
      {!isLoadingPreLoader && !isLoading && (
        <>
          <div className="top-[85vh] left-[50vw] -translate-x-1/2 z-10 fixed">
            <FloatingDock></FloatingDock>
          </div>
          <Hero products={loadedImages} />
        </>
      )}
    </div>
  );
};

export default HeroSection;
