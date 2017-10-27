import React from 'react';
import './card.css';


export default function Card () {
	const text = "Blastoise";
	const texth2 = "Pikachu"
	return (
		<div className = "card">
			<h3>{texth2}</h3>
				{text}
		</div>
	)
}