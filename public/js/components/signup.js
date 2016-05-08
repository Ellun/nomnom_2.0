import $ from 'jquery';
import React, {Component} from 'react';
import { browserHistory, Router, Route, Link, Redirect, Navigation, RouteHandler } from 'react-router';
import Button from './button';

export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {error : ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const confirmPass = this.refs.confirmPass.value;
    console.log(username, password, confirmPass);

    if (password != confirmPass) {
      this.setState({error: 'Passwords did not match'})
    }
  }

  render() {
    return (
      <div className='centerFormContainer'>
        <h1 className='logo'>nomnom</h1><br />
        <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
          <input className="userInfo" ref="username" placeholder="username" /><br />
          <input className="userInfo" type="password" ref="password" placeholder="password" /><br />
          <input className="userInfo" type="password" ref="confirmPass" placeholder="confirm password" /><br />
          <Button type="submit" className="submitBtn" btnName='submit'/><br />
        </form>
        <h3>{this.state.error}</h3>
        <h3>Already a user?</h3>
        <Link to="/login">Login!</Link>
      </div>
    )
  }
}
