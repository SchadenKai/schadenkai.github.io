import "./App.css";
import { useRef, useState, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "./components/pages/landingPage";
import TechStack from "./components/pages/techStack";
import ProjectsPage from "./components/pages/projectsPage";
import ModelViewer from "./components/modelViewer";
import ContactsPage from "./components/pages/contactsPage";
import Footer from "./components/layout/footer";

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
            <ContactsPage />
            <Footer />
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
