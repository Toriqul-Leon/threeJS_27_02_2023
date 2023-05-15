import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CustomObject = () => {
  const verticesCount = 10 * 3;
  const geometryRef = useRef();

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);

    for (let i = 0; i < verticesCount * 3; i++)
      positions[i] = (Math.random() - 0.5) * 3;

    return positions;
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          // eslint-disable-next-line react/no-unknown-property
          attach="attributes-position"
          // eslint-disable-next-line react/no-unknown-property
          array={positions}
          // eslint-disable-next-line react/no-unknown-property
          count={verticesCount}
          // eslint-disable-next-line react/no-unknown-property
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial color={"red"} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default CustomObject;
