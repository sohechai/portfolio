import React, { useEffect, useRef, useState } from 'react'
import './style/Skills.css'
import AnimatedLetters from './components/AnimatedLetters'

function Skills() {


	return (
		<section className='skills' id='skills'>
			<div className="skills-container">
				<div className="skills-header">
					<AnimatedLetters targetDiv={<h1>SKILLS</h1>} />
				</div>
				<div className="row" >
					<div className="item-menu">
						<span className='numerotation'>(01)</span>PROGRAMMING LANGUAGES
					</div>
					<div className='marquee'  >
						<div className="marquee-inner-wrap">
							<div className="marquee-inner-long">
								<span>C/C++</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_02.png')` }} />
								<span>SQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_11.png')` }} />
								<span>JAVASCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_10.png')` }} />
								<span>TYPESCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_05.png')` }} />
							</div>
							<div className="marquee-inner-long">
								<span>C/C++</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_02.png')` }} />
								<span>SQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_11.png')` }} />
								<span>JAVASCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_10.png')` }} />
								<span>TYPESCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_05.png')` }} />
							</div>
						</div>
					</div>
				</div>
				<div className="row" >
					<div className="item-menu">
						<span className='numerotation'>(02)</span>
						FRONTEND
					</div>
					<div className='marquee' >
						<div className="marquee-inner-wrap">
							<div className="marquee-inner">
								<span>HTML</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_08.png')` }} />
								<span>CSS</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_15.png')` }} />
								<span>REACT</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_16.png')` }} />
							</div>
							<div className="marquee-inner">
								<span>HTML</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_08.png')` }} />
								<span>CSS</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_15.png')` }} />
								<span>REACT</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_16.png')` }} />
							</div>
						</div>
					</div>
				</div>
				<div className="row" >
					<div className="item-menu"><span className='numerotation'>(03)</span>BACKEND</div>
					<div className='marquee' >
						<div className="marquee-inner-wrap">
							<div className="marquee-inner">
								<span>NODE.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_04.png')` }} />
								<span>NEST.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_03.png')` }} />
							</div>
							<div className="marquee-inner">
								<span>NODE.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_04.png')` }} />
								<span>NEST.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_03.png')` }} />
							</div>
						</div>
					</div>
				</div>
				<div className="row" >
					<div className="item-menu"><span className='numerotation'>(04)</span>DATABASE</div>
					<div className='marquee' >
						<div className="marquee-inner-wrap">
							<div className="marquee-inner-long">
								<span>MYSQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_09.png')` }} />
								<span>POSTGRESQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_01.png')` }} />
								<span>MONGODB</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_07.png')` }} />
							</div>
							<div className="marquee-inner-long">
								<span>MYSQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_09.png')` }} />
								<span>POSTGRESQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_01.png')` }} />
								<span>MONGODB</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_07.png')` }} />
							</div>
						</div>
					</div>
				</div>
				<div className="row" >
					<div className="item-menu"><span className='numerotation'>(05)</span>DEVELOPMENT TOOLS</div>
					<div className='marquee' >
						<div className="marquee-inner-wrap">
							<div className="marquee-inner-long">
								<span>GITHUB</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_12.png')` }} />
								<span>GITLAB</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_13.png')` }} />
								<span>VSCODE</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_14.png')` }} />
								<span>DOCKER</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_06.png')` }} />
								<span>FIGMA</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_17.png')` }} />
							</div>
							<div className="marquee-inner-long">
								<span>GITHUB</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_12.png')` }} />
								<span>GITLAB</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_13.png')` }} />
								<span>VSCODE</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_14.png')` }} />
								<span>DOCKER</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_06.png')` }} />
								<span>FIGMA</span>
								<div className="marquee-img" style={{ backgroundImage: `url('/src/images/picture_17.png')` }} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom-skills' >
				<span id='contact'></span>
				<AnimatedLetters targetDiv={<h1 id='contact'>LET'S TALK</h1>} />
			</div>
		</section >
	)
}

export default Skills