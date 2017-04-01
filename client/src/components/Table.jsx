import React, { PropTypes } from 'react';
import CommunityCards from './CommunityCards.jsx';

const Table = (props) => {
  const { handleFoldButton, handleCheckButton, handleCallButton, handleBetButton } = props;

  const tableSwitch = () => {
    if (props.winMessage) {
      return (<div>{JSON.stringify(props.winMessage)}</div>)
    } else {
      return (
      <div className="table">
        ROUND: {props.round} <br />
        <CommunityCards deck = {props.deck} round = {props.round} />
        <button onClick = {() => props.socket.send(JSON.stringify({action: 'ready', username: props.username }))}>Ready!!!</button>
      </div> 
      )
    }
  }
  return (
    <div>
      { tableSwitch() }
    </div>
  );
};


//       <button onClick={() => { handleFoldButton(); }} type="button" className="btn-fold">Fold</button>
//       <button onClick={() => { handleCheckButton(); }} type="button" className="btn-check">Check</button>
//       <button onClick={() => { handleCallButton(); }} type="button" className="btn-call">Call</button>
//       <button onClick={() => { handleBetButton(); }} type="button" className="btn-bet">Bet</button>
// Table.propTypes = {
//   handleFoldButton: PropTypes.func,
//   handleCheckButton: PropTypes.func,
//   handleCallButton: PropTypes.func,
//   handleBetButton: PropTypes.func,
// };

export default Table;
