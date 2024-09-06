'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Showcase from './Showcase'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import UI from './UI'

type Props = {}

function Hero({}: Props) {
  return (
    <div className='h-screen flex flex-col w-full'>
    <Canvas shadows camera={{position:[0,0,8],fov:42}}>
        <color attach='background' args={['#171720']}/>
        <fog attach='fog' args={['#171720',10,30]}/>
        <Suspense>
        <Showcase/>
        </Suspense>
        <EffectComposer>
            <Bloom intensity={1} mipmapBlur/>
        </EffectComposer>
    </Canvas>    <UI/>

    </div>
  )
}

export default Hero