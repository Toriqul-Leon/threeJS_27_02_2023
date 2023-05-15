/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import {
  Center,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import portalVertexShader from "/public/portal/shaders/vertex.js";
import portalFragmentShader from "/public/portal/shaders/fragment.js";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const { nodes } = useGLTF("/public/portal/portal.glb");
  const bakedTexture = useTexture("/public/portal/baked.jpg");
  // bakedTexture.flipY = false;
  const portalMaterialRef = useRef();

  useFrame((state, delta) => {
    portalMaterialRef.current.uniforms.uTime.value += delta;
  }, []);

  return (
    <>
      <color attach="background" args={["#201919"]} />
      <Perf position={"top-left"} />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </mesh>

        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>
        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
        >
          <shaderMaterial
            ref={portalMaterialRef}
            vertexShader={portalVertexShader}
            fragmentShader={portalFragmentShader}
            uniforms={{
              uTime: { value: 0 },
              uColorStart: { value: new THREE.Color("#ffffff") },
              uColorStaEnd: { value: new THREE.Color("#000000") },
            }}
          />
        </mesh>
        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  );
};

export default Experience;
