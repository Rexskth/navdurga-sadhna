'use client';
import { Sky, Stars } from '@react-three/drei';

export default function EveningSky() {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[0, -10, 100]} // Below horizon
        inclination={0.6}
        azimuth={0.8}
        rayleigh={1.5} // Blue-grey dusk
        turbidity={15}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
      />
      <Stars radius={300} depth={60} count={2000} factor={4} saturation={0} fade speed={0.5} />
    </>
  );
}
