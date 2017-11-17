import React, { Component } from 'react';

class Chat extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: props.user,
			message: "" 
		}
	}

	handleMessage = (e) => {
		const state = this.state
		state[e.target.name] = e.currentTarget.value
		this.setState(state)
	}

	sendMessage = (e) => {
		e.preventDefault()
		this.props.send(this.state.user, this.state.message)
		this.state.message = ""
	}

	render () {

			const roomName = this.props.chat[0].name
			const messages = this.props.chat[0].roomData.messages.map( (message, i) => {
				return <li key={i}>{message.user}: {message.message}</li>
			})
		return(

			<div id="messages">
				<h3>{roomName}</h3>
				<ul>
					{messages}
				</ul>
				<form>
					<input type="text" name="message" value={this.state.message} onChange={this.handleMessage}/>
					<button onClick={this.sendMessage}>Send</button>
				</form>
			</div>
		)
	}
}

export default Chat






