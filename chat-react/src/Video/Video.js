import React, { Component } from 'react';

class Video extends Component {

	render () {
		console.log(this.props.chatRoom)
		const videoLink = "https://www.youtube.com/embed/" + this.props.video[0].id
		const title = this.props.video[0].title
		return (
			<div>
				<div id="video">
					<h2>{title}</h2>
					<iframe width="700" height="432" src={videoLink} frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		)
	}
}

export default Video;

