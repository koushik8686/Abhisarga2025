 ;

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJSScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create a group of stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });

    const starPositions = [];
    for (let i = 0; i < 1000; i++) {
      starPositions.push(
        THREE.MathUtils.randFloatSpread(100), // x
        THREE.MathUtils.randFloatSpread(100), // y
        THREE.MathUtils.randFloatSpread(100)  // z
      );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Add a simple cube to act as a placeholder for "Abhisarga"
    const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xffd700 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(0, 0, 0);
    scene.add(cube);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(ambientLight, directionalLight);

    // Scroll Animation
    const handleScroll = () => {
      const scrollY = window.scrollY / window.innerHeight; // Normalize scroll value
      camera.position.z = 5 - scrollY * 10; // Move camera based on scroll
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005; // Rotate stars
      cube.rotation.y += 0.01; // Rotate cube for some animation
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }} />;
};

export default ThreeJSScene;
