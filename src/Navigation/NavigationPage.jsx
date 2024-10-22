import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Forest from './Forest.jsx';
import './NavigationPage.css'
export default function NavigationPage(){

    return(
      <>
      <link rel='stylesheet' href='./NavigationPage.css'></link>
      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight />
        <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} />
        <Suspense fallback={null}>
          <Forest />  {/* Your 3D Forest component */}
        </Suspense>
      </Canvas>
      </>
    );
}