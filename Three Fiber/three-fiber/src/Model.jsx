/* eslint-disable react/no-unknown-property */
import { Clone, useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/hamburger.glb");

  return (
    <>
      <Clone object={model.scene} scale={0.35} position-y={-1} />
      <Clone
        object={model.scene}
        scale={0.35}
        position-y={-1}
        position-x={-4}
      />
    </>
  );
};

export default Model;

useGLTF.preload("/hamburger.glb");
