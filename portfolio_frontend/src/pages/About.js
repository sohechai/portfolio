import React from 'react'
import '../styles/about.scss'
import resume from '../cv/CV_Sofia_Hechaichi.pdf'

function About() {
  return (
	<section className='about'>
		<h1>About me</h1>
		<p>
			Since i remember i have always been with a computer, playing
			video games and doing geek things. But life guided me to the 
			profession of nurse. <br/><br/>
			After 2 years I decided to reorient myself as a developer.
			In 2019, i joined 42 school. This is where it all started.
			I started to love creating with a keyboard, especially website. <br/><br/>
			This is why i am looking for an internship of 4 or 6 months as  
			soon as possible. This will allow me to learn and evolve with the help 
			of senior developper.
		</p>
		<div className='resume'>
			<a href={resume} download="resume_Sofia_Hechaichi">DOWNLOAD MY RESUME</a>
		</div>
	</section>
  )
}

export default About