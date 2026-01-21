'use client';
import Terrain from './Terrain';
import EveningSky from './Sky';
import LayeredFog from './Fog';
import BreathingLight from './Lighting';
import SwamijiFocalZone from '@/components/SacredZones/SwamijiFocalZone';
import ZoneDetector from '@/components/SacredZones/ZoneDetector';

export default function SacredValley() {
  return (
    <>
      <EveningSky />
      <BreathingLight />
      <LayeredFog />
      <Terrain subdivisions={256} />
      <SwamijiFocalZone />
      <ZoneDetector onEnter={() => console.log('Entered Swamiji Abode')} onExit={() => console.log('Exited')} />
    </>
  );
}
