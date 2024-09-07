import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function GirlModel(props: any) {
  const { animation, wireframe } = props as any;
  const { headFollow, cursorFollow } = useControls({
    headFollow: false,
    cursorFollow: false,
  }) as any;
  const group = useRef() as any;
  const { nodes, materials } = useGLTF('/girlmodel.glb') as any

  const { animations: talkingAnimation } = useFBX("/animations/Dancing.fbx");

  talkingAnimation[0].name = "Talking";
  console.log(talkingAnimation)

  const { actions, mixer } = useAnimations(
    [talkingAnimation[0]],
    group
  );

  useFrame((state, delta) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
    }
    
    // Update the animation mixer on each frame
    mixer.update(delta);
  });

  useEffect(() => {
    const action = actions[animation];
    if (action) {
      action.reset().fadeIn(0.5).play();
      action.setLoop(THREE.LoopRepeat, Infinity); // Set the animation to loop indefinitely
    }
    return () => {
      if (action) {
        action.fadeOut(0.5);
      }
    };
  }, [animation, actions]);

  useEffect(() => {
    Object.values(materials).forEach((material: any) => {
      material.wireframe = wireframe;
    });
  }, [wireframe, materials]);

  return (
    <group {...props} ref={group} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0.297]} scale={[1, 1, 0.736]}>
          <group name="1c1316e38ccd4526a8a26f469b45d08dfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="mesh_0_007_023">
                <mesh
                  name="mesh_0_007_023_mesh_0_007_023_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_023_mesh_0_007_023_0.geometry}
                  material={materials.mesh_0_007_023}
                />
              </group>
              <group name="mesh_0_007_024">
                <mesh
                  name="mesh_0_007_024_mesh_0_007_024_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_024_mesh_0_007_024_0.geometry}
                  material={materials.mesh_0_007_024}
                />
              </group>
              <group name="mesh_0_007_025">
                <mesh
                  name="mesh_0_007_025_mesh_0_007_025_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_025_mesh_0_007_025_0.geometry}
                  material={materials.mesh_0_007_025}
                />
              </group>
              <group name="mesh_0_007_026">
                <mesh
                  name="mesh_0_007_026_mesh_0_007_026_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_026_mesh_0_007_026_0.geometry}
                  material={materials.mesh_0_007_026}
                />
              </group>
              <group name="mesh_0_007_027">
                <mesh
                  name="mesh_0_007_027_mesh_0_007_027_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_027_mesh_0_007_027_0.geometry}
                  material={materials.mesh_0_007_027}
                />
              </group>
              <group name="mesh_0_007_027_copy1">
                <mesh
                  name="mesh_0_007_027_copy1_mesh_0_007_027_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_027_copy1_mesh_0_007_027_copy1_0.geometry}
                  material={materials.mesh_0_007_027_copy1}
                />
              </group>
              <group name="mesh_0_007_028">
                <mesh
                  name="mesh_0_007_028_mesh_0_007_028_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_028_mesh_0_007_028_0.geometry}
                  material={materials.mesh_0_007_028}
                />
              </group>
              <group name="mesh_0_007_028_copy1">
                <mesh
                  name="mesh_0_007_028_copy1_mesh_0_007_028_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_028_copy1_mesh_0_007_028_copy1_0.geometry}
                  material={materials.mesh_0_007_028_copy1}
                />
              </group>
              <group name="mesh_0_007_029">
                <mesh
                  name="mesh_0_007_029_mesh_0_007_029_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_029_mesh_0_007_029_0.geometry}
                  material={materials.mesh_0_007_029}
                />
              </group>
              <group name="mesh_0_007_029_copy1">
                <mesh
                  name="mesh_0_007_029_copy1_mesh_0_007_029_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_029_copy1_mesh_0_007_029_copy1_0.geometry}
                  material={materials.mesh_0_007_029_copy1}
                />
              </group>
              <group name="mesh_0_007_030">
                <mesh
                  name="mesh_0_007_030_mesh_0_007_030_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_030_mesh_0_007_030_0.geometry}
                  material={materials.mesh_0_007_030}
                />
              </group>
              <group name="mesh_0_007_030_copy1">
                <mesh
                  name="mesh_0_007_030_copy1_mesh_0_007_030_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_030_copy1_mesh_0_007_030_copy1_0.geometry}
                  material={materials.mesh_0_007_030_copy1}
                />
              </group>
              <group name="mesh_0_007_031">
                <mesh
                  name="mesh_0_007_031_mesh_0_007_031_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_031_mesh_0_007_031_0.geometry}
                  material={materials.mesh_0_007_031}
                />
              </group>
              <group name="mesh_0_007_032">
                <mesh
                  name="mesh_0_007_032_mesh_0_007_032_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_032_mesh_0_007_032_0.geometry}
                  material={materials.mesh_0_007_032}
                />
              </group>
              <group name="mesh_0_007_033">
                <mesh
                  name="mesh_0_007_033_mesh_0_007_033_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_033_mesh_0_007_033_0.geometry}
                  material={materials.mesh_0_007_033}
                />
              </group>
              <group name="mesh_0_007_033_copy1">
                <mesh
                  name="mesh_0_007_033_copy1_mesh_0_007_033_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_033_copy1_mesh_0_007_033_copy1_0.geometry}
                  material={materials.mesh_0_007_033_copy1}
                />
              </group>
              <group name="mesh_0_007_034">
                <mesh
                  name="mesh_0_007_034_mesh_0_007_034_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_034_mesh_0_007_034_0.geometry}
                  material={materials.mesh_0_007_034}
                />
              </group>
              <group name="mesh_0_007_035">
                <mesh
                  name="mesh_0_007_035_mesh_0_007_035_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_035_mesh_0_007_035_0.geometry}
                  material={materials.mesh_0_007_035}
                />
              </group>
              <group name="mesh_0_007_036">
                <mesh
                  name="mesh_0_007_036_mesh_0_007_036_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_036_mesh_0_007_036_0.geometry}
                  material={materials.mesh_0_007_036}
                />
              </group>
              <group name="mesh_0_007_037">
                <mesh
                  name="mesh_0_007_037_mesh_0_007_037_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_037_mesh_0_007_037_0.geometry}
                  material={materials.mesh_0_007_037}
                />
              </group>
              <group name="mesh_0_007_038">
                <mesh
                  name="mesh_0_007_038_mesh_0_007_038_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_038_mesh_0_007_038_0.geometry}
                  material={materials.mesh_0_007_038}
                />
              </group>
              <group name="mesh_0_007_039">
                <mesh
                  name="mesh_0_007_039_mesh_0_007_039_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_039_mesh_0_007_039_0.geometry}
                  material={materials.mesh_0_007_039}
                />
              </group>
              <group name="mesh_0_007_040">
                <mesh
                  name="mesh_0_007_040_mesh_0_007_040_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_040_mesh_0_007_040_0.geometry}
                  material={materials.mesh_0_007_040}
                />
              </group>
              <group name="mesh_0_007_042">
                <mesh
                  name="mesh_0_007_042_mesh_0_007_042_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.mesh_0_007_042_mesh_0_007_042_0.geometry}
                  material={materials.mesh_0_007_042}
                />
              </group>
              <group name="Mesh_1">
                <mesh
                  name="Mesh_1_Mesh_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_1_Mesh_1_0.geometry}
                  material={materials.Mesh_1}
                />
              </group>
              <group name="Mesh_2">
                <mesh
                  name="Mesh_2_Mesh_2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_2_Mesh_2_0.geometry}
                  material={materials.Mesh_2}
                />
              </group>
              <group name="Mesh_3">
                <mesh
                  name="Mesh_3_Mesh_3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_3_Mesh_3_0.geometry}
                  material={materials.Mesh_3}
                />
              </group>
              <group name="Mesh_4">
                <mesh
                  name="Mesh_4_Mesh_4_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_4_Mesh_4_0.geometry}
                  material={materials.Mesh_4}
                />
              </group>
              <group name="Mesh_5">
                <mesh
                  name="Mesh_5_Mesh_5_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_5_Mesh_5_0.geometry}
                  material={materials.Mesh_5}
                />
              </group>
              <group name="Mesh_6">
                <mesh
                  name="Mesh_6_Mesh_6_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_6_Mesh_6_0.geometry}
                  material={materials.Mesh_6}
                />
              </group>
              <group name="Mesh_7">
                <mesh
                  name="Mesh_7_Mesh_7_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_7_Mesh_7_0.geometry}
                  material={materials.Mesh_7}
                />
              </group>
              <group name="Mesh_8">
                <mesh
                  name="Mesh_8_Mesh_8_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_8_Mesh_8_0.geometry}
                  material={materials.Mesh_8}
                />
              </group>
              <group name="Mesh_9">
                <mesh
                  name="Mesh_9_Mesh_9_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Mesh_9_Mesh_9_0.geometry}
                  material={materials.Mesh_9}
                />
              </group>
              <group name="original10">
                <mesh
                  name="original10_original10_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original10_original10_0.geometry}
                  material={materials.original10}
                />
              </group>
              <group name="original11">
                <mesh
                  name="original11_original11_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original11_original11_0.geometry}
                  material={materials.original11}
                />
              </group>
              <group name="original11_copy1">
                <mesh
                  name="original11_copy1_original11_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original11_copy1_original11_copy1_0.geometry}
                  material={materials.original11_copy1}
                />
              </group>
              <group name="original12">
                <mesh
                  name="original12_original12_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original12_original12_0.geometry}
                  material={materials.original12}
                />
              </group>
              <group name="original12_copy1">
                <mesh
                  name="original12_copy1_original12_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original12_copy1_original12_copy1_0.geometry}
                  material={materials.original12_copy1}
                />
              </group>
              <group name="original13">
                <mesh
                  name="original13_original13_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original13_original13_0.geometry}
                  material={materials.original13}
                />
              </group>
              <group name="original13_copy1">
                <mesh
                  name="original13_copy1_original13_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original13_copy1_original13_copy1_0.geometry}
                  material={materials.original13_copy1}
                />
              </group>
              <group name="original14">
                <mesh
                  name="original14_original14_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original14_original14_0.geometry}
                  material={materials.original14}
                />
              </group>
              <group name="original14_copy1">
                <mesh
                  name="original14_copy1_original14_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original14_copy1_original14_copy1_0.geometry}
                  material={materials.original14_copy1}
                />
              </group>
              <group name="original15">
                <mesh
                  name="original15_original15_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original15_original15_0.geometry}
                  material={materials.original15}
                />
              </group>
              <group name="original15_copy1">
                <mesh
                  name="original15_copy1_original15_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original15_copy1_original15_copy1_0.geometry}
                  material={materials.original15_copy1}
                />
              </group>
              <group name="original16">
                <mesh
                  name="original16_original16_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original16_original16_0.geometry}
                  material={materials.original16}
                />
              </group>
              <group name="original16_copy1">
                <mesh
                  name="original16_copy1_original16_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original16_copy1_original16_copy1_0.geometry}
                  material={materials.original16_copy1}
                />
              </group>
              <group name="original17">
                <mesh
                  name="original17_original17_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original17_original17_0.geometry}
                  material={materials.original17}
                />
              </group>
              <group name="original17_copy1">
                <mesh
                  name="original17_copy1_original17_copy1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original17_copy1_original17_copy1_0.geometry}
                  material={materials.original17_copy1}
                />
              </group>
              <group name="original18">
                <mesh
                  name="original18_original18_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original18_original18_0.geometry}
                  material={materials.original18}
                />
              </group>
              <group name="original18_01">
                <mesh
                  name="original18_01_original18_01_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original18_01_original18_01_0.geometry}
                  material={materials.original18_01}
                />
              </group>
              <group name="original19">
                <mesh
                  name="original19_original19_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.original19_original19_0.geometry}
                  material={materials.original19}
                />
              </group>
              <group name="PM3D_Cylinder3D1">
                <mesh
                  name="PM3D_Cylinder3D1_PM3D_Cylinder3D1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PM3D_Cylinder3D1_PM3D_Cylinder3D1_0.geometry}
                  material={materials.PM3D_Cylinder3D1}
                />
              </group>
              <group name="PM3D_Cylinder3D2">
                <mesh
                  name="PM3D_Cylinder3D2_PM3D_Cylinder3D2_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PM3D_Cylinder3D2_PM3D_Cylinder3D2_0.geometry}
                  material={materials.PM3D_Cylinder3D2}
                />
              </group>
              <group name="PM3D_Cylinder3D3">
                <mesh
                  name="PM3D_Cylinder3D3_PM3D_Cylinder3D3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PM3D_Cylinder3D3_PM3D_Cylinder3D3_0.geometry}
                  material={materials.PM3D_Cylinder3D3}
                />
              </group>
              <group name="PM3D_Cylinder3D_3">
                <mesh
                  name="PM3D_Cylinder3D_3_PM3D_Cylinder3D_3_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PM3D_Cylinder3D_3_PM3D_Cylinder3D_3_0.geometry}
                  material={materials.PM3D_Cylinder3D_3}
                />
              </group>
              <group name="PM3D_UMesh_Extract19_10">
                <mesh
                  name="PM3D_UMesh_Extract19_10_PM3D_UMesh_Extract19_10_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PM3D_UMesh_Extract19_10_PM3D_UMesh_Extract19_10_0.geometry}
                  material={materials.PM3D_UMesh_Extract19_10}
                />
              </group>
              <group name="PM3D_UMesh_katana5">
                <mesh
                  name="PM3D_UMesh_katana5_PM3D_UMesh_katana5_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.PM3D_UMesh_katana5_PM3D_UMesh_katana5_0.geometry}
                  material={materials.PM3D_UMesh_katana5}
                />
              </group>
              <group name="PM3D_UMesh_katana6" />
              <group name="subdivided68">
                <mesh
                  name="subdivided68_subdivided68_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.subdivided68_subdivided68_0.geometry}
                  material={materials.subdivided68}
                />
              </group>
              <group name="testing_2021_6_new6">
                <mesh
                  name="testing_2021_6_new6_testing_2021_6_new6_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.testing_2021_6_new6_testing_2021_6_new6_0.geometry}
                  material={materials.testing_2021_6_new6}
                />
              </group>
              <group name="UMesh_costume8">
                <mesh
                  name="UMesh_costume8_UMesh_costume8_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.UMesh_costume8_UMesh_costume8_0.geometry}
                  material={materials.UMesh_costume8}
                />
              </group>
              <group name="UMesh_hex_flower1" />
              <group name="UMesh_platform1" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/girlmodel.glb')
useFBX.preload("animations/Dancing.fbx");