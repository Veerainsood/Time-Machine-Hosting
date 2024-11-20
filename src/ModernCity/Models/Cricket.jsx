import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cricket(props) {
  const { nodes, materials } = useGLTF('/cricket_stadium.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -2.58, 0]} rotation={[-Math.PI / 2, 0, -0.647]} scale={127.949}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chairs_Chairs__Base_0.geometry}
              material={materials.Chairs__Base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chairs_Chairs_yellow_0.geometry}
              material={materials.Chairs_yellow}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chairs_Chairs_red_0.geometry}
              material={materials.Chairs_red}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chairs_Chairs_blue_0.geometry}
              material={materials.Chairs_blue}
            />
          </group>
          <group position={[0, -0.12, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={129.063}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ground__Material003_0.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ground__Pitch_0.geometry}
              material={materials.Pitch}
            />
          </group>
          <group
            position={[27.817, 5871.202, -9106.07]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1843.119, 184.592, 1077.129]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Scoreboard_body_0.geometry}
              material={materials.Scoreboard_body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Scoreboard_screen_0.geometry}
              material={materials.Scoreboard_screen}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, -2.323]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, -1.572]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, -0.788]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, -0.003]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube003_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0.819]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube004_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 1.566]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 2.353]} scale={123.921}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_Lights_base_0.geometry}
              material={materials.Lights_base}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube006_Emissive_0.geometry}
              material={materials.Emissive}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.outer_area__0.geometry}
            material={materials.outer_area__0}
            position={[0, -2.58, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3726.339}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.outer_area001_Material002_0.geometry}
            material={materials['Material.002']}
            position={[0, 33.398, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3726.339}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Material001_0.geometry}
            material={materials['Material.001']}
            position={[-1175.972, 0, -1.44]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[6.11, 6.11, 30.618]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material001_0.geometry}
            material={materials['Material.001']}
            position={[437.936, 158.763, -35.195]}
            rotation={[0, 0, -Math.PI]}
            scale={[1.885, 1.885, 9.838]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_Material001_0.geometry}
            material={materials['Material.001']}
            position={[437.936, 158.763, -15.007]}
            rotation={[0, 0, -Math.PI]}
            scale={[1.885, 1.885, 9.517]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_Material001_0.geometry}
            material={materials['Material.001']}
            position={[335.298, 0, -1.588]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[6.11, 6.11, 30.618]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder005_Material001_0.geometry}
            material={materials['Material.001']}
            position={[1949.206, 158.763, -35.343]}
            rotation={[0, 0, -Math.PI]}
            scale={[1.885, 1.885, 9.838]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_Material001_0.geometry}
            material={materials['Material.001']}
            position={[1949.206, 158.763, -15.156]}
            rotation={[0, 0, -Math.PI]}
            scale={[1.885, 1.885, 9.517]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.outer_area003_Rope_texture_0.geometry}
            material={materials.Rope_texture}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_007_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, -0.788]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_001_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, -0.002]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_002_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, 0.819]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_004_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, 2.353]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_005_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, 3.139]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_006_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, -2.32]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_008_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, -1.572]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Boundary_texture_0.geometry}
            material={materials.Boundary_texture}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3548.383}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_003_Lights_pole_0.geometry}
            material={materials.Lights_pole}
            rotation={[-Math.PI / 2, 0, 1.566]}
            scale={123.921}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ground_009_Ground_texture_0.geometry}
            material={materials.Ground_texture}
            position={[0, -0.12, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={129.063}
          />
        </group>
      </group>
    </group>
  )
}

