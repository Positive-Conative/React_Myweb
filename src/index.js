import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import Introduce from './containers/Introduce';
import GuestBook from './containers/GuestBook';
import Post from './containers/Post';

//react redux 사용
import {Provider} from 'react-redux';
import store from './store'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="Introduce" component={Introduce} />
        <Route path="GuestBook" component={GuestBook}>
          <Route path=":id" component={Post} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);