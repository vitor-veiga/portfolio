import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RADIUS = 1.2;

function GlobeLines() {
  const groupRef = useRef<THREE.Group>(null);

  const lineGeo = useMemo(() => {
    const positions: number[] = [];
    const LATS = 10;
    const LONS = 18;
    const SEGS = 96;

    // Latitude circles
    for (let i = 1; i < LATS; i++) {
      const phi = (i / LATS) * Math.PI;
      const y = RADIUS * Math.cos(phi);
      const r = RADIUS * Math.sin(phi);
      for (let j = 0; j < SEGS; j++) {
        const t1 = (j / SEGS) * 2 * Math.PI;
        const t2 = ((j + 1) / SEGS) * 2 * Math.PI;
        positions.push(r * Math.cos(t1), y, r * Math.sin(t1));
        positions.push(r * Math.cos(t2), y, r * Math.sin(t2));
      }
    }

    // Longitude lines
    for (let i = 0; i < LONS; i++) {
      const theta = (i / LONS) * 2 * Math.PI;
      for (let j = 0; j < SEGS; j++) {
        const p1 = (j / SEGS) * Math.PI;
        const p2 = ((j + 1) / SEGS) * Math.PI;
        positions.push(
          RADIUS * Math.sin(p1) * Math.cos(theta),
          RADIUS * Math.cos(p1),
          RADIUS * Math.sin(p1) * Math.sin(theta),
        );
        positions.push(
          RADIUS * Math.sin(p2) * Math.cos(theta),
          RADIUS * Math.cos(p2),
          RADIUS * Math.sin(p2) * Math.sin(theta),
        );
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return geo;
  }, []);

  const dotGeo = useMemo(() => {
    const positions: number[] = [];
    const COUNT = 280;

    for (let i = 0; i < COUNT; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * 2 * Math.PI;
      positions.push(
        RADIUS * Math.sin(phi) * Math.cos(theta),
        RADIUS * Math.cos(phi),
        RADIUS * Math.sin(phi) * Math.sin(theta),
      );
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3),
    );
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.5, 0.2, -0.2]}>
      {/* Grade lat/lon */}
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#1e3a5f" transparent opacity={0.3} />
      </lineSegments>

      {/* Pontos na superfície */}
      <points geometry={dotGeo}>
        <pointsMaterial
          color="#162d4a"
          size={0.055}
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function GlobeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
      <GlobeLines />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
