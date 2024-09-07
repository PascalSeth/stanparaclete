import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useFBX, useGLTF } from '@react-three/drei'
import { AnimationMixer } from 'three'

export function QueenModel(props: any) {
  const { nodes, materials } = useGLTF('/queen.glb') as any
  const DancingTwerk = useFBX("/animations/Dancing Twerk.fbx")
  const Samba = useFBX("/animations/Samba Dancing.fbx")
  const Snake = useFBX("/animations/Snake Hip Hop Dance.fbx")

  const groupRef = useRef<any>()
  const mixerRef = useRef<AnimationMixer | null>(null)
  const actionsRef = useRef<any>({})

  useEffect(() => {
    if (groupRef.current) {
      // Step 1: Initialize AnimationMixer
      const mixer = new AnimationMixer(groupRef.current)
      mixerRef.current = mixer

      // Step 2: Create actions for each animation
      actionsRef.current = {
        DancingTwerk: mixer.clipAction(DancingTwerk.animations[0]),
        Samba: mixer.clipAction(Samba.animations[0]),
        Snake: mixer.clipAction(Snake.animations[0]),
      }

      // Step 3: Play the initial animation (Dancing Twerk)
      actionsRef.current.DancingTwerk.play()

      return () => {
        mixer.stopAllAction()
      }
    }
  }, [DancingTwerk, Samba, Snake])

  // Step 4: Update the mixer on each frame to ensure smooth animation
  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta)
  })

  // Step 5: Logic to switch animations with fade transitions
  const switchAnimation = (animationName: string) => {
    const currentAction = actionsRef.current[animationName]

    if (currentAction) {
      // Fade out all actions except the new one
      Object.keys(actionsRef.current).forEach((key) => {
        const action = actionsRef.current[key]
        if (key === animationName) {
          action.reset().fadeIn(0.5).play() // Fade in the selected animation
        } else {
          action.fadeOut(0.5) // Fade out other animations
        }
      })
    }
  }

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
   
      {/* Render HTML buttons inside the 3D scene */}
      <Html position={[6, 2, 0]}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => switchAnimation('Samba')}>Switch to Samba</button>
          <button onClick={() => switchAnimation('Snake')}>Switch to Snake</button>
        </div>
      </Html> 
       </group>
  )
}

useGLTF.preload('/queen.glb')
useFBX.preload("/animations/Dancing Twerk.fbx")
useFBX.preload("/animations/Samba Dancing.fbx")
useFBX.preload("/animations/Snake Hip Hop Dance.fbx")
