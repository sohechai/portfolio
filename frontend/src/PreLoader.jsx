import React, { useEffect, useRef, useState } from 'react';
import './style/PreLoader.css';

const words = ["Hello,", "welcome", "to", "my", "portfolio", "👋"];

const PreLoader = () => {
	const loadingRef = useRef(null);
	const [index, setIndex] = useState(0);
	const pathRef = useRef(null);
	const initialCurve = 100;
	const duration = 600;
	let start;

	useEffect(() => {
		setPath(initialCurve);
		setTimeout(() => {
			requestAnimationFrame(animate);
		}, 3000);
	}, []);

	useEffect(() => {
		if (index === words.length - 1) return;
		setTimeout(() => {
			setIndex(index + 1);
		}, index === 0 ? 1000 : 150);
	}, [index]);

	const setPath = (curve) => {
		const width = window.innerWidth;
		const height = loaderHeight();
		pathRef.current.setAttributeNS(
			null,
			"d",
			`M0 0
			L${width} 0
			L${width} ${height}
			Q${width / 2} ${height - curve} 0 ${height}
			L0 0`
		);
	};

	const loaderHeight = () => {
		const loaderBounds = loadingRef.current.getBoundingClientRect();
		return loaderBounds.height;
	};

	const animate = (timestamp) => {
		if (start === undefined) {
			start = timestamp;
		}
		const elapsed = timestamp - start;
		loadingRef.current.style.top =
			easeOutQuad(elapsed, 0, -loaderHeight(), duration) + "px";
		if (elapsed < duration) {
			requestAnimationFrame(animate);
		}
	};

	const easeOutQuad = (time, start, end, duration) => {
		return -end * (time /= duration) * (time - 2) + start;
	};

	return (
		<div ref={loadingRef} className="introduction">
			<svg>
				<path ref={pathRef}></path>
				<text x="50%" y="40%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="42">{words[index]}</text>
			</svg>
		</div>
	);
};

export default PreLoader;
