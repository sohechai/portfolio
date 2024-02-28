'use client'
import React, { useEffect, useRef } from 'react'
import './style/About.css'
import datas from './data/cards-tl'
import Cards from './components/Cards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useScroll } from 'framer-motion'
import AboutBottom from './components/AboutBottom'

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

	return (
		<section className='about-container' id='about' ref={containerRef}>
			<div className="about-header">
				<h1>ABOUT</h1>
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