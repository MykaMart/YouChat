import React, { Component } from 'react';
import "./Login.css"
import logo from "../images/ycLogo.png"

class Login extends Component {

	constructor() {
		super();
		this.state = {
			clicked: false,
			username: ""
		}
	}

	click = (e) => {
		const state = this.state
		state.clicked = true
		this.setState(state)
	}

	handleUsername = (e) => {
		const state = this.state
		state[e.target.name] = e.currentTarget.value
		this.setState(state)
	}

	logIn = (e) => {
		e.preventDefault()
		this.props.userLogin(this.state.username)
		this.state.username = ""
	}

	render(){
		return(
			<div>
			{this.state.clicked === false ? 
			<div>
				<img src={logo} alt="YouChat"/>
				<button onClick={this.click}>Log In</button>
			</div>
			:
			<div>
				<img src={logo} alt="YouChat"/>
				<form>
					<input type="text" name="username" value={this.state.userBox} onChange={this.handleUsername}/>
					<button onClick={this.logIn}>Submit</button>
				</form>
			</div>
			}
			</div>
		)
	}
}

export default Login;