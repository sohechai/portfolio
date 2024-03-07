import React, { useRef, useState } from 'react'
import Hero from './Hero.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import { useEffect } from 'react';
import './style/App.css'
import { motion, useMotionValue } from "framer-motion"
import { gsap } from 'gsap'
import Presentation from './presentation.jsx';
import Work from './Work.jsx';
import Magnetic from './components/Magnetic.jsx';
import Timeline from './Timeline.jsx';
import AnimatedLetters from './components/AnimatedLetters.jsx';
import LoadingPage from './PreLoader.jsx';

function App() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const skillsRef = useRef(null);
	const contactRef = useRef(null);
	const boundRef = useRef(null);
	const homeRef = useRef(null);
	const squareRef = useRef(null);
	const [hoveredLink, setHoveredLink] = useState(null);
	const [hoveredLogo, setHoveredLogo] = useState(null);
	const [hoveredSquare, setHoveredSquare] = useState(null);
	const cursorSize = hoveredLink ? 84 : 16;

	const mousePosition = {
		x: useMotionValue(0),
		y: useMotionValue(0)
	}

	const scale = {
		x: useMotionValue(1),
		y: useMotionValue(1)
	}

	const mouseMove = (e) => {
		const { clientX, clientY } = e;
		let innerCursor = document.querySelector('.inner-cursor');

		if (hoveredLink) {
			const { left, top, width, height } = hoveredLink.current.getBoundingClientRect();
			const center = { x: left, y: top };
			const distance = { x: clientX - center.x, y: clientY - center.y }

			mousePosition.x.set(center.x + (distance.x * 0.1));
			mousePosition.y.set(center.y + (distance.y * 0.1));
			innerCursor.classList.add("grow");
		}
		else if (hoveredLogo) {
			const { left, top, width, height } = hoveredLogo.current.getBoundingClientRect();
			const center = { x: left + 5, y: top - height / 4 };
			const distance = { x: clientX - center.x, y: clientY - center.y }

			mousePosition.x.set(center.x + (distance.x * 0.1));
			mousePosition.y.set(center.y + (distance.y * 0.1));
			innerCursor.classList.add("logo");
		}
		else if (hoveredSquare) {
			const { left, top, width, height } = hoveredSquare.current.getBoundingClientRect();
			const center = { x: left + width / 8, y: top - height };
			const distance = { x: clientX - center.x, y: clientY - center.y }

			mousePosition.x.set(center.x + (distance.x * 0.1));
			mousePosition.y.set(center.y + (distance.y * 0.1));
			innerCursor.classList.add("square");
		}
		else {
			mousePosition.x.set(e.clientX - cursorSize / 2);
			mousePosition.y.set(e.clientY - cursorSize / 2);
			if (innerCursor.classList.contains("grow")) {
				innerCursor.classList.remove("grow");
			}
			if (innerCursor.classList.contains("logo")) {
				innerCursor.classList.remove("logo");
			}
			if (innerCursor.classList.contains("square")) {
				innerCursor.classList.remove("square");
			}
		}
	};

	const handleMouseOver = (ref) => {
		if (ref === homeRef) {
			setHoveredLogo(ref);
		}
		else if (ref === squareRef) {
			setHoveredSquare(ref);
		}
		else {
			setHoveredLink(ref);
		}
	};

	const handleMouseOut = () => {
		setHoveredLink(null);
	};
	const handleMouseOutLogo = () => {
		setHoveredLogo(null);
	};
	const handleMouseOutSquare = () => {
		setHoveredSquare(null);
	};

	useEffect(() => { }, [hoveredLink]);

	return (
		<div id="parent-container" className='container' onMouseMove={mouseMove}>
			<LoadingPage />
			<div className="header">
				<div className="logo">
					<a href='#home' id='mix' >
						<Magnetic>
							<span className='boundsLogo' ref={homeRef} onMouseOver={() => handleMouseOver(homeRef)} onMouseOut={handleMouseOutLogo}></span>
							portfolio.
						</Magnetic>
					</a>
				</div>
				<div className="square">
					<span className='littleSquare'></span>
				</div>
			</div>
			<div className="menu-container">
				<div className="bounce" ref={boundRef}>
					<div className="menus">

						<a href='#timeline' id='mix'>
							<Magnetic>
								<span className='bounds' ref={aboutRef} onMouseOver={() => handleMouseOver(aboutRef)} onMouseOut={handleMouseOut}></span>
								TIMELINE
							</Magnetic>
						</a>
						<a href='#work' id='mix' >
							<Magnetic>
								<span className='bounds' ref={projectsRef} onMouseOver={() => handleMouseOver(projectsRef)} onMouseOut={handleMouseOut}></span>
								PROJECTS
							</Magnetic>
						</a>
						<a href='#skills' id='mix' >
							<Magnetic>
								<span className='bounds' ref={skillsRef} onMouseOver={() => handleMouseOver(skillsRef)} onMouseOut={handleMouseOut}></span>
								SKILLS
							</Magnetic>
						</a>
						<a href='#contact' id='mix' >
							<Magnetic>
								<span className='bounds' ref={contactRef} onMouseOver={() => handleMouseOver(contactRef)} onMouseOut={handleMouseOut}></span>
								CONTACT
							</Magnetic>
						</a>
					</div >
				</div>
			</div>
			<motion.div
				className='inner-cursor'
				style={{
					x: mousePosition.x,
					y: mousePosition.y,
					scaleX: scale.x,
					scaleY: scale.y,
				}} />
			<Hero />
			<Presentation />
			<Timeline />
			<div className='work-header' id='work'>
				<AnimatedLetters targetDiv={<h1>PROJECTS</h1>} />
			</div>
			<Work />
			<Skills />
			<Contact />
		</div >
	)
}

export default App
