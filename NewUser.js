import React, { Component } from 'react';



const NewUser = (props) => {


  return (
    <div id="newUser">
      <h3>New Account</h3>
      <form method="POST" action="/user">
        <input name='username' type="text" placeholder="Username..." />
        <input name='password' type="password" placeholder="Password..." />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}
