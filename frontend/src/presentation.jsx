import React, { useEffect } from 'react'
import './style/Presentation.css'
import './style/App.css'
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
		slideInTop(".parallax-text");
	}, [])

	return (
		<section className='presentation-container' id='highlight'>
			<div className='presentation-text' id='highlight'>
				<h1 className='parallax-text' id='highlight'>
					I specialize in crafting innovative solutions,
					blending creativity with code to bring digital visions
					to life.
					Let's embark on a journey together to create something amazing.
				</h1>
			</div>
		</section>
	)
}

export default Presentation