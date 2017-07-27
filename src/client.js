import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import RoutesConfig from './configs/routesConfig';

ReactDOM.render(
  <Router routes={RoutesConfig} history={browserHistory} />,
  document.getElementById('main')
);
