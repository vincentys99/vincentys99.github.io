"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience";

export default function Home() {
  return (
    <Canvas
      style={{
        backgroundImage: "url('/warning_line.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Experience />
    </Canvas>
  );
}
