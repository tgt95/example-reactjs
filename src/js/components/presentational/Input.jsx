import React, { Component } from "react";
import ReactDOM from "react-dom";
class Input extends Component {
	handleChange(event){
		console.log(event.target.value);
	}
	render() {
		return (
			<input onChange={this.handleChange} placeholder={this.props.placeholder}/>
		);
	}
};
// const Input = ({ label, text, type, id, value, handleChange }) => (
// 	<div className="form-group">
// 		<label htmlFor={label}>{text}</label>
// 		<input
// 			type={type}
// 			className="form-control"
// 			id={id}
// 			value={value}
// 			onChange={handleChange}
// 			required
// 		/>
// 	</div>
// );
// Input.propTypes = {
// 	label: PropTypes.string.isRequired,
// 	text: PropTypes.string.isRequired,
// 	type: PropTypes.string.isRequired,
// 	id: PropTypes.string.isRequired,
// 	value: PropTypes.string.isRequired,
// 	handleChange: PropTypes.func.isRequired
// };
export default Input;