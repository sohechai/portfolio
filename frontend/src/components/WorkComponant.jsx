import React from 'react';
import iconArrow from '../images/arrow.png';

const WorkSection = ({ number, title, description, tag, websiteUrl, githubUrl }) => {
	const splitTag = tag.split(" ");

	number < 10 ? number = '0' + number : number = number;

	return (
		<div className='work-left-component'>
			<h2 className='work-number'>({number}) {title}</h2>
			<p className='project-description'>{description}</p>
			<div className="button-container">
				<a href={websiteUrl} className='project-button' target="_blank" rel="noopener noreferrer">Visit website<img src={iconArrow} alt="Go to project" /></a>
				<a href={githubUrl} className='project-button' target="_blank" rel="noopener noreferrer">Github<img src={iconArrow} alt="Github" /></a>
			</div>
			<div className='tag'>
				{
					splitTag.map((item, index) => // Ajout d'un index en tant que key pour éviter les doublons
						<p key={index}>{item}</p>)
				}
			</div>
		</div>
	);
};

export default WorkSection;
