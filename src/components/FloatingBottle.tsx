import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text3D, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingBottle = () => {
  const bottleRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);

  useFrame((state) => {
    if (bottleRef.current) {
      bottleRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group>
      {/* Floating Bottle */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <group ref={bottleRef} position={[0, 0, 0]}>
          {/* Bottle Body */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.8, 0.9, 4, 16]} />
            <meshPhysicalMaterial
              ref={materialRef}
              color="#87CEEB"
              transparent
              opacity={0.8}
              roughness={0.1}
              metalness={0.1}
              transmission={0.9}
              thickness={0.5}
              envMapIntensity={1}
            />
          </mesh>
          
          {/* Bottle Cap */}
          <mesh position={[0, 2.2, 0]}>
            <cylinderGeometry args={[0.6, 0.6, 0.4, 16]} />
            <meshStandardMaterial color="#2E8B57" />
          </mesh>

          {/* Water Inside */}
          <mesh position={[0, -0.5, 0]}>
            <cylinderGeometry args={[0.7, 0.8, 3.5, 16]} />
            <meshPhysicalMaterial
              color="#00BFFF"
              transparent
              opacity={0.6}
              roughness={0}
              metalness={0}
              transmission={1}
            />
          </mesh>
        </group>
      </Float>

      {/* Particles around bottle */}
      <mesh position={[2, 1, -1]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.6} />
      </mesh>
      <mesh position={[-2, -1, 1]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#00BFFF" transparent opacity={0.4} />
      </mesh>
      <mesh position={[1, -2, -2]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#2E8B57" transparent opacity={0.5} />
      </mesh>

      {/* Reflective Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[20, 20]} />
        <MeshReflectorMaterial
          blur={[300, 30]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#87CEEB"
          metalness={0.8}
          mirror={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

export default FloatingBottle;