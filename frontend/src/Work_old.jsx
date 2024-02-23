import React from 'react'
import './style/Work.css'
import Cards from './components/Cards';

function Work() {

	return (
		<section className='work-container' id='work'>
			<h1>PROJECTS</h1>
			<section className="card-grid">
				<Cards imageUrl="/src/images/project-image.png" title="project (01)" />
				<Cards imageUrl="/src/images/project-image.png" title="project (02)" />
				<Cards imageUrl="/src/images/project-image.png" title="project (03)" />
				<Cards imageUrl="/src/images/project-image.png" title="project (04)" />
				<Cards imageUrl="/src/images/project-image.png" title="project (05)" />
				<Cards imageUrl="/src/images/project-image.png" title="project (06)" />
			</section>
		</section>
	)
}

export default Work