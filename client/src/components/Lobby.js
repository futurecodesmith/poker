import React, { Component } from 'react';
import Room from './Room.jsx'

class Lobby extends Component {
  constructor() {
    super();
    this.createGame = this.createGame.bind(this);
    this.lobbySwitch = this.lobbySwitch.bind(this);
  }
  createGame() {
    const socket = new WebSocket('ws://localhost:8080/');
    let that = this;
    socket.onopen = () => { 
      console.log('Socket open'); 
      console.log(this.props.state.username);
      socket.send(JSON.stringify({
        action: 'createGame',
        username: that.props.state.username,
      }));
    }
    socket.onmessage = msg => {
      // console.log(msg);
      //let pMsg = JSON.stringify(msg.data);
      let pMsg = msg.data;
      console.log('Server sends ', pMsg, ' Boolean: ' ,pMsg === "GameReady");
      if (pMsg === "GameReady") this.props.setSt( { gameReady: true } )
      else this.props.setSt({ message: pMsg })
    }
    socket.onclose = () => console.log('Socket closed');
    this.props.setSt({ socket: socket });
  }
  lobbySwitch() {
    console.log('message for room', this.props.state.message)
    console.log(this.props.state.gameReady);
    if (this.props.state.socket !== 0 && this.props.state.gameReady === false) { 
      return (<div>Waiting for other players. . .</div>)
    }
    if (this.props.state.socket !== 0 && this.props.state.gameReady === true) {
      return (
        //<div>Card Game</div> // this.props.socket
        <Room message = {this.props.state.message} /> 
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