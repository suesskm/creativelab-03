import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

var width = window.innerWidth;
var height = window.innerHeight;


// 1: Set up the scene

var scene = new THREE.Scene();

// 2: Add a camera
var camera = new THREE.PerspectiveCamera(75,width/height,0.1,1000);
camera.position.z = 8;
camera.position.y = 3;
camera.rotation.x = -0.1;



// 3: create a renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);


// 4: Add objects to the scene
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0x0000ff});
var cube = new THREE.Mesh(geometry,material);
scene.add(cube);

cube.position.set(0,2,-2);
cube.scale.x = 2;

//add plane
const geometryPlane = new THREE.PlaneGeometry( 1, 1 );
const materialPlane = new THREE.MeshLambertMaterial( {color: "#61baff", side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometryPlane, materialPlane);
scene.add( plane );

plane.rotation.x = THREE.MathUtils.degToRad(90);
plane.scale.x = 60;     
plane.scale.y = 60;


var lightSize = 2;
// 5: Add lighting to the scene
var light = new THREE.PointLight(0xFFFFF,lightSize,200)
light.position.set(0,3,0);
scene.add(light);


// FINAL: Render the scene
function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene,camera);
}

animate();