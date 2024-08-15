import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GltfModel from "./gltfModel";
import { modelViewerConfig } from "../data";
import { OrbitControls, Stars } from "@react-three/drei";

export default function ModelViewer({ modelPath, scale, position }) {
  const { camera, ambientLight, directionalLight } = modelViewerConfig;
  return (
    <Canvas
      camera={{ position: camera.position ?? [0, 0, 0] }}
    >
      {/* <OrbitControls /> */}
      <Stars />
      <ambientLight intensity={ambientLight.intensity ?? 10} />
      <directionalLight
        intensity={directionalLight.intensity ?? 1}
        color={directionalLight.color ?? "white"}
        position={directionalLight.position ?? [0, 0, 0]}
      />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
}
