'use client';
import { useMemo } from 'react';
import * as THREE from 'three';
import { createNoise3D } from 'simplex-noise';
import { MeshReflectorMaterial } from '@react-three/drei';

const noise3D = createNoise3D();

export default function Terrain({ size = 200, subdivisions = 128 }: { size?: number; subdivisions?: number }) {
  const geom = useMemo(() => {
    const geo = new THREE.PlaneGeometry(size, size, subdivisions, subdivisions);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getZ(i); // Plane is XZ
      pos.setY(i, noise3D(x / 20, y / 20, 0) * 3 + noise3D(x / 5, y / 5, 0) * 1); // Organic hills
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh geometry={geom} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <MeshReflectorMaterial
        color="#2d3a2a" // Dusk-green
        roughness={0.8}
        metalness={0.1}
        blur={[300, 100]}
        mixBlur={1}
        mixStrength={40}
        depthScale={1}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
      />
    </mesh>
  );
}
