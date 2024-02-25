import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Input extends Component {
	constructor() {
		super();
		this.state = {
			error: false,
			success: false,
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({ value: event.target.value });
	}
	render() {
		let label;
		this.props.label ? label = <label>{this.props.label}</label> : label;
		return (
			<div className='form-group'>
				{label}
				<input 
					type={this.props.type}
					onChange={this.handleChange} 
					placeholder={this.props.placeholder}
					disabled={this.props.disabled}
					readOnly={this.props.readOnly}
					className={'form-control ' + this.props.className + (this.state.error ? ' is-invalid' : '') + (this.state.success ? ' is-valid' : '')}
				/>
			</div>
		);
	}
};
export default Input;