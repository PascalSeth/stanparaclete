'use client'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import '../../utils'

// Use the `projects` array provided earlier
const projects = [
  { title: "Car Hub", url: "https://pascalcarhub.netlify.app/", image: "/carhub.png", description: "E-commerce For Cars", status: "Sites" },
  { title: "Bird Notion", url: "https://bird-notion.netlify.app/", image: "/birdnotion.png", description: "Inspired by the Notion website", status: "Sites" },
  { title: "Travel App", url: "https://travelapplanding.netlify.app/", image: "/travelApp.png", description: "Landing Page for Travel App", status: "Sites" },
  { title: "Dharma Kitchen", url: "https://thedharmakitchen.netlify.app/", image: "/dharma.png", description: "Restaurant Online Landing Page", status: "Sites" },
  { title: "Fresco Restaurant", url: "https://fresco-food.netlify.app/", image: "/fresco.png", description: "Restaurant Online Landing Page", status: "Sites" },
  { title: "EliteExclusiveApparels", url: "https://eliltexclusiveapparels.netlify.app/", image: "/apparel.png", description: "Clothing Shop with a working Dashboard", status: "Sites" },
]

export const Project = () => (
    <div className='h-full overflow-y-hidden'>  
        <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
    <fog attach="fog" args={['#a79', 8.5, 12]} />
    <ScrollControls pages={projects.length / 2} infinite>
      <Rig rotation={[0, 0, 0.15]}>
        <Carousel />
      </Rig>
      <Banner position={[0, -0.15, 0]} />
    </ScrollControls>
    <Environment preset="dawn" background blur={0.5} />
  </Canvas></div>

)

function Rig(props:any) {
  const ref = useRef() as any
  const scroll = useScroll() as any
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    if (state.events && typeof state.events.update === 'function') {
        state.events.update() // Raycasts every frame rather than on pointer-move
      }    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
    state.camera.lookAt(0, 0, 0) // Look at center
  })
  return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.4 }) {
  return projects.map((project, i) => {
    const angle = (i / projects.length) * Math.PI * 2
    return (
      <Card
        key={project.title}
        url={project.image}
        title={project.title}
        position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
        rotation={[0, Math.PI + angle, 0]}
      />
    )
  })
}

function Card({ url, title, ...props }: any) {
    const ref = useRef() as any
    const [hovered, hover] = useState(false)
  
    const pointerOver = (e: any) => {
      e.stopPropagation()
      hover(true)
    }
  
    const pointerOut = () => hover(false)
  
    const handleClick = () => {
      const project = projects.find(p => p.title === title)
      if (project) {
        window.open(project.url, '_blank')
      }
    }
  
    useFrame((state, delta) => {
      easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
      easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
      easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
    })
  
    return (
      <Image
        ref={ref}
        scale={4}
        url={url}
        transparent
        side={THREE.DoubleSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={handleClick}
        {...props}
      >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
      </Image>
    )
  }
  

function Banner(props:any) {
  const ref = useRef() as any
//   const texture = useTexture('/work_.png')
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  const scroll = useScroll()
  useFrame((state, delta) => {
    if (ref.current && ref.current.material) {
      // Ensure material exists and has a time property
      if (ref.current.material.time) {
        ref.current.material.time.value += Math.abs(scroll.delta) * 4
      }
  
      // Make sure the map and offset exist before updating them
      if (ref.current.material.map && ref.current.material.map.offset) {
        ref.current.material.map.offset.x += delta / 2
      }
    }
  })
  
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      {/* <meshSineMaterial  map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} /> */}
    </mesh>
  )
}
// map={texture}