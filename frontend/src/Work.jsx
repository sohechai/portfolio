import React, { useEffect } from 'react'
import './style/Work.css'
import WorkSection from './components/WorkComponant'
import picture01 from './images/work-picture01.png'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

function Work() {
	useEffect(() => {
		let ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: ".work-container",
				start: "top top",
				end: "bottom bottom",
				pin: '.right'
			})
			gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

			var images = gsap.utils.toArray('.panel:not(.purple)');

			images.forEach((image, i) => {

				var tl = gsap.timeline({

					scrollTrigger: {
						trigger: ".work-container",
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
		return () => ctx.revert();
	}, [])

	return (
		<section className='work-container' id='work'>
			<div className="left">
				<WorkSection number='01' title='Cub3D' tag='C minilibX' description='Inspired by the game Wolfenstein 3D, Cub3D is a realistic 3D labyrinth using ray-casting.' />
				<WorkSection number='02' title='Transcendance' tag='React NestJS TypeScript' description='Full-stack Pong game website with an integrated text chat feature.' />
				<WorkSection number='03' title='Python Script' tag='Python' description='Crafted Python scripts to boost my productivity at work.' />
				<WorkSection number='04' title='Portfolio' tag='reactJS html css' description='My very first Portfolio. We all start somewhere !' />
			</div>
			<div className="right">
				<div className="work-right-component">
					<div className="panel blue"></div>
					<div className="panel red"></div>
					<div className="panel orange"></div>
					<div className="panel purple"></div>
				</div>
			</div>
		</section>
	)
}

export default Work