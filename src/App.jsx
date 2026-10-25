// src/App.jsx
import { Suspense } from 'react';
import HeroUI from './components/HeroUI';
import Model from './components/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="w-full h-screen bg-background flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full">
        <HeroUI />
      </div>
      <div className="w-full h-1/2 lg:w-1/2 lg:h-full relative cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
          <ambientLight intensity={2.5} />
          <directionalLight position={[0, 5, 5]} intensity={3.5} />
          <pointLight position={[-5, 3, 5]} color="#1D2D2B" intensity={4} /> 
          <pointLight position={[5, 3, 5]} color="#ffffff" intensity={2} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
          <Suspense fallback={
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#1E1E1E" wireframe />
            </mesh>
          }>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;