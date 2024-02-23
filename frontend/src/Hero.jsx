import React, { useEffect } from 'react';
import './style/Hero.css'
import gsap from 'gsap';

function Hero() {
	const heroTransition = (elem) => {
		gsap.to(
			elem,
			{
				opacity: 0,
				duration: 3,
				ease: "none",
				scrollTrigger: {
					trigger: elem,
					start: "top top",
					end: "center",
					scrub: true,
				}
			}
		)
	}
	useEffect(() => {
		const titles = gsap.utils.toArray('.title');
		const tl = gsap.timeline({ repeat: -1 });

		titles.forEach(title => {
			const wordContainer = new Array;
			title.innerText.split('').map(word => {
				let span = document.createElement('span');
				span.classList.add('object');
				span.textContent = word;
				if (span.innerText == ' ')
					span.innerHTML = '&nbsp;'
				wordContainer.push(span);
			})

			title.innerHTML = '';
			title.innerText = '';
			wordContainer.forEach(e => {
				title.appendChild(e)
			})

			const letters = title.querySelectorAll('span.object');
			tl
				.from(letters, {
					opacity: 0,
					y: -80,
					rotateX: -90,
					stagger: .01,
				}, "<")
				.to(letters, {
					opacity: 0,
					y: 80,
					rotateX: 90,
					stagger: .01,
				}, "<2")
		});
		heroTransition(".hero-container");
		
	}, []);

	return (
		<section className='hero-container' id='home'>
			<div className="mask">
				<p>fullstack developer <br />+ UI/UX designer</p>
				<h1 className='name' id='highlight'>SOFIA</h1>
			</div>
			<div className="text-wrapper">
				<p className='title'>passionate coder</p>
				<p className='title'>dreamer</p>
				<p className='title'>innovative developer</p>
				<p className='title'>problem-solving engineer</p>
				<p className='title'>creative developer</p>
				<p className='title'>web wizard</p>
				<p className='title'>multi-talent developer</p>
			</div>
		</section>
	);
}

export default Hero;
