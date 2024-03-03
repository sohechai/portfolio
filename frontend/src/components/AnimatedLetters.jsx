import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function AnimatedLetters({ targetDiv }) {
	const divRef = useRef(null);

	useEffect(() => {
		const title = divRef.current;
		const lettersAndSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

		const wordContainer = [];
		title.innerText.split('').forEach(word => {
			let span = document.createElement('span');
			span.classList.add('object');
			span.textContent = word;
			wordContainer.push(span);
		})

		title.innerHTML = '';
		wordContainer.forEach(e => {
			title.appendChild(e)
		})

		const letters = title.querySelectorAll('span.object');

		letters.forEach((char, index) => {
			let initialHTML = char.innerHTML;
			gsap.fromTo(char, {
				// opacity: 0
			},
				{
					duration: 0.03,
					innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
					repeat: 1,
					repeatRefresh: true,
					opacity: 1,
					repeatDelay: 0.03,
					delay: (index + 1) * 0.22,
					onComplete: () => gsap.set(char, { innerHTML: initialHTML, delay: 0.03 }),
					scrollTrigger: {
						trigger: title,
						start: 'top bottom',
						end: 'bottom center',
						toggleActions: "play resume resume reset",
						onEnter: () => gsap.set(char, { opacity: 0 })
					}
				});
		});
	}, []);

	return <div ref={divRef} className="r-text">{targetDiv}</div>;
}

export default AnimatedLetters;
