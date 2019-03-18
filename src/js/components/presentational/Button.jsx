import React, { Component } from "react";
import ReactDOM from "react-dom";
class Button extends Component {
	handleClick(){
		console.log('Clicked!');
	}
	render() {
		return (
			<button onClick={this.handleClick}>{this.props.name}</button>
		);
	}
}
export default Button;