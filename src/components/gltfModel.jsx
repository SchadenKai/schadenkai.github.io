import { useContext, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { threeJSConfig } from "../data";
import { GeneralContext } from "../App";

export default function GltfModel({
  modelPath,
  scale = 40,
  position = [0, 0, 0],
}) {
  const generalContext = useContext(GeneralContext)
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  useFrame((state, delta) => (ref.current.rotation.y = generalContext.scrollY * 0.0009));
  return (
    <>
      <primitive ref={ref} object={gltf.scene} position={position} scale={scale} />
    </>
  );
}
