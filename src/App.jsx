import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <section id="hero">
          <Hero />
        </section>
        <section id="about" className="bg-about bg-cover bg-center bg-no-repeat">
          <About />
        </section>
        <section id="skills" className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section
          id="experience"
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </section>
        <section id="contact" className="relative z-0">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
