import React, { Component } from 'react';
import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

export default class Three extends Component {
  componentDidMount() {
    const ThreeDom = this.refs.container;
    const id = `three${Math.random()}`;
    ThreeDom.id = id;
    const {width,height,modelPath} = this.props;
    let container;
    let camera, scene, renderer;
    let model;
    let mouseX = 0, mouseY = 0;
    const windowHalfX = width / 2;
    const windowHalfY = height / 2;

    const init = () => {
      console.log('init...');

      container = document.getElementById(id);
      camera = new THREE.PerspectiveCamera( 45, width / height, 1, 2000 );
      camera.position.z = 250;

      // scene
      scene = new THREE.Scene();

      // 0x82CBFF
      // rgb(2,4,29)
      // rgb(5,17,61)
      const ambient = new THREE.AmbientLight( 'rgb(245,222,179)' );
      scene.add( ambient );

      // const directionalLight = new THREE.DirectionalLight( 'rgb(0 197 205)' );
      const directionalLight = new THREE.PointLight( 'rgb(0 197 205)', 1, 100 );
      directionalLight.position.set( 50, 50, 60 );
      scene.add( directionalLight );

      // texture

      const manager = new THREE.LoadingManager();
      manager.onProgress = function ( item, loaded, total ) {

        console.log( item, loaded, total );

      };

      const texture = new THREE.Texture();

      const onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
      };

      const onError = function ( xhr ) {
      };


      // var loader = new THREE.ImageLoader( manager );
      // loader.load( 'textures/UV_Grid_Sm.jpg', function ( image ) {

      // 	texture.image = image;
      // 	texture.needsUpdate = true;

      // } );

      // model

      const loader = new THREE.OBJLoader( manager );
      loader.load( modelPath, function ( object ) {

        object.traverse( function ( child ) {

          if ( child instanceof THREE.Mesh ) {

            // child.material.map = texture;

          }

        } );

        model = object;
        model.position.y = - 90;
        scene.add( model );

      }, onProgress, onError );

      //

      renderer = new THREE.WebGLRenderer({antialias : true, alpha: true});
      renderer.setClearColor(0xffffff, 0);
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( width, height);
      container.appendChild( renderer.domElement );

      document.addEventListener( 'mousemove', onDocumentMouseMove, false );

      //

      window.addEventListener( 'resize', onWindowResize, false );

    };

    const onWindowResize = () => {

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize( width, height );

    };

    const onDocumentMouseMove = event => {

      mouseX = ( event.clientX - windowHalfX ) / 2;
      mouseY = ( event.clientY - windowHalfY ) / 2;

    };

    //

    const animate = () => {
      requestAnimationFrame( animate );
      render();

    };

    const render = ()=> {
      camera.position.x += ( 97.25 - camera.position.x ) * .05;
      camera.position.y += ( - 9.25 - camera.position.y ) * .05;
      if(model) model.rotation.y += 0.05;

      camera.lookAt( scene.position );

      renderer.render( scene, camera );

    };

    init();
    animate();
  }

  render () {
    return (
      <div ref={'container'} style={this.props.style}></div>
    );
  }

}