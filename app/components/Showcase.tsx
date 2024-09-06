'use client'
import { CameraControls, Environment, Float, MeshReflectorMaterial, RenderTexture, Text, useFont } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { RobotModel } from '../models/RobotModel'
import { degToRad, lerp } from 'three/src/math/MathUtils.js'
import { Color } from 'three'
import { useAtom } from 'jotai'
import { currentPageAtom } from './UI'
import { useFrame } from '@react-three/fiber'
import { CyberRoomModel } from '../models/Cyberroom__scifi'

type Props = {}

const bloomColor = new Color('#fff')
bloomColor.multiplyScalar(1.5)

function Showcase({}: Props) {
    const [currentPage, setCurrentPage] = useAtom(currentPageAtom)
    const controls = useRef<any>()
    const meshFitCameraHome = useRef<any>()
    const meshFitCameraStore = useRef<any>()
    const textMaterial = useRef<any>()

    useFrame((_, delta) => {
        textMaterial.current.opacity = lerp(textMaterial.current.opacity, currentPage === 'home' || currentPage === 'intro' ? 1 : 0, delta * 2)
    })

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
                <boxGeometry args={[7.5, 2, 2]} />
                <meshBasicMaterial color='orange' transparent opacity={0.5} />
            </mesh>

            <Text fontSize={0.8} font={'/Silkscreen-Bold.ttf'}
                position-x={-1.3} position-y={-0.5} position-z={1}
                lineHeight={0.8} textAlign='center'
                rotation-y={degToRad(30)} anchorY={'bottom'}
            >
                Stan{'\n'} Paraclete
                <meshBasicMaterial ref={textMaterial} color={bloomColor} toneMapped={false}>
                    <RenderTexture attach={'map'}>
                        <color attach='background' args={['#fff']} />
                        <Environment preset='sunset' />
                        <Float floatIntensity={5} rotationIntensity={6}>
                            <RobotModel props html={false}  scale={1.6} />
                        </Float>
                    </RenderTexture>
                </meshBasicMaterial>
            </Text>

            {/* Motto Text */}
            <Text fontSize={0.5} font={'/Silkscreen-Bold.ttf'}
                position-x={-1.3} position-y={-1.5} position-z={1.2}
                lineHeight={0.8} textAlign='center'
                rotation-y={degToRad(30)} anchorY={'bottom'}
            >
                Innovate, Integrate, Elevate
                <meshBasicMaterial color={bloomColor} toneMapped={false} />
            </Text>

            <group rotation-y={degToRad(180)} position-x={3}>
                <RobotModel props html scale={0.6} />
                <mesh ref={meshFitCameraStore} visible={false}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshBasicMaterial color='orange' transparent opacity={0.5} />
                </mesh>
                <Environment preset='dawn' />
            </group>

            <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
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

useFont.preload('/Silkscreen-Bold.ttf')
