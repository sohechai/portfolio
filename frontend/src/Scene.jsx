import { Canvas } from '@react-three/fiber'
import React from 'react'
import Torus from './Torus'
import { Environment } from '@react-three/drei'

export default function Scene() {
  return (
	<Canvas style={{backgroundColor: "#E8EDDF"}}>
		{/* <directionalLight intensity={10} position={[0, 3, 2]} /> */}
		<Environment preset='warehouse' />
		<Torus />
	</Canvas>
  )
}
