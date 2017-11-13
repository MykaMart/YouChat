import React, { Component } from 'react';
import "./Login.css"
import logo from "../images/ycLogo.png"

class Login extends Component {

	render(){
		return(
			<div>
				<img src={logo} alt="YouChat"/>
				<button>Login</button>
			</div>
		)
	}
}

export default Login;