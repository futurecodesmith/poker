import React from 'react';

const Outcome = (props) => {

  render() {

    return (
      <div className='status'>

      </div>
      <div className='pot'>
      
      </div>
      <div className='board'>
        <Card hidden={ true }/>
        <Card hidden={ true }/>
        <Card hidden={ true }/>
        <Card hidden={ true }/>
        <Card hidden={ true }/>
      </div>
    );
  }

}

export default Outcome;
