import React, { Component } from 'react';
import Login from './Login';

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
    let type = 'login';
    const data = JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    });

    //console.log('credentials: ', data);
    console.log(type);
    var xhr = new XMLHttpRequest();
    if (type === 'login') xhr.open('POST', '/login');
    else if (type === 'create') xhr.open('POST', '/user');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);

    xhr.onreadystatechange = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          this.setState({
            view: 'lobby'
          })
        }
          console.log(xhr.responseText); // 'This is the returned text.'
        } else {
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
      }
    };

  render() {
    let jsx;
    if (this.state.view === 'login') {
      jsx = <Login loginClick={this.loginClick.bind(this)} />
    } else if (this.state.view === 'lobby') {
      jsx = <p>Placeholder</p>
    }
    return (
      <div>
        { jsx }
      </div>
    );
  }

}

export default App;
