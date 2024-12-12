 
import React, { useEffect } from "react";
import { LogoRevel } from "./Page";
import './Reveal.css'; // Import the CSS for the animation

const Reveal = ({setdisplay}) => {
  useEffect(() => {

   const createParticle = (x, y) => {
  const particlesCount = 20;
  for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle"; // Assign class name for styling

    // Set initial position and randomize some values for a more dynamic effect
    const randomAngle = Math.random() * 360; // Random angle for particle movement
    const randomDistance = Math.random() * 50 + 30; // Randomize the distance particles move

    particle.style.left = `${x + Math.cos(randomAngle) * randomDistance}px`;
    particle.style.top = `${y + Math.sin(randomAngle) * randomDistance}px`;

    // Append particle to the document
    document.body.appendChild(particle);

    // Remove particle after animation ends
    setTimeout(() => particle.remove(), 1000);
  }
};


    const handleMouseClick = (event) => {
     console.log("hello");
     
      createParticle(event.clientX, event.clientY);
    };

    // Add event listeners
    document.addEventListener("click", handleMouseClick);

    return () => {
    document.removeEventListener("click", handleMouseClick);
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden", height: "100vh",  width: "100%" }}>
      {/* Background Canvas */}
      <LogoRevel />

      <div className="w-full h-full">
        <div className="lightning-effect z-3">
          <img
            src="/assets/LoadianimationAssets/thunder.png"
            alt="Thunder Animation"
            height={432}
            width={577}
          />
        </div>
        <div className="lightning-effect2 z-3">
          <img
            src="/assets/LoadianimationAssets/thunder2.png"
            alt="Thunder Animation"
            height={432}
            width={577}
          />
        </div>
      </div>
    
      <div style={{ bottom: "100vh" }} className="relative z-10 h-screen w-screen flex flex-col items-center justify-center">
      <div className="relative z-10  flex items-center justify-center">
<div id="letter-a" className="heading-letter" style={{ animation: 'slide-from-left 0.75s ease-in-out 0.5s forwards' }}>A</div>
<div id="letter-b" className="heading-letter" style={{ animation: 'slide-from-right 0.75s ease-in-out 0.5s forwards' }}>b</div>
<div id="letter-h" className="heading-letter" style={{ animation: 'slide-from-top 0.75s ease-in-out 1s forwards' }}>h</div>
<div id="letter-i" className="heading-letter" style={{ animation: 'scale-up 0.75s ease-in-out 1.5s forwards' }}>i</div>
<div id="letter-s" className="heading-letter" style={{ animation: 'slide-from-left 0.75s ease-in-out 2s forwards' }}>s</div>
<div id="letter-a2" className="heading-letter" style={{ animation: 'slide-from-right 0.75s ease-in-out 2.5s forwards' }}>a</div>
<div id="letter-r" className="heading-letter" style={{ animation: 'slide-from-top 0.75s ease-in-out 3s forwards' }}>r</div>
<div id="letter-g" className="heading-letter" style={{ animation: 'scale-up 0.75s ease-in-out 3.5s forwards' }}>g</div>
<div id="letter-a3" className="heading-letter" style={{ animation: 'slide-from-left 0.75s ease-in-out 4s forwards' }}>a</div>
     </div>  
        <button onClick={()=>{setdisplay("main")}} >
           Abhisarga 2025
        </button>
      </div>
    </div>
  );
};

export default Reveal;
