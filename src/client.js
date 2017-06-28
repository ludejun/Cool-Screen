import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { App, Hello, DistrictPlaza } from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="hello" component={Hello} />
      <Route path="district-plaza" component={DistrictPlaza} />
    </Route>
  </Router>,
  document.getElementById('main')
);
