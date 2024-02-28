import React from 'react'

function Cards({ year, title}) {
  return (
	<div className='cards-year'>
		<h1>{year}</h1>
	</div>
  )
}

export default Cards
// import React from 'react';
// import '../style/About.css'
// import { useTransform, motion } from 'framer-motion';

// const Cards = ({ year, index, title, description, color, progress, range, scalenb }) => {
// 	const scale = useTransform(progress, range, [1, scalenb]);

// 	return (
// 		<div className="card-content" >
// 			<motion.div
// 				className="card"
// 				style={{ backgroundColor: color, scale, top: `calc(-10% + ${index * 25}px` }}
// 			>
// 				<div className="card-year" >
// 					{year}
// 				</div>
// 				<div className="card-title">
// 					{title}
// 				</div>
// 				<div className="card-description">
// 					{description}
// 				</div>
// 			</motion.div>
// 		</div>
// 	);
// }

// export default Cards;
