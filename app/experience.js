import { Suspense } from "react";
import Model from "./model";
import { Center, OrbitControls, Text, Text3D } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Perf />

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />

      <Model />
      <Text fontSize={0.25} font="./font/Oups.otf" position={[0, -0.75, 0]}>
        COMING SOON...
      </Text>
    </>
  );
}
