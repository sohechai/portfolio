import React, { useState } from 'react'
import './style/Contact.css'
import { useEffect } from 'react'

function Contact() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


	// useEffect(() => {
	// const svg = document.querySelector("#svg");
	// const mouse = svg.createSVGPoint();

	// const outerCircle = createEye("#outer-circle");

	// let requestId = null;

	// window.addEventListener("mousemove", onmousemove);

	// function onFrame() {
	// 	let point = mouse.matrixTransform(svg, getScreenCTM().inverse());
	// }
	// }, [])

	useEffect(() => {
		function handleMouseMove(e) {
			const svg = document.querySelector('.svg');
			const svgRect = svg.getBoundingClientRect();
			const mouseX = e.clientX - svgRect.left;
			const mouseY = e.clientY - svgRect.top;

			const circleCenterX = svgRect.width / 2;
			const circleCenterY = svgRect.height / 2;
			const circleRadius = svgRect.width / 2 - 25;

			const angle = Math.atan2(mouseY - circleCenterY, mouseX - circleCenterX);
			const x = circleCenterX + (circleRadius * Math.cos(angle));
			const y = circleCenterY + (circleRadius * Math.sin(angle));

			setMousePosition({ x, y });
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<section className="contact" id='contact'>
			{/* <div className="contact-header">
				<h1>
					LETS WORK TOGETHER
				</h1>
			</div> */}
			<div className="contact-container">
				<div className='text-container'>
					<a href="mailto:sofia.hechaichi@gmail.com?subject=Let's work together !" className='text'>MAIL</a>
				</div>
				<div className='text-container'>
					<a href="https://www.linkedin.com/in/sofia-hechaichi/" target="_blank" className='text'>LINKEDIN</a>
					<div className="svg-container">
						<svg className="svg">
							<g id="round">
								<circle
									className="outer-circle"
									cx="50%"
									cy="50%"
									r="50"
									stroke="#E8EDDF"
									strokeWidth="2"
									fill="transparent"
								/>
								<circle
									className="inner-circle"
									cx={`${mousePosition.x}px`}
									cy={`${mousePosition.y}px`}
									r="14"
									fill="#E8EDDF"
								/>
							</g>
						</svg>
					</div>
					<a href="" className='text'>RESUME</a>

				</div>
				<div className='text-container'>
					<a href="https://github.com/sohechai" target="_blank" className='text'>GITHUB</a>
				</div>
				<div className="footer">
					<p>Sofia Hechaïchi © 2023</p>
				</div>
			</div>

		</section>
	)
}

export default Contact