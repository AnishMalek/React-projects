import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import { useEffect } from "react";
import Lenis from "lenis";
import About from "./pages/About";
import Footer from "./component/Footer";
import ServicesPage from "./pages/ServicesPage";
import ScrollToTop from "./component/ScrollToTop";

import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment/MobileAppDevelopment";
import CloudDevOps from "./pages/CloudDevOps/CloudDevOps";
import CyberSecurity from "./pages/CyberSecurity/CyberSecurity";
import UIUXDesign from "./pages/UIUXDesign/UIUXDesign";
import AIML from "./pages/AIML/AIML";
import Contact from "./component/Contact";
import Team from "./pages/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header />
      <Home />
      <ScrollToTop />
      <Footer />

    </>
  },
  {
    path: "/about",
    element: <>
      <Header />
      <About />
      <Footer />
      <ScrollToTop />

    </>
  },

  {
    path: "/services",
    element: <>
      <Header />
      <ServicesPage />
      <ScrollToTop />
      <Footer />
    </>
  },

  {
    path: "/team",
    element: <>
      <Header />
      <Team />
      <ScrollToTop />
      <Footer />
    </>
  },


  {
    path: "web-development",
    element: <>
      <Header />
      <WebDevelopment />
      <Footer />
    </>
  },
  {
    path: "/services/mobile-app-development",
    element: <>
      <Header />
      <MobileAppDevelopment />
      <Footer />
    </>
  },

  {
    path: "/services/cloud-devops",
    element: <>
      <Header />
      <CloudDevOps />
      <Footer />
    </>
  },

  {
    path: "/services/cyber-security",
    element: <>
      <Header />
      <CyberSecurity />
      <Footer />
    </>
  },
  {
    path: "/services/ui-ux-design",
    element: <>
      <Header />
      <UIUXDesign />
      <Footer />
    </>
  },
  {
    path: "/services/ai-ml",
    element: <>
      <Header />
      <AIML />
      <Footer />
    </>
  },

  {
    path: "/contact",
    element: <>
      <Header />
      <Contact />
      <Footer />
    </>
  },


]);

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 3,
      wheelMultiplier: 1
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
};

export default App; 