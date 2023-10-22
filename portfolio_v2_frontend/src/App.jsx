import React from 'react'
import Hero from './Hero';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import { useEffect } from 'react';
import './style/App.css'
import { gsap } from 'gsap'

function App() {

	useEffect(() => {
		const opening = gsap.utils.toArray('.opening');
		const tl = gsap.timeline();

		let innerCursor = document.querySelector('.inner-cursor');
		let outerCursor = document.querySelector('.outer-cursor');

		document.addEventListener('mousemove', moveCursor);

		function moveCursor(e) {
			let x = e.clientX;
			let y = e.clientY;

			innerCursor.style.left = `${x}px`;
			innerCursor.style.top = `${y}px`;
			outerCursor.style.left = `${x}px`;
			outerCursor.style.top = `${y}px`;

		}

		let links = Array.from(document.querySelectorAll("a"));

		links.forEach(link => {
			link.addEventListener('mouseover', () => {
				innerCursor.classList.add("grow")
				outerCursor.classList.add("grow")
			})
			link.addEventListener('mouseleave', () => {
				innerCursor.classList.remove("grow")
				outerCursor.classList.remove("grow")
			})
		})

		tl.to(opening, {
			height: 0,
			duration: 1,
		})
	}, [])

	return (
		<div id="parent-container" className='container'>
			<div className="navbar">
				<div className="logo">
					<h2>sofia hechaichi.</h2>
				</div>
				<h2>
					<div className="menus">
						<ul>
							<li><a href='#home'>home</a></li>
							<li><a href='#work'>work</a></li>
							<li><a href='#skills'>skills</a></li>
							<li><a href='#contact'>contact</a></li>
						</ul>
					</div>
				</h2>
			</div>
			<div className="inner-cursor"></div>
			<div className="outer-cursor"></div>
			<div className="opening" />
			<Hero />
			<Work />
			<Skills />
			<Contact />
		</div>
	)
}

export default App
