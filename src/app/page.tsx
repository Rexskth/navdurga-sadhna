'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SacredValley from '@/components/Environment/SacredValley';
import * as THREE from 'three';

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Canvas
        camera={{ position: [0, 10, 30], fov: 60 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        shadows
      >
        <SacredValley />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>
    </main>
  );
}
