import React, { Component } from 'react';
import * as THREE from 'three';
import HeaderTitle from './Layout/HeaderTitle';
import './hello.less';
import {ThreeModel} from '../components';

export default class Hello extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 400, 400 );
    this.refs.threeTest.appendChild( renderer.domElement );
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
    renderer.render( scene, camera );
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <HeaderTitle title={'万达大数据-商圈分析'} />
        <h1>Hello World!</h1>
        <p>Test - REM</p>
        <div className="test-background">测试CSS图片</div>


        <svg className="test-svg" viewBox="0 0 597 52" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs />
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.79834692">
            <g id="商圈-客群画像" transform="translate(-1323.000000, -96.000000)">
              <g id="边框"
                 transform="translate(1622.500000, 122.000000) scale(-1, 1) translate(-1622.500000, -122.000000) translate(1326.000000, 97.000000)">
                <g opacity="0.699898098">
                  <polyline className="test-svg-polyline" id="Line" stroke="#108EE9" strokeWidth="3"
                            strokeLinecap="square"
                            points="2 49.5 127.5 49.5 174.5 20.5 415.5 20.5 453.5 49.5 593 49.5 563.5 9 507.5 9"></polyline>
                  <circle className="test-svg-circle" id="Oval-7" stroke="#108EE9" cx="505.840359" cy="8.84035926"
                          r="8.84035926"></circle>
                  <circle id="Oval-7" fill="#108EE9" cx="505.680719" cy="8.68071852" r="5.68071852"></circle>
                  <circle id="Oval-7" fill="#108EE9" cx="471" cy="32" r="5.68071852"></circle>
                  <circle id="Oval-7" fill="#108EE9" cx="494.333333" cy="32" r="5.68071852"></circle>
                  <circle id="Oval-7" fill="#108EE9" cx="517.666667" cy="32" r="5.68071852"></circle>
                  <circle id="Oval-7" fill="#108EE9" cx="541" cy="32" r="5.68071852"></circle>
                  <path d="M0,19.5 L154.640015,19.5" id="Line" stroke="#108EE9" strokeLinecap="square"></path>
                  <path d="M160.5,40 L424.640015,40" id="Line" stroke="#108EE9" strokeWidth="2" strokeLinecap="round"
                        strokeDasharray="4"></path>
                  <path d="M0,30.5 L138.636961,30.5" id="Line" stroke="#108EE9" strokeLinecap="square"></path>
                  <rect id="Rectangle-Copy-2" fill="#108EE9" opacity="0.595391757" x="34" y="28" width="70"
                        height="4"></rect>
                </g>
              </g>
            </g>
          </g>
        </svg>


        <p>测试Three</p>
        <div ref="threeTest" style={{float:'left'}}></div>
        <ThreeModel width={400} height={400} modelPath={'/model/male02/male02.obj'}/>
        <ThreeModel width={400} height={400} modelPath={'/model/female02/female02.obj'}/>

      </div>
    );
  }
}
