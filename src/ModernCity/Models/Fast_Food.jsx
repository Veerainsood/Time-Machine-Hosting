import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fast_Food(props) {
  const { nodes, materials } = useGLTF('/fast_food_restaurant.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.FastFood_RestaurantSG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/fast_food_restaurant.glb')