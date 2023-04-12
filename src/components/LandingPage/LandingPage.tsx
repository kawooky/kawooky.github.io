import React from 'react';
import styles from './LandingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar';


interface Props {
    homeRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }

const LandingPage: React.FC<Props> = ({ homeRef, aboutRef, experienceRef, projectsRef, contactRef }) => {





    return (
        <div ref={homeRef} className={styles['landing-page']}>
            <Navbar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} projectsRef={projectsRef} contactRef={contactRef} />

            <div className={styles['text-box']}>
                <h2>Hello World...</h2>
                <h1>I'm Youssef Kawook</h1>
                <h2>A Full Stack Developer currently based in Leeds, UK. </h2>
            </div>

            <div className={styles.icon}>
                <FontAwesomeIcon icon={faComputerMouse} bounce />
            </div>
        </div>
    )
}

export default LandingPage