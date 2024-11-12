import { Canvas } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import {Ground} from '../Components/Ground'; // Ensure this is the correct import for your Ground component
import { Player } from '../Components/Player';
import { FPV } from '../Components/FPV';
import { SkyCycle } from '../Components/ChangeDayNight';
import { TimeMachine2 } from '../ForestModels/TimeMachine2';
import { EntryCircle } from '../ForestModels/EntryCircle';
import { Loader, PointerLockControls, Stars } from '@react-three/drei';
import { Suspense, useState } from "react"
import { KeyboardControls } from '@react-three/drei';
import { Axes } from '../Components/AxesHelper';
import styles from "../FutureCity/FutureCity.module.css"
import { DestroyedCityModel } from './Models/DestroyedCityModel';

export function DestroyedCity() {  
  const [showReader, setShowReader] = useState(true);
  return (
    <>    
      <Suspense>
      <div className={styles.map3d}>  
      <img className={styles.map} id="map" src="../src/DestroyedCity/DestroyedMap.png" height="150px" style={{ width: "50%" }} /> <br />
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
          With every step taken in disregard, the earth struggles under the weight of neglect, and the forests mourn in silence.<br/> Where once life flourished, now barren land stretches, a reminder of choices left unmade and paths left untended.<br/><br/>

          Each tree that was cut without thought, each river polluted, has left scars upon the land.<br/> The animals have retreated into shadows, the rivers run dry and lifeless, and the skies darken with a haze that dims the once-brilliant sun.<br/> What was once a journey of promise has now turned into a path of despair—a path that reminds all who travel it of a world’s balance forever lost.<br/><br/>

          You have seen the limits of nature's resilience, and now the trust it once extended has faded.<br/> The lands and creatures that once thrived in harmony have withered, their vibrant colors drained.<br/> Remember, the smallest acts of harm—littering a river, ignoring a forest’s needs, failing to protect the creatures within—echo into the distance, affecting more than just the moment.<br/><br/>

          Now, as you walk this desolate path, remember the choices that led here.<br/> You are not just a traveler but a witness to the consequences of disregard, and perhaps, a reminder to others of the fragile balance that sustains all life."<br/><br/>
          </p>
          <button className={styles.hideOverlayButton} onClick={()=>{setShowReader(false)}}>Continue</button>
        </div>
      )}
      <Canvas>
        <SkyCycle />
        <ambientLight intensity={1}/> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -10, 0]} debug>
        <Player />          
        <TimeMachine2 position={[30, 0.5,0]} rotation={[0, 0, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/timeTravel","_top"); 
                  
            }}
          >
        <EntryCircle position={[25, 2.3, 0]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <DestroyedCityModel position={[0,-11,0]} scale={[3,3,3]} />
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
