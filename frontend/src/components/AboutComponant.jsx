import React from 'react';
import iconArrow from '../images/arrow.png';

const AboutSection = ({ number, title, description, tag }) => {
	const splitTag = tag.split(" ");
	console.log(splitTag);
	return (
		<div className='about-left-component'>
			<h2 className='about-number'>({number}) {title}</h2>
			<p className='project-description'>{description}</p>
			<div className="button-container">
				<a className='project-button'><img src={iconArrow} alt="Go to project" />Visit website</a>
				<a className='project-button'><img src={iconArrow} alt="Github" />Github</a>
			</div>
			<div className='tag'>
				{
					splitTag.map((item) =>
						<p key={item}>{item}</p>)
				}
			</div>
		</div>
	);
};

export default AboutSection;