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
      console.log(this.props.state.username);
      socket.send(JSON.stringify({
        action: 'createGame',
        username: this.props.username
      }));
    }
    socket.onmessage = msg => setSt({ message: msg })
    socket.onclose = () => console.log('Socket closed');
    this.props.setSt({ socket: socket });
  }
  lobbySwitch() {
    console.log(this.props.state.socket);
    if (this.props.state.socket !== 0) {
      return (
        <div>Card Game</div> // this.props.socket
        // <Room message = {this.props.state.message} /> 
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