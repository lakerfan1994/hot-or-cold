import React from 'react'

import './output.css'

export default function Output(props){
	let allPrevGuess = props.prevGuess.map((guess, index) => <li key={index}>{guess}</li>) 
	return(
		<div>
		<h4>Guess: {props.number}</h4>
		<h4>{props.heat}</h4>
		<ul>
		</ul>
			{allPrevGuess}
		</div>
		)
}