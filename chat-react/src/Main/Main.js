import React, { Component } from 'react';
import "./Main.css"
import Search from "../Search/Search"
import Results from "../Results/Results"
import Rooms from "../Rooms/Rooms"
import CreateRoom from "../CreateRoom/CreateRoom"

class Main extends Component {

	render() {
		console.log(this.props.createRoom)
		return(
			<div>
				<div className="modal">
				<CreateRoom rooms={this.props.rooms} showCreate={this.props.showCreate} videoData={this.props.videoData} createRoom={this.props.createRoom}/>
				</div>
				<div className="main">
				<h3>Main</h3>
				<Search search={this.props.search}/>
				<Results results={this.props.results} rooms={this.props.rooms}  videoData={this.props.videoData} flipModal={this.props.flip}/>
				<Rooms rooms={this.props.rooms}/>
				</div>
			</div>
		)
	}
}

export default Main;