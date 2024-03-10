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
						<div className="button-content">
							<a href={websiteUrl} className='project-button' target="_blank" rel="noopener noreferrer">
								Visit website
								<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"></path>
								</svg>
							</a>
						</div>
						// <a href={websiteUrl} className='project-button' target="_blank" rel="noopener noreferrer">VIEW WEBSITE </a>
					}
					{
						hasGithubLink &&
						// <a href={githubUrl} className='project-button' target="_blank" rel="noopener noreferrer">Github<img src={iconArrow} alt="Github" /></a>
						<div className="button-content">
							<a href={githubUrl} className='project-button' target="_blank" rel="noopener noreferrer">
								Github
								<svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.49966 1.01851C8.50988 0.742553 8.29446 0.510563 8.01851 0.500342L3.52159 0.33379C3.24564 0.32357 3.01365 0.538989 3.00343 0.814942C2.99321 1.09089 3.20862 1.32288 3.48458 1.33311L7.48184 1.48115L7.33379 5.47841C7.32357 5.75436 7.53899 5.98635 7.81494 5.99657C8.09089 6.0068 8.32288 5.79138 8.3331 5.51542L8.49966 1.01851ZM1.34023 7.8664L8.34023 1.3664L7.65977 0.633603L0.659774 7.1336L1.34023 7.8664Z"></path>
								</svg>
							</a>
						</div>
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
