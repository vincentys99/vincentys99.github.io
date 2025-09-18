import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Model from "./model";

export default function Experience() {
  return (
    <>
      <Perf />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />

      <Suspense>
        <Model />
      </Suspense>
    </>
  );
}
