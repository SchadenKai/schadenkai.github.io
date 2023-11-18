import { useRef, useState, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "./pages/landingPage";
import Skills from "./pages/skills";
import ProjectsPage from "./pages/projects";
import ContactsPage from "./pages/contactsPage";
import Footer from "./layout/footer";
import AwardsPage from "./pages/awards";
import NavbarLayout from "./layout/navbar";
import ThreeJSBackdrop from "./layout/threeJSBackdrop";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      <div style={{height: "100dvh"}} className="d-flex flex-column justify-content-center align-items-center position-relative w-100">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
          <NavbarLayout />
          <main
            className="vw-100 h-100"
          >
            <LandingPage />
            <Skills />
            <ProjectsPage />
            <AwardsPage />
            <ContactsPage />
            <Footer />
          </main>
        </div>
        <ThreeJSBackdrop />
      </div>
    </>
  );
}
