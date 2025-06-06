import { Helmet, HelmetProvider } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingPage from "./pages/landingPage";
import Skills from "./pages/skills";
import ProjectsPage from "./pages/projects";
import ContactsPage from "./pages/contactsPage";
import Footer from "./layout/footer";
import AwardsPage from "./pages/awards";
import BlogPage from "./pages/blogs";
import NavbarLayout from "./layout/navbar";
import WorkExperiencePage from "./pages/work_experience";
import ThreeJSBackdrop from "./layout/threeJSBackdrop";
import { ToastContainer } from "react-toastify";

import "./data/meta";
import { page_metadata } from "./data/meta";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);
export const GeneralContext = createContext();

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = (e) => {
    console.log(e.target.scrollTop);
    setScrollY(e.target.scrollTop);
  };
  return (
    <GeneralContext.Provider value={{scrollY : scrollY}}>
      <HelmetProvider>
        <title>{page_metadata.title}</title>
        <meta name="description" content={page_metadata.description} />
        {/* fb metadata */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://schadenkai.github.io/" />
        <meta property="og:title" content={page_metadata.title} />
        <meta property="og:description" content={page_metadata.description} />
        <meta property="og:image" content={page_metadata.imageUrl} />
        <div className="d-flex flex-column justify-content-center align-items-center position-relative w-100 small-mobile">
          <div className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100">
            <NavbarLayout />
            <main onScroll={(e) => handleScroll(e)} className="vw-100 h-auto backdrop-brightness-50">
              <ToastContainer />
              <LandingPage />
              <Skills />
              <WorkExperiencePage />
              <ProjectsPage />
              <AwardsPage />
              <BlogPage />
              <ContactsPage />
              <Footer />
            </main>
          </div>
          <ThreeJSBackdrop />
        </div>
      </HelmetProvider>
    </GeneralContext.Provider>
  );
}
