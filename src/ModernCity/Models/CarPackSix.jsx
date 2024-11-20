
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CarPackSix(props) {
  const { nodes, materials } = useGLTF('/CarPackSix.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={26.286}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-19.61, 0, -31.495]}>
            <group position={[8.043, 0, 42.892]} rotation={[0, 0.186, 0]}>
              <group position={[0.075, -0.005, 0.134]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0004.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0004.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0004.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0004.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[-5.009, -0.005, 0.134]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0005.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0005.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0005.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0005.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.075, -0.005, -8.568]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0006.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0006.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0006.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0006.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group
                position={[-0.037, -0.005, 0.242]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0007.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0007.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0007.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0007.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Back_White1_0.geometry}
                material={materials.White1}
                position={[0.066, 3, -6.836]}
                scale={0.794}
              />
              <group
                position={[-2.501, 2.775, 1.695]}
                rotation={[-Math.PI, 0.521, 0]}
                scale={-0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_Second_Body_Color_0001.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_White1_0001.geometry}
                  material={materials.White1}
                />
              </group>
              <group position={[2.506, 2.775, 1.695]} rotation={[0, 0.405, 0]} scale={0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_Second_Body_Color_0001.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_White1_0001.geometry}
                  material={materials.White1}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface41_Front_Lights_Color_0001.geometry}
                material={materials.Front_Lights_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface43_Windows_Color_0001.geometry}
                material={materials.Windows_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface45_Third_Cody_Color_0001.geometry}
                material={materials.Third_Cody_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface49_Back_Light_Color_0001.geometry}
                material={materials.Back_Light_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface59_Pink_Body_Color_0.geometry}
                material={materials.Pink_Body_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface65_Second_Body_Color_0001.geometry}
                material={materials.Second_Body_Color}
              />
            </group>
            <group position={[6.127, 0, 26.627]} rotation={[0, 0.848, 0]}>
              <group position={[-1.487, -0.005, 1.506]} rotation={[0, 0.414, 0]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0012.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0012.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0016.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0016.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[-6.571, -0.005, 1.506]} rotation={[0, 0.414, 0]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0013.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0013.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0017.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0017.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.075, -0.005, -8.568]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0014.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0014.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0018.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0018.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group
                position={[-0.037, -0.005, 0.242]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0015.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0015.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0019.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0019.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.104, 4.004, -0.917]} scale={0.79}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Police_Lights_Police_Light_blue_0001.geometry}
                  material={materials.Police_Light_blue}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Police_Lights_Police_Light_Red_0001.geometry}
                  material={materials.Police_Light_Red}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Police_Lights_Police_Lights_White_0.geometry}
                  material={materials.Police_Lights_White}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Left_Side_Police_Text_Police_Black_0.geometry}
                material={materials.Police_Black}
                position={[-2.738, 1.146, -1.815]}
                rotation={[3.133, -1.539, -0.019]}
                scale={-0.091}
              />
              <group
                position={[-2.501, 2.775, 1.695]}
                rotation={[-Math.PI, 0.521, 0]}
                scale={-0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_Second_Body_Color_0004.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_White1_0004.geometry}
                  material={materials.White1}
                />
              </group>
              <group position={[2.506, 2.775, 1.695]} rotation={[0, 0.405, 0]} scale={0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_Second_Body_Color_0004.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_White1_0004.geometry}
                  material={materials.White1}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface41_Front_Lights_Color_0004.geometry}
                material={materials.Front_Lights_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface43_Windows_Color_0004.geometry}
                material={materials.Windows_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface45_Third_Cody_Color_0004.geometry}
                material={materials.Third_Cody_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface49_Back_Light_Color_0004.geometry}
                material={materials.Back_Light_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface59_Police_Black_0.geometry}
                material={materials.Police_Black}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface59_Police_White_0.geometry}
                material={materials.Police_White}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface65_Second_Body_Color_0004.geometry}
                material={materials.Second_Body_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right_Side_Police_Text_Police_Black_0.geometry}
                material={materials.Police_Black}
                position={[2.595, 1.111, 1.759]}
                rotation={[-3.129, 1.549, 3.138]}
                scale={0.091}
              />
            </group>
            <group position={[-5.502, 4.241, 23.954]} rotation={[0, 0.299, 0]} scale={0.975}>
              <group position={[20.973, -1.693, 0.418]} scale={1.108}>
                <group position={[0.104, 4.004, -0.917]} scale={0.79}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Police_Lights_Police_Light_blue_0002.geometry}
                    material={materials.Police_Light_blue}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Police_Lights_Police_Light_Red_0002.geometry}
                    material={materials.Police_Light_Red}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Police_Lights_Police_Lights_White_0001.geometry}
                    material={materials.Police_Lights_White}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Police_Text_Police_Black_0001.geometry}
                  material={materials.Police_Black}
                  position={[-2.738, 1.146, -1.815]}
                  rotation={[3.133, -1.539, -0.019]}
                  scale={-0.091}
                />
                <group
                  position={[-2.501, 2.775, 1.695]}
                  rotation={[-Math.PI, 0.521, 0]}
                  scale={-0.573}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Left_Side_Mirror_Second_Body_Color_0005.geometry}
                    material={materials.Second_Body_Color}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Left_Side_Mirror_White1_0005.geometry}
                    material={materials.White1}
                  />
                </group>
                <group position={[2.506, 2.775, 1.695]} rotation={[0, 0.405, 0]} scale={0.573}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Right_Side_Mirror_Second_Body_Color_0005.geometry}
                    material={materials.Second_Body_Color}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Right_Side_Mirror_White1_0005.geometry}
                    material={materials.White1}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface41_Front_Lights_Color_0005.geometry}
                  material={materials.Front_Lights_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface43_Windows_Color_0005.geometry}
                  material={materials.Windows_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface45_Third_Cody_Color_0005.geometry}
                  material={materials.Third_Cody_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface49_Back_Light_Color_0005.geometry}
                  material={materials.Back_Light_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface59_Police_Truck_Color_0.geometry}
                  material={materials.Police_Truck_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface65_Second_Body_Color_0005.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Police_Text_Police_Black_0001.geometry}
                  material={materials.Police_Black}
                  position={[2.595, 1.111, 1.759]}
                  rotation={[-3.129, 1.549, 3.138]}
                  scale={0.091}
                />
              </group>
              <group position={[9.914, -0.358, 2.155]} scale={1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0007.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0007.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0007.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0007.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0023.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0023.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <group position={[32.058, -0.358, 2.155]} rotation={[-Math.PI, 0, 0]} scale={-1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0006.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0006.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0006.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0006.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0022.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0022.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <group position={[9.914, -0.358, -7.354]} scale={1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0005.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0005.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0005.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0005.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0021.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0021.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <group position={[32.058, -0.358, -7.354]} rotation={[-Math.PI, 0, 0]} scale={-1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0004.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0004.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0004.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0004.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0020.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0020.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube877_Gray_0001.geometry}
                material={materials.Gray}
                position={[20.935, -0.852, 0.717]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube878_Gray1_0001.geometry}
                material={materials.Gray1}
                position={[20.935, -1.509, 5.274]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube879_Gray1_0001.geometry}
                material={materials.Gray1}
                position={[20.935, -1.509, -4.205]}
              />
            </group>
            <group position={[21.937, 4.241, 24.247]} rotation={[0, -1.035, 0]} scale={0.975}>
              <group position={[20.833, -1.49, 0.52]} scale={1.026}>
                <group position={[0.023, 3.289, -6.323]} rotation={[-0.141, 0, 0]}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Back_Second_Body_Color_0001.geometry}
                    material={materials.Second_Body_Color}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Back_Third_Cody_Color_0001.geometry}
                    material={materials.Third_Cody_Color}
                  />
                </group>
                <group
                  position={[-2.501, 2.775, 1.695]}
                  rotation={[-Math.PI, 0.521, 0]}
                  scale={-0.573}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Left_Side_Mirror_Second_Body_Color_0002.geometry}
                    material={materials.Second_Body_Color}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Left_Side_Mirror_White1_0002.geometry}
                    material={materials.White1}
                  />
                </group>
                <group position={[2.506, 2.775, 1.695]} rotation={[0, 0.405, 0]} scale={0.573}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Right_Side_Mirror_Second_Body_Color_0002.geometry}
                    material={materials.Second_Body_Color}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Right_Side_Mirror_White1_0002.geometry}
                    material={materials.White1}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface41_Front_Lights_Color_0002.geometry}
                  material={materials.Front_Lights_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface43_Windows_Color_0002.geometry}
                  material={materials.Windows_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface45_Third_Cody_Color_0002.geometry}
                  material={materials.Third_Cody_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface49_Back_Light_Color_0002.geometry}
                  material={materials.Back_Light_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface59_Truck_Red_Color_0.geometry}
                  material={materials.Truck_Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface59_Truck_White_Body_Clor_0.geometry}
                  material={materials.Truck_White_Body_Clor}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.polySurface65_Second_Body_Color_0002.geometry}
                  material={materials.Second_Body_Color}
                />
              </group>
              <group position={[9.847, -0.358, 8.086]} rotation={[0, 0.389, 0]} scale={1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0003.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0003.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0003.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0003.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0011.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0011.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <group
                position={[29.744, -0.358, -3.306]}
                rotation={[-Math.PI, -0.389, 0]}
                scale={-1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0002.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0002.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0002.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0002.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0010.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0010.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <group position={[9.914, -0.358, -7.354]} scale={1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0001.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0001.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0001.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0001.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0009.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0009.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <group position={[32.058, -0.358, -7.354]} rotation={[-Math.PI, 0, 0]} scale={-1.1}>
                <group position={[8.259, -3.268, -4.381]} scale={1.593}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube873_Gray1_0.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube874_Gray1_0.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 4, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube875_Gray1_0.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pCube876_Gray1_0.geometry}
                    material={materials.Gray1}
                    position={[3.306, 1.003, 4.54]}
                    rotation={[2.356, 0, 0]}
                    scale={0.628}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pPipe4_Wheel_Gray_0008.geometry}
                    material={materials.Wheel_Gray}
                    position={[0.955, 0.055, 0.247]}
                    scale={0.946}
                  />
                </group>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0008.geometry}
                  material={materials.Wheel_Black}
                  position={[9.56, -3.268, -4.381]}
                  scale={1.593}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube877_Gray_0.geometry}
                material={materials.Gray}
                position={[20.935, -1.297, 0.717]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube878_Gray1_0.geometry}
                material={materials.Gray1}
                position={[20.935, -1.509, 5.274]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pCube879_Gray1_0.geometry}
                material={materials.Gray1}
                position={[20.935, -1.509, -4.205]}
              />
            </group>
            <group position={[18.652, 0, 43.44]} rotation={[0, 0.481, 0]}>
              <group position={[2.673, -0.005, -0.518]} rotation={[0, -0.536, 0]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[-2.411, -0.005, -0.518]} rotation={[0, -0.536, 0]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0001.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0001.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0001.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0001.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.075, -0.005, -8.568]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0002.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0002.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0002.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0002.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group
                position={[-0.037, -0.005, 0.242]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0003.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0003.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0003.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0003.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.023, 3.289, -6.323]} rotation={[-0.141, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Back_Second_Body_Color_0.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Back_Third_Cody_Color_0.geometry}
                  material={materials.Third_Cody_Color}
                />
              </group>
              <group
                position={[-2.501, 2.775, 1.695]}
                rotation={[-Math.PI, 0.521, 0]}
                scale={-0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_Second_Body_Color_0.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_White1_0.geometry}
                  material={materials.White1}
                />
              </group>
              <group position={[2.506, 2.775, 1.695]} rotation={[0, 0.405, 0]} scale={0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_Second_Body_Color_0.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_White1_0.geometry}
                  material={materials.White1}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface41_Front_Lights_Color_0.geometry}
                material={materials.Front_Lights_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface43_Windows_Color_0.geometry}
                material={materials.Windows_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface45_Third_Cody_Color_0.geometry}
                material={materials.Third_Cody_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface49_Back_Light_Color_0.geometry}
                material={materials.Back_Light_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface59_Black1_0.geometry}
                material={materials.Black1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface59_Body_Color_Green_0.geometry}
                material={materials.Body_Color_Green}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface65_Second_Body_Color_0.geometry}
                material={materials.Second_Body_Color}
              />
            </group>
            <group position={[25.524, 0, 28.922]} rotation={[0, -0.783, 0]}>
              <group position={[0.062, 3.34, -6.127]} rotation={[-0.141, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Back_Poice_Blue_0.geometry}
                  material={materials.Poice_Blue}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Back_Second_Body_Color_0002.geometry}
                  material={materials.Second_Body_Color}
                />
              </group>
              <group position={[-1.719, -0.005, 1.843]} rotation={[0, 0.495, 0]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0008.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0008.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0012.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0012.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[-6.803, -0.005, 1.843]} rotation={[0, 0.495, 0]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0009.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0009.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0013.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0013.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.075, -0.005, -8.568]} scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0010.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0010.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0014.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0014.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group
                position={[-0.037, -0.005, 0.242]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.971}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Red_Color_0011.geometry}
                  material={materials.Red_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pCube871_Wheel_White_0011.geometry}
                  material={materials.Wheel_White}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pPipe4_Wheel_Gray_0015.geometry}
                  material={materials.Wheel_Gray}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Tier_Wheel_Black_0015.geometry}
                  material={materials.Wheel_Black}
                />
              </group>
              <group position={[0.104, 4.004, -0.917]} rotation={[-Math.PI, 0, 0]} scale={-0.79}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Police_Lights_Police_Light_Black_0.geometry}
                  material={materials.Police_Light_Black}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Police_Lights_Police_Light_blue_0.geometry}
                  material={materials.Police_Light_blue}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Police_Lights_Police_Light_Red_0.geometry}
                  material={materials.Police_Light_Red}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Left_Side_Police_Text_PoliceWhite_0.geometry}
                material={materials.PoliceWhite}
                position={[-2.738, 1.146, -1.815]}
                rotation={[3.133, -1.539, -0.019]}
                scale={-0.091}
              />
              <group
                position={[-2.501, 2.775, 1.695]}
                rotation={[-Math.PI, 0.521, 0]}
                scale={-0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_Second_Body_Color_0003.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Left_Side_Mirror_White1_0003.geometry}
                  material={materials.White1}
                />
              </group>
              <group position={[2.506, 2.775, 1.695]} rotation={[0, 0.405, 0]} scale={0.573}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_Second_Body_Color_0003.geometry}
                  material={materials.Second_Body_Color}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Right_Side_Mirror_White1_0003.geometry}
                  material={materials.White1}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface41_Front_Lights_Color_0003.geometry}
                material={materials.Front_Lights_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface43_Windows_Color_0003.geometry}
                material={materials.Windows_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface45_Third_Cody_Color_0003.geometry}
                material={materials.Third_Cody_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface49_Back_Light_Color_0003.geometry}
                material={materials.Back_Light_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface59_Poice_Blue_0.geometry}
                material={materials.Poice_Blue}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.polySurface65_Second_Body_Color_0003.geometry}
                material={materials.Second_Body_Color}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right_Side_Police_Text_PoliceWhite_0.geometry}
                material={materials.PoliceWhite}
                position={[2.595, 1.111, 1.759]}
                rotation={[-3.129, 1.549, 3.138]}
                scale={0.091}
              />
            </group>
          </group>
          <group scale={30.259}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pDisc1_lambert29_0.geometry}
              material={materials.lambert29}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pDisc1_lambert30_0.geometry}
              material={materials.lambert30}
            />
          </group>
        </group>
      </group>
    </group>
  )
}




