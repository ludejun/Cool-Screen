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
          path: 'financial-expect',
          component: Routes.Expect,
          breadcrumbName: '数字金融-财富客群投资方向、偏好及期望划分'
        },
        {
          path: 'district-plaza',
          component: Routes.DistrictPlaza,
          breadcrumbName: '万达大数据：商圈分析'
        },
        {
          path: 'analysis',
          component: Routes.BusinessAnalysis,
          breadcrumbName: '万达大数据：商圈分析'
        },
        {
          path: 'district-brand-tag',
          component: Routes.DistrictBrandTag,
          breadcrumbName: '数字商业：品牌与标签相关性'
        },
        {
          path: 'digital-recomand',
          component: Routes.DigitalRecomand,
          breadcrumbName: '数字商业：精准化推荐Demo'
        },
        {
          path: 'vis-analysis',
          component: Routes.VisAnalysis,
          breadcrumbName: '智慧生活：客群黏性分析'
        },
        {
          path: 'operators-comparison',
          component: Routes.OperatorsComparison,
          breadcrumbName: '智慧生活：飞凡会员运营商设备活跃对比'
        },
        {
          path: 'life-osuv',
          component: Routes.LifeOSUV,
          breadcrumbName: '智慧生活：移动OS类型'
        },
        {
          path: 'parking-analysis',
          component: Routes.ParkingAnalysis,
          breadcrumbName: '车牌分析'
        },
        {
          path: 'popular-feeling',
          component: Routes.PopularFeeling,
          breadcrumbName: '数字金融：万达金融产品舆情'
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
          breadcrumbName: '数字商业：内场分布 + 指标排名',
          component: Routes.InnerScatterLong
        }
      ]
    },
    {
      path: 'inner-scatter',
      breadcrumbName: '数字商业：内场分布 + 指标排名',
      component: Routes.InnerScatter
    },
    {
      path: 'map-scatter',
      breadcrumbName: '智慧生活：飞凡会员分布地图',
      component: Routes.MapScatter
    },
    {
      path: 'life-mobile',
      breadcrumbName: '智慧生活：移动品牌及兴趣维度对比',
      component: Routes.LifeMobile
    },
    {
      path: 'customerPic',
      breadcrumbName: '数字金融：客群画像',
      component: Routes.CustomerPic
    },
    {
      path: 'compete-analysis',
      breadcrumbName: '广场竞品客流分析',
      component: Routes.CompeteAnalysis
    },
    {
      path: 'digital-finance',
      breadcrumbName: '数字金融：财富／小贷客群的万达生态描绘',
      component: Routes.DigitalFinance
    },
    {
      path: '*',
      component: Routes.Hello
    }
  ]
};

export default routeConfig;
