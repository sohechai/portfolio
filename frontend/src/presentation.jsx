import React, { useEffect, useRef } from 'react'
import './style/Presentation.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Presentation() {

	const slideInTop = (elem, delay, duration) => {
		gsap.to(
			elem,
			{
				y: -50,
				duration: 3,
				ease: "none",
				scrollTrigger: {
					trigger: elem,
					start: "top bottom",
					end: "bottom top",
					scrub: true
				}
			}
		)
	}

	useEffect(() => {
		slideInTop("#parallax-text");
	}, [])

	return (
		<section className='presentation-container'>
			<div className='presentation-text' id='highlight'>
				<h1 id='parallax-text'>
					I specialize in crafting innovative web solutions,
					blending creativity with code to bring digital visions
					to life.
					Let's embark on a journey together to create something amazing.
				</h1>
			</div>
		</section>
	)
}

export default Presentation