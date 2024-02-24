import { Icosahedron, MeshTransmissionMaterial, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useControls } from 'leva'
import { IcosahedronGeometry } from 'three';

export default function Torus() {
	const torusRef = useRef();
	const { viewport } = useThree();

	const materialProps = useControls({
		thickness: { value: 0.5, min: 0, max: 3, step: 0.05 },
		roughness: { value: 0.36, min: 0, max: 1, step: 0.01 },
		transmission: { value: 1, min: 0, max: 1, step: 0.01},
		ior: { value: 0.85, min: 0, max: 3, step: 0.01 },
		chromaticAberration: { value: 1, min: 0, max: 1 },
		backside: {value: true}
	})

	useFrame(() => {
		torusRef.current.rotation.x += 0.01;
		torusRef.current.rotation.y += 0.01;
	});
	return (
		<group scale={viewport.width / 12}>
			{/* <Text fontSize={1.5} position={[0, 2, -1]}>
				Welcome
			</Text> */}
			<Text fontSize={1.5} position={[0, 0, -1]}>
				portfolio 2024.
			</Text>
			<mesh ref={torusRef} >
				<MeshTransmissionMaterial {...materialProps} />
				<icosahedronGeometry />
				<meshStandardMaterial />
			</mesh>
		</group>
	)
}
