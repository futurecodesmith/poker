import React, { PropTypes } from 'react';

const Outcome = (props) => {
  const { status, round, potSize } = props;

  return (
    <div className="status">
      <p>{status}</p>
      <p>{round}</p>
      <p>{potSize}</p>
    </div>

    /*<div className='board'>
      <Card hidden={true} />
      <Card hidden={true} />
      <Card hidden={true} />
      <Card hidden={true} />
      <Card hidden={true} />
    </div>*/
  );
};

Outcome.propTypes = {
  status: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
  potSize: PropTypes.number.isRequired,
};

export default Outcome;
