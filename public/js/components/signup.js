import React, {Component} from 'react';
import { browserHistory, Router, Route, Link, Redirect, Navigation, RouteHandler } from 'react-router'
import Input from './input';

export default class Signup extends Component {
  render() {
    return (
      <div className='centerFormContainer'>
        <h1 className='logo'>nomnom</h1><br />
        <Input className="userInfo" placeholder='username' /><br />
        <Input className="userInfo" type='password' placeholder='password' /><br />
        <Input className="userInfo" type='password' placeholder='confirm password' /><br />
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
