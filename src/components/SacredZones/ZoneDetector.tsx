'use client';
import { useThree, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { ZONE_POSITIONS } from '@/lib/constants/zonePositions';

export default function ZoneDetector({ onEnter, onExit }: { onEnter: () => void; onExit: () => void }) {
  const { camera } = useThree(); // Later: Sadhak position
  const inZoneRef = useRef(false);

  useFrame(() => {
    const dist = camera.position.distanceTo(
      new THREE.Vector3(ZONE_POSITIONS.swamijiAbode.x, 0, ZONE_POSITIONS.swamijiAbode.z)
    );
    const inZone = dist < ZONE_POSITIONS.swamijiAbode.radius;
    if (inZone !== inZoneRef.current) {
      inZoneRef.current = inZone;
      if (inZone) onEnter();
      else onExit();
    }
  });

  return null;
}
