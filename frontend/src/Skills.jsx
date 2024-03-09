import React from 'react'
import './style/Skills.css'
import AnimatedLetters from './components/AnimatedLetters.jsx'
import picture_01 from './images/picture_01.png';
import picture_02 from './images/picture_02.png';
import picture_03 from './images/picture_03.png';
import picture_04 from './images/picture_04.png';
import picture_05 from './images/picture_05.png';
import picture_06 from './images/picture_06.png';
import picture_07 from './images/picture_07.png';
import picture_08 from './images/picture_08.png';
import picture_09 from './images/picture_09.png';
import picture_10 from './images/picture_10.png';
import picture_11 from './images/picture_11.png';
import picture_12 from './images/picture_12.png';
import picture_13 from './images/picture_13.png';
import picture_14 from './images/picture_14.png';
import picture_15 from './images/picture_15.png';
import picture_16 from './images/picture_16.png';
import picture_17 from './images/picture_17.png';

function Skills() {


	return (
		<section className='skills' >
			<div className="skills-container">
				<div className="skills-header" id='skills'>
					{/* <AnimatedLetters targetDiv={<h1>SKILLS</h1>} /> */}
					<h1 className="r-text">SKILLS</h1>
				</div>
				<div className="row" >
					<div className="item-menu">
						<span className='numerotation'>(01)</span>PROGRAMMING LANGUAGES
					</div>
					<div className='marquee' >
						<div className="marquee-inner-wrap">
							<div className="marquee-inner-long">
								<span>C/C++</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_02})` }} />
								<span>SQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_11})` }} />
								<span>JAVASCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_10})` }} />
								<span>TYPESCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_05})` }} />
							</div>
							<div className="marquee-inner-long">
								<span>C/C++</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_02})` }} />
								<span>SQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_11})` }} />
								<span>JAVASCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_10})` }} />
								<span>TYPESCRIPT</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_05})` }} />
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
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_08})` }} />
								<span>CSS</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_15})` }} />
								<span>REACT</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_16})` }} />
							</div>
							<div className="marquee-inner">
								<span>HTML</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_08})` }} />
								<span>CSS</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_15})` }} />
								<span>REACT</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_16})` }} />
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
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_04})` }} />
								<span>NEST.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_03})` }} />
							</div>
							<div className="marquee-inner">
								<span>NODE.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_04})` }} />
								<span>NEST.JS</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_03})` }} />
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
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_09})` }} />
								<span>POSTGRESQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_01})` }} />
								<span>MONGODB</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_07})` }} />
							</div>
							<div className="marquee-inner-long">
								<span>MYSQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_09})` }} />
								<span>POSTGRESQL</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_01})` }} />
								<span>MONGODB</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_07})` }} />
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
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_12})` }} />
								<span>GITLAB</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_13})` }} />
								<span>VSCODE</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_14})` }} />
								<span>DOCKER</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_06})` }} />
								<span>FIGMA</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_17})` }} />
							</div>
							<div className="marquee-inner-long">
								<span>GITHUB</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_12})` }} />
								<span>GITLAB</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_13})` }} />
								<span>VSCODE</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_14})` }} />
								<span>DOCKER</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_06})` }} />
								<span>FIGMA</span>
								<div className="marquee-img" style={{ backgroundImage: `url(${picture_17})` }} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom-skills' >
				<span id='contact'></span>
				{/* <AnimatedLetters targetDiv={<h1 id='contact'>LET'S TALK</h1>} /> */}
				<h1 className="r-text" id='contact'>LET'S TALK</h1>
			</div>
		</section >
	)
}

export default Skills