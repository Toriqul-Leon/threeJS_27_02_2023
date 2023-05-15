/* eslint-disable react/no-unknown-property */

import { useRef, useState } from "react";
import * as THREE from "three";
import {
  Center,
  OrbitControls,
  Text3D,
  useHelper,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const [material, setMaterial] = useState();

  const directionalLight = useRef();
  // const donutsRef = useRef();
  const donuts = useRef([]);

  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const [matecapTexture] = useMatcapTexture("7B5254_E9DCC7_B19986_C8AC91", 256);
  console.log(donuts);
  useFrame((state, delta) => {
    //  rotate donut children
    // donutsRef.current.children.forEach((child, index) => {
    //   child.rotation.y += delta * 0.1;
    // });

    donuts?.current?.forEach((child, index) => {
      child.rotation.y += delta * 0.1;
    });
  }, []);

  return (
    <>
      <color attach="background" args={["#fdfeec"]} />
      <Perf position={"top-left"} />
      <OrbitControls />

      <meshMatcapMaterial ref={setMaterial} matcap={matecapTexture} />

      <Center>
        <Text3D
          font={"/fonts/helvetiker_regular.typeface.json"}
          size={0.75}
          height={0.25}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          Hello R3G
        </Text3D>
        {/* one solution */}
        {/* <group ref={donutsRef}>
          {[...Array(100)].map((_, index) => (
            <mesh
              scale={0.2 + Math.random() * 0.2}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
              key={index}
              position={[
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
              ]}
              // geometry={torusGeometry}
              material={material}
            >
              <CustomTorus />
            </mesh>
          ))}
        </group> */}

        {/* another solution */}
        {[...Array(100)].map((_, index) => (
          <mesh
            ref={(element) => (donuts.current[index] = element)}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            key={index}
            position={[
              Math.random() * 10 - 5,
              Math.random() * 10 - 5,
              Math.random() * 10 - 5,
            ]}
            // geometry={torusGeometry}
            material={material}
          >
            <CustomTorus />
          </mesh>
        ))}
      </Center>
    </>
  );
};

export default Experience;

const CustomTorus = () => {
  return <torusGeometry args={[1, 0.6, 16, 32]} attach="geometry" />;
};
