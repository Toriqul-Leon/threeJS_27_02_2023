/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

function App() {
  return (
    <>
      <Canvas
        shadows
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.LinearEncoding,
        }}
        camera={{
          fov: 45,
          position: [3, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
