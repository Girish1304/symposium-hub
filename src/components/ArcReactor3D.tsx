import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const ArcReactorMesh = () => {
  const outerRingRef = useRef<THREE.Group>(null);
  const middleRingRef = useRef<THREE.Group>(null);
  const innerRingRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.15;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.z = -time * 0.1;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = time * 0.2;
    }
  });

  // Create segment geometry for rings
  const createRingSegments = (
    innerRadius: number,
    outerRadius: number,
    segmentCount: number,
    gapAngle: number,
    color: string,
    opacity: number
  ) => {
    const segments = [];
    const segmentAngle = (Math.PI * 2) / segmentCount - gapAngle;
    
    for (let i = 0; i < segmentCount; i++) {
      const startAngle = (i / segmentCount) * Math.PI * 2;
      const shape = new THREE.Shape();
      
      // Create arc segment
      const innerArc = new THREE.EllipseCurve(0, 0, innerRadius, innerRadius, startAngle, startAngle + segmentAngle, false, 0);
      const outerArc = new THREE.EllipseCurve(0, 0, outerRadius, outerRadius, startAngle + segmentAngle, startAngle, true, 0);
      
      const innerPoints = innerArc.getPoints(20);
      const outerPoints = outerArc.getPoints(20);
      
      shape.moveTo(innerPoints[0].x, innerPoints[0].y);
      innerPoints.forEach(p => shape.lineTo(p.x, p.y));
      outerPoints.forEach(p => shape.lineTo(p.x, p.y));
      shape.closePath();
      
      segments.push(
        <mesh key={i} position={[0, 0, 0]}>
          <shapeGeometry args={[shape]} />
          <meshBasicMaterial color={color} transparent opacity={opacity} side={THREE.DoubleSide} />
        </mesh>
      );
    }
    return segments;
  };

  // Dark ring (background/structural)
  const darkRingSegments = useMemo(() => 
    createRingSegments(1.0, 1.25, 12, 0.08, "#1a3a3a", 1), []
  );
  
  // Outer cyan ring segments
  const outerCyanSegments = useMemo(() => 
    createRingSegments(1.28, 1.45, 12, 0.12, "#7fdfdf", 0.95), []
  );

  // Middle dark ring
  const middleDarkSegments = useMemo(() => 
    createRingSegments(0.7, 0.95, 10, 0.1, "#1a3a3a", 1), []
  );

  // Inner cyan ring
  const innerCyanSegments = useMemo(() => 
    createRingSegments(0.75, 0.88, 8, 0.15, "#7fdfdf", 0.9), []
  );

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group rotation={[0, 0, 0]}>
        {/* Outer glow effect */}
        <mesh>
          <circleGeometry args={[1.8, 64]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.08} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Background dark plate */}
        <mesh position={[0, 0, -0.05]}>
          <circleGeometry args={[1.6, 64]} />
          <meshBasicMaterial color="#0a1a1a" transparent opacity={0.95} side={THREE.DoubleSide} />
        </mesh>

        {/* Outer ring group - rotates slowly */}
        <group ref={outerRingRef}>
          {darkRingSegments}
          {outerCyanSegments}
          
          {/* Outer ring rectangular segments */}
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * Math.PI * 2;
            return (
              <mesh 
                key={`outer-rect-${i}`} 
                position={[Math.cos(angle) * 1.36, Math.sin(angle) * 1.36, 0.01]}
                rotation={[0, 0, angle + Math.PI / 2]}
              >
                <planeGeometry args={[0.12, 0.06]} />
                <meshBasicMaterial color="#b0f0f0" transparent opacity={0.9} side={THREE.DoubleSide} />
              </mesh>
            );
          })}
        </group>

        {/* Middle ring group */}
        <group ref={middleRingRef}>
          {middleDarkSegments}
          
          {/* Middle ring small rectangles */}
          {[...Array(10)].map((_, i) => {
            const angle = (i / 10) * Math.PI * 2 + 0.15;
            return (
              <mesh 
                key={`mid-rect-${i}`} 
                position={[Math.cos(angle) * 0.82, Math.sin(angle) * 0.82, 0.01]}
                rotation={[0, 0, angle + Math.PI / 2]}
              >
                <planeGeometry args={[0.08, 0.04]} />
                <meshBasicMaterial color="#90e0e0" transparent opacity={0.85} side={THREE.DoubleSide} />
              </mesh>
            );
          })}
        </group>

        {/* Inner ring group */}
        <group ref={innerRingRef}>
          {/* Inner dark structural ring */}
          <mesh>
            <ringGeometry args={[0.5, 0.68, 64]} />
            <meshBasicMaterial color="#1a3a3a" transparent opacity={1} side={THREE.DoubleSide} />
          </mesh>
          
          {innerCyanSegments}
        </group>

        {/* Core glow layers */}
        <mesh position={[0, 0, 0.02]}>
          <circleGeometry args={[0.48, 64]} />
          <meshBasicMaterial color="#a0f0f0" transparent opacity={0.95} side={THREE.DoubleSide} />
        </mesh>
        
        <mesh position={[0, 0, 0.03]}>
          <circleGeometry args={[0.35, 64]} />
          <meshBasicMaterial color="#c0ffff" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Bright center */}
        <mesh position={[0, 0, 0.04]}>
          <circleGeometry args={[0.2, 64]} />
          <meshBasicMaterial color="#e0ffff" transparent opacity={1} side={THREE.DoubleSide} />
        </mesh>

        {/* Additional outer glow rings */}
        <mesh position={[0, 0, -0.02]}>
          <ringGeometry args={[1.5, 1.65, 64]} />
          <meshBasicMaterial color="#40a0a0" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
        
        <mesh position={[0, 0, -0.03]}>
          <ringGeometry args={[1.65, 1.75, 64]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.15} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
};

const ArcReactor3D = () => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 3]} intensity={1.5} color="#00ffff" />
        <ArcReactorMesh />
      </Canvas>
    </div>
  );
};

export default ArcReactor3D;
