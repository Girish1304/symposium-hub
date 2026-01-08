import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Holographic cyan color palette
const COLORS = {
  primary: new THREE.Color("hsl(180, 100%, 50%)"),
  glow: new THREE.Color("hsl(180, 100%, 70%)"),
  dim: new THREE.Color("hsl(180, 100%, 30%)"),
  dark: new THREE.Color("hsl(180, 100%, 20%)"),
};

const HolographicMesh = () => {
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const innerSphereRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Animate all elements
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate icosahedron
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.15;
      icosahedronRef.current.rotation.y = time * 0.2;
    }
    
    // Rotate inner sphere opposite direction
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.x = -time * 0.1;
      innerSphereRef.current.rotation.y = -time * 0.15;
    }
    
    // Rotate rings at different speeds
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.3;
      ring1Ref.current.rotation.x = Math.sin(time * 0.5) * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.25;
      ring2Ref.current.rotation.y = Math.cos(time * 0.4) * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.35;
      ring3Ref.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }
    
    // Pulse outer glow
    if (outerGlowRef.current) {
      const scale = 1 + Math.sin(time * 2) * 0.05;
      outerGlowRef.current.scale.setScalar(scale);
    }
    
    // Pulse core
    if (coreRef.current) {
      const coreScale = 0.15 + Math.sin(time * 3) * 0.02;
      coreRef.current.scale.setScalar(coreScale);
    }
  });

  // Create wireframe material
  const wireframeMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: COLORS.primary,
    wireframe: true,
    transparent: true,
    opacity: 0.8,
  }), []);

  const glowMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: COLORS.glow,
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
  }), []);

  const ringMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: COLORS.primary,
    transparent: true,
    opacity: 0.6,
    side: THREE.DoubleSide,
  }), []);

  const coreMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    color: COLORS.glow,
    transparent: true,
    opacity: 0.9,
  }), []);

  return (
    <group>
      {/* Outer atmospheric glow */}
      <mesh ref={outerGlowRef}>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshBasicMaterial 
          color={COLORS.primary}
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Main icosahedron wireframe */}
      <mesh ref={icosahedronRef}>
        <icosahedronGeometry args={[1, 1]} />
        <primitive object={wireframeMaterial} attach="material" />
      </mesh>

      {/* Inner distorted sphere */}
      <mesh ref={innerSphereRef}>
        <icosahedronGeometry args={[0.7, 2]} />
        <meshBasicMaterial
          color={COLORS.dim}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Horizontal ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.015, 8, 64]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>

      {/* Tilted ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.4, 0.012, 8, 64]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>

      {/* Tilted ring 3 */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 2.5, -Math.PI / 3, 0]}>
        <torusGeometry args={[1.5, 0.01, 8, 64]} />
        <primitive object={ringMaterial} attach="material" />
      </mesh>

      {/* Glowing orbs on vertices */}
      {[
        [0, 1.1, 0],
        [0, -1.1, 0],
        [1, 0.3, 0.5],
        [-1, 0.3, 0.5],
        [0.5, 0.3, -1],
        [-0.5, -0.3, 1],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <primitive object={glowMaterial} attach="material" />
        </mesh>
      ))}

      {/* Core glowing center */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, 16, 16]} />
        <primitive object={coreMaterial} attach="material" />
      </mesh>

      {/* Inner core */}
      <mesh>
        <sphereGeometry args={[0.1, 12, 12]} />
        <meshBasicMaterial color={COLORS.glow} />
      </mesh>
    </group>
  );
};

const ArcReactor3D = () => {
  return (
    <div className="w-40 h-40 md:w-52 md:h-52 mx-auto relative">
      {/* Background glow effect */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(180, 100%, 50%, 0.2) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="hsl(180, 100%, 70%)" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="hsl(180, 100%, 50%)" />
        <HolographicMesh />
      </Canvas>
    </div>
  );
};

export default ArcReactor3D;
