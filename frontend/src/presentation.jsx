import React, { useEffect, useRef } from 'react'
import './style/Presentation.css'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Presentation() {
	gsap.registerPlugin(ScrollTrigger);

	const textRef = useRef(null);
	useEffect(() => {
		gsap.fromTo(
			textRef.current,
			{ opacity: 1 },
			{
				opacity: 0,
				duration: 1,
				scrollTrigger: {
					trigger: textRef.current,
					start: 'top center',
					end: 'center center',
					scrub: true
				}
			}
		);
	}, []);

	return (
		<section className='presentation-container'>
			<div className="presentation-text" >
				<h1 className='parallax-text' ref={textRef}>
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