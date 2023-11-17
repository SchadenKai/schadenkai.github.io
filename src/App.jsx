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
      <div className="d-flex flex-column justify-content-center align-items-center h-auto position-relative vw-100">
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
          <NavbarLayout />
          <main
            // TODO : Change
            className="w-100 h-100"
            z
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
