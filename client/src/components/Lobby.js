import React, { Component } from 'react';

class Lobby extends Component {
  constructor() {
    super();
    this.createGame = this.createGame.bind(this);
    this.lobbySwitch = this.lobbySwitch.bind(this);
  }
  createGame() {
    const socket = new WebSocket('ws://localhost:8080/');
    socket.onopen = () => { 
      console.log('Socket open'); 
      console.log(this.props.username);
      socket.send(JSON.stringify({
        action: 'createGame',
        username: this.props.username
      }));
    }
    // socket.onmessage = msg => cb(msg);
    socket.onclose = () => console.log('Socket closed');
    this.props.setSocket(socket);
  }
  lobbySwitch() {
    console.log(this.props.socket);
    if (this.props.socket !== 0) {
      return (
        <div>Card Game</div> // this.props.socket
      )
    } else {
      return (
        <div id="lobby">
          <button onClick={this.createGame}>Create Game</button>
          <button onClick={this.joinGame}>Join Game</button>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.lobbySwitch()}
      </div>
    )
  }
} 

export default Lobby;