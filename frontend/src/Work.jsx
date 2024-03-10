import React, { useEffect, useRef } from 'react'
import './style/Work.css'
import WorkSection from './components/WorkComponant.jsx'
import data from './data/projects-data.jsx'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useScroll, useTransform, motion, easeInOut } from 'framer-motion'
import { cubicBezier, circOut } from "framer-motion"


function Work() {
	const carousselRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: carousselRef,
	});


	let x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

	return (
		<section className='work-container' ref={carousselRef} >
			<motion.div
				style={{ x }}
				transition={{ type: 'spring', mass: 0.5 }}
				className="horizontal-caroussel"
			>
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
							video={project.video}
							tags={project.tags}
							hasGithubLink={project.githubUrl ? true : false}
							hasWebsiteLink={project.websiteUrl ? true : false}
							img={project.image}
						/>
					))
				}
			</motion.div>
		</section>
	)
}

export default Work