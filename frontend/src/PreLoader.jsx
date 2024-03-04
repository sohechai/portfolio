import React, { useEffect, useRef, useState } from 'react';
import './style/PreLoader.css';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const words = ["Hello,", "welcome", "to", "my", "portfolio"]
const LoadingPage = () => {
	const loadingRef = useRef(null);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index == words.length - 1) return;
		setTimeout(() => {
			setIndex(index + 1)
		}, index == 0 ? 1000 : 150)
	}, [index])

	return (
		<motion.div
			animate={{
				x: 0,
				y: '-100%',
			}}
			transition={{
				duration: 1,
				delay: 3 
			}}
			ref={loadingRef}
			className='introduction'>
			<p>{words[index]}</p>
		</motion.div>
	);
};

export default LoadingPage;
