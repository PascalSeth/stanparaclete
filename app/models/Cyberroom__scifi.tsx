
import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function CyberRoomModel(props:any) {
  const group = React.useRef() as any
  const { nodes, materials, animations } = useGLTF('/cyberroom__scifi.glb') as any
  const { actions } = useAnimations(animations, group) as any
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="BezierCurve006_0" position={[0.654, 3.481, -2.954]} rotation={[2.14, -1.261, 0.547]} scale={0.998}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.tubes} />
              </group>
              <group name="BezierCurve007_1" position={[0.603, 3.464, -2.936]} rotation={[2.14, -1.261, 0.547]} scale={0.998}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.tubes} />
              </group>
              <group name="BezierCurve008_2" position={[0.531, 2.906, -3.011]} rotation={[1.799, -0.755, 0.158]} scale={0.998}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.tubes} />
              </group>
              <group name="BezierCurve009_3" position={[0.529, 2.955, -2.982]} rotation={[1.799, -0.755, 0.158]} scale={0.998}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.tubes} />
              </group>
              <group name="BezierCurve010_4" position={[0.528, 2.904, -2.948]} rotation={[1.799, -0.755, 0.158]} scale={0.998}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.tubes} />
              </group>
              <group name="BezierCurve011_5" position={[0.65, 3.491, -2.974]} rotation={[-1.816, 0.826, -2.959]} scale={0.998}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.tubes} />
              </group>
              <group name="bode_03_lp_6" position={[0.373, 3.654, -2.901]} scale={0.998}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="cibe_side_lp_7" position={[0.152, 4.428, -2.903]} rotation={[0, 0, 1.251]} scale={0.998}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="circle_03_inside_lp_8" position={[0.269, 3.904, -2.861]} rotation={[-1.571, 1.499, 3.142]} scale={0.998}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="Circle_04_inside_hp001_9" position={[0.627, 3.728, -2.862]} rotation={[-1.571, -1.514, -3.142]} scale={0.998}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="Circle__02_inside_lp_10" position={[0.537, 4.053, -2.862]} rotation={[Math.PI / 2, 0, 0]} scale={0.998}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="Circle__02_inside_lp001_11" position={[0.418, 3.627, -2.862]} rotation={[-Math.PI / 2, -0.164, -Math.PI]} scale={0.998}>
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="Circle_centr_lp_12" position={[0.459, 3.846, -2.855]} rotation={[Math.PI / 2, 0, 0]} scale={0.998}>
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="Circle_centr_lp001_13" position={[0.46, 3.845, -2.853]} rotation={[Math.PI / 2, 0, 0]} scale={0.998}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="cube_03_inside_lp_14" position={[0.373, 3.236, -2.868]} scale={0.998}>
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="cube_part_lp_15" position={[0.639, 2.97, -2.932]} scale={0.998}>
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="cubes_inside_lp_16" position={[0.638, 2.95, -2.903]} rotation={[0, 0, 0.701]} scale={0.998}>
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="enter_tube_01_lp_17" position={[0.631, 3.556, -2.961]} rotation={[0.001, 0, Math.PI / 4]} scale={0.998}>
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="enter_tube_02_lp_18" position={[0.623, 3.381, -2.971]} rotation={[-0.001, 0, -2.396]} scale={0.998}>
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="enter_tube_03_lp_19" position={[0.506, 3.207, -2.966]} rotation={[0, 0, -Math.PI / 2]} scale={0.998}>
                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="enter_tube_04_lp_20" position={[0.551, 2.656, -2.966]} rotation={[0, 0, Math.PI / 2]} scale={0.998}>
                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="Plane_21" position={[1.501, 4.207, -2.952]} rotation={[Math.PI / 2, 0, 0]} scale={[0.998, 0.998, 0.021]}>
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.tubes} />
              </group>
              <group name="Plane001_22" position={[0.766, 4.256, -2.952]} rotation={[Math.PI / 2, 0, 0]} scale={[0.061, 1, 1]}>
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.tubes} />
              </group>
              <group name="ring_01_lp_23" position={[2.24, 5.032, -3.004]} rotation={[-1.571, -1.129, -Math.PI]} scale={0.998}>
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="ring_02_lp_24" position={[2.24, 5.032, -3.004]} rotation={[-Math.PI / 2, -1.092, -Math.PI]} scale={0.998}>
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="ring_03_lp_25" position={[2.24, 5.032, -3.004]} rotation={[-1.571, -1.129, -Math.PI]} scale={0.998}>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="ring_04_lp_26" position={[2.24, 5.032, -3.004]} rotation={[-Math.PI / 2, -1.134, -Math.PI]} scale={0.998}>
                <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="ring_balls_lp_27" position={[2.24, 5.032, -3.004]} rotation={[0, 0, -0.01]} scale={0.998}>
                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="tris_01_lp_29" position={[0.396, 4.383, -2.832]} rotation={[0, 0, 1.592]} scale={0.998}>
                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="tris_02_lp_30" position={[0.327, 4.241, -2.832]} rotation={[0, 0, 0.747]} scale={0.998}>
                <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="tris_03_lp_31" position={[0.201, 4.199, -2.831]} rotation={[0, 0, -2.419]} scale={0.998}>
                <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="tris_04_lp_32" position={[0.183, 4.066, -2.831]} rotation={[0, 0, 0.733]} scale={0.998}>
                <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="tris_inside_lp_33" position={[0.607, 4.553, -2.868]} rotation={[0, 0, Math.PI / 2]} scale={0.998}>
                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="tube_lp_34" position={[0.626, 3.46, -2.995]} rotation={[2.14, -1.261, 0.547]} scale={0.998}>
                <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
              </group>
              <group name="open_251" position={[0.013, 2.003, -0.875]} rotation={[0.004, 0, -Math.PI / 2]} scale={0.478}>
                <group name="belt_lp_213" position={[-0.232, 0, 1.527]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_425" geometry={nodes.Object_425.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="beltback_lp_214" position={[-0.232, 0, 1.527]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_427" geometry={nodes.Object_427.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="beltback_lp001_215" position={[-0.04, 1.238, 0.065]} rotation={[0, 0, Math.PI / 2]} scale={[1, 0.691, 1]}>
                  <mesh name="Object_429" geometry={nodes.Object_429.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="beltback_lp011_216" position={[0.017, 1.238, 0.065]} rotation={[0, 0, Math.PI / 2]} scale={[1, 0.691, 1]}>
                  <mesh name="Object_431" geometry={nodes.Object_431.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bodytop_lp_217" position={[-0.02, 0, 0.142]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_433" geometry={nodes.Object_433.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big001_218" position={[-0.856, 1.522, 2.905]} rotation={[-0.255, 0.493, 1.693]}>
                  <mesh name="Object_435" geometry={nodes.Object_435.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big004_219" position={[-0.856, 0.926, 2.905]} rotation={[-0.255, 0.493, 1.693]}>
                  <mesh name="Object_437" geometry={nodes.Object_437.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big005_220" position={[-0.856, -0.923, 2.905]} rotation={[-0.255, 0.493, 1.693]}>
                  <mesh name="Object_439" geometry={nodes.Object_439.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big006_221" position={[-0.856, -1.519, 2.905]} rotation={[-0.255, 0.493, 1.693]}>
                  <mesh name="Object_441" geometry={nodes.Object_441.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big007_222" position={[-0.167, 1.522, 2.98]} rotation={[-Math.PI / 2, 1.347, -Math.PI]}>
                  <mesh name="Object_443" geometry={nodes.Object_443.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big008_223" position={[-0.167, 0.926, 2.98]} rotation={[-Math.PI / 2, 1.347, -Math.PI]}>
                  <mesh name="Object_445" geometry={nodes.Object_445.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big009_224" position={[-0.167, -0.951, 2.98]} rotation={[-Math.PI / 2, 1.347, -Math.PI]}>
                  <mesh name="Object_447" geometry={nodes.Object_447.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big010_225" position={[-0.167, -1.519, 2.98]} rotation={[-Math.PI / 2, 1.347, -Math.PI]}>
                  <mesh name="Object_449" geometry={nodes.Object_449.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big011_226" position={[-0.848, 2.202, 2.258]} rotation={[-0.319, 0.189, 1.054]}>
                  <mesh name="Object_451" geometry={nodes.Object_451.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big012_227" position={[-0.848, 2.202, 0.802]} rotation={[-0.319, 0.189, 1.054]}>
                  <mesh name="Object_453" geometry={nodes.Object_453.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big013_228" position={[-0.86, -2.185, 0.823]} rotation={[-0.319, -0.189, 2.087]}>
                  <mesh name="Object_455" geometry={nodes.Object_455.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big014_229" position={[-0.858, -2.187, 2.239]} rotation={[-0.319, -0.189, 2.087]}>
                  <mesh name="Object_457" geometry={nodes.Object_457.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big015_230" position={[-0.485, 2.267, 2.503]} rotation={[0, 0.369, 0]}>
                  <mesh name="Object_459" geometry={nodes.Object_459.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big016_231" position={[-0.485, 2.267, 0.57]} rotation={[0, 0.369, 0]}>
                  <mesh name="Object_461" geometry={nodes.Object_461.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big017_232" position={[-0.851, -0.941, 0.141]} rotation={[-0.254, -0.49, 1.449]}>
                  <mesh name="Object_463" geometry={nodes.Object_463.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big018_233" position={[-0.851, -1.536, 0.141]} rotation={[-0.254, -0.49, 1.449]}>
                  <mesh name="Object_465" geometry={nodes.Object_465.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big019_234" position={[-0.851, 1.537, 0.141]} rotation={[-0.254, -0.49, 1.449]}>
                  <mesh name="Object_467" geometry={nodes.Object_467.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big020_235" position={[-0.851, 0.941, 0.141]} rotation={[-0.254, -0.49, 1.449]}>
                  <mesh name="Object_469" geometry={nodes.Object_469.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big021_236" position={[-0.181, 1.523, 0.071]} rotation={[-Math.PI / 2, -1.347, 0]}>
                  <mesh name="Object_471" geometry={nodes.Object_471.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big022_237" position={[-0.181, 0.927, 0.071]} rotation={[-Math.PI / 2, -1.347, 0]}>
                  <mesh name="Object_473" geometry={nodes.Object_473.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big023_238" position={[-0.181, -0.944, 0.071]} rotation={[-Math.PI / 2, -1.347, 0]}>
                  <mesh name="Object_475" geometry={nodes.Object_475.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big024_239" position={[-0.181, -1.539, 0.071]} rotation={[-Math.PI / 2, -1.347, 0]}>
                  <mesh name="Object_477" geometry={nodes.Object_477.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big025_240" position={[-0.489, -2.262, 0.578]} rotation={[0, -0.369, -Math.PI]}>
                  <mesh name="Object_479" geometry={nodes.Object_479.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bolt_big026_241" position={[-0.486, -2.262, 2.49]} rotation={[0, -0.369, -Math.PI]}>
                  <mesh name="Object_481" geometry={nodes.Object_481.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="corners_lp_242" position={[-0.23, 0, 1.527]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_483" geometry={nodes.Object_483.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="inside_cube_lp_243" position={[-0.676, 0.586, 2.7]} rotation={[-Math.PI, 1.558, -Math.PI / 2]}>
                  <mesh name="Object_485" geometry={nodes.Object_485.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="inside_lp_244" position={[-0.419, 1.228, 1.534]} rotation={[-Math.PI, 0.005, -Math.PI / 2]}>
                  <mesh name="Object_487" geometry={nodes.Object_487.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="krepezh_lp_245" position={[-0.704, 1.396, 2.703]} rotation={[Math.PI, 0, -Math.PI / 2]}>
                  <mesh name="Object_489" geometry={nodes.Object_489.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="krepezh_lp002_246" position={[-0.704, -1.063, 2.703]} rotation={[Math.PI, 0, -Math.PI / 2]}>
                  <mesh name="Object_491" geometry={nodes.Object_491.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="lock_lp_247" position={[-0.414, -0.017, 2.885]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_493" geometry={nodes.Object_493.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="lock_minicubs_lp_248" position={[-0.415, -0.027, 3.022]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_495" geometry={nodes.Object_495.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="lock_tris_lp_249" position={[-0.415, -0.027, 3.022]} rotation={[0, 0, Math.PI / 2]}>
                  <mesh name="Object_497" geometry={nodes.Object_497.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="Plane004_250" position={[-0.972, 0.012, 1.571]} rotation={[0, 0, Math.PI / 2]} scale={[0.956, 0.956, 0.966]}>
                  <mesh name="Object_499" geometry={nodes.Object_499.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <mesh name="Object_423" geometry={nodes.Object_423.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
              </group>
              <group name="Circle_275" position={[0, 1.492, -0.149]} scale={[0.821, 1, 1]}>
                <mesh name="Object_521" geometry={nodes.Object_521.geometry} material={materials.alfa} />
              </group>
              <group name="room_28" position={[0, 2.155, 0.032]}>
                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.room} />
              </group>
              <group name="screen_lp_53" position={[-0.17, 5.471, 0]} scale={0.456}>
                <group name="body_01_lp_36" position={[3.85, -3.31, -6.428]} scale={2.187}>
                  <mesh name="Object_75" geometry={nodes.Object_75.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="bolt_1_lp_37" position={[5.363, -1.747, -6.457]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="bolt_2_1_lp_38" position={[5.346, -5.644, -6.448]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="bolt_2_2_lp_39" position={[5.337, -2.403, -6.448]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="bolt_2_lp_40" position={[5.36, -4.958, -6.457]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="bolt_3_2_lp_41" position={[5.308, -5.927, -6.567]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="bolt_3_lp_42" position={[5.312, -2.069, -6.573]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="cube_right_lp_43" position={[5.193, -3.053, -6.224]} rotation={[0, -0.105, 0]} scale={2.192}>
                  <mesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="detail_01_lp_44" position={[3.151, -1.139, -6.239]} rotation={[0, 0, Math.PI]} scale={2.187}>
                  <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="detail_02_lp_45" position={[4.198, -1.127, -6.248]} scale={2.187}>
                  <mesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="detail_03_lp_46" position={[2.166, -1.753, -6.216]} rotation={[0, 0, -Math.PI / 2]} scale={2.187}>
                  <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="detail_04_lp_47" position={[2.171, -4.653, -6.196]} rotation={[0, 0, 1.579]} scale={2.187}>
                  <mesh name="Object_97" geometry={nodes.Object_97.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="frame_01_lp_48" position={[2.509, -2.836, -6.39]} scale={2.187}>
                  <mesh name="Object_99" geometry={nodes.Object_99.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="frame_02_lp_49" position={[3.768, -3.485, -6.389]} scale={2.187}>
                  <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="frame_03_lp_50" position={[3.782, -4.589, -6.39]} scale={2.187}>
                  <mesh name="Object_103" geometry={nodes.Object_103.geometry} material={materials['TT_checker_4096x4096_UV_GRID.003']} />
                </group>
                <group name="tube_01_lp_51" position={[5.662, -4.011, -6.447]} rotation={[1.571, -1.484, 0]} scale={2.192}>
                  <mesh name="Object_105" geometry={nodes.Object_105.geometry} material={materials.tubes} />
                </group>
                <group name="tube_02_lp_52" position={[5.483, -3.916, -6.573]} rotation={[1.571, -1.484, 0]} scale={1.7}>
                  <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.tubes} />
                </group>
              </group>
              <group name="screen_lp001_62" position={[1.958, 2.135, 0]} scale={0.456}>
                <group name="belt_lock_cilinder_lp_54" position={[-2.984, -0.382, 1.221]} scale={1.047}>
                  <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="belt_lock_lp_55" position={[-2.969, -0.245, 1.221]} scale={1.047}>
                  <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="belt_lp002_56" position={[-4.265, -0.048, -0.319]} scale={1.047}>
                  <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="beltback_lp004_57" position={[-4.265, -0.048, -0.319]} scale={1.047}>
                  <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="bodydown_lp_58" position={[-4.265, -1.094, -0.319]} scale={1.047}>
                  <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="centr_detail_02_lp_59" position={[-4.265, -0.048, -0.366]} scale={[1.024, 1.047, 1.047]}>
                  <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="centr_detail_lp_60" position={[-4.265, -0.048, -0.362]} scale={[1.024, 1.047, 1.047]}>
                  <mesh name="Object_122" geometry={nodes.Object_122.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
                <group name="cubes_side_lp_61" position={[-1.922, -0.773, 0.766]} scale={[1.047, 0.974, 1.047]}>
                  <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials['TT_checker_4096x4096_UV_GRID.002']} />
                </group>
              </group>
              <group name="screen_lp002_211" position={[2.163, 0.597, 0]} scale={0.456}>
                <group name="Cube001_63" position={[-1.067, 1.69, -0.28]} rotation={[Math.PI / 2, 1.441, -Math.PI / 2]} scale={2.192}>
                  <mesh name="Object_127" geometry={nodes.Object_127.geometry} material={materials.table} />
                </group>
                <group name="Cube002_64" position={[-4.839, 1.69, -3.826]} rotation={[3.011, 0, -Math.PI]} scale={2.192}>
                  <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.table} />
                </group>
                <group name="Cube003_65" position={[-8.354, 1.69, -0.039]} rotation={[Math.PI / 2, -1.441, Math.PI / 2]} scale={2.192}>
                  <mesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials.table} />
                </group>
                <group name="Cube015_66" position={[-4.518, 1.69, 3.475]} rotation={[0.13, 0, 0]} scale={2.192}>
                  <mesh name="Object_133" geometry={nodes.Object_133.geometry} material={materials.table} />
                </group>
                <group name="podium_lp_67" position={[-4.694, 0.632, -0.176]} scale={2.518}>
                  <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.table} />
                </group>
                <group name="podium_lp001_68" position={[-2.272, 1.654, -2.716]} rotation={[-Math.PI, 1.546, -Math.PI]} scale={2.518}>
                  <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials.table} />
                </group>
                <group name="podium_lp002_69" position={[-7.141, 1.654, -2.693]} rotation={[-Math.PI, 0.013, -Math.PI]} scale={2.518}>
                  <mesh name="Object_139" geometry={nodes.Object_139.geometry} material={materials.table} />
                </group>
                <group name="podium_lp003_70" position={[-7.14, 1.654, 2.342]} rotation={[0, -1.555, 0]} scale={2.518}>
                  <mesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials.table} />
                </group>
                <group name="podium_lp012_71" position={[-5.624, -0.061, 2.561]} scale={2.518}>
                  <mesh name="Object_143" geometry={nodes.Object_143.geometry} material={materials.table} />
                </group>
                <group name="podium_lp013_72" position={[-3.759, -0.056, 2.563]} scale={2.518}>
                  <mesh name="Object_145" geometry={nodes.Object_145.geometry} material={materials.table} />
                </group>
                <group name="podium_lp016_73" position={[-4.617, -0.868, 2.172]} scale={2.518}>
                  <mesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials.table} />
                </group>
                <group name="podium_lp017_74" position={[-4.613, -0.824, 2.172]} scale={2.518}>
                  <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials.table} />
                </group>
                <group name="podium_lp018_75" position={[-5.194, 0.27, 2.802]} scale={2.518}>
                  <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials.table} />
                </group>
                <group name="podium_lp019_76" position={[-5.242, 0.163, 2.758]} scale={2.518}>
                  <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.table} />
                </group>
                <group name="podium_lp020_77" position={[-5.271, 0.31, 2.803]} scale={2.518}>
                  <mesh name="Object_155" geometry={nodes.Object_155.geometry} material={materials.table} />
                </group>
                <group name="podium_lp021_78" position={[-4.61, -0.957, 2.172]} scale={2.518}>
                  <mesh name="Object_157" geometry={nodes.Object_157.geometry} material={materials.table} />
                </group>
                <group name="podium_lp022_79" position={[-4.605, -0.913, 2.172]} scale={2.518}>
                  <mesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials.table} />
                </group>
                <group name="podium_lp023_80" position={[-5.126, -0.309, 2.469]} scale={2.518}>
                  <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.table} />
                </group>
                <group name="podium_lp026_81" position={[-5.27, 1.136, 3.266]} scale={2.518}>
                  <mesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.table} />
                </group>
                <group name="podium_lp027_82" position={[-5.016, 1.127, 3.263]} scale={2.518}>
                  <mesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials.table} />
                </group>
                <group name="podium_lp028_83" position={[-1.959, -0.061, -1.11]} scale={2.518}>
                  <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.table} />
                </group>
                <group name="podium_lp029_84" position={[-1.954, -0.056, 0.755]} scale={2.518}>
                  <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.table} />
                </group>
                <group name="podium_lp030_85" position={[-1.686, 0.273, -0.165]} scale={2.518}>
                  <mesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.table} />
                </group>
                <group name="podium_lp031_86" position={[-1.185, 1.654, -0.159]} scale={2.518}>
                  <mesh name="Object_173" geometry={nodes.Object_173.geometry} material={materials.table} />
                </group>
                <group name="podium_lp032_87" position={[-2.346, -0.868, -0.102]} scale={2.518}>
                  <mesh name="Object_175" geometry={nodes.Object_175.geometry} material={materials.table} />
                </group>
                <group name="podium_lp033_88" position={[-2.347, -0.824, -0.098]} scale={2.518}>
                  <mesh name="Object_177" geometry={nodes.Object_177.geometry} material={materials.table} />
                </group>
                <group name="podium_lp034_89" position={[-1.717, 0.27, -0.68]} scale={2.518}>
                  <mesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.table} />
                </group>
                <group name="podium_lp035_90" position={[-1.762, 0.163, -0.728]} scale={2.518}>
                  <mesh name="Object_181" geometry={nodes.Object_181.geometry} material={materials.table} />
                </group>
                <group name="podium_lp036_91" position={[-1.717, 0.31, -0.757]} scale={2.518}>
                  <mesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.table} />
                </group>
                <group name="podium_lp037_92" position={[-2.346, -0.957, -0.095]} scale={2.518}>
                  <mesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.table} />
                </group>
                <group name="podium_lp038_93" position={[-2.346, -0.913, -0.09]} scale={2.518}>
                  <mesh name="Object_187" geometry={nodes.Object_187.geometry} material={materials.table} />
                </group>
                <group name="podium_lp039_94" position={[-2.05, -0.309, -0.612]} scale={2.518}>
                  <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.table} />
                </group>
                <group name="podium_lp042_95" position={[-1.253, 1.136, -0.757]} scale={2.518}>
                  <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.table} />
                </group>
                <group name="podium_lp043_96" position={[-1.256, 1.127, -0.503]} scale={2.518}>
                  <mesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials.table} />
                </group>
                <group name="podium_lp044_97" position={[-7.43, -0.061, 0.758]} scale={2.518}>
                  <mesh name="Object_195" geometry={nodes.Object_195.geometry} material={materials.table} />
                </group>
                <group name="podium_lp045_98" position={[-7.435, -0.056, -1.107]} scale={2.518}>
                  <mesh name="Object_197" geometry={nodes.Object_197.geometry} material={materials.table} />
                </group>
                <group name="podium_lp046_99" position={[-7.703, 0.273, -0.187]} scale={2.518}>
                  <mesh name="Object_199" geometry={nodes.Object_199.geometry} material={materials.table} />
                </group>
                <group name="podium_lp047_100" position={[-8.204, 1.654, -0.193]} scale={2.518}>
                  <mesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials.table} />
                </group>
                <group name="podium_lp048_101" position={[-7.042, -0.868, -0.249]} scale={2.518}>
                  <mesh name="Object_203" geometry={nodes.Object_203.geometry} material={materials.table} />
                </group>
                <group name="podium_lp049_102" position={[-7.042, -0.824, -0.253]} scale={2.518}>
                  <mesh name="Object_205" geometry={nodes.Object_205.geometry} material={materials.table} />
                </group>
                <group name="podium_lp050_103" position={[-7.672, 0.27, 0.329]} scale={2.518}>
                  <mesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials.table} />
                </group>
                <group name="podium_lp051_104" position={[-7.627, 0.163, 0.377]} scale={2.518}>
                  <mesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials.table} />
                </group>
                <group name="podium_lp052_105" position={[-7.672, 0.31, 0.405]} scale={2.518}>
                  <mesh name="Object_211" geometry={nodes.Object_211.geometry} material={materials.table} />
                </group>
                <group name="podium_lp053_106" position={[-7.043, -0.957, -0.256]} scale={2.518}>
                  <mesh name="Object_213" geometry={nodes.Object_213.geometry} material={materials.table} />
                </group>
                <group name="podium_lp054_107" position={[-7.043, -0.913, -0.261]} scale={2.518}>
                  <mesh name="Object_215" geometry={nodes.Object_215.geometry} material={materials.table} />
                </group>
                <group name="podium_lp055_108" position={[-7.339, -0.309, 0.261]} scale={2.518}>
                  <mesh name="Object_217" geometry={nodes.Object_217.geometry} material={materials.table} />
                </group>
                <group name="podium_lp057_109" position={[-7.265, -0.477, 0.261]} scale={2.518}>
                  <mesh name="Object_219" geometry={nodes.Object_219.geometry} material={materials.table} />
                </group>
                <group name="podium_lp058_110" position={[-8.136, 1.136, 0.405]} scale={2.518}>
                  <mesh name="Object_221" geometry={nodes.Object_221.geometry} material={materials.table} />
                </group>
                <group name="podium_lp059_111" position={[-8.133, 1.127, 0.152]} scale={2.518}>
                  <mesh name="Object_223" geometry={nodes.Object_223.geometry} material={materials.table} />
                </group>
                <group name="podium_lp060_112" position={[-3.765, -0.061, -2.913]} scale={2.518}>
                  <mesh name="Object_225" geometry={nodes.Object_225.geometry} material={materials.table} />
                </group>
                <group name="podium_lp061_113" position={[-5.63, -0.056, -2.915]} scale={2.518}>
                  <mesh name="Object_227" geometry={nodes.Object_227.geometry} material={materials.table} />
                </group>
                <group name="podium_lp062_114" position={[-4.71, 0.273, -3.185]} scale={2.518}>
                  <mesh name="Object_229" geometry={nodes.Object_229.geometry} material={materials.table} />
                </group>
                <group name="podium_lp063_115" position={[-4.717, 1.654, -3.686]} scale={2.518}>
                  <mesh name="Object_231" geometry={nodes.Object_231.geometry} material={materials.table} />
                </group>
                <group name="podium_lp064_116" position={[-4.772, -0.868, -2.524]} scale={2.518}>
                  <mesh name="Object_233" geometry={nodes.Object_233.geometry} material={materials.table} />
                </group>
                <group name="podium_lp065_117" position={[-4.776, -0.824, -2.523]} scale={2.518}>
                  <mesh name="Object_235" geometry={nodes.Object_235.geometry} material={materials.table} />
                </group>
                <group name="podium_lp066_118" position={[-4.195, 0.27, -3.154]} scale={2.518}>
                  <mesh name="Object_237" geometry={nodes.Object_237.geometry} material={materials.table} />
                </group>
                <group name="podium_lp067_119" position={[-4.147, 0.163, -3.11]} scale={2.518}>
                  <mesh name="Object_239" geometry={nodes.Object_239.geometry} material={materials.table} />
                </group>
                <group name="podium_lp068_120" position={[-4.118, 0.31, -3.154]} scale={2.518}>
                  <mesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials.table} />
                </group>
                <group name="podium_lp069_121" position={[-4.779, -0.957, -2.524]} scale={2.518}>
                  <mesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials.table} />
                </group>
                <group name="podium_lp070_122" position={[-4.784, -0.913, -2.524]} scale={2.518}>
                  <mesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials.table} />
                </group>
                <group name="podium_lp071_123" position={[-4.263, -0.309, -2.821]} scale={2.518}>
                  <mesh name="Object_247" geometry={nodes.Object_247.geometry} material={materials.table} />
                </group>
                <group name="podium_lp074_124" position={[-4.119, 1.136, -3.618]} scale={2.518}>
                  <mesh name="Object_249" geometry={nodes.Object_249.geometry} material={materials.table} />
                </group>
                <group name="podium_lp075_125" position={[-4.373, 1.127, -3.615]} scale={2.518}>
                  <mesh name="Object_251" geometry={nodes.Object_251.geometry} material={materials.table} />
                </group>
                <group name="podium_lp076_126" position={[-7.283, -0.061, 1.112]} scale={2.518}>
                  <mesh name="Object_253" geometry={nodes.Object_253.geometry} material={materials.table} />
                </group>
                <group name="podium_lp077_127" position={[-5.96, -0.056, 2.427]} scale={2.518}>
                  <mesh name="Object_255" geometry={nodes.Object_255.geometry} material={materials.table} />
                </group>
                <group name="podium_lp078_128" position={[-6.803, 0.273, 1.971]} scale={2.518}>
                  <mesh name="Object_257" geometry={nodes.Object_257.geometry} material={materials.table} />
                </group>
                <group name="podium_lp080_129" position={[-6.294, -0.868, 1.545]} scale={2.518}>
                  <mesh name="Object_259" geometry={nodes.Object_259.geometry} material={materials.table} />
                </group>
                <group name="podium_lp081_130" position={[-6.291, -0.824, 1.548]} scale={2.518}>
                  <mesh name="Object_261" geometry={nodes.Object_261.geometry} material={materials.table} />
                </group>
                <group name="podium_lp082_131" position={[-7.147, 0.27, 1.585]} scale={2.518}>
                  <mesh name="Object_263" geometry={nodes.Object_263.geometry} material={materials.table} />
                </group>
                <group name="podium_lp083_132" position={[-7.188, 0.291, 1.577]} scale={2.518}>
                  <mesh name="Object_265" geometry={nodes.Object_265.geometry} material={materials.table} />
                </group>
                <group name="podium_lp084_133" position={[-7.202, 0.31, 1.532]} scale={2.518}>
                  <mesh name="Object_267" geometry={nodes.Object_267.geometry} material={materials.table} />
                </group>
                <group name="podium_lp085_134" position={[-6.289, -0.957, 1.55]} scale={2.518}>
                  <mesh name="Object_269" geometry={nodes.Object_269.geometry} material={materials.table} />
                </group>
                <group name="podium_lp086_135" position={[-6.285, -0.913, 1.553]} scale={2.518}>
                  <mesh name="Object_271" geometry={nodes.Object_271.geometry} material={materials.table} />
                </group>
                <group name="podium_lp087_136" position={[-6.864, -0.309, 1.397]} scale={2.518}>
                  <mesh name="Object_273" geometry={nodes.Object_273.geometry} material={materials.table} />
                </group>
                <group name="podium_lp089_137" position={[-6.813, -0.477, 1.344]} scale={2.518}>
                  <mesh name="Object_275" geometry={nodes.Object_275.geometry} material={materials.table} />
                </group>
                <group name="podium_lp090_138" position={[-7.528, 1.136, 1.862]} scale={2.518}>
                  <mesh name="Object_277" geometry={nodes.Object_277.geometry} material={materials.table} />
                </group>
                <group name="podium_lp091_139" position={[-7.346, 1.127, 2.038]} scale={2.518}>
                  <mesh name="Object_279" geometry={nodes.Object_279.geometry} material={materials.table} />
                </group>
                <group name="podium_lp092_140" position={[-2.095, -0.061, 1.089]} scale={2.518}>
                  <mesh name="Object_281" geometry={nodes.Object_281.geometry} material={materials.table} />
                </group>
                <group name="podium_lp093_141" position={[-3.406, -0.056, 2.416]} scale={2.518}>
                  <mesh name="Object_283" geometry={nodes.Object_283.geometry} material={materials.table} />
                </group>
                <group name="podium_lp094_142" position={[-2.567, 0.273, 1.952]} scale={2.518}>
                  <mesh name="Object_285" geometry={nodes.Object_285.geometry} material={materials.table} />
                </group>
                <group name="podium_lp095_143" position={[-2.216, 1.654, 2.309]} scale={2.518}>
                  <mesh name="Object_287" geometry={nodes.Object_287.geometry} material={materials.table} />
                </group>
                <group name="podium_lp096_144" position={[-3.08, -0.868, 1.531]} scale={2.518}>
                  <mesh name="Object_289" geometry={nodes.Object_289.geometry} material={materials.table} />
                </group>
                <group name="podium_lp097_145" position={[-3.083, -0.824, 1.534]} scale={2.518}>
                  <mesh name="Object_291" geometry={nodes.Object_291.geometry} material={materials.table} />
                </group>
                <group name="podium_lp098_146" position={[-2.226, 0.27, 1.564]} scale={2.518}>
                  <mesh name="Object_293" geometry={nodes.Object_293.geometry} material={materials.table} />
                </group>
                <group name="podium_lp099_147" position={[-2.224, 0.163, 1.499]} scale={2.518}>
                  <mesh name="Object_295" geometry={nodes.Object_295.geometry} material={materials.table} />
                </group>
                <group name="podium_lp100_148" position={[-2.172, 0.31, 1.51]} scale={2.518}>
                  <mesh name="Object_297" geometry={nodes.Object_297.geometry} material={materials.table} />
                </group>
                <group name="podium_lp101_149" position={[-3.085, -0.957, 1.536]} scale={2.518}>
                  <mesh name="Object_299" geometry={nodes.Object_299.geometry} material={materials.table} />
                </group>
                <group name="podium_lp102_150" position={[-3.088, -0.913, 1.539]} scale={2.518}>
                  <mesh name="Object_301" geometry={nodes.Object_301.geometry} material={materials.table} />
                </group>
                <group name="podium_lp103_151" position={[-2.511, -0.309, 1.378]} scale={2.518}>
                  <mesh name="Object_303" geometry={nodes.Object_303.geometry} material={materials.table} />
                </group>
                <group name="podium_lp104_152" position={[-2.502, -0.311, 1.37]} scale={2.518}>
                  <mesh name="Object_305" geometry={nodes.Object_305.geometry} material={materials.table} />
                </group>
                <group name="podium_lp105_153" position={[-2.562, -0.477, 1.325]} scale={2.518}>
                  <mesh name="Object_307" geometry={nodes.Object_307.geometry} material={materials.table} />
                </group>
                <group name="podium_lp106_154" position={[-1.843, 1.136, 1.837]} scale={2.518}>
                  <mesh name="Object_309" geometry={nodes.Object_309.geometry} material={materials.table} />
                </group>
                <group name="podium_lp107_155" position={[-2.024, 1.127, 2.014]} scale={2.518}>
                  <mesh name="Object_311" geometry={nodes.Object_311.geometry} material={materials.table} />
                </group>
                <group name="podium_lp108_156" position={[-7.294, -0.061, -1.441]} scale={2.518}>
                  <mesh name="Object_313" geometry={nodes.Object_313.geometry} material={materials.table} />
                </group>
                <group name="podium_lp109_157" position={[-5.983, -0.056, -2.767]} scale={2.518}>
                  <mesh name="Object_315" geometry={nodes.Object_315.geometry} material={materials.table} />
                </group>
                <group name="podium_lp110_158" position={[-6.822, 0.273, -2.303]} scale={2.518}>
                  <mesh name="Object_317" geometry={nodes.Object_317.geometry} material={materials.table} />
                </group>
                <group name="podium_lp112_159" position={[-6.309, -0.868, -1.882]} scale={2.518}>
                  <mesh name="Object_319" geometry={nodes.Object_319.geometry} material={materials.table} />
                </group>
                <group name="podium_lp113_160" position={[-6.306, -0.824, -1.885]} scale={2.518}>
                  <mesh name="Object_321" geometry={nodes.Object_321.geometry} material={materials.table} />
                </group>
                <group name="podium_lp114_161" position={[-7.163, 0.27, -1.915]} scale={2.518}>
                  <mesh name="Object_323" geometry={nodes.Object_323.geometry} material={materials.table} />
                </group>
                <group name="podium_lp115_162" position={[-7.165, 0.163, -1.85]} scale={2.518}>
                  <mesh name="Object_325" geometry={nodes.Object_325.geometry} material={materials.table} />
                </group>
                <group name="podium_lp116_163" position={[-7.217, 0.31, -1.861]} scale={2.518}>
                  <mesh name="Object_327" geometry={nodes.Object_327.geometry} material={materials.table} />
                </group>
                <group name="podium_lp117_164" position={[-6.304, -0.957, -1.887]} scale={2.518}>
                  <mesh name="Object_329" geometry={nodes.Object_329.geometry} material={materials.table} />
                </group>
                <group name="podium_lp118_165" position={[-6.3, -0.913, -1.891]} scale={2.518}>
                  <mesh name="Object_331" geometry={nodes.Object_331.geometry} material={materials.table} />
                </group>
                <group name="podium_lp119_166" position={[-6.878, -0.309, -1.729]} scale={2.518}>
                  <mesh name="Object_333" geometry={nodes.Object_333.geometry} material={materials.table} />
                </group>
                <group name="podium_lp121_167" position={[-6.827, -0.477, -1.677]} scale={2.518}>
                  <mesh name="Object_335" geometry={nodes.Object_335.geometry} material={materials.table} />
                </group>
                <group name="podium_lp122_168" position={[-7.546, 1.136, -2.188]} scale={2.518}>
                  <mesh name="Object_337" geometry={nodes.Object_337.geometry} material={materials.table} />
                </group>
                <group name="podium_lp123_169" position={[-7.365, 1.127, -2.366]} scale={2.518}>
                  <mesh name="Object_339" geometry={nodes.Object_339.geometry} material={materials.table} />
                </group>
                <group name="podium_lp124_170" position={[-2.106, -0.061, -1.463]} scale={2.518}>
                  <mesh name="Object_341" geometry={nodes.Object_341.geometry} material={materials.table} />
                </group>
                <group name="podium_lp125_171" position={[-3.429, -0.056, -2.779]} scale={2.518}>
                  <mesh name="Object_343" geometry={nodes.Object_343.geometry} material={materials.table} />
                </group>
                <group name="podium_lp126_172" position={[-2.586, 0.273, -2.322]} scale={2.518}>
                  <mesh name="Object_345" geometry={nodes.Object_345.geometry} material={materials.table} />
                </group>
                <group name="podium_lp128_173" position={[-3.095, -0.868, -1.897]} scale={2.518}>
                  <mesh name="Object_347" geometry={nodes.Object_347.geometry} material={materials.table} />
                </group>
                <group name="podium_lp129_174" position={[-3.098, -0.824, -1.899]} scale={2.518}>
                  <mesh name="Object_349" geometry={nodes.Object_349.geometry} material={materials.table} />
                </group>
                <group name="podium_lp130_175" position={[-2.242, 0.27, -1.937]} scale={2.518}>
                  <mesh name="Object_351" geometry={nodes.Object_351.geometry} material={materials.table} />
                </group>
                <group name="podium_lp131_176" position={[-2.2, 0.291, -1.929]} scale={2.518}>
                  <mesh name="Object_353" geometry={nodes.Object_353.geometry} material={materials.table} />
                </group>
                <group name="podium_lp132_177" position={[-2.187, 0.31, -1.883]} scale={2.518}>
                  <mesh name="Object_355" geometry={nodes.Object_355.geometry} material={materials.table} />
                </group>
                <group name="podium_lp133_178" position={[-3.1, -0.957, -1.901]} scale={2.518}>
                  <mesh name="Object_357" geometry={nodes.Object_357.geometry} material={materials.table} />
                </group>
                <group name="podium_lp134_179" position={[-3.104, -0.913, -1.905]} scale={2.518}>
                  <mesh name="Object_359" geometry={nodes.Object_359.geometry} material={materials.table} />
                </group>
                <group name="podium_lp135_180" position={[-2.524, -0.309, -1.748]} scale={2.518}>
                  <mesh name="Object_361" geometry={nodes.Object_361.geometry} material={materials.table} />
                </group>
                <group name="podium_lp136_181" position={[-2.516, -0.311, -1.74]} scale={2.518}>
                  <mesh name="Object_363" geometry={nodes.Object_363.geometry} material={materials.table} />
                </group>
                <group name="podium_lp137_182" position={[-2.576, -0.477, -1.696]} scale={2.518}>
                  <mesh name="Object_365" geometry={nodes.Object_365.geometry} material={materials.table} />
                </group>
                <group name="podium_lp138_183" position={[-1.861, 1.136, -2.213]} scale={2.518}>
                  <mesh name="Object_367" geometry={nodes.Object_367.geometry} material={materials.table} />
                </group>
                <group name="podium_lp139_184" position={[-2.043, 1.127, -2.389]} scale={2.518}>
                  <mesh name="Object_369" geometry={nodes.Object_369.geometry} material={materials.table} />
                </group>
                <group name="podium_lp140_185" position={[-4.676, 0.179, 2.788]} scale={2.518}>
                  <mesh name="Object_371" geometry={nodes.Object_371.geometry} material={materials.table} />
                </group>
                <group name="podium_lp141_186" position={[-5.145, -0.171, 2.529]} scale={2.518}>
                  <mesh name="Object_373" geometry={nodes.Object_373.geometry} material={materials.table} />
                </group>
                <group name="podium_lp142_187" position={[-5.144, 1.131, 3.272]} scale={2.518}>
                  <mesh name="Object_375" geometry={nodes.Object_375.geometry} material={materials.table} />
                </group>
                <group name="podium_lp143_188" position={[-5.138, -0.311, 2.469]} scale={2.518}>
                  <mesh name="Object_377" geometry={nodes.Object_377.geometry} material={materials.table} />
                </group>
                <group name="podium_lp144_189" position={[-5.127, -0.477, 2.396]} scale={2.518}>
                  <mesh name="Object_379" geometry={nodes.Object_379.geometry} material={materials.table} />
                </group>
                <group name="podium_lp145_190" position={[-1.248, 1.131, -0.631]} scale={2.518}>
                  <mesh name="Object_381" geometry={nodes.Object_381.geometry} material={materials.table} />
                </group>
                <group name="podium_lp146_191" position={[-1.991, -0.171, -0.631]} scale={2.518}>
                  <mesh name="Object_383" geometry={nodes.Object_383.geometry} material={materials.table} />
                </group>
                <group name="podium_lp147_192" position={[-2.05, -0.311, -0.624]} scale={2.518}>
                  <mesh name="Object_385" geometry={nodes.Object_385.geometry} material={materials.table} />
                </group>
                <group name="podium_lp148_193" position={[-2.124, -0.477, -0.613]} scale={2.518}>
                  <mesh name="Object_387" geometry={nodes.Object_387.geometry} material={materials.table} />
                </group>
                <group name="podium_lp149_194" position={[-8.141, 1.131, 0.279]} scale={2.518}>
                  <mesh name="Object_389" geometry={nodes.Object_389.geometry} material={materials.table} />
                </group>
                <group name="podium_lp150_195" position={[-7.398, -0.171, 0.28]} scale={2.518}>
                  <mesh name="Object_391" geometry={nodes.Object_391.geometry} material={materials.table} />
                </group>
                <group name="podium_lp151_196" position={[-7.339, -0.311, 0.272]} scale={2.518}>
                  <mesh name="Object_393" geometry={nodes.Object_393.geometry} material={materials.table} />
                </group>
                <group name="podium_lp152_197" position={[-4.245, 1.131, -3.623]} scale={2.518}>
                  <mesh name="Object_395" geometry={nodes.Object_395.geometry} material={materials.table} />
                </group>
                <group name="podium_lp153_198" position={[-4.244, -0.171, -2.88]} scale={2.518}>
                  <mesh name="Object_397" geometry={nodes.Object_397.geometry} material={materials.table} />
                </group>
                <group name="podium_lp154_199" position={[-4.251, -0.311, -2.821]} scale={2.518}>
                  <mesh name="Object_399" geometry={nodes.Object_399.geometry} material={materials.table} />
                </group>
                <group name="podium_lp155_200" position={[-4.262, -0.477, -2.747]} scale={2.518}>
                  <mesh name="Object_401" geometry={nodes.Object_401.geometry} material={materials.table} />
                </group>
                <group name="podium_lp156_201" position={[-6.92, -0.171, 1.426]} scale={2.518}>
                  <mesh name="Object_403" geometry={nodes.Object_403.geometry} material={materials.table} />
                </group>
                <group name="podium_lp157_202" position={[-6.873, -0.311, 1.389]} scale={2.518}>
                  <mesh name="Object_405" geometry={nodes.Object_405.geometry} material={materials.table} />
                </group>
                <group name="podium_lp158_203" position={[-1.928, 1.131, 1.93]} scale={2.518}>
                  <mesh name="Object_407" geometry={nodes.Object_407.geometry} material={materials.table} />
                </group>
                <group name="podium_lp159_204" position={[-2.455, -0.171, 1.406]} scale={2.518}>
                  <mesh name="Object_409" geometry={nodes.Object_409.geometry} material={materials.table} />
                </group>
                <group name="podium_lp160_205" position={[-7.461, 1.131, -2.281]} scale={2.518}>
                  <mesh name="Object_411" geometry={nodes.Object_411.geometry} material={materials.table} />
                </group>
                <group name="podium_lp161_206" position={[-6.934, -0.171, -1.758]} scale={2.518}>
                  <mesh name="Object_413" geometry={nodes.Object_413.geometry} material={materials.table} />
                </group>
                <group name="podium_lp162_207" position={[-6.887, -0.311, -1.721]} scale={2.518}>
                  <mesh name="Object_415" geometry={nodes.Object_415.geometry} material={materials.table} />
                </group>
                <group name="podium_lp163_208" position={[-2.469, -0.171, -1.777]} scale={2.518}>
                  <mesh name="Object_417" geometry={nodes.Object_417.geometry} material={materials.table} />
                </group>
                <group name="podium_lp164_209" position={[-4.692, 1.548, -0.192]} scale={2.518}>
                  <mesh name="Object_419" geometry={nodes.Object_419.geometry} material={materials.alfa} />
                </group>
                <group name="podium_lp165_210" position={[-4.671, 1.654, 3.334]} scale={2.518}>
                  <mesh name="Object_421" geometry={nodes.Object_421.geometry} material={materials.table} />
                </group>
              </group>
              <group name="lamp_lp_252" position={[-3.06, 5.053, 3.236]}>
                <mesh name="Object_501" geometry={nodes.Object_501.geometry} material={materials['Material.001']} />
              </group>
              <group name="lamp_lp001_253" position={[-3.06, 5.054, 0.85]} rotation={[-0.942, 0, 0]}>
                <mesh name="Object_503" geometry={nodes.Object_503.geometry} material={materials['Material.001']} />
              </group>
              <group name="lamp_lp002_254" position={[-3.06, 5.054, -1.535]} rotation={[-0.857, 0, 0]}>
                <mesh name="Object_505" geometry={nodes.Object_505.geometry} material={materials['Material.001']} />
              </group>
              <group name="lamp_lp003_255" position={[3.056, 5.053, 3.237]} rotation={[0.76, 0, 0]}>
                <mesh name="Object_507" geometry={nodes.Object_507.geometry} material={materials['Material.001']} />
              </group>
              <group name="lamp_lp004_256" position={[3.056, 5.053, 0.851]}>
                <mesh name="Object_509" geometry={nodes.Object_509.geometry} material={materials['Material.001']} />
              </group>
              <group name="lamp_lp005_257" position={[3.056, 5.054, -1.535]} rotation={[-0.918, 0, 0]}>
                <mesh name="Object_511" geometry={nodes.Object_511.geometry} material={materials['Material.001']} />
              </group>
              <group name="lamp_detail_01_hp_258" position={[-12.244, 3.06, -0.009]} rotation={[0, 0, Math.PI / 2]} scale={[1.006, 1.031, 1.013]}>
                <mesh name="Object_513" geometry={nodes.Object_513.geometry} material={materials.material_0} />
              </group>
              <group name="lamp_detail_02_hp_259" position={[-12.245, 3.06, 0.009]} rotation={[Math.PI, Math.PI / 3, -Math.PI / 2]} scale={[1.006, 1.031, 1.013]}>
                <mesh name="Object_515" geometry={nodes.Object_515.geometry} material={materials.material_0} />
              </group>
              <group name="lamp_detail_03_hp_260" position={[-12.229, 3.06, -0.001]} rotation={[-Math.PI, -1.134, -Math.PI / 2]} scale={[1.006, 1.031, 1.013]}>
                <mesh name="Object_517" geometry={nodes.Object_517.geometry} material={materials.material_0} />
              </group>
              <group name="lamp_hp_261" position={[-12.239, 3.058, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.126, 0.13, 0.127]}>
                <mesh name="Object_519" geometry={nodes.Object_519.geometry} material={materials.material_0} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cyberroom__scifi.glb')
