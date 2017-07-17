import React, {Component} from 'react';
import {BgAnimation} from '../../components';
import HeaderTitle from '../Layout/HeaderTitle';
import './mapScatter.less';

const mapList = [{img:'/img/beijing-tab.png',name:'北京市',data:'',className:'top-left', position:'left'},
	{img:'/img/shanghai-tab.png',name:'上海市',data:'',className:'top-right', position:'right'},
	{img:'/img/guangzhou-tab.png',name:'广州市',data:'',className:'bottom-right', position:'right'},
];

export default class MapScatter extends Component {

	render(){
		return(
			<div>
        <HeaderTitle title="智慧生活：飞凡会员分布地图" className="sum-title"/>
        <BgAnimation />
				<div className="map-scatter">
					<img  className="map-scatter-img" src="/img/map-scatter.png" />
					{mapList.map((item,i)=>(
						<div>
							<div className={`area-map ${item.className}`} key={i}>
								<img src={item.img} className="small-area-img"/>
								<p className={`name ${item.position}`}>{item.name}</p>
							</div>
							<span className={`line line-${i}-0`}></span>
							<span className={`line line-${i}-1`}></span>
						</div>
					))}
				</div>
			</div>
		)
	}
}
