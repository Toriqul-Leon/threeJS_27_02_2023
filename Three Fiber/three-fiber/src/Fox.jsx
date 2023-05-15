/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Fox(props) {
  const fox = useGLTF("/Fox/glTF/Fox.gltf");

  const animations = useAnimations(fox.animations, fox.scene);
  console.log(animations);

  useEffect(() => {
    const actions = animations.actions.Run;
    const actionsWalk = animations.actions.Walk;
    actions.play();
    // walk after 3sec
    setTimeout(() => {
      actionsWalk.play();
      actionsWalk.crossFadeFrom(actions, 1);
    }, 3000);
  }, []);

  return (
    <>
      <primitive {...props} object={fox.scene} />
    </>
  );
}
