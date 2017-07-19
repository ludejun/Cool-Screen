import React, { Component } from 'react';
import { WDButtonSvg } from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import AppleLogo from './AppleLogo';
import AndroidLogo from './AndroidLogo';
import LifeOSUVDotBg from './LifeOSUVDotBg';
import LifeOSUVRoundBoard from './LifeOSUVRoundBoard';
import LifeOSUVTags from './LifeOSUVTags';
import LifeOSUVTagLine from './LifeOSUVTagLine';

import './LifeOSUV.less';
import './LifeOSUVAnime.less';

export default class LifeOSUV extends Component {
  constructor() {
    super();

    this.state = {
      highlightTag: 0
    };
    this.highlightInterval = null;

    //     1	ios	广场	27712	23.060855961188	46.121711922376
    // 2	ios	优惠券	24214	20.1499554793666	40.2999109587331
    // 3	ios	电影	20070	16.7014787507593	33.4029575015187
    // 4	ios	闪购	16394	13.6424535445914	27.2849070891827
    // 5	ios	门店	14985	12.46993817041	24.93987634082
    // 6	ios	其它	16794	13.9753180936847	27.9506361873695
    // 	ios	外圈sum	62767	52.2322728823573	104.464545764715
    // 	ios	内圈sum	57402	47.7677271176427	95.5354542352853
    // 		sum	120169		200

    //     1	android	广场	52324	28.5563032456298	57.1126064912597
    // 2	android	闪购	35292	19.2609329207394	38.5218658414788
    // 3	android	优惠券	34085	18.6022015925253	37.2044031850506
    // 4	android	门店	19276	10.5200539210068	21.0401078420136
    // 5	android	电影	16334	8.91443041843356	17.8288608368671
    // 6	android	其它	25920	14.1460779016651	28.2921558033302
    // 	android	外圈sum	102743	56.0729352565887	112.145870513177
    // 	android	内圈sum	80488	43.9270647434113	87.8541294868226
    // 		sum	183231	100	200

    this.list = {
      ios: {
        out: '46% 40% 34% 27% 25% 28%',
        in: '33% 27% 22% 20.5% 22.5% 46%',
        offset: '-37%',
        tags: [
          { title: '广场', percent: 23 },
          { title: '优惠券', percent: 20 },
          { title: '电影', percent: 17 },
          { title: '闪购', percent: 14 },
          { title: '门店', percent: 12 },
          { title: '其它', percent: 14, line: 'L120,120 L154,120' }
        ]
      },
      android: {
        out: '57% 39% 37% 21% 18% 28%',
        in: '32% 30% 17% 14.5% 22.5% 51%',
        offset: '-46%',
        tags: [
          { title: '广场', percent: 29 },
          { title: '优惠券', percent: 19 },
          { title: '电影', percent: 9 },
          { title: '闪购', percent: 19 },
          { title: '门店', percent: 11 },
          { title: '其它', percent: 13 }
        ]
      }
    };
  }

  componentDidMount() {
    // clearInterval(this.highlightInterval);
    // this.highlightInterval = setInterval(() => {
    //   this.setState({
    //     highlightTag: (this.state.highlightTag + 1) % 6
    //   });
    // }, 2000);
  }
  componentWillUnmount() {
    // clearInterval(this.highlightInterval);
  }

  render() {
    const { highlightTag } = this.state;
    return (
      <div className="life-osuv flex-row flex-center dark-bg">
        <HeaderTitle title="智慧生活：按照移动OS类型／应用UV对比" />
        {Object.keys(this.list).map(v =>
          <div className={`dotted-panel panel-${v} flex1`} key={v}>
            <LifeOSUVDotBg className="dot-bg" />
            <LifeOSUVRoundBoard
              className="round-board"
              outerDashArray={{ strokeDasharray: this.list[v].out }}
              innerDashArray={{
                strokeDasharray: this.list[v].in,
                strokeDashoffset: this.list[v].offset
              }}
            />
            {v === 'ios'
              ? <AppleLogo className="center-logo" />
              : <AndroidLogo className="center-logo" />}
            <WDButtonSvg className="title-button" title={v} />
            {this.list[v].tags.map((t, i) =>
              <div>
                <LifeOSUVTagLine className={`tag-line tag-line-${v}-${i}`} line={t.line} />
                <LifeOSUVTags key={i} className={`tags tags-${v}-${i}`} {...t} type={i % 3} />
              </div>
            )}
            {false &&
              <LifeOSUVTags
                className={`tags tags-${v}-${highlightTag}`}
                {...this.list[v].tags[highlightTag]}
                type={highlightTag % 3}
              />}
          </div>
        )}
      </div>
    );
  }
}
