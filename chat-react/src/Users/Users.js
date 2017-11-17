import React, { Component } from 'react';

class Users extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: props.user
		}
	}

	render () {

		const users = this.props.users[0].roomData.users.map( (user, i) => {
			return <li key={i}>{this.state.username}</li>
		})

		return(
			<div id="users">
				<h3>Users</h3>
				<ul>
					{users}
				</ul>
			</div>
		)
	}
}

export default Users