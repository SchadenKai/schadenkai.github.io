import { useRef, useState, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "./pages/landingPage";
import Skills from "./pages/skills";
import ProjectsPage from "./pages/projectsPage";
import ContactsPage from "./pages/contactsPage";
import Footer from "./layout/footer";
import AwardsPage from "./pages/awardsPage";
import NavbarLayout from "./layout/navbar/navbar";
import ThreeJSBackdrop from "./layout/threeJSBackdrop";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <>
      <div style={{width: "100dvw", height: "100dvh"}} className="d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 w-100">
          <NavbarLayout />
          <main
            className="w-100 h-100"
          >
            <LandingPage />
            {/* <Skills /> */}
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
