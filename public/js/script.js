import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Navigation, Link, browserHistory} from 'react-router';

import Input from './components/input';
import Button from './components/button';

export default class App extends Component {
  render() {
    return (
      <div>
        <Input placeholder='hello world' />
        <Button btnName='submit' />
      </div>
    )
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
    </Route>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#container'))
