import React, { useEffect, useRef } from 'react'
import './style/Timeline.css'
import datas from './data/timeline-data.jsx'
import AnimatedLetters from './components/AnimatedLetters.jsx'

function Timeline() {
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
		<section className='timeline-container' id='Timeline'>
			<div className="tab">
				<div className="timeline-header">
					<AnimatedLetters targetDiv={<h1 className="r-text">TIMELINE</h1>} />
				</div>
				<div className="tab-content">
					{
						datas.map((data, index) => {
							return <div className="section-col" key={index} ref={el => sectionColsRef.current[index] = el}>
								<div className="section-col-year">
									<h1>{data.year}</h1>
								</div>
								<div className="section-col-title" style={{ color: data.color }}>
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

export default Timeline