import React, { Component } from 'react';

class Results extends Component {

	render () {
		console.log(this.props.results)
		const results = this.props.results.map((result, i) => {
			return <div key={i}>
						<img src={result.thumbnail}/><h3>{result.title}</h3>
						<h4>{result.channel}</h4>
						<h4>{result.description}</h4>
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