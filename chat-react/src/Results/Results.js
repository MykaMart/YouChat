import React, { Component } from 'react';
import "./Results.css"
class Results extends Component {

	constructor () {
		super();
		this.state = {
			results: [],
		}
	}

	listRooms = (e) => {
		console.log("clicked list Rooms")
		e.preventDefault()
		const state = this.state
		console.log(this.props.currentRooms)
		this.props.roomList(state.results[e.target.id].id)
		this.setState(state)

	}

	showCreate = (e) => {
		console.log("Revealing modal")
		e.preventDefault()
		const state = this.state
		this.props.videoData[0]= this.state.results[e.target.id]
		this.props.flipModal(true)
		this.setState(state)

	}

	render () {
		const results = this.props.results.map((result, i) => {
			this.state.results.push(result)
			return <div key={i} id={i} onClick={this.listRooms}>
							<img src={result.thumbnail} alt={result.title}/><h3>{result.title}</h3>
							<h4>{result.channel}</h4>
							<h4>{result.description}</h4>
							<form>
								<input className="create" name={i}/>
								<button id={i} onClick={this.showCreate}>Create New Room</button>
							</form>
				   </div>
			})
		return (
			
			<div>
				<h3>Results</h3>
				{results}
			</div>
		)
	}

}

export default Results;