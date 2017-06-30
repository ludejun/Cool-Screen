import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import * as Routes from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Routes.App}>
      <Route path="hello" component={Routes.Hello} />
      <Route path="district-plaza" component={Routes.DistrictPlaza} />
      <Route path="district-brand-tag" component={Routes.DistrictBrandTag} />
      <Route path="commerce" component={Routes.Commerce} />
    </Route>
  </Router>,
  document.getElementById('main')
);
