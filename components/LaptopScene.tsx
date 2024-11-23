"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Laptop } from "./Laptop";

export function LaptopScene() {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
      </Canvas>
      <button className="bg-red-700 ">My projects</button>
    </div>
  );
}