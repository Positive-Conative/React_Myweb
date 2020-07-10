import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import Introduce from './containers/Introduce';
import GuestBook from './containers/GuestBook';
import Post from './containers/Post';

import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="Introduce" component={Introduce}/>
      <Route path="GuestBook" component={GuestBook}>
        <Route path=":id" component={Post}/>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);