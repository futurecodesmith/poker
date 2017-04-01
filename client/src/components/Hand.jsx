import React, { PropTypes } from 'react';
import Card from './Card.jsx';

const Hand = (props) => {
  const { p1, p2 } = props;

  return (
    <div className="hand">
      
    </div>
  );
};

Hand.propTypes = {
  p1: PropTypes.number.isRequired,
  p2: PropTypes.number.isRequired,
};

export default Hand;
