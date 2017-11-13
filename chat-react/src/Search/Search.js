import React, { Component } from 'react';
import "./Search.css"

class Search extends Component {

	constructor() {
		super();

		this.state = {
			searchRequest: ""
		}
	}

	search = (e) => {
		e.preventDefault()
		this.props.search(this.state.searchRequest)
	}

	handleSearch = (e) => {
		const state = this.state
		state[e.target.name] = e.currentTarget.value
		this.setState(state)
	}

	render() {
		return (
			<div>
				<form>
					<input name="searchRequest" onChange={this.handleSearch}/>
					<button onClick={this.search}>Search</button>
				</form>
			</div>
		)
	}
}

export default Search