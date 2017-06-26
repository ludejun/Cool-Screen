import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
  App
} from './containers';

export default () => {
  return (
    <Route path="/" component={App}>
      <Route path="*" component={NotFound} status={404}/>
    </Route>
  );
};
