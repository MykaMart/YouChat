import React, { Component } from 'react';
import "./CreateRoom.css"

class CreateRoom extends Component {

	constructor () {
		super();

		this.state = {
			roomName: "",
			private: false
		}
	}
	roomCreate = (e) => {
		e.preventDefault()
		this.props.createRoom(this.state.roomName, this.state.private, this.props.videoData[0])
	}

	handleRoomCreate = (e) => {
		const state = this.state
		if  (e.target.name === "private") {
			if (state.private === false) {
				state[e.target.name] = true
			} else {
				state[e.target.name] = false
			}
		} else {
			state[e.target.name] = e.currentTarget.value
		}
		this.setState(state)

	}
	render(){
		const editClass = this.props.showCreate ? "Create" : "Create-Hidden";
		return(
			<div className={editClass}>
				<h3>Create Room</h3>
				<form>
					<h4>Room Name:<input name="roomName" type="text" onChange={this.handleRoomCreate}/></h4>
					<h4>Private:<input name="private" type="checkbox" onChange={this.handleRoomCreate}/></h4>
					<button onClick={this.roomCreate}>CreateRoom</button>
				</form>
			</div>
		)
	}

}

export default CreateRoom;