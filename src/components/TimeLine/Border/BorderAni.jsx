import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const StringAnimation = () => {
  const svgPathRef = useRef(null);
  const stringRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the width dynamically on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const initialPath = `M 10 100 Q ${windowWidth / 2} 100 ${
      windowWidth - 10
    } 100`;
    const stringElement = stringRef.current;

    const handleMouseMove = (event) => {
      const rect = stringElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newPath = `M 10 100 Q ${x} ${y} ${rect.width - 10} 100`;

      gsap.to(svgPathRef.current, {
        attr: { d: newPath },
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(svgPathRef.current, {
        attr: { d: initialPath },
        duration: 1,
        ease: "elastic.out(1, 0.2)",
      });
    };

    // Set initial path and attach events
    svgPathRef.current.setAttribute("d", initialPath);
    stringElement.addEventListener("mousemove", handleMouseMove);
    stringElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stringElement.removeEventListener("mousemove", handleMouseMove);
      stringElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [windowWidth]);

  return (
    <div ref={stringRef} className="w-full" style={{ height: "100px" }}>
      <svg width={windowWidth} height="200" xmlns="http://www.w3.org/2000/svg">
        <path
          d={`M 10 100 Q ${windowWidth / 2} 100 ${windowWidth - 10} 100`}
          stroke="white"
          fill="none"
          ref={svgPathRef}
        />
      </svg>
    </div>
  );
};

export default StringAnimation;
