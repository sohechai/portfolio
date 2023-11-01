import React from 'react'
import Hero from './hero';
import Skills from './skills';
import Work from './work';
import Contact from './contact';
import { useEffect } from 'react';
import './style/App.css'
import { gsap } from 'gsap'
import Presentation from './presentation';

function App() {

	useEffect(() => {
		const opening = gsap.utils.toArray('.opening');
		const tl = gsap.timeline();

		let innerCursor = document.querySelector('.inner-cursor');
		let outerCursor = document.querySelector('.outer-cursor');

		function moveCursor(e) {
			let x = e.clientX;
			let y = e.clientY;

			innerCursor.style.left = `${x}px`;
			innerCursor.style.top = `${y}px`;
			outerCursor.style.left = `${x}px`;
			outerCursor.style.top = `${y}px`;
		}

		const handleCursorHover = () => {
			innerCursor.classList.add("grow");
			outerCursor.classList.add("grow");
		};

		const handleCursorLeave = () => {
			innerCursor.classList.remove("grow");
			outerCursor.classList.remove("grow");
		};
		const handleCursorHoverText = () => {
			innerCursor.classList.add("highlight");
			outerCursor.classList.add("highlight");
		};

		const handleCursorLeaveText = () => {
			innerCursor.classList.remove("highlight");
			outerCursor.classList.remove("highlight");
		};

		document.addEventListener('mousemove', moveCursor);

		const links = Array.from(document.querySelectorAll("a"));
		const focus = document.getElementById("highlight");

		links.forEach(link => {
			link.addEventListener('mouseover', handleCursorHover);
			link.addEventListener('mouseleave', handleCursorLeave);
		});

		if (focus) {
			focus.addEventListener('mouseover', handleCursorHoverText);
			focus.addEventListener('mouseleave', handleCursorLeaveText);
		};

		tl.to(opening, {
			height: 0,
			duration: 1,
		});

		// Fonction de nettoyage pour supprimer les écouteurs d'événements
		return () => {
			document.removeEventListener('mousemove', moveCursor);
			links.forEach(link => {
				link.removeEventListener('mouseover', handleCursorHover);
				link.removeEventListener('mouseleave', handleCursorLeave);
			});
			if (focus) {
				focus.removeEventListener('mouseover', handleCursorHover);
				focus.removeEventListener('mouseleave', handleCursorLeave);
			}
		};
	}, []);


	return (
		<div id="parent-container" className='container'>
			{/* <div className="navbar"> */}
				<div className="logo">
					<h2>portfolio.</h2>
				</div>
				<h2>
					<div className="menus">
						<a href='#home' id='mix'>home</a>
						<a href='#work' id='mix'>work</a>
						<a href='#skills' id='mix'>skills</a>
						<a href='#contact' id='mix'>contact</a>
					</div >
				</h2 >
			{/* </div > */}
			<div className="inner-cursor"></div>
			<div className="outer-cursor"></div>
			<div className="opening" />
			<Hero />
			<Presentation />
			<Work />
			<Skills />
			<Contact />
		</div >
	)
}

export default App
