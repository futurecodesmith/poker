import React, { Component } from 'react';
const $ = require('jQuery');

function getInitialState(){
  return {
    view: 'login'
  };
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
    this.loginClick = this.loginClick.bind(this);
  }

  loginClick() {
    const data = JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    });

    const ajax = $.ajax({
      type: 'POST',
      url: '/login',
      data: data,
      contentType: 'application/json'
    });

    ajax.then(() => {
      this.setState({
        view: 'lobby'
      });
    })
  }

  render() {
    let jsx;

    if (this.state.view === 'login') {
      jsx = <Login loginClick={this.loginClick}>
    } else if (this.state.view === 'lobby') {
      jsx = <p>Placeholder</p>
    }
    return (
      jsx
    );
  }

}

export default App;
