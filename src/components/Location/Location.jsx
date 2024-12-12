import "leaflet/dist/leaflet.css";
import { useSpring, animated } from "@react-spring/web";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";

const center = [13.555784398311848, 80.02682029281391];

const Location = () => {
  const mapAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 120, friction: 14 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { tension: 120, friction: 14 },
  });

  const pageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  const [hovered, setHovered] = useState(false);
  const hoverAnimation = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    boxShadow: hovered
      ? "0px 10px 30px rgba(255, 255, 255, 0.3)"
      : "0px 5px 15px rgba(0, 0, 0, 0.2)",
  });

  const [headingHovered, setHeadingHovered] = useState(false);
  const headingHoverAnimation = useSpring({
    color: headingHovered ? "#FFD700" : "#FFFFFF",
    transform: headingHovered ? "scale(1.1)" : "scale(1)",
  });

  return (
    <animated.div
      style={pageAnimation}
      className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6"
    >
      <animated.h1
        style={{ ...textAnimation, ...headingHoverAnimation }}
        className="text-3xl font-bold mb-4"
        onMouseEnter={() => setHeadingHovered(true)}
        onMouseLeave={() => setHeadingHovered(false)}
      >
        How to Reach IIIT Sri City?
      </animated.h1>
      <animated.p
        style={textAnimation}
        className="text-lg text-neutral-400 mb-4 mt-4"
      >
        To reach IIIT Sri City, the best nearest station is Chennai. From Chennai,
        you can take a local train to Tada, which costs ₹20.<br />
        From Tada, you can take a shared auto to IIIT Sri City for ₹20 or reserve
        an auto for ₹200. <br />
        <br />
        Alternatively, you can take a cab or auto directly from Chennai to IIIT Sri
        City for ₹3000. If you are traveling from Sullurpeta, the fare to IIIT Sri
        City is ₹50.
      </animated.p>
      <h1 className="text-3xl font-bold mb-4">Location</h1>
      <animated.div
        style={{ ...mapAnimation, ...hoverAnimation }}
        className="w-full h-400"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <MapContainer
          center={center}
          zoom={15}
          style={{ width: "100%", height: "400px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              Event Location: <br /> Latitude: {center[0]} <br /> Longitude:{" "}
              {center[1]}
            </Popup>
          </Marker>
        </MapContainer>
      </animated.div>
    </animated.div>
  );
};

export default Location;