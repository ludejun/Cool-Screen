import * as Routes from '../containers';
// import {getUserToken} from '../utils';

// const checkLogin = (path, nextState, replace, cb) => {
//   const user = Storage.get(configs.authToken);
//   if (!user) {
//     replace('/login');
//   }
//   cb();
// };

// 路由顺序会影响菜单显示顺序
const routeConfig = {
  path: '/',
  component: Routes.App,
  indexRoute: { onEnter: (nextState, replace) => replace('/directory') }, // indexredirect
  childRoutes: [
    {
      path: 'directory',
      // breadcrumbName: '目录',
      component: Routes.Directory
    },
    {
      path: 'home',
      childRoutes: [
        {
          path: 'sum',
          breadcrumbName: '超大屏',
          component: Routes.HomeSum
        },
        {
          path: 'internet',
          breadcrumbName: '超大屏 - 右边',
          component: Routes.HomeInternet
        },
        {
          path: 'commerce',
          breadcrumbName: '超大屏 - 左边',
          component: Routes.Commerce
        },
        {
          path: 'global',
          breadcrumbName: '超大屏 - 中间地球',
          component: Routes.Home
        }
      ]
    },
    {
      component: Routes.Main,
      childRoutes: [
        {
          path: 'district-plaza',
          component: Routes.DistrictPlaza,
          breadcrumbName: '万达广场商圈热力图'
        },
        {
          path: 'analysis',
          component: Routes.BusinessAnalysis,
          breadcrumbName: '商圈客群画像'
        },
        {
          path: 'district-brand-tag',
          component: Routes.DistrictBrandTag,
          breadcrumbName: '广场品牌标签相关性'
        },
        {
          path: 'digital-recomand',
          component: Routes.DigitalRecomand,
          breadcrumbName: '精准化营销示例'
        },
        {
          path: 'vis-analysis',
          component: Routes.VisAnalysis,
          breadcrumbName: '智慧生活：客群黏性分析'
        },
        {
          path: 'operators-comparison',
          component: Routes.OperatorsComparison,
          breadcrumbName: '飞凡会员运营商对比'
        },
        {
          path: 'life-osuv',
          component: Routes.LifeOSUV,
          breadcrumbName: '飞凡移动生活服务'
        },
        {
          path: 'parking-analysis',
          component: Routes.ParkingAnalysis,
          breadcrumbName: '万达广场停车画像'
        },
        {
          path: 'popular-feeling',
          component: Routes.PopularFeeling,
          breadcrumbName: '万达互金产品评论词云'
        },
        {
          path: 'financial-expect',
          component: Routes.Expect,
          breadcrumbName: '数字金融-财富客群投资方向、偏好及期望划分'
        },
      ]
    },
    {
      path: 'circle',
      component: Routes.LayoutFour,
      childRoutes: [
        {
          path: 'parking-analysis',
          breadcrumbName: '四环屏-停车场分析',
          component: Routes.Fparkinganalysis
        },
        {
          path: 'district-brand-tag',
          component: Routes.DistrictBrandTagLong,
          breadcrumbName: '四环屏-数字商业：品牌与标签相关性'
        },
        {
          path: 'customer-pic',
          component: Routes.FcustomerPic,
          breadcrumbName: '四环屏-万达大数据-商圈分析'
        },
        {
          path: 'inner-scatter',
          breadcrumbName: '四环屏-数字商业：内场分布 + 指标排名',
          component: Routes.InnerScatterLong
        }
      ]
    },
    {
      path: 'inner-scatter',
      breadcrumbName: '万达广场WiFi热度分布',
      component: Routes.InnerScatter
    },
    {
      path: 'map-scatter',
      breadcrumbName: '飞凡会员分布图',
      component: Routes.MapScatter
    },
    {
      path: 'life-mobile',
      breadcrumbName: '广场客群兴趣偏好',
      component: Routes.LifeMobile
    },
    {
      path: 'customerPic',
      breadcrumbName: '万达财富客群画像',
      component: Routes.CustomerPic
    },
    {
      path: 'compete-analysis',
      breadcrumbName: '商圈客流动向',
      component: Routes.CompeteAnalysis
    },
    {
      path: 'digital-finance',
      breadcrumbName: '万达广场消费生活对比',
      component: Routes.DigitalFinance
    },
    {
      path: '*',
      component: Routes.Hello
    }
  ]
};

export default routeConfig;
