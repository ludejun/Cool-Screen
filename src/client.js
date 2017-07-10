import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import * as Routes from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Routes.App}>

      <Route component={Routes.Main}>
        <Route path="hello" component={Routes.Hello} />
        <Route path="vis-analysis" component={Routes.VisAnalysis} />
        <Route path="district-plaza" component={Routes.DistrictPlaza} />
        <Route path="district-brand-tag" component={Routes.DistrictBrandTag} />
        <Route path="analysis" component={Routes.BusinessAnalysis} />
        <Route path="innerScatter" component={Routes.InnerScatter} />
      </Route>

      <Route path="home" components={Routes.Home} />
      <Route path="home-internet" component={Routes.HomeInternet} />
      <Route path="commerce" component={Routes.Commerce} />

    </Route>
  </Router>,
  document.getElementById('main')
);
