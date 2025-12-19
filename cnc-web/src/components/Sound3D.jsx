// src/components/Sound3D.jsx
import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";

function PulseRings() {
  const rings = useRef([]);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;

    rings.current.forEach((r, i) => {
      if (!r) return;

      const phase = (t.current * 0.9 + i * 0.35) % 1;
      const scale = 0.7 + phase * 1.8;

      r.scale.set(scale, scale, scale);
      r.material.opacity = (1 - phase) * 0.45;
      r.rotation.z += delta * 0.25;
    });
  });

  return (
    <group rotation={[Math.PI / 2.4, 0, 0]}>
      {new Array(6).fill(0).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (rings.current[i] = el)}
          position={[0, 0, -i * 0.02]}
        >
          <ringGeometry args={[0.35, 0.55, 64]} />
          <meshStandardMaterial
            color="#394562"
            transparent
            opacity={0.3}
            emissive="#394562"
            emissiveIntensity={0.25}
            roughness={0.35}
            metalness={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function BeatCore() {
  const core = useRef();
  const t = useRef(0);

  useFrame((_, delta) => {
    if (!core.current) return;

    t.current += delta;

    const beat = 0.5 + 0.5 * Math.sin(t.current * 3.1);
    const punch = Math.pow(beat, 3);

    const s = 0.95 + punch * 0.18;
    core.current.scale.set(s, s, s);
    core.current.rotation.y += delta * 0.35;
    core.current.rotation.x += delta * 0.15;

    // glow pulse
    core.current.material.emissiveIntensity = 0.15 + punch * 0.6;
  });

  return (
    <mesh ref={core}>
      <icosahedronGeometry args={[0.7, 2]} />
      <meshStandardMaterial
        color="#fdf7ee"
        emissive="#b46b5c"
        emissiveIntensity={0.35}
        roughness={0.25}
        metalness={0.25}
      />
    </mesh>
  );
}

function Particles() {
  const points = useRef();

  const positions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.2 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * 0.12;
    points.current.rotation.x += delta * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#b46b5c"
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

export default function Sound3D({ className = "" }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 4, 5]} intensity={0.9} />

        {/* ✅ Environment is async -> must be inside Suspense */}
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>

        <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.35}>
          <group>
            <BeatCore />
            <PulseRings />
            <Particles />
          </group>
        </Float>
      </Canvas>
    </div>
  );
}
