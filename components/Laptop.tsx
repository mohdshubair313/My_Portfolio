"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Box, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Laptop() {
  const laptopRef = useRef<THREE.Group>(null);

  // Load your image texture (replace 'path/to/your-image.png' with your actual image path)
  const screenTexture = useTexture("/image.webp");

  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <group ref={laptopRef} position={[0, -0.5, 0]}>
      {/* Laptop Base with Side Glow */}
      <Box args={[3.5, 0.15, 2]} position={[0, 0, 0]} castShadow>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
        <meshStandardMaterial emissive="#ff00ff" emissiveIntensity={0.2} />
      </Box>

      {/* Edge Glow Effect */}
      <Box
        args={[3.6, 0.05, 2.1]}
        position={[0, 0.08, 0]}
      >
        <meshStandardMaterial color="#1a1a1a" />
        <meshStandardMaterial emissive="#ff00ff" emissiveIntensity={0.5} />
      </Box>

      {/* Keyboard Area */}
      <Box args={[3.4, 0.05, 1.8]} position={[0, 0.1, 0.1]} castShadow>
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.4} />
      </Box>

      {/* Glowing Individual Keys */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <Box
            key={`${row}-${col}`}
            args={[0.3, 0.05, 0.3]}
            position={[-1.35 + col * 0.32, 0.125, 0.7 - row * 0.3]}
          >
            <meshStandardMaterial color="#333" roughness={0.5} />
            <meshStandardMaterial emissive="#ff66ff" emissiveIntensity={0.7} />
          </Box>
        ))
      )}

      {/* Trackpad */}
      <Box args={[1.2, 0.05, 0.8]} position={[0, 0.12, 1]}>
        <meshStandardMaterial color="#444" roughness={0.4} metalness={0.3} />
      </Box>

      {/* Laptop Screen with Image Texture */}
      <Box args={[3.5, 2, 0.1]} position={[0, 1.2, -1]} rotation={[Math.PI * 0.1, 0, 0]}>
        <meshStandardMaterial map={screenTexture} metalness={0.9} roughness={0.4} />
      </Box>
    </group>
  );
}
