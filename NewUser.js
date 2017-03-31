import React, { Component } from 'react';
const $ = require('jQuery');

// function handleSubmit() {
//   const userData = JSON.stringify({
//     username: document.getElementById('username').value,
//     password: document.getElementById('password').value
//   })
//   const postReq = $.ajax({
//     type: 'POST',
//     url: '/user',
//     data: userData,
//     contentType: 'application/json',
//   });
//   postReq.then()
// }


const NewUser = (props) => {


  return (
    <div id="newUser">
      <h3>New Account</h3>
      <form>
        <input id='username' type="text" placeholder="Username..." />
        <input id='password' type="password" placeholder="Password..." />
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
}
