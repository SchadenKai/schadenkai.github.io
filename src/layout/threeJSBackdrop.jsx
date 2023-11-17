import { blenderModel, threeJSConfig } from "../data";
import ModelViewer from '../components/modelViewer'

export default function ThreeJSBackdrop() {
  return (
    <div
      style={{
        height: "100vh",
        zIndex: "-10",
      }}
      className="w-100  d-flex justify-content-evenly align-items-center position-absolute top-0 start-0 bottom-0 end-0"
    >
      <ModelViewer
        modelPath={blenderModel.modelPath}
        scale={threeJSConfig.scale}
        position={threeJSConfig.modelPosition}
      />
      
    </div>
  );
}

