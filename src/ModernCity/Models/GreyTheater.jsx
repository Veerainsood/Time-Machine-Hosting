import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GreyTheater(props) {
  const { nodes, materials } = useGLTF('/GreyTheater.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshSteps.geometry}
        material={materials['Teatro Steps']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshRoosterTail.geometry}
        material={materials['Teatro Primary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextCine.geometry}
        material={materials['Teatro Primary']}
        position={[30.2, 19.299, -0.397]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextTeatro.geometry}
        material={materials['Teatro Primary']}
        position={[30.2, 16.609, -0.397]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextGoiania.geometry}
        material={materials['Teatro Primary']}
        position={[30.2, 12.697, -0.397]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextCine001.geometry}
        material={materials['Teatro Primary']}
        position={[30.2, 19.299, 0.013]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextTeatro001.geometry}
        material={materials['Teatro Primary']}
        position={[30.2, 16.609, 0.013]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextGoiania001.geometry}
        material={materials['Teatro Primary']}
        position={[30.2, 12.697, 0.013]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshWindows.geometry}
        material={materials['Teatro Frames']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshDecorations.geometry}
        material={materials['Teatro Secondary']}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TeatroMeshFront_Fountations.geometry}
          material={materials['Teatro Secondary']}
          position={[-24.516, 0, 20.3]}
          scale={0.03}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshWindowBars.geometry}
        material={materials['Teatro Metal']}
        position={[13.309, 4.297, 13.129]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshWindowBars001.geometry}
        material={materials['Teatro Metal']}
        position={[16.233, 4.297, 12.104]}
        rotation={[Math.PI / 2, 0, -0.774]}
        scale={1.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshWindowBars004.geometry}
        material={materials['Teatro Metal']}
        position={[16.239, 4.298, -12.467]}
        rotation={[Math.PI / 2, 0, -2.364]}
        scale={1.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshWindowBars005.geometry}
        material={materials['Teatro Metal']}
        position={[13.285, 4.308, -13.514]}
        rotation={[Math.PI / 2, 0, -3.141]}
        scale={1.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshVents.geometry}
        material={materials['Teatro Primary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextFront.geometry}
        material={materials['Teatro Metal']}
        position={[31.534, 6.33, -0.18]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshTextFrontScaffold.geometry}
        material={materials['Teatro Primary']}
        position={[31.451, 6.526, -0.192]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshDoorsWindows.geometry}
        material={materials['Teatro Door Metal']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TeatroMeshDecorationsFront.geometry}
        material={materials['Teatro Secondary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)010'].geometry}
        material={materials['Teatro Door Metal']}
        position={[0.074, 1.399, -15.959]}
        rotation={[0, 1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)011'].geometry}
        material={materials['Teatro Door Metal']}
        position={[-1.126, 1.399, -15.959]}
        rotation={[0, 1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)012'].geometry}
        material={materials['Teatro Door Metal']}
        position={[-14.628, 1.399, -15.039]}
        rotation={[0, 1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)013'].geometry}
        material={materials['Teatro Door Metal']}
        position={[-14.329, 1.393, 14.7]}
        rotation={[0, -1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)004'].geometry}
        material={materials['Teatro Door Metal']}
        position={[0.137, 1.399, 15.636]}
        rotation={[0, -1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)005'].geometry}
        material={materials['Teatro Door Metal']}
        position={[-1.063, 1.399, 15.636]}
        rotation={[0, -1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)006'].geometry}
        material={materials['Teatro Door Metal']}
        position={[9.835, 1.368, 14.184]}
        rotation={[0, -1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)007'].geometry}
        material={materials['Teatro Door Metal']}
        position={[8.635, 1.368, 14.184]}
        rotation={[0, -1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)008'].geometry}
        material={materials['Teatro Door Metal']}
        position={[9.771, 1.399, -14.608]}
        rotation={[0, 1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)009'].geometry}
        material={materials['Teatro Door Metal']}
        position={[8.571, 1.399, -14.608]}
        rotation={[0, 1.571, 0]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)001'].geometry}
        material={materials['Teatro Door Metal']}
        position={[26.266, 2.193, 0.408]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)002'].geometry}
        material={materials['Teatro Door Metal']}
        position={[26.266, 2.193, 1.608]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)003'].geometry}
        material={materials['Teatro Door Metal']}
        position={[26.266, 2.193, -1.992]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TeatroMeshDoor_(Normal)014'].geometry}
        material={materials['Teatro Door Metal']}
        position={[26.266, 2.193, -0.792]}
        scale={1.483}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21001.geometry}
        material={materials['Teatro Primary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21001_1.geometry}
        material={materials['Teatro Secondary']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21001_2.geometry}
        material={materials['Teatro Windows']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21001_3.geometry}
        material={materials['Teatro Doors']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21001_4.geometry}
        material={materials['Teatro Roof']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21001_5.geometry}
        material={materials['Teatro Steps']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21011.geometry}
        material={materials['Teatro Windows']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ID21011_1.geometry}
        material={materials['Teatro Door Metal']}
      />
    </group>
  )
}

useGLTF.preload('/GreyTheater.glb')
