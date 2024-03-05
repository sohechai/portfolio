import React, { useRef, useState } from 'react'
import './style/Contact.css'
import { useEffect } from 'react'
import { motion } from 'framer-motion';
import resume from './data/Sofia_hechaichi.pdf';

function Contact() {
	const [showCopied, setShowCopied] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [copyPosition, setCopyPosition] = useState({ x: 0, y: 0 });
	const [blured, setBlured] = useState(false);
	const timeoutRef = useRef(null);

	const copyMail = (e) => {
		const email = 'sofia.hechaichi@gmail.com';
		navigator.clipboard.writeText(email);
		setShowCopied(true);

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			setShowCopied(false);
		}, 2000);
	}

	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 28
	};

	const variants = {
		fontSize: "16px",
		x: copyPosition.x - 50,
		y: copyPosition.y - 100,
		transition: {
			type: "spring",
			mass: 0.6,
		}
	};

	useEffect(() => {
		function handleMouseMove(e) {
			const svg = document.querySelector('.svg');
			const svgRect = svg.getBoundingClientRect();
			const copyPositionX = e.clientX;
			const copyPositionY = e.clientY;
			const mouseX = e.clientX - svgRect.left;
			const mouseY = e.clientY - svgRect.top;

			const circleCenterX = svgRect.width / 2;
			const circleCenterY = svgRect.height / 2;
			const circleRadius = svgRect.width / 2 - 25;

			const angle = Math.atan2(mouseY - circleCenterY, mouseX - circleCenterX);
			const x = circleCenterX + (circleRadius * Math.cos(angle));
			const y = circleCenterY + (circleRadius * Math.sin(angle));

			setMousePosition({ x, y });
			setCopyPosition({ x: copyPositionX, y: copyPositionY });
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<section className="contact">
			<div className="contact-container">
				<div
					className="copied"
					animate={{ opacity: 1, y: -50 }}
					transition={{ duration: 0.5 }}
				>
					<motion.h1
						animate={variants}
						transition={{
							type: "spring",
							damping: 28,
							delay: 1,
						}}
						style={{
							pointerEvents: 'none',
							opacity: showCopied ? '1' : '0',
						}}
					>
						COPIED
					</motion.h1>
				</div>
				<div className='text-container'>
					<a
						className={`text ${blured ? 'blur' : ''}`}
						onClick={copyMail}
						onMouseEnter={() => setBlured(true)}
						onMouseLeave={() => setBlured(false)}
					>
						MAIL
					</a>
				</div>
				<div className='text-container'>
					<a
						href="https://www.linkedin.com/in/sofia-hechaichi/"
						target="_blank"
						className={`text ${blured ? 'blur' : ''}`}
						onMouseEnter={() => setBlured(true)}
						onMouseLeave={() => setBlured(false)}
					>
						LINKEDIN
					</a>
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
					<a
						href={resume}
						target="_blank"
						className={`text ${blured ? 'blur' : ''}`}
						onMouseEnter={() => setBlured(true)}
						onMouseLeave={() => setBlured(false)}
					>
						RESUME
					</a>
				</div>
				<div className='text-container'>
					<a
						href="https://github.com/sohechai"
						target="_blank"
						className={`text ${blured ? 'blur' : ''}`}
						onMouseEnter={() => setBlured(true)}
						onMouseLeave={() => setBlured(false)}
					>
						GITHUB
					</a>
				</div>
				<div className="footer">
					<p>Sofia Hechaïchi © 2024</p>
				</div>
			</div>
		</section>
	)
}

export default Contact