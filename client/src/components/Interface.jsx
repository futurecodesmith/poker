import React, { Component } from 'react';
import Outcome from './Outcome';

const Interface = (props) => {

  return (
    <div className="interface">
      <div className="p2Stack">

      </div>
      {/* Outcome component */}
      <Outcome status = { this.props.status } />

      {/* Interface */}
      <div>
     
      </div>

      <button onClick={this.props.fold} type="button" className="btn-fold">Fold</button>
      <button onClick={this.props.check} type="button" className="btn-check">Check</button>
      <button onClick={this.props.call} type="button" className="btn-call">Call</button>
      <button onClick={this.props.bet} type="button" className="btn-bet">Bet/Raise</button>
      
      <div className="p1Stack">

      </div>
    </div>
  );
};

export default Interface;
