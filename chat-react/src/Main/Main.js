import React, { Component } from 'react';
import "./Main.css"
import Search from "../Search/Search"
import Results from "../Results/Results"
import Rooms from "../Rooms/Rooms"
import CreateRoom from "../CreateRoom/CreateRoom"
import Video from "../Video/Video"
import Users from "../Users/Users"
import Chat from "../Chat/Chat"


class Main extends Component {

	constructor (props) {
		super(props);
		this.state = {
			inRoom: props.inRoom
		}
	}

	render() {
		console.log(this.props.chatRoom)
		return(
			<div>
				<div className="modal">
					<CreateRoom rooms={this.props.rooms} showCreate={this.props.showCreate} videoData={this.props.videoData} createRoom={this.props.createRoom}/>
				</div>
				<div className="main">

					{!this.props.inRoom ? 
					<div>
					<h3>Main</h3>
					<Search search={this.props.search}/>
					<Results results={this.props.results} rooms={this.props.rooms}  videoData={this.props.videoData} flipModal={this.props.flip} roomList={this.props.roomList}/>
					<Rooms currentRooms={this.props.currentRooms} enterRoom={this.props.enterRoom}/>
					</div>
					:
					<div>
					<h3>Chatroom</h3>
					<Video video={this.props.chatRoom}/>
					<Users users={this.props.chatRoom} user={this.props.user}/>
					<Chat  chat={this.props.chatRoom} send={this.props.sendMessage} user={this.props.user}/>
					</div>
					}


				</div>
			</div>
		)
	}

}

export default Main;