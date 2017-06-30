import React, { Component } from 'react';
import {WDPillar, WDImageBar} from '../components';
import './commerce.less';
export default class Commerce extends Component {
  render() {
    const data = ['20, 348, 729','3, 148, 385'];
    const consume = ['31%','43%','26%'];
    const list = [{name:'上海市',val:'10283万元', percentage:'99%'},
    {name:'上海市',val:'10283万元', percentage:'95%'},
    {name:'上海市',val:'10283万元', percentage:'92%'},
    {name:'广州市',val:'9283万元', percentage:'80%'},{name:'天津市',val:'8283万元', percentage:'80%'},
    {name:'上海1市',val:'7283万元', percentage:'78%'},{name:'南昌市',val:'6283万元', percentage:'70%'}
    ,{name:'上海4市',val:'5283万元', percentage:'60%'},
    {name:'上海2市',val:'4283万元', percentage:'50%'},{name:'上海3市',val:'3283万元', percentage:'40%'}];
    const genderList = [
      {
        itemImage: '../assets/icon_male.png',
        percent: 0.4 * 100,
        color: '#4C9DFF',
        minWidth: 11,
      },
      {
        itemImage: '../assets/icon_female.png',
        percent: 0.7 * 100,
        color: '#EA6C6B',
        minWidth: 11,
      },
    ];
    return (
      <div>
        <h1>实体商业</h1>
        <div style={{display:'flex',backgroundImage: 'linear-gradient(0deg, rgba(5,13,50,0.18) 0%, #030A24 93%, #0A0A0A 100%)'}}>
            <div style={{flexGrow:3}}>
              <p>
                <span style={{width:22,height:22,borderRadius:'100%',background:'#fff'}}></span>
                <span style={{fontSize: 25,color: '#FFFFFF'}}>年平均进入商圈人数</span>
              </p>
              <p>
                <span style={{fontSize: 68,color: '#6EC3FF'}}>{data[0]}</span>
                <span style={{fontSize: 25,color: '#000000'}}>人</span>
              </p>
            </div>
            <div style={{flexGrow:3}}>
              <p>
                <span style={{width:22,height:22,borderRadius:'100%',background:'#fff'}}></span>
                <span style={{fontSize: 25,color: '#FFFFFF'}}>年平均进入商圈人数</span>
              </p>
              <p>
                <span style={{fontSize: 68,color: '#6EC3FF'}}>{data[1]}</span>
                <span style={{fontSize: 25,color: '#000000'}}>辆</span>
              </p>
            </div>
            <div style={{flexGrow:1}}>
              <span style={{width:234,height:234,borderRadius:'100%',background:'#fff'}}></span>
            </div>
        </div>
        <div style={{display:"flex"}}>
          <div style={{flex:1}}>
            <div style={{display: 'flex', justifyContent: 'center', marginTop:60}}>
              <WDPillar />
            </div>
            <div>
              <span style={{fontSize:112}}>{'\u007B'}</span>
              <WDImageBar dataList={genderList} />
              <span style={{fontSize:112}}>{'\u007D'}</span>
              <span style={{fontSize:54,color: '#108EE9'}}>{data[0]}</span>
              <span style={{fontSize:30,color: '#108EE9'}}>人</span>
            </div>
          </div>
          <div style={{flex:1}}>
            {list.map((item, i) =>
              <div className="money-container" key={i}>
                <div className="money-city">
                  {`${('0' + (i + 1)).substr(-2)} ${item['name']}` || ''}
                </div>
                <div className="money-center">
                  <div className="money-color-container">
                    <div className="money-color" style={{ width: `${item['percentage']}` }}>
                    </div>
                  </div>
                </div>
                <div className="money-num">
                  {item['val']}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
