import React, { PropTypes } from 'react';

const CommunityCards = (props) => {
  const { status, round, potSize } = props;

  return (
    /*<div className='board'>
      <Card hidden={true} />
      <Card hidden={true} />
      <Card hidden={true} />
      <Card hidden={true} />
      <Card hidden={true} />
    </div>*/
  );
};

CommunityCards.propTypes = {
  status: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
  potSize: PropTypes.number.isRequired,
};

export default CommunityCards;
