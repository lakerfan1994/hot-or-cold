import React from 'react'

import './guesser.css'

export default class Guesser extends React.Component {
	constructor(props) {
		super(props);
		this.state={emptyString: ''};
	}

	onSubmit(event) {
		event.preventDefault();
		const num = this.numInput.value.trim();
		this.props.onSend(num);



	}



	render() {
		return(
				<div>	
				<input ref={input => this.numInput = input} id={this.props.id} type={this.props.type} min={this.props.min} max={this.props.max} />
				<button onClick={e => this.onSubmit(e)} type={this.props.buttonType}>{this.props.buttonType}</button>
				</div>
			)
	}
}