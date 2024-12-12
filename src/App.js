 
import React from "react";
import { useState } from "react";
import Reveal from "./components/LogoRevel/LogoReveal";
import Location from "./components/Location/Location";
import HeadingComponent from './components/HeadingComponent'
import ImageCarousel from './components/Sponsors/ImageCarousel'
import './App.css'
export default function Home() {
  const [display, setdisplay] = useState("intro")
  return (
  <React.StrictMode>
   <div>
    {display==="intro"&& <Reveal setdisplay={setdisplay}/>}
    {display==="main"&&
    <>
    <HeadingComponent text="Pro Shows"/>
    <ImageCarousel/>
    <Location/>
    </>
    }

   </div>
   </React.StrictMode>
  );
}
