import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// clock
// const clock = new THREE.Clock();

// Gsap

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, y: 1 });

const tick = () => {
  // clock
  //   const elapsedTime = clock.getElapsedTime();
  //   Update Object
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.lookAt(mesh.position);
  //   mesh.position.y += 0.01;
  //   Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
