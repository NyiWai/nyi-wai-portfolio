import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function RotatingWireframe() {
  const outerRef = useRef<Mesh>(null);
  const innerRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.15;
      outerRef.current.rotation.x += delta * 0.06;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.28;
      innerRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <group>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#6E8CFF" wireframe transparent opacity={0.32} />
      </mesh>
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.95, 0]} />
        <meshBasicMaterial color="#B583FF" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function HoloCore() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} gl={{ alpha: true }}>
        <RotatingWireframe />
      </Canvas>
    </div>
  );
}
