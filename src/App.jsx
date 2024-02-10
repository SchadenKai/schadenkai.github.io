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
import ThreeJSBackdrop from "./layout/threeJSBackdrop";
import { ToastContainer } from "react-toastify";

import "./data/meta";
import { page_metadata } from "./data/meta";
import 'react-toastify/dist/ReactToastify.css';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
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
          <main className="vw-100 h-auto">
            <ToastContainer/>
            <LandingPage />
            <Skills />
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
  );
}
