import { useRef, useState, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "./pages/landingPage";
import Skills from "./pages/skills";
import ProjectsPage from "./pages/projectsPage";
import ModelViewer from "./components/modelViewer";
import ContactsPage from "./pages/contactsPage";
import Footer from "./layout/footer";
import AwardsPage from "./pages/awardsPage";
import { blenderModel, threeJSConfig } from "./data";
import NavbarLayout from "./layout/navbar/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center h-auto position-relative vw-100">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
          <NavbarLayout />
          <main
            // TODO : Change 
            className="w-100 h-100"
          >
            <LandingPage />
            <Skills />
            <ProjectsPage />
            <AwardsPage />
            <ContactsPage />
            <Footer />
          </main>
        </div>

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
      </div>
    </>
  );
}
