import React, { Component } from 'react';
import "./Main.css"
import Search from "../Search/Search"
import Results from "../Results/Results"
import Rooms from "../Rooms/Rooms"

class Main extends Component {

	render() {
		
		return(
			<div>
				<h3>Main</h3>
				<Search search={this.props.search}/>
				<Results results={this.props.results}/>
				<Rooms rooms={this.props.rooms}/>
			</div>
		)
	}
}

export default Main;