import React, { useEffect } from 'react'
import './style/Work.css'
import WorkSection from './components/WorkComponant'
import data from './data/projects-data'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

function Work() {
	useEffect(() => {
		if (window.innerWidth > 768) {
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
		}
	}, [])

	return (
		<section className='work-container'>
			<div className="left">
				{
					data.map((project, index) => (
						<WorkSection
							key={index}
							number={index}
							title={project.title}
							stack={project.tag}
							description={project.description}
							websiteUrl={project.websiteUrl}
							githubUrl={project.githubUrl}
							image={project.image}
							tags={project.tags}
							hasGithubLink={project.githubUrl ? true : false}
							hasWebsiteLink={project.websiteUrl ? true : false}
							img={project.image}
						/>
					))
				}
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