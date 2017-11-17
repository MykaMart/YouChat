import React, { Component } from 'react';

class Rooms extends Component{

	enter = (e) => {
		for (let i=0; i < this.props.currentRooms.length; i++) {
			if (this.props.currentRooms[i].name === e.currentTarget.innerText) {
				this.props.enterRoom(this.props.currentRooms[i].id, this.props.currentRooms[i].title, this.props.currentRooms[i].name, {private: this.props.currentRooms[i].private, users:[this.props.currentRooms[i].users], messages:[this.props.currentRooms[i].messages]})
			}
		}
	}

	render() {
			console.log(this.props.currentRooms)
			const rooms = this.props.currentRooms.map((room, i) => {
				return <li key={i} onClick={this.enter}> {room.name} </li>
			})
		return(
			<div>
				<ul>
					{rooms}
				</ul>
			</div>
		)
	}

}

export default Rooms;
