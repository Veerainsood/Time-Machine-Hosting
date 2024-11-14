import React, { Suspense } from 'react'; // Import React and Suspense for lazy loading
import { Canvas } from '@react-three/fiber'; // Import Canvas from react-three-fiber for rendering 3D scene
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls for user interaction with the 3D scene
import Forest from './Forest.jsx'; // Import the Forest component which represents the 3D model
import styles from "./NavigationPage.module.css" // Import CSS for styling

export default function NavigationPage() {
  return (
    <>
      <div className={styles.canvas}> {/* Add the container div with styling */}
        <Canvas camera={{ position: [0, 3, 8], fov: 50 }}> {/* Apply the canvas class */}
          <ambientLight />
          <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} maxPolarAngle={Math.PI / 2} />
          <Suspense fallback={null}>
            <Forest />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
