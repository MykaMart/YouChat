import React, { Component } from 'react';
import "./Results.css"
class Results extends Component {

	constructor () {
		super();
		this.state = {
			results: []
		}
	}

	listRooms = (e) => {
		e.preventDefault()
		const state = this.state
		this.props.rooms.push(this.state.results[e.target.id].title)
		this.setState(state)
	}
	createRoom = (e) => {
		e.preventDefault()
		console.log(this.state.results[e.target.id])
		
	}

	render () {
		const results = this.props.results.map((result, i) => {
			console.log(i)
			this.state.results.push(result)
			return <div key={i} onClick={this.listRooms}>
							<img src={result.thumbnail} alt={result.title}/><h3>{result.title}</h3>
							<h4>{result.channel}</h4>
							<h4>{result.description}</h4>
							<form>
								<input className="create" name={i}/>
								<button id={i} onClick={this.createRoom}>Create New Room</button>
							</form>
				   </div>
			})
		return (
			
			<div>
				{results}
			</div>
		)
	}

}

export default Results;