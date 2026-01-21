'use client';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function BreathingLight() {
  const lightRef = useRef<THREE.DirectionalLight>(null!);
  const timeRef = useRef(0);

  useFrame(() => {
    timeRef.current += 0.05;
    if (lightRef.current) {
      lightRef.current.intensity = 0.3 + 0.2 * Math.sin(timeRef.current);
    }
  });

  return (
    <>
      <directionalLight ref={lightRef} position={[10, 20, 5]} intensity={0.3} castShadow />
      <ambientLight intensity={0.1} />
      <hemisphereLight intensity={0.2} color="#d4af37" groundColor="#2d3a2a" />
      {/* Breathing glow plane for effect */}
      <mesh position={[0, 1, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial
          transparent
          // eslint-disable-next-line react-hooks/refs
          opacity={0.2 + 0.1 * Math.sin(timeRef.current)}
          color="#ffaa88"
        />
      </mesh>
    </>
  );
}
