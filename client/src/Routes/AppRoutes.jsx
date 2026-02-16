import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Import your page components
import Hero from '../components/Pages/HeroSection';
import HomeAbout from '../components/Pages/HomeAbout';
import AboutPage from '../components/Pages/AboutPage';
import HomeServices from '../components/Pages/HomeServices';
import ServicesPage from '../components/Pages/ServicesPage';
import ProjectsPage from '../components/Pages/ProjectsPage';
import QualityHSE from '../components/Pages/QualityHSE';
import HomeProjects from '../components/Pages/HomeProjects';
import HomeHSE from '../components/Pages/HomeHSE';
import ContactPage from '../components/Pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            <Helmet>
              <title>Multiverse Trading & Contracting Qatar</title>
              <meta name="description" content="Trusted trading and contracting company in Qatar offering civil construction, MEP, fit-out and reliable project solutions."/>
                <link rel="canonical" href="https://multiverseint.com/" />
            </Helmet>

            <Hero />
            <HomeAbout />
            <HomeServices />
            <HomeProjects />
            <HomeHSE />
          </>
        }
      />

      {/* OTHER PAGES */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/hse" element={<QualityHSE />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
