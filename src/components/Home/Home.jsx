import React from "react";
import { Helmet } from 'react-helmet-async';
const NavBar = React.lazy(() => import("../NavBar/NavBar"));
const Presentation = React.lazy(() => import("../Presentation/Presentation"));
const About = React.lazy(() => import("../About/About"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const Skills = React.lazy(() => import("../Skills/Skills"));
const SavoirFaire = React.lazy(() => import("../SavoirFaire/SavoirFaire"));
const Solutions = React.lazy(() => import("../Solutions/Solutions"));
const Projects = React.lazy(() => import("../Projects/Projects"));


const Home = () => {
  return (
    <div>
      <Helmet>
          <title>Accueil - Allagui Séverine</title>
      </Helmet>
      <NavBar />
      <Presentation />
      <About />
      <Skills />
      <SavoirFaire />
      <Solutions />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
