import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Sparkles } from "@react-three/drei";

function OrbitRing({ radius, tilt, color, speed, opacity = 0.55 }) {
  const points = useMemo(() => Array.from({ length: 96 }, (_, index) => {
    const angle = (index / 95) * Math.PI * 2;
    return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
  }), [radius]);
  const ref = useRef(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.z += delta * speed; });
  return <group ref={ref} rotation={tilt}><Line points={points} color={color} lineWidth={0.75} transparent opacity={opacity} /></group>;
}

function Core() {
  const ref = useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.003;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });
  return (
    <Float speed={1.25} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.23, 4]} />
        <meshStandardMaterial color="#e55e35" roughness={0.3} metalness={0.32} wireframe />
      </mesh>
      <mesh scale={0.78}>
        <sphereGeometry args={[1, 40, 40]} />
        <meshBasicMaterial color="#f4f7fb" transparent opacity={0.1} />
      </mesh>
    </Float>
  );
}

function OrbitSystem({ children, pointer }) {
  const ref = useRef(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += (pointer.current.x * 0.42 - ref.current.rotation.y) * 0.045;
    ref.current.rotation.x += (-pointer.current.y * 0.28 - ref.current.rotation.x) * 0.045;
    ref.current.position.x += (0.28 + pointer.current.x * 0.28 - ref.current.position.x) * 0.045;
    ref.current.position.y += (pointer.current.y * 0.17 - ref.current.position.y) * 0.045;
  });
  return <group ref={ref}>{children}</group>;
}

export function ServiceOrbit() {
  const pointer = useRef({ x: 0, y: 0 });
  const updatePointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
      y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
    };
  };

  return (
    <div className="pointer-events-auto absolute bottom-0 right-[-6%] top-0 hidden min-h-[560px] w-[60%] overflow-hidden opacity-85 xl:block" role="group" aria-label="Interactive service orbit. Drag to rotate the globe." onPointerMove={updatePointer} onPointerLeave={() => { pointer.current = { x: 0, y: 0 }; }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.3} />
          <pointLight position={[2.5, 1.5, 4]} intensity={32} color="#e55e35" />
          <pointLight position={[-3, -1, 2]} intensity={12} color="#f4f7fb" />
          <OrbitSystem pointer={pointer}>
            <Core />
            <OrbitRing radius={1.72} tilt={[0.15, 1.05, -0.7]} color="#e55e35" speed={-0.13} opacity={0.34} />
            <OrbitRing radius={2.05} tilt={[0.95, 0.25, 0.2]} color="#e55e35" speed={0.16} />
            <OrbitRing radius={2.34} tilt={[1.24, -0.45, 0.64]} color="#f4f7fb" speed={0.07} opacity={0.38} />
            <OrbitRing radius={2.6} tilt={[-0.55, 0.35, -0.45]} color="#f4f7fb" speed={-0.1} />
            <OrbitRing radius={2.92} tilt={[0.35, 0.72, 0.95]} color="#e55e35" speed={0.05} opacity={0.24} />
          </OrbitSystem>
          <Sparkles count={54} scale={[7, 5, 3]} size={1.45} speed={0.22} color="#e55e35" opacity={0.38} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.72}
            autoRotate
            autoRotateSpeed={0.28}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
