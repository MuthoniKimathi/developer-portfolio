

import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div >
      
      <main>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section>
          <Footer/>
        </section>
      </main>
    </div>
  );
};

export default App;
