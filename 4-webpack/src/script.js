import "./style.css";
import * as THREE from "three";

// scene
const scene = new THREE.Scene();

// red cude
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const camera = new THREE.PerspectiveCamera(75);
camera.position.z = 3;

scene.add(camera);

// renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.render(scene, camera);
