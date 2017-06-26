import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import {
  App,
  Hello,
} from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="hello" component={Hello} />
    </Route>
  </Router>,
  document.getElementById('main')
);
