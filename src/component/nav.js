// import React from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// const Nav = () => {
//   console.log(GLTFLoader)
//   const scene = new THREE.Scene();
// 	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// 	const renderer = new THREE.WebGLRenderer();
// 	renderer.setSize( window.innerWidth, window.innerHeight );

// 	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 	const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 	const cube = new THREE.Mesh( geometry, material );
// 	scene.add( cube );
	
//   const planeGeometry = new THREE.PlaneGeometry( 5,5 );
// 	const Planematerial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// 	const plane = new THREE.Mesh( planeGeometry, Planematerial );
// 	scene.add( plane );
//   plane.rotation.x =-0.5 * Math.PI
  
//   const grid = new THREE.GridHelper( 5,5 );
// 	scene.add( grid );
// 	camera.position.z = 5;

//   const orbit = new OrbitControls(camera,renderer.domElement)
//   orbit.update()
// 	function animate() {
// 	requestAnimationFrame( animate );

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// 	};
//   const loader = new GLTFLoader();

//   // loader.load( './model/scene.gltf', function ( gltf ) {
//   //   const model =  gltf.scene 
//   //   scene.add( model );
//   //   model.scale.set(0.1,0.1,0.1)
        
//   //     }, undefined, function ( error ) {

//   //       console.error( error );

//   //     } );
//   const jalan = renderer.render( scene, camera );

//   return (
//     <div>
//       { animate()}
//     </div>
//   );
// }

// export default Nav;
