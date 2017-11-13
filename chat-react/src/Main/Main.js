import React, { Component } from 'react';
import "./Main.css"
import Search from "../Search/Search"
import Results from "../Results/Results"

class Main extends Component {

	render() {
		
		return(
			<div>
				<h3>Main</h3>
				<Search search={this.props.search}/>
				<Results results={this.props.results}/>
			</div>
		)
	}
}

export default Main;