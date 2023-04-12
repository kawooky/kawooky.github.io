import React, { useRef} from 'react';
import styles from './App.module.css'
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';


const App: React.FC = () => {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  return (
    <div className={styles.App}>
      <LandingPage homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} contactRef={contactRef} />
      <About aboutRef={aboutRef}/>
      <Experience experienceRef={experienceRef}/>
      <Projects projectsRef={projectsRef}/>

      <Contact homeRef={homeRef} contactRef={contactRef}/>
    </div>
  );
}

export default App;
