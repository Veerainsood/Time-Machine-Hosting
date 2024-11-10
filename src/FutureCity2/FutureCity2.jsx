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
import { Cityscape } from './Models/CityScape';

export function FutureCity2() {  
  const [showReader,setShowReader] = useState(true);
  return (
    <>    
      <Suspense>
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
          With each step you take, the earth breathes a little easier, and the forests whisper their gratitude.<br></br> You've chosen the path of preservation, and nature responds in kind, blossoming in vibrant hues and flourishing under your care.<br></br> 

          Every tree you protect, every river you keep pure, brings life and harmony back to the land.<br></br>  The animals emerge from their hiding places, the rivers flow with renewed vigor, and the skies shine clearer than ever.<br></br> Your journey isn't just a quest,it's a promise—a promise to safeguard this beautiful world and to cherish the balance that sustains it.<br></br> 

          You understand that nature's gifts are finite, and by choosing wisely, you've earned its trust.<br></br>  The lands and creatures around you recognize your intentions, and they flourish under your gentle stewardship.<br></br>  Remember, the smallest acts—planting a seed, cleaning a path, respecting the creatures of the forest—reverberate far beyond the moment.

          As you continue, nature itself becomes your ally. <br></br> Its rivers will guide you, its trees will shelter you, and its creatures will offer companionship. Know that each choice you make toward preserving this world strengthens not only your spirit but the bonds between all living things.<br></br> 

          Carry this wisdom forward, knowing that you are not just a hero but a guardian, a steward of the land, and a symbol of hope for all who call it home
          </p>
          <button className={styles.hideOverlayButton} onClick={()=>{setShowReader(false)}}>Continue</button>
        </div>
      )}
      <Canvas>
        <Stars />
        <ambientLight intensity={1}/> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -10, 0]} debug>
        <Player />          
        <TimeMachine2 position={[9, 1,0]} rotation={[0, 0, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/timeTravel","_top"); 
                  
            }}
          >
        <EntryCircle position={[14, 2.3, 0]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <Cityscape />
        </Physics>
      <PointerLockControls />
      </Canvas>
      </div>
      </KeyboardControls>
      <Loader />
      </Suspense>    
    </>
  );
}
