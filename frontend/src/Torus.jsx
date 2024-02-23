import React from 'react'
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style/Torus.css'

extend({ OrbitControls: OrbitControls })

function Torus() {
	const three = useThree()
	const bgTexture = useLoader(THREE.TextureLoader, "src/images/texture.jpeg");

	return (
		<>
			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<mesh scale={5}>
				<planeGeometry />
				<meshBasicMaterial map={bgTexture} />
			</mesh>
			<mesh scale={1.5}>
				{/* <orbitControls args={[three.camera, three.gl.domElement]} /> */}
				<sphereGeometry />
				<meshPhysicalMaterial roughness={0} transmission={1} thickness={0.5} />
			</mesh>
		</>
	)
}

export default Torus