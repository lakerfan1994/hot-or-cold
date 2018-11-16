import React from 'react';

import Guesser from './guesser';
import Output from './output';

import './board.css';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state= {guessNumber: 20, recentGuess: -1, prevGuess: -1, guessHistory: [], heat: 'You are getting hotter'}
	}


   changeCurrentNum(recentGuess){
   	this.setState({prevGuess: this.state.recentGuess});
   	this.setState({recentGuess});
   	let newArray= this.state.guessHistory.push(recentGuess)
   	this.setState({newArray});
   }

   getHeat(){
   	let recent = Math.abs(this.state.guessNumber - this.state.recentGuess);
   	let prev = Math.abs(this.state.guessNumber - this.state.prevGuess);
   	console.log(this.state.recentGuess);
   	console.log(this.state.prevGuess);
   	console.log(recent);
   	console.log(prev);

   	if(prev >= recent){
   		return 'Hot! you are getting hotter'
   		//this.setState({heat: 'Wew lad, you are getting hotter'});
   	}
   	else if(recent > prev){
   		return 'Brr, you are getting colder'
   		//this.setState({heat: 'Brr, you are getting colder'});
   	}
   }

	render() {
		if(this.state.recentGuess == this.state.guessNumber) {
			return(
				<h1>Congratulations you win</h1>
				)
		}

		return(
			<div>
			<form className='main-board'>
				<h2>Make your Guess</h2>
				<Guesser onSend={num => this.changeCurrentNum(num)} type='number' min='1' max='100' buttonType='submit' />
				<Output number={this.state.recentGuess} heat={this.getHeat()} prevGuess={this.state.guessHistory}/>
			</form>
			</div>

			)
	}


	

}