// src/components/FloatingShapes.jsx
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function InteractiveShape({ position, baseColor, hoverColor }) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;
    
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={active ? 1.5 : (hovered ? 1.2 : 1)}
      onClick={(e) => { e.stopPropagation(); setActive(!active); }}
      onPointerOver={(e) => { 
        e.stopPropagation(); 
        setHover(true); 
        document.body.style.cursor = 'pointer'; 
      }}
      onPointerOut={(e) => { 
        e.stopPropagation(); 
        setHover(false); 
        document.body.style.cursor = 'auto'; 
      }}
    >
      <icosahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial 
        color={hovered ? hoverColor : baseColor} 
        wireframe={true} 
        wireframeLinewidth={2}
      />
    </mesh>
  );
}
export default function FloatingShapes() {
  return (
    <group>
      <InteractiveShape position={[-2.5, 1, -1]} baseColor="#1D2D2B" hoverColor="#E4B856" />
      <InteractiveShape position={[2.5, 0, 1]} baseColor="#5C646B" hoverColor="#2BB5F5" />
      <InteractiveShape position={[-2, -1.5, 2]} baseColor="#5C646B" hoverColor="#2BB5F5" />
      <InteractiveShape position={[2, 2.5, -2]} baseColor="#1D2D2B" hoverColor="#E4B856" />
    </group>
  );
}