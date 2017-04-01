import React, { Component } from 'react';
//import Hand from './Hand.jsx';
//import Table from './Table.jsx';

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dealer: ?,
      // turn: ?,
      // round: ?,
      communityCards: [],
      potSize: 0,
      // status: ?,
      // BalanceP1: ?,
      // BalanceP2: ?,
      hand: [],
    };
  }

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
      <div>{this.props.message}</div>
      /*<div className="room">
        <Table
          communityCards={this.state.communityCards}
          potSize={this.state.potSize}
          status={this.state.status}
          balanceP2={this.state.balanceP2}
          balanceP1={this.state.balanceP1}
          fold={this.handleFoldButton}
          check={this.handleCheckButton}
          call={this.handleCallButton}
          bet={this.handleBetButton}
        />
        <Hand
          hand={this.state.hand}
        />
      </div>*/
    );
  }

}

export default Room;
