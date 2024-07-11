import React from 'react';
import styles from './LandingPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Navbar/Navbar';
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"


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
            <div className={styles['mobile-body']}>
                <div className={styles['mobile-text-box']}>
                                <p>Hello World,</p>
                                <h1>I'm Youssef Kawook</h1>
                                <p>A Full Stack Developer currently based in Leeds, UK. </p>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles['links-and-text-container']}>
                    <div className={styles['links-container']}>
                        <div className={styles.links}>
                            <FontAwesomeIcon icon={faInstagram} size='2xl' onClick={() => { window.open('https://www.instagram.com/kawooky/', '_blank') }} />
                            <FontAwesomeIcon icon={faGithubSquare} size='2xl' onClick={() => { window.open('https://github.com/kawooky', '_blank') }} />
                            <FontAwesomeIcon icon={faLinkedin} size='2xl' onClick={() => { window.open('https://www.linkedin.com/in/youssef-kawook/', '_blank') }} />
                        </div>
                    </div>

                    <div className={styles['text-box']}>
                        <div>
                            <h2>Hello World,</h2>
                            <h1>I'm Youssef Kawook</h1>
                            <h2>A Full Stack Developer currently based in Leeds, UK. </h2>

                        </div>
                    </div>

                </div>

                <div className={styles['icon-container']}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faComputerMouse} bounce size={'xl'} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default LandingPage