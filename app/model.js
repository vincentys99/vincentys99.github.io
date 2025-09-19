import { Center, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Model() {
  const { scene } = useGLTF("./scene.gltf");
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;

    // map mouse.x to y-axis rotation
    // const targetRotation = state.pointer.x * Math.PI;

    // ref.current.rotation.y +=
    //   (targetRotation - ref.current.rotation.y) * 2 * delta;

    ref.current.rotation.y += delta;
  });

  return (
    <Center ref={ref}>
      <primitive object={scene} scale={0.3} />
    </Center>
  );
}
