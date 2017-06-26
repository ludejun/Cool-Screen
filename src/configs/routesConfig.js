import * as Routes from '../containers';
import {getUserToken} from '../utils';

const checkLogin = (nextState, replace) => {
  const user = getUserToken();
  if (!user) {
    // 检测登陆状态
    replace('/login');
  }
};

const routeConfig = {
  path: '/',
  component: Routes.App,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },  // indexredirect
  childRoutes: [
    {
      path: 'home',
      breadcrumbName: '首页',
      component: Routes.Home
    }, {
      path: 'main',
      component: Routes.Main,
      indexRoute: { onEnter: (nextState, replace) => replace('/main/baseInfo') },  // indexredirect
      onEnter: checkLogin.bind(null),
      childRoutes: [
        {
          path: 'baseInfo',
          component: Routes.BaseInfo,
          breadcrumbName: '基本信息'
        }, {
          path: 'myApp',
          component: Routes.MyAPP,
          breadcrumbName: '我的应用'
        }, {
          path: 'myNode',
          component: Routes.Mynode,
          breadcrumbName: '我的节点'
        }, {
          path: 'verifyInfo',
          component: Routes.VerifyInfo,
          breadcrumbName: '认证信息'
        }]
    }, {
      path: 'product',
      component: Routes.Product,
      breadcrumbName: '产品'
    }, {
      path: 'guide',
      component: Routes.Fresh,
      breadcrumbName: '指南'
    }, {
      path: 'register',
      component: Routes.Register,
      breadcrumbName: '注册',
      position: 'right'
    }, {
      path: 'login',
      component: Routes.Login,
      breadcrumbName: '登录',
      position: 'right'
    }]
};

export default routeConfig;
