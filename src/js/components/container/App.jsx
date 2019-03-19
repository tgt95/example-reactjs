import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input.jsx';
import Button from '../presentational/Button.jsx';
class App extends Component {
	render() {
		return (
			<div className='container'>
		        <div className='row mt-5'>
		            <div className='col-md-4 mx-auto'>
						<Input type='text' placeholder='Username' className='first-class second-class' label='Username'/>
						<Input type='password' placeholder='Password' className='first-class second-class' label='Password'/>
						<Button className='btn-primary' name='Submit'/>
		            </div>
		        </div>
		    </div>
		);
	}
}
export default App;
const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;