import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route } from 'react-router';
import * as Routes from './containers';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Routes.App}>
      // 超大屏 - 首页
      <Route path="home" components={Routes.Home} />
      <Route path="home-internet" component={Routes.HomeInternet} />
      <Route path="commerce" component={Routes.Commerce} />

      <Route component={Routes.Main}>
        <Route path="hello" component={Routes.Hello} />

        // 万达大数据：商圈分析
        <Route path="district-plaza" component={Routes.DistrictPlaza} />
        <Route path="analysis" component={Routes.BusinessAnalysis} />

        // 数字商业：品牌与标签相关性
        <Route path="district-brand-tag" component={Routes.DistrictBrandTag} />

        // 智慧生活：客群黏性分析
        <Route path="vis-analysis" component={Routes.VisAnalysis} />
        // 智慧生活：飞凡会员运营商设备活跃对比
        <Route path="operators-comparison" component={Routes.OperatorsComparison} />
        // 智慧生活：移动OS类型
        <Route path="life-osuv" component={Routes.LifeOSUV} />

        <Route path="parking-analysis" component={Routes.ParkingAnalysis} />

      </Route>

      // 数字商业：内场分布 + 指标排名
      <Route path="inner-scatter" component={Routes.InnerScatter} />

      // 智慧生活：移动品牌及兴趣维度对比

      <Route path="map-scatter" component={Routes.MapScatter} />
      <Route path="life-mobile" component={Routes.LifeMobile} />
      // 数字金融：客群画像
      <Route path="customerPic" component={Routes.CustomerPic} />

    </Route>
  </Router>,
  document.getElementById('main')
);
