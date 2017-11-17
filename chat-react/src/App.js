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
      videoData: [],
      currentRooms: [{name: "No Rooms"}],
      chatRoom: "",
      inRoom: false
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
                        id: video.id,
                        title: video.title,
                        name: name,
                        private: priv,
                        users: [],
                        messages: []
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
                        id: video.id,
                        title: video.title,
                        name: name,
                        private: priv,
                        users: [],
                        messages: []
                    }]
        })
    } else {
      state.rooms[index].vRooms.push({
                    id: video.id,
                    title: video.title, 
                    name: name,
                    private: priv,
                    users: [],
                    messages: []
      })
    }
    this.state.showCreate = false
    this.setState(state)
  }

  roomList = (id) => {
    console.log("hitting roomList")
    const state = this.state
    let roomsData = ""
    for (let i = 0; i < state.rooms.length; i++) {
      console.log(state.rooms[i].id)
      if (state.rooms[i].id === id){
        roomsData = state.rooms[i].vRooms
        state.currentRooms = roomsData
        this.setState(state)
        break
      }else {
        state.currentRooms = [{name: "No Rooms"}]
        this.setState(state)
      }
    }
    
  }

  enterRoom = (id, title, name, room) => {
    const state = this.state
    state.chatRoom = [{id: id, title: title, name: name, roomData: room}]
    state.inRoom = true
    this.setState(state)
    console.log("state.chatRoom", this.state.chatRoom)
  }

  sendMessage = (user, message) => {
    const state = this.state
    state.chatRoom[0].roomData.messages.push({user: user, message: message})
    this.setState(state)
  }

  flipModal = (toggle) => {
    const state = this.state
    state.showCreate = toggle
    this.setState(state)

  }

  userLogin = (username) => {
    const state = this.state
    state.username = username
    state.loggedIn = true
    this.setState(state)
  }

  render() {
    console.log(this.state.currentRooms)
    return (
      <div className="App">  
        
        {this.state.loggedIn ? <Main search={this.search} results={this.state.results} rooms={this.state.rooms} showCreate={this.state.showCreate} createRoom={this.createRoom} videoData={this.state.videoData} flip={this.flipModal} roomList={this.roomList} currentRooms={this.state.currentRooms} enterRoom={this.enterRoom} chatRoom={this.state.chatRoom} inRoom={this.state.inRoom} sendMessage={this.sendMessage} user={this.state.username}/> : <Login loggedIn={this.state.loggedIn} userLogin={this.userLogin}/>}

      </div>
    );
  }
}

export default App;
