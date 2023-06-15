import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { threeJSConfig } from "../constants";

export default function GltfModel({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
}) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  useFrame((state, delta) => (ref.current.rotation.y += threeJSConfig.rotationSpeed));
  return (
    <>
      <primitive ref={ref} object={gltf.scene} position={position} scale={scale} />
    </>
  );
}
