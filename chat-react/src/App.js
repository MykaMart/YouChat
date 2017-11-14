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
      showCreate: false,
      results: [],
      rooms:[],
      roomCreate: "",
      videoData: []
    }
  }

  search = (query) => {
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
        return console.log("fdfsdfsf")
        })
        this.setState(state);
      });
  }

  createRoom = (name, priv, video) => {
    const state = this.state

    let inArray =  false
    let index = ""

    for (let i=0; i < state.rooms.length; i++) {
      if (state.rooms.length === 0) {
        state.rooms.push({
                    id: video.id,
                    title: video.title,
                    thumbnail: video.thumbnail,
                    channel: video.channel,
                    description: video.description,
                    vRooms:[{
                        name: name,
                        private: priv,
                        users: []
                    }]
        })
      } else {

        if (state.rooms[i].id === video.id) {
           inArray = true
           index = i
        }
      }
    }

    if(!inArray) {
       state.rooms.push({
                    id: video.id,
                    title: video.title,
                    thumbnail: video.thumbnail,
                    channel: video.channel,
                    description: video.description,
                    vRooms:[{
                        name: name,
                        private: priv,
                        users: []
                    }]
        })
    } else {
      state.rooms[index].vRooms.push({
                    name: name,
                    private: priv,
                    users: []
      })
    }

    this.setState(state)
    console.log(this.state.rooms)
  }

  flipModal = (toggle) => {
    const state = this.state
    state.showCreate = toggle
    this.setState(state)
    console.log(this.state.showCreate)
  }

  render() {

    return (
      <div className="App">  
        
        {!this.state.loggedIn ? <Main search={this.search} results={this.state.results} rooms={this.state.rooms} showCreate={this.state.showCreate} createRoom={this.createRoom} videoData={this.state.videoData} flip={this.flipModal}/> : <Login loggedIn={this.state.loggedIn}/>}

      </div>
    );
  }
}

export default App;
