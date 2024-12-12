 
import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export const LogoRevel = () => {
    const canvasRef = useRef();

    useEffect(() => {
        if (!canvasRef.current) return;

        const gradient = new NeatGradient({
            ref: canvasRef.current,
            colors: [
                { color: '#3D3D46', enabled: true },
                { color: '#272727', enabled: true },
                { color: '#0A0B10', enabled: true },
                { color: '#171217', enabled: true },
                { color: '#0C0C0C', enabled: true }
            ],
            speed: 3,
            horizontalPressure: 4,
            verticalPressure: 5,
            waveFrequencyX: 3,
            waveFrequencyY: 3,
            waveAmplitude: 3,
            shadows: 4,
            highlights: 7,
            colorBrightness: 1,
            colorSaturation: 0,
            wireframe: false,
            colorBlending: 7,
            backgroundColor: '#00A2FF',
            backgroundAlpha: 1,
            grainScale: 100,
            grainSparsity: 0,
            grainIntensity: 0,
            grainSpeed: 0.3,
            resolution: 0.5,
        });

        // Access canvas context to draw tex
        return () => {
            gradient.destroy();
        };
    }, []);

    return (
        <canvas
            className="logo-revel-canvas"
            style={{
                isolation: "isolate",
                height: "100%",
                width: "100%",
                position: "absolute", // Make it sit behind the content
                top: 0,
                left: 0,
                zIndex: -1, // Position it behind other elements
            }}
            ref={canvasRef}
        />
    );
};
