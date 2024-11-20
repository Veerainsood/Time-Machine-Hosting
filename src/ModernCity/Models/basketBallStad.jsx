import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function BasketBallStad(props) {
  const { nodes, materials } = useGLTF('/basketBallModified.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2002.geometry}
          material={materials.material_79}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2003.geometry}
          material={materials.material_80}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2025.geometry}
          material={materials.material_7}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2033.geometry}
          material={materials.material_19}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2054.geometry}
          material={materials.material_34}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2056.geometry}
          material={materials.material_38}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2057.geometry}
          material={materials.material_39}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2058.geometry}
          material={materials.material_36}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2059.geometry}
          material={materials.material_37}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2060.geometry}
          material={materials.material_40}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2061.geometry}
          material={materials.material_42}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2062.geometry}
          material={materials.material_43}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2063.geometry}
          material={materials.material_44}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2064.geometry}
          material={materials.material_46}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2066.geometry}
          material={materials.material_48}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2067.geometry}
          material={materials.material_54}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2068.geometry}
          material={materials.material_55}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2069.geometry}
          material={materials.material_56}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2070.geometry}
          material={materials.material_57}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2071.geometry}
          material={materials.material_58}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2072.geometry}
          material={materials.material_59}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2073.geometry}
          material={materials.material_49}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2074.geometry}
          material={materials.material_50}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2075.geometry}
          material={materials.material_53}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2076.geometry}
          material={materials.material_61}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2077.geometry}
          material={materials.material_62}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2078.geometry}
          material={materials.material_63}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2079.geometry}
          material={materials.material_66}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2080.geometry}
          material={materials.material_69}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2081.geometry}
          material={materials.material_67}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2082.geometry}
          material={materials.material_68}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2083.geometry}
          material={materials.material_70}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2085.geometry}
          material={materials.material_71}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2086.geometry}
          material={materials.material_72}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2087.geometry}
          material={materials.material_74}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2089.geometry}
          material={materials.material_73}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2091.geometry}
          material={materials.material_75}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2092.geometry}
          material={materials.material_76}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2096.geometry}
          material={materials.material_78}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material2097.geometry}
          material={materials.material_77}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3011.geometry}
          material={materials.material_9}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3020.geometry}
          material={materials.material_35}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3021.geometry}
          material={materials.material_41}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3022.geometry}
          material={materials.material_45}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3024.geometry}
          material={materials.material_47}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3025.geometry}
          material={materials.material_51}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3026.geometry}
          material={materials.material_52}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3027.geometry}
          material={materials.material_60}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3028.geometry}
          material={materials.material_64}
          position={[-1743.043, -2440.241, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Material3029.geometry}
          material={materials.material_65}
          position={[-1743.043, -2440.241, 0]}
        />
      </group>
    </group>
  )
}

