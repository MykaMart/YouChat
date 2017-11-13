import React, { Component } from 'react';
import './App.css';
import Login from "./Login/Login"
import Main from "./Main/Main"


class App extends Component {

  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: "",
      results: []
    }
  }

  test = () => {

  }

  search = (query) => {
    console.log(query)
    const q = query
    fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+q+"&key="+this.props.API_KEY)
      .then(res => res.json())
      .then(searchResults => {

        const state = this.state;
        state.results = []
        searchResults.items.map((video) => {
          state.results.push({
            id: video.id.videoId,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.high.url,
            channel: video.snippet.channelTitle,
            description: video.snippet.description
          })
        })
        this.setState(state);
      });
  }

  list = (results) => {
    fetch("https://www.googleapis.com/youtube/v3/videos")

  }

  render() {
    return (
      <div className="App">  
        
        {!this.state.loggedIn ? <Main search={this.search} results={this.state.results}/> : <Login loggedIn={this.state.loggedIn}/>}

      </div>
    );
  }
}

export default App;
