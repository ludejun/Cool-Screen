import React, { Component } from 'react';
import Commerce from './Commerce';
import Home from './index';
import HomeInternet from './HomeInternet';
import './homesum.less';
export default class HomeSum extends Component{

	render(){
		return(
			<div className="home-sum flex-row" >
				<div className="flex1">
					<Commerce/>
				</div>
				<div className="flex1">
					<Home />
				</div>
				<div className="flex1">
					<HomeInternet />
				</div>
			</div>
		);
	}

}
