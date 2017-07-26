import React, { Component } from 'react';
import RoutesConfig from '../configs/routesConfig';

export default class Directory extends Component {
  constructor() {
    super();
    this.directory = [];
    this.getChildRoutes(RoutesConfig);
  }

  getChildRoutes(route, prefix = '') {
    if (route) {
      if (route.path) {
        if (route.breadcrumbName) {
          this.directory.push({ name: route.breadcrumbName, path: prefix + route.path });
        }
        prefix += `${route.path === '/' ? '' : route.path}/`;
      }
      route.childRoutes &&
        route.childRoutes.forEach((v) => {
          this.getChildRoutes(v, prefix);
        });
    }
  }

  render() {
    return (
      <div style={{ color: '#333' }}>
        {this.directory.map((v, i) =>
          <div key={i}><a href={v.path}>{v.name}</a>:&ensp;&ensp;{v.path}</div>
        )}
      </div>
    );
  }
}
