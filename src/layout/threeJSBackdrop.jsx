import { blenderModel, threeJSConfig } from "../data";
import ModelViewer from '../components/modelViewer'

export default function ThreeJSBackdrop() {
  return (
    <div
      style={{
        height: "100vh",
        zIndex: "-1",
      }}
      className="w-100  flex justify-content-evenly items-center position-absolute top-0 start-0 bottom-0 end-0 bg-slate-800"
    >
      <ModelViewer
        modelPath={blenderModel.modelPath}
        scale={threeJSConfig.scale}
        position={threeJSConfig.modelPosition}
      />
      
    </div>
  );
}

