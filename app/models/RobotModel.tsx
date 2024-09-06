
import React, { useRef } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber';
import { currentPageAtom } from '../components/UI';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { degToRad } from 'three/src/math/MathUtils.js';

interface OverlayItemProps {
  className?: string;
  title: string;
  description: string;
  bgColor: string;
  linkTo: string; 
}

const OverlayItem: React.FC<OverlayItemProps> = ({
  className = '',
  title,
  description,
  bgColor,
  linkTo,
  ...props
}) => {
  const [currentPage] = useAtom(currentPageAtom);

  return (
    <Html
      transform
      distanceFactor={1.2}
      center
      className={`w-48 rounded-md overflow-hidden ${
        currentPage === 'store' ? '' : 'opacity-50'
      } transition-opacity duration-1000 ${className}`}
      {...props}
    >
      <div className='bg-white bg-opacity-50 backdrop-blur-lg text-xs p-3 w-full'>
        <h2 className='font-bold'>{title}</h2>
        <p>{description}</p>
      </div>
      <Link href={linkTo}>
        <button
          className={`${bgColor} hover:bg-opacity-50 transition-colors duration-500 px-4`}
        >
          Learn More
        </button>
      </Link>
    </Html>
  );
};

interface RobotModelProps extends GroupProps {
  html: any; 
  props:any
}

export function RobotModel( {html,...props}:RobotModelProps) {
  const { nodes, materials } = useGLTF('/Robo Fun Time - Livestream.glb') as any;

  return (
    <group {...props} dispose={null}>
    <group>
      <group name="Node">
        <mesh
          name="Node-Mesh"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh'].geometry}
          material={materials.mat14}
        />
     
        <mesh
          name="Node-Mesh_1"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_1'].geometry}
          material={materials.mat16}
        />
        <mesh
          name="Node-Mesh_2"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_2'].geometry}
          material={materials.mat23}
        />
        <mesh
          name="Node-Mesh_3"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_3'].geometry}
          material={materials.mat21}
        />
        <mesh
          name="Node-Mesh_4"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_4'].geometry}
          material={materials.mat2}
        />
        <mesh
          name="Node-Mesh_5"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_5'].geometry}
          material={materials.mat9}
        />
        <mesh
          name="Node-Mesh_6"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_6'].geometry}
          material={materials.mat1}
        />
        <mesh
          name="Node-Mesh_7"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_7'].geometry}
          material={materials.mat19}
        />
        <mesh
          name="Node-Mesh_8"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_8'].geometry}
          material={materials.mat3}
        />
        <mesh
          name="Node-Mesh_9"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_9'].geometry}
          material={materials.mat15}
        />
        <mesh
          name="Node-Mesh_10"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_10'].geometry}
          material={materials.mat22}
        />
        <mesh
          name="Node-Mesh_11"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_11'].geometry}
          material={materials.mat12}
        />
        <mesh
          name="Node-Mesh_12"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_12'].geometry}
          material={materials.mat8}
        />
        <mesh
          name="Node-Mesh_13"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_13'].geometry}
          material={materials.mat5}
        />
        <mesh
          name="Node-Mesh_14"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_14'].geometry}
          material={materials.mat17}
        />
        <mesh
          name="Node-Mesh_15"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_15'].geometry}
          material={materials.mat18}
        />
        <mesh
          name="Node-Mesh_16"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_16'].geometry}
          material={materials.mat7}
        />
        <mesh
          name="Node-Mesh_17"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_17'].geometry}
          material={materials.mat10}
        />
        <mesh
          name="Node-Mesh_18"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_18'].geometry}
          material={materials.mat25}
        />
        <mesh
          name="Node-Mesh_19"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_19'].geometry}
          material={materials.mat24}
        />
        <mesh
          name="Node-Mesh_20"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_20'].geometry}
          material={materials.mat13}
        />
        <mesh
          name="Node-Mesh_21"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_21'].geometry}
          material={materials.mat0}
        />
        <mesh
          name="Node-Mesh_22"
          castShadow
          receiveShadow
          geometry={nodes['Node-Mesh_22'].geometry}
          material={materials.mat11}
        />
            {html &&(
      <OverlayItem
  title="About Us"
  description="Learn more about our mission and values."
  bgColor="bg-blue-500"
  linkTo="/about"
  rotation-y={degToRad(20)}
  position-x={1.2}
  position-z={4.2}
  position-y={-0.1}
  className={'transition delay 1000'}
/>
)}
      </group>
    </group>
  </group>
  )
}

useGLTF.preload('/Robo Fun Time - Livestream.glb')
