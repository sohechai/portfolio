'use client'
import React, { useEffect, useRef } from 'react'
import './style/About.css'
import datas from './data/cards-tl'
import Cards from './components/Cards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useScroll } from 'framer-motion'
import AboutBottom from './components/AboutBottom'
import AnimatedLetters from './components/AnimatedLetters'

function About() {
	const containerRef = useRef(null);
	const path = useRef(null);

	// const setPath = (progress) => {
	// 	const path = 
	// }

	// const { scrollY } = useScroll({
	// 	target: containerRef,
	// 	offset: ['start start', 'end end']
	// })

	// useEffect(() => {
	// 	let ctx = gsap.context(() => {
	// 		ScrollTrigger.create({
	// 			trigger: ".about-container",
	// 			start: "top top",
	// 			end: "bottom 1900vh",
	// 			pin: '.about-header'
	// 		})
	// 	})
	// 	return () => ctx.revert();
	// }, [])

	// useEffect(() => {
	// 	const title = document.querySelector('.r-text');
	// 	const tl = gsap.timeline({ repeat: -1 });
	// 	const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

	// 	const wordContainer = [];
	// 	title.innerText.split('').map(word => {
	// 		let span = document.createElement('span');
	// 		span.classList.add('object');
	// 		span.textContent = word;
	// 		wordContainer.push(span);
	// 	})

	// 	title.innerHTML = '';
	// 	wordContainer.forEach(e => {
	// 		title.appendChild(e)
	// 	})

	// 	const letters = title.querySelectorAll('span.object');

	// 	letters.forEach((char, index) => {
	// 		let initialHTML = char.innerHTML;
	// 		gsap.fromTo(char, {
	// 			opacity: 0
	// 		},
	// 			{
	// 				duration: 0.03,
	// 				innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
	// 				repeat: 1,
	// 				repeatRefresh: true,
	// 				opacity: 1,
	// 				repeatDelay: 0.03,
	// 				delay: (index + 1) * 0.18,
	// 				onComplete: () => gsap.set(char, { innerHTML: initialHTML, delay: 0.03 }),
	// 				scrollTrigger: {
	// 					trigger: title,
	// 					start: 'top bottom',
	// 					end: 'bottom center',
	// 					toggleActions: "play resume resume reset",
	// 					onEnter: () => gsap.set(char, { opacity: 0 }),
	// 					markers: true
	// 				}
	// 			});
	// 	});

	// }, []);


	return (
		<section className='about-container' id='about' ref={containerRef}>
			<div className="about-header">
				<AnimatedLetters targetDiv={<h1 className="r-text">ABOUT</h1>} />
				{/* <h1 className="r-text">ABOUT</h1> */}
			</div>
			<div className="about-cards-container">
				<div className="top">
					{
						datas.map((data, index) => {
							return <Cards key={index} year={data.year} />
						})
					}
				</div>
				<div className="line">
					LINE
				</div>

				<div className="bottom">
					{
						datas.map((data, index) => {
							return <AboutBottom key={index} description={data.description} />
						})
					}
				</div>
			</div>
			{/* <div className="about-cards-container">
				{
					datas.map((data, index) => {
						const scale = 1 - ( (datas.length - index) * 0.02);
						return <Cards key={index} index={index} year={data.year} title={data.title} description={data.description} color={data.color} progress={scrollY} range={[index * 0.25, 1]} scalenb={scale}/>
					})
				}
			</div> */}
		</section>
	)
}

export default About