import React, { PropTypes } from 'react';
import Card from './Card.jsx';

const Hand = (props) => {
  const { cardValue } = props;

  return (
    <div className="hand">
      <Card />
      <Card />
    </div>
  );
};

Hand.propTypes = {
  cardValue: PropTypes.number.isRequired,
};

export default Hand;
