import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Trash(props) {
  const { nodes, materials } = useGLTF('/trash_can.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TrashCan_Grey_TrashCan(Grey)_0'].geometry}
        material={materials.TrashCanGrey}
        position={[0, 0, -101.89]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TrashCan_Black_TrashCan(Black)_0'].geometry}
        material={materials.TrashCanBlack}
        position={[0, 0, -33.963]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TrashCan_Blue_TrashCan(Blue)_0'].geometry}
        material={materials.TrashCanBlue}
        position={[0, 0, 33.963]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['TrashCan_Green_TrashCan(Green)_0'].geometry}
        material={materials.TrashCanGreen}
        position={[0, 0, 101.89]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/trash_can.glb')