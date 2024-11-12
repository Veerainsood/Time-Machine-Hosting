import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Suspense, useState } from "react";
import { Physics, RigidBody } from '@react-three/rapier';
import { Player } from '../Components/Player';
import { FPV } from '../Components/FPV';
import { SkyCycle } from '../Components/ChangeDayNight';
import { TimeMachine2 } from '../ForestModels/TimeMachine2';
import { EntryCircle } from '../ForestModels/EntryCircle';
import { Loader, PointerLockControls } from '@react-three/drei';
import { KeyboardControls } from '@react-three/drei';
import { Axes } from '../Components/AxesHelper';
import { CityModel2 } from './Models/CityModel2';
import { Market } from './Models/SuperMarket';
import { Building_One } from './Models/Building_One';
import { BasketBallStad } from './Models/basketBallStad';
import { Disco } from './Models/Disco';
import { McDonalds } from './Models/mcDonalds';
import { House } from './Models/House';
import { HyperCar1 } from './Models/CarHyper1';
import * as THREE from 'three';
import { HyperCar2 } from './Models/CarHyper2';
import { GreyTheater } from './Models/GreyTheater';
import { CarPackSix } from './Models/CarPackSix';
import { TheaterBig } from './Models/TheaterBig';
import { Modern_VILLA } from './Models/Modern_VILLA';
import { Trash } from './Models/Trash';
import { Gas_Station } from './Models/Gas_Station';
import { Cricket } from './Models/Cricket';
import { Fast_Food } from './Models/Fast_Food';
import { Gas_pump } from './Models/Gas_pump';
import { SpanishHouse } from './Models/SpanishHouse';
import { Vending } from './Models/Vending';
import { StreetPeople } from './Models/StreetPeopleDining';
import { LittleKrishna } from './Models/LittleKrishna';
import { AdultKrishna } from './Models/AdultKrishna';
import { AdultKrishnaSitting } from './Models/AdultKrishnaSitting';
import styles from "./City.module.css"
import { Booth } from './Models/Booth';
import { Wine } from './Models/Wine';
import { DreamHouse } from './Models/DreamHouse';
export default function City() {  
  
  const [showReader,setShowReader] = useState(true);

  return (
    <>    
      <Suspense>
      <div className={styles.map3d}>  
      <img className={styles.map} id="map" src="../src/ModernCity/CityMap.png" height="150px" style={{ width: "50%" }} /> <br />
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
        <ambientLight /> 
        <FPV />
        <Axes/>
        <Physics gravity={[0, -3, 0]} debug>
        <Player />          
        <TimeMachine2 position={[40, 0,9]} rotation={[0, Math.PI/2, 0]} scale={[.5, .5, .5]}/> 
        <RigidBody
            sensor
            type="fixed"
            onIntersectionEnter={() => {
              console.log('hi');
              window.open("/timeTravel","_top");        
            }}
          >
        <EntryCircle position={[40, 1, 14]} rotation={[0, Math.PI/2, 0]} scale={[.5, .1, .5]}/>
        </RigidBody>
        <CityModel2 position={[40, 0, 14]} rotation={[0, Math.PI/2, 0]} scale={[1, 1, 1]}/>
        <Market position={[-7, -1.5, -157]} rotation={[0, Math.PI, 0]} scale={[4, 4, 4]}/>
        <BasketBallStad position={[-150, 1, -79]} rotation={[0, Math.PI, 0]} scale={[5, 5, 5]}/>
        <McDonalds position={[15, 0, -30]} rotation={[0, 0, 0]} scale={[1.3, 1.5, 1.5]}/>
        <House position={[-160,-5,260]} rotation={[0, 0, 0]} scale={[10,10, 10]}/>
        <pointLight position={[32, 10, 30]} intensity={1000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <HyperCar1 position={[30,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        <HyperCar2 position={[37,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        <HyperCar1 position={[26,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        <pointLight position={[25, 20, 90]} intensity={2000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <HyperCar2 position={[33.5,0.2, 30]} rotation={[0, 0, 0]} scale={[150,150, 150]}/>
        <BasketBallStad position ={[30,0.5,63]} scale ={[3.5,3.5,3.5]}/>
        <BasketBallStad position ={[-62,0.5,103]} rotation={[0,Math.PI/2,0]} scale ={[2.2,3,3]}/>
        <BasketBallStad position ={[-85,0.5,193]} rotation={[0,0,0]} scale ={[2.5,3,3.6]}/>
        {/* <Disco position ={[-80,0.5,-100]} rotation={[0,0,0]} scale ={[5.5,5.5,5.5]}/> */}
        <DreamHouse position ={[-75,0.5,-100]} rotation={[0,0,0]} scale ={[0.04,0.04,0.04]}/>
        <Booth position ={[-100,0.5,-40]} rotation={[0,89.55,0]} scale ={[2,2,2]}/>
        <StreetPeople position={[-79,0.5,270]} scale={[2,2,2]}/>
        <StreetPeople position={[-127,0.3,132]} scale={[2,2,2.5]} rotation={[0,Math.PI/2,0]}/>
        <GreyTheater position ={[25,0.4,190]} rotation={[0, 90, 0]} scale ={[0.8,0.8,0.8]} /> 
        <TheaterBig position ={[15,2,350]} rotation={[0, 0, 0]} scale ={[1.4,1.4,1.4]} />
        <Wine position ={[-144,0.5,0]} rotation={[0, 89.55, 0]} scale ={[0.2,0.2,0.2]} />
        <AdultKrishna scale={[3,3,3]} position={[100,1,15]} rotation={[0,-Math.PI/2,0]} />
        {/* <AdultKrishna scale={[1,1,1]} position={[-130,1,-10]} rotation={[0,Math.PI/2,0]}/> */}
        <LittleKrishna scale={[.2,.2,.2]} position={[40,1,15]} rotation={[0,-Math.PI/2,0]}/>
        <AdultKrishnaSitting scale={[.13,.13,.13]} position={[-153,0.5,137]} rotation={[0,0,0]} />
        <AdultKrishnaSitting scale={[.13,.13,.13]} position={[-153,0.5,140.5]} rotation={[0,Math.PI,0]} />
        <AdultKrishna scale={[.7,.7,.7]} position={[-13,1,178]} rotation={[0,Math.PI,0]}/>
        <LittleKrishna scale={[.2,.2,.2]} position={[10,1,168]} rotation={[0,Math.PI,0]} />
        <LittleKrishna scale={[.2,.2,.2]} position={[10,1,271]} rotation={[0,-3*Math.PI/4,0]}/>
        <AdultKrishna scale={[.2,.2,.2]} position={[-19,1,261]} rotation={[0,-Math.PI/2,0]}/>
        <AdultKrishna scale={[.2,.2,.2]} position={[-82,1,261]} rotation={[0,Math.PI/2,0]}/>
        <AdultKrishna scale={[.2,.2,.2]} position={[-82,1,201]} rotation={[0,Math.PI/2,0]}/>
        {/* <AdultKrishna scale={[.2,.2,.2]} position={[-140,1,141]} rotation={[0,Math.PI/4,0]}/>
        <AdultKrishna scale={[.2,.2,.2]} position={[-132,1,141]} rotation={[0,Math.PI/2,0]}/> */}
        <Building_One position ={[-100,0.1,380]} rotation={[0,0,0]} scale ={[0.007,0.007,0.007]} />
        <Modern_VILLA position ={[-70, -1, 50]} rotation={[0,359.7,0]} scale ={[2,2,2]} />
        <pointLight position={[35,10,-20]} intensity={1000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <Trash position ={[35, 0, -20]} rotation={[0,359.7,0]} scale ={[0.05,0.05,0.05]} />
        <Gas_Station position={[-147,-0.4,200]} rotation={[0, 69.12, 0]} scale={[2,2.5, 2]}/>
        <Cricket position ={[10,0.3,270]} rotation={[0, 0, 0]} scale ={[0.6,0.6,0.6]} />
        <Fast_Food position ={[10,0.1,120]} rotation={[0,180.62,0]} scale ={[0.24  ,0.2,0.4]} />
        <Gas_pump position ={[10,0.1,93]} rotation={[0,0,0]} scale ={[3.5 ,3.5,3.5]} />
        <SpanishHouse position ={[-135, -1, 55]} rotation={[0,359.7,0]} scale ={[  2.5,3,3.4]} />
        <pointLight position={[-7,15 ,130]} intensity={1000} color="#fff" target={new THREE.Vector3(0, 0, -1)} />
        <Vending   position ={[-16 ,0,148 ]} rotation={[0,91.2 ,0]} scale ={[5,7,5]} />
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

