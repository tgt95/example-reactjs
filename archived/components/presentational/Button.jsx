import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Button extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		console.log('Clicked!');
	}
	render() {
		return (
			<button 
				onClick={this.handleClick} 
				className={'btn ' + this.props.className}
				disabled={this.props.disabled}
				readOnly={this.props.readOnly}
			>{this.props.name}</button>
		);
	}
}
export default Button;