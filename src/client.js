import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import { App, Hello, DistrictPlaza, Commerce } from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="hello" component={Hello} />
      <Route path="district-plaza" component={DistrictPlaza} />
      <Route path="commerce" component={Commerce} />
    </Route>
  </Router>,
  document.getElementById('main')
);
