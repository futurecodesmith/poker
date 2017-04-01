import React, { PropTypes } from 'react';

const Card = (props) => {
  const { hidden, cardValue } = props;

  const cardBackgroundUrl = hidden ? 'url(img/hidden.png)' : `url(img/${cardValue}.png)`;
  const cardStyle = { backgroundImage: cardBackgroundUrl };

  return (
    <div className="card" style={cardStyle} />
  );
};

Card.propTypes = {
  // hidden: PropTypes.boolean.isRequired,
  cardValue: PropTypes.number.isRequired,
};

export default Card;
