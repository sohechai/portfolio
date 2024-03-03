'use client'
import React, { useEffect, useRef } from 'react'
import './style/About.css'
import datas from './data/about-data.jsx'
import Cards from './components/Cards'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useScroll } from 'framer-motion'
import AboutBottom from './components/AboutBottom'
import AnimatedLetters from './components/AnimatedLetters'

function About() {
	const sectionRef = useRef(null);
	const sectionContainerRef = useRef(null);
	const sectionColsRef = useRef([]);

	const isDesktop = window.matchMedia('(min-width: 768px)');

	const init = () => {
		if (isDesktop.matches) addEventListener();
	}

	const addEventListener = () => {
		const sectionCols = sectionColsRef.current;
		if (sectionCols[0]) sectionCols[0].classList.add('active');

		sectionCols.forEach((col, index) => {
			col.addEventListener('mouseenter', () => {
				sectionCols.forEach(col => col.classList.remove('active'));
				col.classList.add('active');
			})

		});
	}

	useEffect(() => {
		init();
	}, [])

	return (
		<section className='about-container' id='about'>
			<div className="tab">
				<div className="about-header">
					<AnimatedLetters targetDiv={<h1 className="r-text">TIMELINE</h1>} />
				</div>
				<div className="tab-content">
					{
						datas.map((data, index) => {
							return <div className="section-col" key={index} ref={el => sectionColsRef.current[index] = el}>
								<div className="section-col-year">
									<h1>{data.year}</h1>
								</div>
								<div className="section-col-title"  style = {{ color : data.color }}>
									<h2>{data.title}</h2>
								</div>
								<div className="section-col-description" >
									<p>{data.description}</p>
								</div>
							</div>
						})
					}


				</div>
			</div>

		</section>
	)
}

export default About