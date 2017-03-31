import React, { Component } from 'react';

const Card = (props) => {

  render() {
    let cardBackgroundUrl = this.props.hidden ? 'url(img/hidden.png)' : 'url(img/' + this.props.face + '.png)';
    const cardStyle = { backgroundImage: cardBackgroundUrl };

    return (
      <div className='card' style={ cardStyle }/>
    );
  }

}

export default Card;
