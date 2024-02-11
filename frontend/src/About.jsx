import React, { useEffect } from 'react'
import './style/About.css'
import AboutSection from './components/AboutComponant'
import picture01 from './images/about-picture01.png'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

function Timeline() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: ".about-container",
				start: "top top",
				end: "bottom bottom",
				pin: '.right'
			})
			gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

			var images = gsap.utils.toArray('.panel:not(.purple)');

			images.forEach((image, i) => {

				var tl = gsap.timeline({

					scrollTrigger: {
						trigger: ".about-container",
						start: () => "top -" + (window.innerHeight * (i)),
						end: () => "+=" + window.innerHeight,
						scrub: true,
						toggleActions: "play none reverse none",
						invalidateOnRefresh: true
					}

				})

				tl
					.to(image, { height: 0 })
					;

			});
		})
		console.log('About component mounted')
		return () => ctx.revert();
	}, [])

	return (
		<section className='about-container'>
			<div className="left">
				<AboutSection number='01' title='Cub3D' tag='C minilibX' description='Inspired by the game Wolfenstein 3D, Cub3D is a realistic 3D labyrinth using ray-casting.'/>
				<AboutSection number='02' title='Transcendance' tag='React NestJS TypeScript' description='Full-stack Pong game website with an integrated text chat feature.'/>
				<AboutSection number='03' title='Python Script' tag='Python' description='Crafted Python scripts to boost my productivity at work.'/>
				<AboutSection number='04' title='Portfolio'tag='reactJS html css' description='My very first Portfolio. We all start somewhere !'/>
			</div>
			<div className="right">
				<div className="about-right-component">
					<div class="panel blue"></div>
					<div class="panel red"></div>
					<div class="panel orange"></div>
					<div class="panel purple"></div>
				</div>
			</div>
		</section>
	)
}

export default Timeline