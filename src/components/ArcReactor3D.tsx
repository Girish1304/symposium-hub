import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ArcReactorMesh = () => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const middleRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.3;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.z = -time * 0.5;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = time * 0.8;
    }
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.z = time * 0.2;
    }
  });

  // Create particles for energy effect
  const particleCount = 50;
  const particlePositions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 0.8 + Math.random() * 0.4;
    particlePositions[i * 3] = Math.cos(angle) * radius;
    particlePositions[i * 3 + 1] = Math.sin(angle) * radius;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
  }

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group rotation={[0.2, 0, 0]}>
        {/* Outer ring with segments */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[1.4, 0.08, 16, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.9} />
        </mesh>

        {/* Outer ring glow */}
        <mesh>
          <torusGeometry args={[1.4, 0.15, 16, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.2} />
        </mesh>

        {/* Middle decorative ring */}
        <mesh ref={middleRingRef}>
          <torusGeometry args={[1.1, 0.05, 16, 24]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.7} />
        </mesh>

        {/* Inner ring */}
        <mesh ref={innerRingRef}>
          <torusGeometry args={[0.8, 0.04, 16, 20]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.8} />
        </mesh>

        {/* Arc segments - triangular pieces */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos((i / 12) * Math.PI * 2) * 1.2,
              Math.sin((i / 12) * Math.PI * 2) * 1.2,
              0,
            ]}
            rotation={[0, 0, (i / 12) * Math.PI * 2 + Math.PI / 2]}
          >
            <boxGeometry args={[0.15, 0.08, 0.05]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.9} />
          </mesh>
        ))}

        {/* Core glow - multiple layers */}
        <mesh ref={coreRef} scale={0.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.95} />
        </mesh>

        <mesh scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00ddff" transparent opacity={0.5} />
        </mesh>

        <mesh scale={0.8}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.15} />
        </mesh>

        {/* Energy particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={particlePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            color="#00ffff"
            size={0.05}
            transparent
            opacity={0.8}
            sizeAttenuation
          />
        </points>

        {/* Outer glow effect */}
        <mesh scale={2}>
          <circleGeometry args={[1, 64]} />
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Second outer glow */}
        <mesh scale={2.5}>
          <circleGeometry args={[1, 64]} />
          <meshBasicMaterial
            color="#00ffff"
            transparent
            opacity={0.03}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

const ArcReactor3D = () => {
  return (
    <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 5]} intensity={2} color="#00ffff" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#0088ff" />
        <ArcReactorMesh />
      </Canvas>
    </div>
  );
};

export default ArcReactor3D;
