'use client'
import { CameraControls, Environment, Float, Html, MeshReflectorMaterial, RenderTexture, Text, useFont } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { RobotModel } from '../models/RobotModel'
import { degToRad, lerp } from 'three/src/math/MathUtils.js'
import { Color } from 'three'
import { useAtom } from 'jotai'
import { currentPageAtom } from './UI'
import { useFrame } from '@react-three/fiber'
import { CyberRoomModel } from '../models/Cyberroom__scifi'
import { StanModel } from '../models/Avatar'

type Props = {}

const bloomColor = new Color('#fff')
bloomColor.multiplyScalar(1.5)

function Showcase({}: Props) {
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
    const controls = useRef<any>()
    const meshFitCameraHome = useRef<any>()
    const meshFitCameraStore = useRef<any>()
    // const textMaterial = useRef<any>()

    // // useFrame((_, delta) => {
    // //     textMaterial.current.opacity = lerp(textMaterial.current.opacity, currentPage === 'home' || currentPage === 'intro' ? 1 : 0, delta * 2)
    // // })

    const intro = async () => {
        controls.current.dolly(-22);
        controls.current.smoothTime = 1.6
        setTimeout(() => {
            setCurrentPage('home')
        }, 1200)
        fitcamera()
    }

    useEffect(() => {
        intro()
    }, [])

    useEffect(() => {
        fitcamera()
        window.addEventListener("resize", fitcamera)
        return () => window.removeEventListener("resize", fitcamera)
    }, [currentPage])

    const fitcamera = async () => {
        if (currentPage === 'store') {
            controls.current.fitToBox(meshFitCameraStore.current, true)
        } else {
            controls.current.fitToBox(meshFitCameraHome.current, true)
        }
    }

    return (
        <>
            <CameraControls ref={controls} />
            <mesh visible={false} ref={meshFitCameraHome} position-z={1.8}>
                <boxGeometry args={[5.5, 4, 2]} />
                <meshBasicMaterial color='orange' transparent opacity={0.5} />
            </mesh>

            <Html                 
            position={[-3, 2, 0]}
            >
            <div className="bg-gradient-to-r from-slate-300 to-gray-700 bg-opacity-90 p-3 rounded-[2pc] shadow-lg max-lg:w-[50vw]
            w-[30vw]">
                        <h2 className="text-2xl text-white font-bold mb-2">Contact Us</h2>
                        <form className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-[0.4pc] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-[0.4pc] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-[0.4pc] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-[1pc] shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Send
                            </button>
                        </form>
                    </div>
</Html>
                <StanModel animation='Talking' rotation-x={4.6}  position-x={2} position-y={-2}  scale={2}  />
                <Environment preset='dawn' />


            <mesh position-y={-2.79} rotation-x={-Math.PI / 2} >
                <planeGeometry args={[100, 100]} />
                <MeshReflectorMaterial
                    mirror={2}
                    blur={[100, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={10}
                    roughness={1}
                    depthScale={1}
                    opacity={0.5}
                    transparent
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color='#333'
                    metalness={0.5}
                />
            </mesh>
        </>
    )
}

export default Showcase

