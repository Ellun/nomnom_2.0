import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Navigation, Link, browserHistory} from 'react-router';
import Login from './components/login';
import Signup from './components/signup';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#container'))
