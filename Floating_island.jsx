/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/floating_island.glb -k -K -r 
Author: Viky_3D (https://sketchfab.com/VikyStefiniv)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/floating-island-cde28313f39c44dea06eb11c701c7837
Title: FLOATING ISLAND
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/floating_island.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={143.119}>
          <group name="FloatingIslandfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="FloatingIsland" position={[0, 0.051, 0]}>
                  <group name="MagicLight" position={[0, 1.298, -0.203]} rotation={[0, 0.034, 0]} scale={0.74}>
                    <group name="pSphereShape2_MASH1_Instancer_0" position={[0.218, -1.077, 0.142]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_0_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_0_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_1" position={[0.045, 0.259, 1.003]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_1_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_1_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_2" position={[0.484, 0.834, -0.282]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_2_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_2_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_3" position={[-0.119, -0.992, -0.47]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_3_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_3_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_4" position={[0.029, 0.739, 0.688]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_4_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_4_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_5" position={[-0.304, 0.059, 1.001]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_5_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_5_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_6" position={[-0.576, 0.735, 0.386]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_6_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_6_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_7" position={[0.108, 0.708, -0.714]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_7_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_7_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_8" position={[-0.126, -0.385, 0.992]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_8_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_8_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_9" position={[-0.006, 0.269, 1.001]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_9_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_9_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_10" position={[0.934, 0.369, -0.233]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_10_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_10_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_11" position={[0.966, -0.306, -0.336]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_11_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_11_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_12" position={[-0.118, -0.662, -0.853]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_12_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_12_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_13" position={[0.757, 0.219, 0.677]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_13_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_13_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_14" position={[-0.497, 0.158, -0.903]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_14_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_14_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_15" position={[0.485, -0.467, 0.84]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_15_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_15_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_16" position={[0.772, -0.268, -0.684]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_16_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_16_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_17" position={[-0.221, 0.508, 0.86]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_17_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_17_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_18" position={[-0.949, -0.24, 0.417]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_18_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_18_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_19" position={[0.256, -0.545, 0.897]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_19_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_19_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_20" position={[-0.742, 0.417, 0.576]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_20_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_20_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_21" position={[-0.823, 0.21, -0.6]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_21_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_21_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_22" position={[0.029, 0.995, 0]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_22_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_22_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_23" position={[-0.832, -0.507, -0.462]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_23_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_23_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_24" position={[0.937, -0.393, 0.344]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_24_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_24_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_25" position={[0.519, -0.036, -0.915]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_25_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_25_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_26" position={[-0.104, 0.968, -0.214]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_26_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_26_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_27" position={[0.788, 0.206, 0.647]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_27_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_27_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_28" position={[0.365, 0.91, -0.2]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_28_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_28_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                    <group name="pSphereShape2_MASH1_Instancer_29" position={[-0.224, -0.234, 0.982]} scale={0.012}>
                      <mesh name="pSphereShape2_MASH1_Instancer_29_MagicLight1_0" geometry={nodes.pSphereShape2_MASH1_Instancer_29_MagicLight1_0.geometry} material={materials.MagicLight1} />
                    </group>
                  </group>
                  <group name="book" position={[0, 0.013, 0]}>
                    <mesh name="book_book_0" geometry={nodes.book_book_0.geometry} material={materials.book} />
                  </group>
                  <group name="lectern">
                    <mesh name="lectern_lectern_0" geometry={nodes.lectern_lectern_0.geometry} material={materials.lectern} />
                  </group>
                  <group name="natural_arch">
                    <mesh name="natural_arch_natural_arch_0" geometry={nodes.natural_arch_natural_arch_0.geometry} material={materials.natural_arch} />
                  </group>
                  <group name="island">
                    <mesh name="island_island_0" geometry={nodes.island_island_0.geometry} material={materials.island} />
                  </group>
                  <group name="edera">
                    <group name="pPlane5" position={[1.99, 0.106, -1.235]} rotation={[-3.001, -0.803, 2.922]}>
                      <mesh name="pPlane5_lambert1_0" geometry={nodes.pPlane5_lambert1_0.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane4" position={[2.081, -0.174, 0.327]} rotation={[-3, 0.703, 2.976]}>
                      <mesh name="pPlane4_lambert1_0" geometry={nodes.pPlane4_lambert1_0.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane3">
                      <mesh name="pPlane3_lambert1_0" geometry={nodes.pPlane3_lambert1_0.geometry} material={materials.lambert1} />
                    </group>
                  </group>
                  <group name="edera1" position={[-0.108, 0, -0.47]} rotation={[-Math.PI, 0, -3.103]} scale={1.084}>
                    <group name="pPlane5_1" position={[1.99, 0.106, -1.235]} rotation={[-3.001, -0.803, 2.922]}>
                      <mesh name="pPlane5_lambert1_0_1" geometry={nodes.pPlane5_lambert1_0_1.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane4_1" position={[2.081, -0.174, 0.327]} rotation={[-3, 0.703, 2.976]}>
                      <mesh name="pPlane4_lambert1_0_1" geometry={nodes.pPlane4_lambert1_0_1.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane3_1">
                      <mesh name="pPlane3_lambert1_0_1" geometry={nodes.pPlane3_lambert1_0_1.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane6" position={[0.168, 0.065, -0.028]} rotation={[0, 0, 0.3]}>
                      <mesh name="pPlane6_lambert1_0" geometry={nodes.pPlane6_lambert1_0.geometry} material={materials.lambert1} />
                    </group>
                  </group>
                  <group name="edera2" position={[0.601, 0, -1.028]} rotation={[0, -1.41, 0]}>
                    <group name="pPlane5_2" position={[1.99, 0.106, -1.235]} rotation={[-3.001, -0.803, 2.922]}>
                      <mesh name="pPlane5_lambert1_0_2" geometry={nodes.pPlane5_lambert1_0_2.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane4_2" position={[2.081, -0.174, 0.327]} rotation={[-3, 0.703, 2.976]}>
                      <mesh name="pPlane4_lambert1_0_2" geometry={nodes.pPlane4_lambert1_0_2.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane3_2">
                      <mesh name="pPlane3_lambert1_0_2" geometry={nodes.pPlane3_lambert1_0_2.geometry} material={materials.lambert1} />
                    </group>
                  </group>
                  <group name="edera3" position={[1.139, 0.258, 0.44]} rotation={[1.691, 0.068, 1.373]} scale={[0.494, 0.865, 0.999]}>
                    <group name="pPlane5_3" position={[1.99, 0.106, -1.235]} rotation={[-3.001, -0.803, 2.922]}>
                      <mesh name="pPlane5_lambert1_0_3" geometry={nodes.pPlane5_lambert1_0_3.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane4_3" position={[2.081, -0.174, 0.327]} rotation={[-3, 0.703, 2.976]}>
                      <mesh name="pPlane4_lambert1_0_3" geometry={nodes.pPlane4_lambert1_0_3.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane3_3">
                      <mesh name="pPlane3_lambert1_0_3" geometry={nodes.pPlane3_lambert1_0_3.geometry} material={materials.lambert1} />
                    </group>
                  </group>
                  <group name="edera4" position={[0.69, 0.597, -0.979]} rotation={[1.77, 0.052, 0.433]} scale={[0.592, 1.038, 1.197]}>
                    <group name="pPlane5_4" position={[1.99, 0.106, -1.235]} rotation={[-3.001, -0.803, 2.922]}>
                      <mesh name="pPlane5_lambert1_0_4" geometry={nodes.pPlane5_lambert1_0_4.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane4_4" position={[2.081, -0.174, 0.327]} rotation={[-3, 0.703, 2.976]}>
                      <mesh name="pPlane4_lambert1_0_4" geometry={nodes.pPlane4_lambert1_0_4.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane3_4">
                      <mesh name="pPlane3_lambert1_0_4" geometry={nodes.pPlane3_lambert1_0_4.geometry} material={materials.lambert1} />
                    </group>
                  </group>
                  <group name="edera5" position={[1.964, -0.016, 0.598]} rotation={[2.853, 0.203, 2.921]} scale={[0.592, 1.038, 1.197]}>
                    <group name="pPlane5_5" position={[1.99, 0.106, -1.235]} rotation={[-3.001, -0.803, 2.922]}>
                      <mesh name="pPlane5_lambert1_0_5" geometry={nodes.pPlane5_lambert1_0_5.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane4_5" position={[2.081, -0.174, 0.327]} rotation={[-3, 0.703, 2.976]}>
                      <mesh name="pPlane4_lambert1_0_5" geometry={nodes.pPlane4_lambert1_0_5.geometry} material={materials.lambert1} />
                    </group>
                    <group name="pPlane3_5">
                      <mesh name="pPlane3_lambert1_0_5" geometry={nodes.pPlane3_lambert1_0_5.geometry} material={materials.lambert1} />
                    </group>
                  </group>
                </group>
                <group name="sky" rotation={[0, -1.459, 0]} scale={13.386}>
                  <mesh name="sky_blinn1_0" geometry={nodes.sky_blinn1_0.geometry} material={materials.blinn1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/floating_island.glb')
