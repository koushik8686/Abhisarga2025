"use client"

import { useEffect, useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const center = [13.555784398311848, 80.02682029281391]

export default function Location() {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    import("leaflet/dist/leaflet.css")
    setMapLoaded(true)
  }, [])

  const pageAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  })

  const cardAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 200,
    config: { tension: 120, friction: 14 },
  })

  const mapAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: mapLoaded ? 1 : 0, transform: mapLoaded ? "scale(1)" : "scale(0.9)" },
    config: { tension: 120, friction: 14 },
  })

  const [hovered, setHovered] = useState(false)
  const hoverAnimation = useSpring({
    transform: hovered ? "scale(1.02)" : "scale(1)",
    boxShadow: hovered
      ? "0px 10px 30px rgba(255, 255, 255, 0.2)"
      : "0px 5px 15px rgba(0, 0, 0, 0.1)",
  })

  return (
    <animated.div
      style={pageAnimation}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-8"
      id="location"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">How to Reach Abhisarga</h1>
        <p className="text-xl text-neutral-400">Plan your journey to our exciting college fest!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <animated.div style={cardAnimation}>
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Venue Details
            </h2>
            <p className="mb-4">IIIT Sri City, 630 Gnan Marg, Sri City, Andhra Pradesh 517646</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Transportation Options</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  By Road
                </h4>
                <p>Nearest bus stop: Sri City Bus Stand (5 km)</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  By Train
                </h4>
                <p>Nearest railway station: Tada (5 km)</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  By Air
                </h4>
                <p>Nearest airport: Chennai International Airport (70 km)</p>
              </div>
            </div>
          </div>
        </animated.div>

        <animated.div 
          style={{ ...mapAnimation, ...hoverAnimation }} 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)}
        >
          {mapLoaded && (
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden">
              <MapContainer center={center} zoom={15} style={{ width: "100%", height: "400px" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                  <Popup>
                    IIIT Sri City
                    <br />
                    630 Gnan Marg, Sri City
                    <br />
                    Andhra Pradesh 517646
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </animated.div>
      </div>
    </animated.div>
  )
}

