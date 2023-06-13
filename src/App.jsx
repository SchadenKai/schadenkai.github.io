import "./App.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState, Suspense, useEffect } from "react";
import {
  CameraControls,
  CubeCamera,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import reactLogo from "./assets/react.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Euler } from "three";
import Blob from "./assets/blob.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import ASScroll from "@ashthornton/asscroll";
import LandingPage from "./components/pages/landingPage";
import TechStack from "./components/pages/techStack";
import ProjectsPage from "./components/pages/projectsPage";
import ModelViewer from "./components/modelViewer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {}, []);
  return (
    <>
      <wrapper className="d-flex flex-column justify-content-center align-items-center h-auto position-relative ">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
          {/* <Navbar /> */}
          <div
            style={{ overflowY: "scroll", scrollbarbehavior: "smooth" }}
            className="w-100 h-100"
          >
            <LandingPage />
            <TechStack />
            <ProjectsPage />
          </div>
        </div>

        <div
          style={{
            height: "100vh",
            zIndex: "-10",
          }}
          className="w-100  d-flex justify-content-evenly align-items-center position-absolute top-0 start-0 bottom-0 end-0"
        >
          <ModelViewer
            modelPath={"./fantasy_island.glb"}
            scale="0.5"
            position={[0, 0, 0]}
          />
        </div>
      </wrapper>
    </>
  );
}
