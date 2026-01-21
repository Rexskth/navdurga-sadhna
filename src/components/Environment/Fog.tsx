'use client';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function LayeredFog() {
  const fogMeshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (fogMeshRef.current) {
      fogMeshRef.current.rotation.y += delta * 0.1; // Gentle drift
    }
  });

  return (
    <>
      {/* Global Fog */}
      <fog attach="fog" args={['#1a1a2e', 30, 300]} />
      {/* Low mist */}
      <mesh ref={fogMeshRef} position={[0, 2, 0]}>
        <planeGeometry args={[300, 300]} />
        <meshBasicMaterial transparent opacity={0.4} color="#ffaa88" fog={false} />
      </mesh>
      {/* Distant bands */}
      {[1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 5 + i * 20, -100 * i]}>
          <ringGeometry args={[150 + i * 50, 160 + i * 50, 32]} />
          <meshBasicMaterial transparent opacity={0.1 + i * 0.05} color="#4a5568" side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  );
}
