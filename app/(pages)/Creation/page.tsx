'use client'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Contactus from '@/app/components/Contactus'

type Props = {}

function Creation({}: Props) {
  return (
    <div className='h-screen flex flex-col w-full'>
    <Canvas shadows camera={{position:[0,0,8],fov:42}}>
        <color attach='background' args={['#171720']}/>
        <fog attach='fog' args={['#171720',10,30]}/>
        <Suspense>
        <Contactus/>
        </Suspense>
      
    </Canvas>   

    </div>
  )
}

export default Creation