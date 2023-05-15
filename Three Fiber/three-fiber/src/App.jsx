/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

function App() {
  return (
    <>
      <Canvas
        flat
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [1, 2, 6],
        }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
