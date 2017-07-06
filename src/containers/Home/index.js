import React, { Component } from 'react';
import echarts from 'echarts';
import 'echarts-gl';
import './home.less';

export default class Home extends Component {

  componentDidMount() {
    const chart = echarts.init(document.getElementById('home-earth'));
    chart.setOption({
      backgroundColor: 'transparent',
      globe: {
        baseTexture: '/img/echarts/data-1491890179041-Hkj-elqpe.jpg',
        heightTexture: '/img/echarts/data-1491889019097-rJQYikcpl.jpg',
        displacementScale: 0.1,
        shading: 'lambert',
        globeRadius: 85,
        top: '1%',

        light: {
          ambient: {
            intensity: 0.1
          },
          main: {
            intensity: 1.5
          }
        },

        layers: [
          {
            type: 'blend',
            blendTo: 'emission',
            texture: '/img/echarts/data-1491890291849-rJ2uee5ag.jpg'
          },
          {
            type: 'overlay',
            texture: '/img/echarts/data-1491890092270-BJEhJg96l.png',
            shading: 'lambert',
            distance: 5
          }
        ]
      },
      series: [{
        type: 'lines3D',
        coordinateSystem: 'globe',
        effect: {
          show: true,
          period: 6,
          // trailColor: '#fff',
        },
        lineStyle: {
          color: 'rgb(50, 50, 150)',
          width: 1,
          opacity: 0.4,
        },
        data: [
          [[116.47808, 39.914882, 1], [-3.638449, 40.444948, 1]],
          [[116.47808, 39.914882, 1], [-87.799533, 41.891813, 1]],
          [[116.47808, 39.914882, 1], [-118.253459, 34.05678, 1]],
          [[116.47808, 39.914882, 1], [-94.810595, 38.6411, 1]],
          [[116.47808, 39.914882, 1], [-118.253459, 34.05678, 1]],
          [[116.47808, 39.914882, 1], [-122.326056, 47.604969, 1]],
          [[116.47808, 39.914882, 1], [-122.413091, 37.774702, 1]],
          [[116.47808, 39.914882, 1], [-104.972429, 39.739902, 1]],
          [[116.47808, 39.914882, 1], [-93.983819, 41.60704, 1]],
          [[116.47808, 39.914882, 1], [-87.799533, 41.891813, 1]],
          [[116.47808, 39.914882, 1], [-91.562727, 43.753924, 1]],
          [[116.47808, 39.914882, 1], [-84.389552, 33.663682, 1]],
          [[116.47808, 39.914882, 1], [-73.866298, 40.719146, 1]],
          [[116.47808, 39.914882, 1], [-71.069909, 42.309278, 1]],
          [[116.47808, 39.914882, 1], [-111.985497, 33.401745, 1]],
          [[116.47808, 39.914882, 1], [-93.211956, 44.958073, 1]],
          [[116.47808, 39.914882, 1], [-76.959094, 38.871768, 1]],
          [[116.47808, 39.914882, 1], [-1.3317, 50.755381, 1]],
          [[116.47808, 39.914882, 1], [-0.127758, 51.508963, 1]],
          [[116.47808, 39.914882, 1], [153.11318, -27.514201, 1]],
          [[116.47808, 39.914882, 1], [151.153868, -33.976953, 1]],
          [[116.47808, 39.914882, 1], [8.501656, 47.414286, 1]],

          // wanda plaza
          [[116.47808,39.914882,1],[116.3, 39.9, 1]],
          [[116.47808,39.914882,1],[113.3, 23.1, 1]],
          [[116.47808,39.914882,1],[121.4, 31.2, 1]],
          [[116.47808,39.914882,1],[103.9, 30.8, 1]],
          [[116.47808,39.914882,1],[116.6778339005, 39.5366777894, 1]],
          [[116.47808,39.914882,1],[116.8329375167, 38.3037279637, 1]],
          [[116.47808,39.914882,1],[112.1936153004, 31.0376819947, 1]],
          [[116.47808,39.914882,1],[123.9514529085, 41.8775671778, 1]],
          [[116.47808,39.914882,1],[111.2739976258, 23.4796973001, 1]],
          [[116.47808,39.914882,1],[104.3952146534, 31.1289468432, 1]],
          [[116.47808,39.914882,1],[116.3530835814, 27.9509941142, 1]],
          [[116.47808,39.914882,1],[112.4600060973, 23.0495002021, 1]],
          [[116.47808,39.914882,1],[122.9609271859, 39.6791471701, 1]],
          [[116.47808,39.914882,1],[120.1566574177, 33.3509739619, 1]],
          [[116.47808,39.914882,1],[117.3160766756, 34.8114371499, 1]],
          [[116.47808,39.914882,1],[114.4984914252, 37.070078515, 1]],
          [[116.47808,39.914882,1],[121.5461101381, 29.8764058277, 1]],
          [[116.47808,39.914882,1],[122.0652538276, 41.1179505609, 1]],
          [[116.47808,39.914882,1],[112.4249624174, 39.3303927776, 1]],
          [[116.47808,39.914882,1],[118.3334189924, 29.7176671895, 1]],
          [[116.47808,39.914882,1],[130.9620545953, 45.2931205606, 1]],
          [[116.47808,39.914882,1],[118.5008909626, 31.6726382295, 1]],
          [[116.47808,39.914882,1],[114.3869908146, 36.0975852693, 1]],
          [[116.47808,39.914882,1],[110.9207281073, 21.6660585391, 1]],
          [[116.47808,39.914882,1],[120.7511794145, 30.7472793022, 1]],
          [[116.47808,39.914882,1],[119.0104971085, 33.6115679198, 1]],
          [[116.47808,39.914882,1],[118.7912686424, 32.0604447958, 1]],
          [[116.47808,39.914882,1],[113.7466103637, 23.0233804965, 1]],
          [[116.47808,39.914882,1],[114.3014663122, 34.7981648276, 1]],
          [[116.47808,39.914882,1],[115.8095544105, 32.8916120084, 1]],
          [[116.47808,39.914882,1],[119.2916801622, 26.0772956987, 1]],
          [[116.47808,39.914882,1],[120.069940139, 29.3080645446, 1]],
          [[116.47808,39.914882,1],[117.193103841, 39.0839696952, 1]],
          [[116.47808,39.914882,1],[113.3871180108, 22.5186182576, 1]],
          [[116.47808,39.914882,1],[112.3494496733, 28.5570671521, 1]],
          [[116.47808,39.914882,1],[119.5435930736, 26.6691149972, 1]],
          [[116.47808,39.914882,1],[103.831760499, 36.0616639885, 1]],
          [[116.47808,39.914882,1],[113.0761477965, 22.5813872443, 1]],
          [[116.47808,39.914882,1],[119.8186138959, 31.3424820804, 1]],
          [[116.47808,39.914882,1],[112.2349552605, 30.337407333, 1]],
          [[116.47808,39.914882,1],[119.9208036381, 32.4576684761, 1]],
          [[116.47808,39.914882,1],[103.7631610059, 29.5550037112, 1]],
          [[116.47808,39.914882,1],[111.7450352118, 40.8401224107, 1]],
          [[116.47808,39.914882,1],[105.0552099712, 29.5827124769, 1]],
          [[116.47808,39.914882,1],[116.5819409023, 35.4150439391, 1]],
          [[116.47808,39.914882,1],[117.0823246166, 36.1997308611, 1]],
          [[116.47808,39.914882,1],[110.2854219038, 25.2764868785, 1]],
          [[116.47808,39.914882,1],[121.6098132809, 38.9129122467, 1]],
          [[116.47808,39.914882,1],[113.571630851, 22.2737283728, 1]],
          [[116.47808,39.914882,1],[118.0487315123, 36.8125585025, 1]],
          [[116.47808,39.914882,1],[119.7584775805, 49.2096894451, 1]],
          [[116.47808,39.914882,1],[113.1164384334, 23.0243300777, 1]],
          [[116.47808,39.914882,1],[118.75355527, 30.9428772884, 1]],
          [[116.47808,39.914882,1],[117.6424770471, 24.5164240788, 1]],
          [[116.47808,39.914882,1],[118.8828176526, 42.2565278432, 1]],
          [[116.47808,39.914882,1],[109.8344744372, 40.6567337291, 1]],
          [[116.47808,39.914882,1],[114.4108033828, 27.8175199305, 1]],
          [[116.47808,39.914882,1],[111.606990452, 26.4239588747, 1]],
          [[116.47808,39.914882,1],[123.2316203776, 41.266023, 1]],
          [[116.47808,39.914882,1],[113.0506832813, 23.6844685976, 1]],
          [[116.47808,39.914882,1],[112.4473260504, 34.619169698, 1]],
          [[116.47808,39.914882,1],[129.6253322369, 44.5508119608, 1]],
          [[116.47808,39.914882,1],[107.4632236703, 31.210776931, 1]],
          [[116.47808,39.914882,1],[119.9689029619, 31.8127450319, 1]],
          [[116.47808,39.914882,1],[117.2800142205, 34.2056855551, 1]],
          [[116.47808,39.914882,1],[115.033532615, 30.2018352395, 1]],
          [[116.47808,39.914882,1],[113.1232529813, 29.3597101855, 1]],
          [[116.47808,39.914882,1],[121.1251170665, 31.4609227136, 1]],
          [[116.47808,39.914882,1],[99.1608885995, 25.1148851564, 1]],
          [[116.47808,39.914882,1],[122.2036121266, 29.9877279699, 1]],
          [[116.47808,39.914882,1],[116.1610010109, 23.2998304247, 1]],
          [[116.47808,39.914882,1],[122.9891118242, 41.1058577173, 1]],
          [[116.47808,39.914882,1],[117.9385935288, 28.4580143448, 1]],
          [[116.47808,39.914882,1],[117.2235334392, 31.8225193827, 1]],
          [[116.47808,39.914882,1],[118.5474968601, 24.7843857852, 1]],
          [[116.47808,39.914882,1],[120.8317901848, 40.709538702, 1]],
          [[116.47808,39.914882,1],[117.0123717328, 25.0777798257, 1]],
          [[116.47808,39.914882,1],[119.0029822608, 25.4568545782, 1]],
          [[116.47808,39.914882,1],[109.0244647624, 32.6868638889, 1]],
          [[116.47808,39.914882,1],[118.6690032763, 37.4329715731, 1]],
          [[116.47808,39.914882,1],[125.3170568527, 43.8136066729, 1]],
          [[116.47808,39.914882,1],[119.4071875549, 32.3954852259, 1]],
          [[116.47808,39.914882,1],[117.0580923086, 30.5452118749, 1]],
          [[116.47808,39.914882,1],[112.1164473347, 32.0109937292, 1]],
          [[116.47808,39.914882,1],[126.529734686, 45.8001578452, 1]],
          [[116.47808,39.914882,1],[130.3127847403, 46.7979913124, 1]],
          [[116.47808,39.914882,1],[104.6255694686, 30.1315028807, 1]],
          [[116.47808,39.914882,1],[109.7341895654, 28.3151014659, 1]],
          [[116.47808,39.914882,1],[120.3077721161, 31.4928483558, 1]],
          [[116.47808,39.914882,1],[125.0960219591, 46.5854510332, 1]],
          [[116.47808,39.914882,1],[104.6769622416, 31.4698186109, 1]],
          [[116.47808,39.914882,1],[114.0544373601, 22.5455537937, 1]],
          [[116.47808,39.914882,1],[110.195578022, 20.0463929412, 1]],
          [[116.47808,39.914882,1],[112.5443790641, 37.8700274671, 1]],
          [[116.47808,39.914882,1],[108.3628356575, 22.8194039942, 1]],
          [[116.47808,39.914882,1],[106.2280615534, 38.4860050644, 1]],
          [[116.47808,39.914882,1],[116.3533997885, 37.4345146242, 1]],
          [[116.47808,39.914882,1],[110.7926817959, 32.6313014137, 1]],
          [[116.47808,39.914882,1],[106.92341799, 27.7289651118, 1]],
          [[116.47808,39.914882,1],[118.1743221624, 39.6290848309, 1]],
          [[116.47808,39.914882,1],[114.2915302162, 35.7470722505, 1]],
          [[116.47808,39.914882,1],[122.2391350837, 43.6500832814, 1]],
          [[116.47808,39.914882,1],[116.9585444984, 33.6476821219, 1]],
          [[116.47808,39.914882,1],[114.2998018195, 30.5951668577, 1]],
          [[116.47808,39.914882,1],[120.3778358118, 36.0659879754, 1]],
          [[116.47808,39.914882,1],[111.462097958, 27.2421381467, 1]],
          [[116.47808,39.914882,1],[112.5666955281, 26.8968530319, 1]],
          [[116.47808,39.914882,1],[103.846398194, 30.0784763193, 1]],
          [[116.47808,39.914882,1],[120.5790059003, 31.3005001173, 1]],
          [[116.47808,39.914882,1],[115.9963827984, 29.7079546407, 1]],
          [[116.47808,39.914882,1],[106.5470108308, 29.567527745, 1]],
          [[116.47808,39.914882,1],[115.9684076877, 39.4842404237, 1]],
          [[116.47808,39.914882,1],[109.5050255525, 34.5012344256, 1]],
          [[116.47808,39.914882,1],[120.9774717064, 31.3868146267, 1]],
          [[116.47808,39.914882,1],[111.2807696288, 30.6942871496, 1]],
          [[116.47808,39.914882,1],[120.6953424539, 27.9981231016, 1]],
          [[116.47808,39.914882,1],[118.6713291593, 24.8768083854, 1]],
          [[116.47808,39.914882,1],[116.9891230772, 36.6650501501, 1]],
          [[116.47808,39.914882,1],[106.7906862745, 39.6528880613, 1]],
          [[116.47808,39.914882,1],[109.1157642712, 21.483558868, 1]],
          [[116.47808,39.914882,1],[109.9969207621, 27.5729966095, 1]],
          [[116.47808,39.914882,1],[114.4118174806, 23.1132284052, 1]],
          [[116.47808,39.914882,1],[109.4109033457, 24.3281259833, 1]],
          [[116.47808,39.914882,1],[111.1943271407, 34.7734897116, 1]],
          [[116.47808,39.914882,1],[122.2297228795, 40.6652560934, 1]],
          [[116.47808,39.914882,1],[113.0093547237, 25.773590379, 1]],
          [[116.47808,39.914882,1],[118.4277422313, 31.3542875173, 1]],
          [[116.47808,39.914882,1],[123.4262318695, 41.8031430937, 1]],
          [[116.47808,39.914882,1],[100.2286519506, 25.5946244744, 1]],
          [[116.47808,39.914882,1],[119.3792021488, 25.7229638305, 1]],
          [[116.47808,39.914882,1],[104.7218184409, 31.7591425257, 1]],
          [[116.47808,39.914882,1],[120.2318614857, 29.7161190705, 1]],
          [[116.47808,39.914882,1],[114.5082932984, 38.0421494681, 1]],
          [[116.47808,39.914882,1],[115.7737894178, 33.8459562397, 1]],
          [[116.47808,39.914882,1],[115.4582444667, 38.873076118, 1]],
          [[116.47808,39.914882,1],[116.5181542455, 31.7369484595, 1]],
          [[116.47808,39.914882,1],[110.3544550187, 21.2736281758, 1]],
          [[116.47808,39.914882,1],[120.28077614, 31.9219989113, 1]],
          [[116.47808,39.914882,1],[119.1558681161, 36.7064274553, 1]],
          [[116.47808,39.914882,1],[113.6188780688, 34.7484216297, 1]],
          [[116.47808,39.914882,1],[120.1504383337, 30.2764554112, 1]],
          [[116.47808,39.914882,1],[105.839853405, 32.4378776745, 1]],
          [[116.47808,39.914882,1],[120.8894937439, 31.9817491593, 1]],
          [[116.47808,39.914882,1],[119.4195399076, 32.1914676383, 1]],
          [[116.47808,39.914882,1],[120.0831617141, 30.8951485113, 1]],
          [[116.47808,39.914882,1],[105.5893212565, 30.5356418916, 1]],
          [[116.47808,39.914882,1],[120.5761278967, 30.0329000816, 1]],
          [[116.47808,39.914882,1],[117.8069817928, 30.9470854063, 1]],
          [[116.47808,39.914882,1],[113.1281296916, 27.8307677605, 1]],
          [[116.47808,39.914882,1],[121.4161387076, 28.6589925244, 1]],
          [[116.47808,39.914882,1],[124.3441110886, 43.1639911214, 1]],
          [[116.47808,39.914882,1],[118.0844769942, 24.4822103305, 1]],
          [[116.47808,39.914882,1],[117.3834340596, 32.9172955999, 1]],
          [[116.47808,39.914882,1],[108.9351962803, 34.3427473471, 1]],
          [[116.47808,39.914882,1],[121.4023239083, 29.6573627142, 1]],
          [[116.47808,39.914882,1],[124.0601325188, 40.4511483238, 1]],
          [[116.47808,39.914882,1],[123.9113983984, 47.3522916734, 1]],
          [[116.47808,39.914882,1],[126.9629541289, 46.6506362443, 1]],
          [[116.47808,39.914882,1],[115.8530137077, 28.6853146488, 1]],
          [[116.47808,39.914882,1],[119.2174148635, 34.5977035299, 1]],
          [[116.47808,39.914882,1],[119.6428921308, 29.0810834354, 1]],
          [[116.47808,39.914882,1],[121.4427858653, 37.4625213218, 1]],
          [[116.47808,39.914882,1],[112.9333762442, 28.2313854791, 1]],
          [[116.47808,39.914882,1],[124.3502446825, 39.9982513294, 1]],
          [[116.47808,39.914882,1],[111.6929240795, 29.0346532332, 1]],
          [[116.47808,39.914882,1],[102.8317964747, 24.8827282045, 1]],
        ]
      }, {
        type: 'scatter3D',
        coordinateSystem: 'globe',
        symbol: 'path://M10.4934475,0 C16.2951132,0 20.986895,4.7801896 20.986895,10.6397769 C20.986895,13.4153709 19.9274604,15.8311656 18.2121853,17.7329615 L11.426759,26.4709426 C10.8970417,27.164841 10.0141795,27.164841 9.48446219,26.4709426 L2.67381115,17.7329615 C1.03420998,15.8568656 0,13.3382711 0,10.6397769 C0,4.75448969 4.69178182,0 10.4934475,0 Z M10.2727273,3.21428571 C6.35649277,3.21428571 3.18181818,6.42143656 3.18181818,10.3774694 C3.18181818,14.3336655 6.35657356,17.5406531 10.2727273,17.5406531 C14.188881,17.5406531 17.3636364,14.3336655 17.3636364,10.3774694 C17.3636364,6.42143656 14.188881,3.21428571 10.2727273,3.21428571 Z M10.2727273,4.45023483 C13.5132447,4.45023483 16.1401716,7.1039671 16.1401716,10.3774694 C16.1401716,10.4321502 16.1375863,10.4860149 16.1360514,10.5403692 C13.8206459,13.0024739 11.0714856,12.272118 11.0714856,12.272118 C12.148642,10.5684441 12.0925746,9.96662895 12.2351667,8.84028626 C12.5078287,6.68774017 11.8176505,6.15039938 11.6494483,6.01443192 C10.8212021,5.34479626 8.6299689,5.42273679 8.6299689,5.42273679 C8.6299689,5.42273679 9.47825074,9.11573055 9.47825074,12.2781574 C9.47825074,12.2781574 6.95529896,13.1563146 4.40794899,10.4839745 C4.40722189,10.4483912 4.40528296,10.413216 4.40528296,10.3774694 C4.40528296,7.1039671 7.03220985,4.45023483 10.2727273,4.45023483 Z M9.92258884,6.90205623 C11.1075982,6.87479745 11.2152088,7.82354999 11.2152088,7.82354999 C11.2152088,11.7273504 10.3366312,11.2998609 10.3366312,11.2998609 C10.5083073,9.71770893 9.92258884,6.90205623 9.92258884,6.90205623 Z M10.2727273,16.3047856 C8.2250557,16.3047856 6.42346665,15.2446311 5.37377846,13.6386481 C8.38647161,14.6683609 10.2727273,13.1554985 10.2727273,13.1554985 C12.0643793,14.4579623 14.0118728,14.0460608 15.2290361,13.5482208 C14.1885578,15.2046407 12.3582888,16.3047856 10.2727273,16.3047856 Z',
        // symbol: 'pin',
        symbolSize: 10,
        itemStyle: {
          color: '#005BAC',
        },
        label: {
          show: true,
          position: 'top',
          formatter: '大连万达集团',
          textStyle: {
            color: '#005BAC',
            fontSize: 16,
            fontWeight: 'bold'
          },
        },
        data: [[116.47808, 39.914882, 0]],
        zLevel: 1000
      }]
    })
  }

  render() {
    return (
      <div className="super-home">
        <img src="/img/home-title.png" className="home-title" />
        <div className="home-slogan-container">
          <div className="home-slogan-container-sub">
            <p>万 达 大 数 据 中 心 助 力 商 业 模 式 创 新</p>
          </div>
        </div>
        <div className="home-earth-container">
          <img src="/img/home-earth-oval-1.png" className="home-earth-oval-1" />
          <img src="/img/home-earth-oval-2.png" className="home-earth-oval-2" />
          <div id="home-earth" className="home-earth"></div>

          <div className="home-star-container">
            <img src="/img/star1.png" className="home-background-star star1" />
            <img src="/img/star2.png" className="home-background-star star2" />
            <img src="/img/star3.png" className="home-background-star star3" />
            <img src="/img/star4.png" className="home-background-star star4" />
          </div>
        </div>
        <p className="home-chart-title">万达全球版图</p>
      </div>
    );
  }
}