import React, { useEffect, useState } from 'react';
import iconArrow from '../images/arrow.png';
const WorkSection = ({ number, title, description, stack, websiteUrl, githubUrl, tags, hasGithubLink, hasWebsiteLink, img }) => {
	const splitstack = stack.split(" ");
	const splitTags = tags.split(",");
	const [size, setSize] = useState(false);

	number < 10 ? number = '0' + number : number = number;

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 1300) {
				setSize(true);
			} else {
				setSize(false);
			}
		});
	}, []);
	return (
		<div className='work-left-component'>
			<h2 className='work-number'>({number}) {title}</h2>
			<p className='project-description'>{description}</p>
			{
				size &&
				<div className="image">
					<img src={img} alt='' />
				</div>
			}
			<div className="button-container">
				{
					hasWebsiteLink &&
					<a href={websiteUrl} className='project-button' target="_blank" rel="noopener noreferrer">Visit website<img src={iconArrow} alt="Go to project" /></a>
				}
				{
					hasGithubLink &&
					<a href={githubUrl} className='project-button' target="_blank" rel="noopener noreferrer">Github<img src={iconArrow} alt="Github" /></a>
				}
			</div>
			<div className='tag'>
				{
					splitTags.map((item, index) =>
						<p key={index}>{item}</p>)
				}
			</div>
			<div className='tag'>
				{
					splitstack.map((item, index) =>
						<p key={index}>{item}</p>)
				}
			</div>
		</div>
	);
};

export default WorkSection;
