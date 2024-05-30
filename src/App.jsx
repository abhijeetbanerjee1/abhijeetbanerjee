import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Parallax from "./components/Parallax/Parallax";
import Skills from "./components/Skills/Skills";
import WorkExp from "./components/WorkExp/WorkExp";
import Tabs from "./components/FeaturedProj/FeaturedProj";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="About Me">
        <AboutMe />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Experience">
        {/* <Parallax type="experience" /> */}
        <WorkExp />
      </section>
      <section id="Projects">
        {/* <Parallax type="projects" /> */}
        <Tabs />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
