import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function TheaterBig(props) {
  const { nodes, materials } = useGLTF('/TheaterBig.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BalconyRails_Metal_Chrome_0.geometry} // nodes 
            material={materials.Metal_Chrome}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.balconyUnderTrim_UnderTrim_0.geometry}
            material={materials.UnderTrim}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BoxSeats1_BoxSeats_0.geometry}
            material={materials.BoxSeats}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.chimps_ChimpModel_Unwrapped2_polySurface1_2_Chimp_0.geometry}
            material={materials.Chimp}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.curtains_Curtains_0.geometry}
            material={materials.Curtains}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.firePull_FireExtinguisher_0.geometry}
            material={materials.FireExtinguisher}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor1_Floor_0.geometry}
            material={materials.Floor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MWT_Stage_StageTrim_0.geometry}
            material={materials.StageTrim}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface170_basewall_0.geometry}
            material={materials.basewall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.railing_Metal_Chrome_0.geometry}
            material={materials.Metal_Chrome}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_01_Seats_0.geometry}
              material={materials.Seats}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_01_Seats_0001.geometry}
              material={materials.Seats}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_01_Seats_0002.geometry}
              material={materials.Seats}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_02_Seats_0.geometry}
              material={materials.Seats}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_02_Seats_0001.geometry}
              material={materials.Seats}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_02_Seats_0002.geometry}
              material={materials.Seats}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_03_Seats_0.geometry}
              material={materials.Seats}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_03_Seats_0001.geometry}
              material={materials.Seats}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seats_03_Seats_0002.geometry}
              material={materials.Seats}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_04_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_05_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_06_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_07_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_08_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_09_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Seats_10_Seats_0.geometry}
            material={materials.Seats}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0001.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0002.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0003.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0004.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0005.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Spears_Spear_0006.geometry}
            material={materials.Spear}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.spearWallOutcropping_polySurface12_TheatreDoor_0.geometry}
            material={materials.TheatreDoor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sphynx_polySurface2_Sphynx_0.geometry}
            material={materials.Sphynx}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.stage_Stage_0.geometry}
            material={materials.Stage}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stagepiece_StagePiece_0.geometry}
            material={materials.StagePiece}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.supportBeams_polySurface1_SupportBeam02_0.geometry}
            material={materials.SupportBeam02}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.theaterdoor_pCube6_TheatreDoor_0.geometry}
            material={materials.TheatreDoor}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.theaterdoor_pCube6_1_TheatreDoor_0.geometry}
            material={materials.TheatreDoor}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/TheaterBig.glb')