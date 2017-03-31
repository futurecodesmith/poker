import React, { Component } from 'react';
import Hand from './Hand';
import Interface from './Interface';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealer: ?,
      player2: [],
      p2StackSize: ?,
      status: ?,
      potSize: 0,
      board: [],
      p1StackSize: ?,
      player1: [],
    };
  }

  handleFoldButton() => {
    
    this.setState({
      player: playerHand,
    
    });

  }

  handleCheckButton() {

  }

  computeHands(hand) {

  }

  render() {
    
    return (
      <div className='table'>
        <Hand
          hand = { this.state.player2 }
        />
        <Interface
          p2Stack = { this.state.p2StackSize }
          status = {this.state.status }
          pot = { this.state.potSize }
          board = { this.state.board }
          p1Stack = { this.state.p1StackSize }
          fold = { this.handleFoldButton }
          check = { this.handleCheckButton }
          call = { this.handleCallButton }
          betOrRaise = { this.handleBetButton }
        />
        <Hand
          hand = { this.state.player1 }
        />
      </div>
    );
  }

}

export default Table;
