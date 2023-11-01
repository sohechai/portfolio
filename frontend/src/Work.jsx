import React from 'react'
import gsap from 'gsap';
import './style/Work.css'
import { useEffect } from 'react';

function Work() {

	// useEffect(() => {
	// 	const cards = document.querySelector(".card-img");
	// 	const imgs = document.querySelectorAll(".card-img");

	// 	const tl = gsap.timeline({ paused: true });

	// 	tl.to(imgs, {
	// 		opacity: 0,
	// 	});
	// 	cards.addEventListener("mouseenter", () => {
	// 		console.log("enter card");
	// 		tl.play();
	// 	});
	// 	cards.addEventListener("mouseout", () => {
	// 		console.log("leave card");
	// 		tl.reverse();
	// 	});
		
	// }, [])
	
	return (
		<section className='work-container' id='work'>
			<h1>PROJECTS</h1>
			<section className="card-grid">
				<div className="card">
					<div className="card-img" style={{ backgroundImage: 'url("/src/images/project-image.png")' }}></div>
					<h2 className="card-title">project (01)</h2>
					<a href="#" className="card-link">see project page</a>
				</div>
				<div className="card">
					<div className="card-img" style={{ backgroundImage: 'url("/src/images/project-image.png")' }}></div>
					<h2 className="card-title">project (02)</h2>
					<a href="#" className="card-link">see project page</a>
				</div>
				<div className="card">
					<div className="card-img" style={{ backgroundImage: 'url("/src/images/project-image.png")' }}></div>
					<h2 className="card-title">project (03)</h2>
					<a href="#" className="card-link">see project page</a>
				</div>
				<div className="card">
					<div className="card-img" style={{ backgroundImage: 'url("/src/images/project-image.png")' }}></div>
					<h2 className="card-title">project (04)</h2>
					<a href="#" className="card-link">see project page</a>
				</div>
				<div className="card">
					<div className="card-img" style={{ backgroundImage: 'url("/src/images/project-image.png")' }}></div>
					<h2 className="card-title">project (05)</h2>
					<a href="#" className="card-link">see project page</a>
				</div>
				<div className="card">
					<div className="card-img" style={{ backgroundImage: 'url("/src/images/project-image.png")' }}></div>
					<h2 className="card-title">project (06)</h2>
					<a href="#" className="card-link">see project page</a>
				</div>
			</section>
		</section>
	)
}

export default Work