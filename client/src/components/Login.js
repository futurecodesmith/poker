import React, { Component } from 'react';

const Login = (props) => {
  return (
    <div>
    <div id="login">
      <form>
        <input id="username" type="text" placeholder="Username..." />
        <input id="password" type="password" placeholder="Password..." />
      </form>
      <button onClick={() => props.loginClick('login')}>Login</button>
      <button onClick={() => props.loginClick('create')}>Create YoSELF!</button>
    </div>
    <p id = 'title'> Poker by Ryan, Will, and Matt</p>
    </div>
  );
}

export default Login;
