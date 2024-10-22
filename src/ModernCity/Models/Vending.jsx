

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Vending(props) {
  const { nodes, materials } = useGLTF('/vending_machine_coca_cola.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.77}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vending_machine_Vending_machine_0.geometry}
            material={materials.Vending_machine}
            position={[-256.787, -143.511, 248.216]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/vending_machine_coca_cola.glb')