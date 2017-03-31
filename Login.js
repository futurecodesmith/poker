import React, { Component } from 'react';

const Login = (props) => {
  return (
    <div id="login">
      <form>
        <input type="text" placeholder="Username...">
        <input type="password" placeholder="Password...">
      </form>
      <button onClick={props.handleClick}>Create Account</button>
    </div>
  );
}
