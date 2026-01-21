'use client';
import { useRef } from 'react';
import * as THREE from 'three';
import { sacredGlowVertexShader, sacredGlowFragmentShader } from '@/lib/shaders/sacredGlow';
import { ZONE_POSITIONS } from '@/lib/constants/zonePositions';
import { useFrame } from '@react-three/fiber';

const SacredGlowMaterial = (props: unknown) => {
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.time.value = clock.getElapsedTime();
      matRef.current.uniforms.glowIntensity.value = 0.5 + 0.3 * Math.sin(clock.getElapsedTime() * 0.05); // Slow pulse
    }
  });
  return (
    <shaderMaterial
      ref={matRef}
      vertexShader={sacredGlowVertexShader}
      fragmentShader={sacredGlowFragmentShader}
      uniforms={{
        time: { value: 0 },
        glowIntensity: { value: 0.4 },
      }}
      transparent
      side={THREE.DoubleSide}
    />
  );
};

export default function SwamijiFocalZone() {
  const groupRef = useRef<THREE.Group>(null!);

  return (
    <group ref={groupRef} position={[ZONE_POSITIONS.swamijiAbode.x, 1, ZONE_POSITIONS.swamijiAbode.z]}>
      {/* Elevated platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[8, 8, 0.5, 32]} /> {/* Subtle mound */}
        <meshStandardMaterial color="#4a3c2a" roughness={0.7} metalness={0.05} />
      </mesh>
      {/* Gentle glow */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[9, 32, 32]} />
        <SacredGlowMaterial />
      </mesh>
    </group>
  );
}
