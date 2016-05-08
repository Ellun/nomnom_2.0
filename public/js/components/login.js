import $ from 'jquery';
import React, {Component} from 'react';
import { browserHistory, Router, Route, Link, Redirect, Navigation, RouteHandler } from 'react-router'
import Button from './button';

export default class Login extends Component {
  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
      <div className='centerFormContainer'>
        <h1 className='logo'>nomnom</h1><br />
        <form ref="form" onSubmit={this.handleSubmit}>
          <input className="userInfo" ref="username" placeholder="username" /><br />
          <input className="userInfo" type="password" ref="password" placeholder="password" /><br />
          <Button type="submit" className="submitBtn" btnName='submit'/><br />
        </form>
        <h3>New to nomnom?</h3><br />
        <Link to="/signup">Signup!</Link>
      </div>
    )
  }
}
