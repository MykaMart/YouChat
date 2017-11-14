import React, { Component } from 'react';
import "./Results.css"
class Results extends Component {

	constructor () {
		super();
		this.state = {
			results: [],
		}
	}

	// listRooms = (e) => {
	// 	e.preventDefault()
	// 	const state = this.state
	// 	this.props.rooms.push(this.state.results[e.target.id].title)
	// 	this.setState(state)
	// }
	showCreate = (e) => {
		e.preventDefault()
		const state = this.state
		this.props.videoData[0]= this.state.results[e.target.id]
		console.log(typeof this.props.showCreate)
		this.props.flipModal(true)
		this.setState(state)
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
								<button id={i} onClick={this.showCreate}>Create New Room</button>
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