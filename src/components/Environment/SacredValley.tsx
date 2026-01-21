'use client';
import Terrain from './Terrain';
import EveningSky from './Sky';
import LayeredFog from './Fog';
import BreathingLight from './Lighting';

export default function SacredValley() {
  return (
    <>
      <EveningSky />
      <BreathingLight />
      <LayeredFog />
      <Terrain subdivisions={256} />
    </>
  );
}
