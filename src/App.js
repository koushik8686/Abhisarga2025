import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Reveal from "./components/LogoRevel/LogoReveal";
import Location from "./components/Location/Location";
// import HeadingComponent from './components/HeadingComponent';
import ImageCarousel from './components/ProShows/ImageCarousel';
import Sponsors from "./components/Sponsors/Sponsors";
import { TabsDemo } from "./components/TimeLine/Tabs";
import Hero from './components/HeroSection/Home'
import './App.css';

export default function Home() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/events" element={<TabsDemo />} />
          <Route 
            path="/" 
            element={
              <>
                <Hero/>
                <ImageCarousel />
                <Sponsors />
                <Location />
              </>
            } 
          />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}
