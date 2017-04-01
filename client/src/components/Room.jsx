import React, { Component } from 'react';
import Hand from './Hand.jsx';
import Table from './Table.jsx';

class Room extends Component {
  constructor(props) {
    super(props);
    };
  

  // handleFoldButton() => {
    
  // }

  // handleCheckButton() {

  // }

  // handleCallButton() {

  // }

  // handleBetButton() {

  // }

  render() {

    return (
      <div>
        <Table winMessage = {this.props.winMessage} deck={this.props.hand.deck} round={this.props.hand.currentRound} socket ={this.props.socket} username ={this.props.username} />
        <Hand deck={this.props.hand.deck} amDealer = {this.props.amDealer} />
      </div>
    );
  }

}

export default Room;
