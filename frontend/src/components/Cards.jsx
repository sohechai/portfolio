import React from 'react';
import '../style/Work.css'

function Cards({ imageUrl, title }) {
	return (
		<div className="card">
			<div className="card-img" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
			<h2 className="card-title">{title}</h2>
			<a href="#" className="card-link">see project page</a>
		</div>
	);
}

export default Cards;
