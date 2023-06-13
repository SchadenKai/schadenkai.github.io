import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GltfModel from "./gltfModel";

export default function ModelViewer({ modelPath, scale, position }) {
  return (
    <Canvas camera={{position: [0, 28, -60]}}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1} color="white" position={[10, 10, -8]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
}
