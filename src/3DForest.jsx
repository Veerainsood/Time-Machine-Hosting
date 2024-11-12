// Importing necessary modules and components for the 3D environment
import { Canvas } from '@react-three/fiber'; // Provides a 3D canvas for rendering
import { Physics, RigidBody } from '@react-three/rapier'; // Physics engine for rigid bodies and interactions
import {Ground} from './Components/Ground'; // Ground component in the environment
import { Player } from './Components/Player'; // Player component for user control
import { FPV } from './Components/FPV'; // First-person view camera setup
import { ForestGen } from './Components/ForestGenerator'; // Component to generate forest elements
import { SkyCycle } from './Components/ChangeDayNight'; // Component for simulating day-night cycle
import { TimeMachine2 } from './models/TimeMachine2'; // 3D model of a time machine
import { Hindu } from './models/HinduTempleModel'; // 3D model of a Hindu temple
import { EntryCircle } from './models/EntryCircle'; // 3D model for entry circles in the scene
import { Loader, PointerLockControls } from '@react-three/drei'; // Loader for assets and pointer lock controls for better FPS experience
import { Suspense, useState } from "react"; // Suspense component to delay rendering until components are ready
import { KeyboardControls } from '@react-three/drei'; // For configuring keyboard controls
import { Hut } from './models/Hut'; // 3D model of a hut
import { Axes } from './Components/AxesHelper'; // Helper for displaying axes
import { MyPlayer } from './Components/MyPlayer'; // Custom player component
import { Pond } from './models/Pond'; // 3D model of a pond
import { Cart } from './models/Cart'; // 3D model of a cart
import { Peackock } from './models/Peackock'; // 3D model of a peacock
import { Tiger } from './models/Tiger'; // 3D model of a tiger
import { FaunaGen } from './Components/FaunaGenerator'; // Component to generate fauna
import { CarryCart } from './models/Cart1'; // Alternative cart model

// Importing CSS for 3D environment
import styles from "../src/CompCSS/ThreeD.module.css";
import { Mountain } from './Mountain'; // Mountain 3D model
import { MountainFog } from './MountainFog'; // Fog effect for mountains

// Function to render the 3D forest environment
function Forest() {  
  const [showReader,setShowReader] = useState(true);
  return (
    <>    
     <Suspense>
     <div className={styles.map3d}>  
      <img className={styles.map} id="map" src="../src/ForestMap.png" height="150px" style={{ width: "50%" }} /> <br />
        WASD (← → ↑ ↓) for movement + Space to jump
      </div>
      <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] }, 
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] }, 
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}>
      <div className={styles.canvas}>
      {showReader && (
        <div className={styles.readerOverlay}>
          <p className={styles.specialPara}>
          In the beginning, the world was a vast, lush forest, stretching as far as the eye could see.<br/> Towering trees, rich with life, covered the land, and rivers flowed freely through valleys, nourishing all living things.<br/><br/>

          This was a world in perfect harmony—nature’s intricate balance holding everything together.<br/> The creatures of the earth lived in peace, and the air was pure, untouched by human hands.<br/><br/>

          But now, you stand at the dawn of a new era—a time when humanity is beginning to shape the world with its hands.<br/> The forests are yours to explore, but they are also yours to protect—or destroy.<br/><br/>

          The choices you make will determine the future of this lush land.<br/> If you take too much, if you disregard the delicate balance, the beauty around you may be lost forever.<br/><br/>

          You have the power to preserve this world or bring about its downfall.<br/> The forests, rivers, and creatures depend on your actions.<br/><br/>

          Choose wisely, for the path you carve today will echo throughout history. Will you honor the world that nurtures you, or will you let greed and carelessness shape the future? The fate of all life hangs in the balance.
          </p>
          <button className={styles.hideOverlayButton} onClick={()=>{setShowReader(false)}}>Continue</button>
        </div>
      )}
      <Canvas>
        <SkyCycle />
        <ambientLight /> 
        <FPV /> 
        <Axes/> 
        <Physics gravity={[0, -10, 0]} debug> 
        <Player /> 
        <TimeMachine2 position={[40, 0,9]} rotation={[0, Math.PI/2, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => { // Trigger to open time travel page on interaction
              console.log('hi');
              window.open("/timeTravel","_top");        
            }}
          >
        <EntryCircle position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/> 
        </RigidBody>
        <RigidBody
            sensor
            type="fixed"           
            onIntersectionEnter={() => { // Trigger to open navigation page on interaction
              console.log('hi');
              window.open("/NavigationPage","_top");        
            }}
          >
        <EntryCircle position={[-21, 7, 27]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/> 
        </RigidBody>
        <ForestGen /> // Generating forest elements
        <FaunaGen /> // Generating fauna elements
        <Hindu position={[30, 0, 40]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}/> 
        <Pond position={[-69, -3.2, 10]} rotation={[-Math.PI/26, -Math.PI / 2, -Math.PI/15]} scale={[.05, .05, .05]} /> 
        <Ground position={[0,0,0]}/> // Ground component
        <Hut position={[-30, 1.5, 27]} rotation={[0, Math.PI / 2, 0]} scale={[1.7,1.7,1.7]}/> 
        <Cart position={[-15, 0, 39]} rotation={[0, Math.PI/2 , 0]} scale={[.3,.3,.3]}/> 
        <CarryCart position={[-10, 0, 39]} rotation={[0, -Math.PI , 0]} scale={[1,1,1]}/>
        <Mountain position={[75, -15, 15]} rotation={[0, -Math.PI/2 , 0]} scale={[1.5,1.5,1.5]} />
        <MountainFog position={[90, -25, 20]} rotation={[0, Math.PI/2 , 0]} scale={[2,2,2]} /> 
        <MountainFog position={[69, -10, -34]} rotation={[0, Math.PI/2 , 0]} scale={[1,1,1]} /> 
        <MountainFog position={[-25, -15, -60]} rotation={[0, 3*Math.PI/4 , 0]} scale={[1,1,1]} />   
        <MountainFog position={[39, -20, -60]} rotation={[0, 3*Math.PI/4 , 0]} scale={[2,2,2]} />   
        <MountainFog position={[-55, -15, -40]} rotation={[0, 3*Math.PI/4 , 0]} scale={[1,1,1]} />  
        <MountainFog position={[-105, -20, -50]} rotation={[0, 3*Math.PI/4 , 0]} scale={[2,2,2]} /> 
        <MountainFog position={[-145, -20, 20]} rotation={[0, 3*Math.PI/2 , 0]} scale={[2,2,2]} /> 
        <MountainFog position={[-145, -15, 5]} rotation={[0, Math.PI/6, 0]} scale={[1,1,1]} />  
        <Mountain position={[35, -30, 105]} rotation={[0, Math.PI/2, 0]} scale={[2,2,2]} />  
        <Mountain position={[-45, -20, 105]} rotation={[0, Math.PI/2, 0]} scale={[2,2,2]} />  
        </Physics>
      <PointerLockControls />
      </Canvas>
      </div>
      </KeyboardControls>
      <Loader /> 
      </Suspense>    
      <div className='absolute centered cursor'>+</div> 
    </>
  );
}

export default Forest; // Exporting the Forest component as default
