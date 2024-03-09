import React, { useEffect, useState } from 'react';
import iconArrow from '../images/arrow.png';

const WorkSection = ({ number, title, description, stack, websiteUrl, githubUrl, tags, hasGithubLink, hasWebsiteLink, img, video }) => {
	const splitstack = stack.split(",");
	const splitTags = tags.split(",");

	number < 10 ? number = '0' + number : number = number;

	return (
		<div className='work-component'>
			<div className="work-border">
				<div className='work-title-header'>
					<h2 className='work-number'>({number}) {title}</h2>
					<p className='project-description'>{description}</p>
				</div>
				<div className="image">
					{img && <img src={img} alt='' />}
					{
						video &&
						<video autoPlay loop muted>
							<source src={video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					}
				</div>
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
		</div>
	);
};

export default WorkSection;
