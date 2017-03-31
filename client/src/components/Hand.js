import React, { Component } from 'react';
import Card from './Card';

const Hand = (props) => {

  render() {

    return ( 
      <div className='hand'>
        <Card face={ /* serve card face */ }/>
        <Card face={ /* serve card face */ }/>
      </div>
    );
  }

}

export default Hand;
