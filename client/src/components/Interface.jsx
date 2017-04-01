import React, { PropTypes } from 'react';
import Outcome from './Outcome.jsx';

const Interface = (props) => {
  const { handleFoldButton, handleCheckButton, handleCallButton, handleBetButton } = props;

  return (
    <div className="interface">
      <div className="p2Stack" />

      {/* Outcome component */}
      <Outcome status={this.props.status} />

      {/* Interface */}
      <div />

      <button onClick={() => { handleFoldButton(); }} type="button" className="btn-fold">Fold</button>
      <button onClick={() => { handleCheckButton(); }} type="button" className="btn-check">Check</button>
      <button onClick={() => { handleCallButton(); }} type="button" className="btn-call">Call</button>
      <button onClick={() => { handleBetButton(); }} type="button" className="btn-bet">Bet</button>

      <div className="p1Stack" />

    </div>
  );
};

Interface.propTypes = {
  handleFoldButton: PropTypes.func,
  handleCheckButton: PropTypes.func,
  handleCallButton: PropTypes.func,
  handleBetButton: PropTypes.func,
};

export default Interface;
