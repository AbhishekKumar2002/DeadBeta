"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Clock3d } from "./Clock3d";

export default function Clock() {
  return (
    <div className="w-full h-[calc((100vh-16px)/2)] sm:h-[calc(100vh-16px)] sm:w-1/2">
      <Canvas shadows={'soft'}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
         <Clock3d />
        </Suspense>
      </Canvas>
    </div>
  );
}