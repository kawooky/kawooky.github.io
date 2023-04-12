import React from 'react';
import styles from './About.module.css'

interface Props {
    aboutRef: React.RefObject<HTMLDivElement>;
  }

const About: React.FC<Props> = ({ aboutRef }) => {



    return (
        <div ref={aboutRef} className={styles.about}>
            <h1>About</h1>
        </div>
    )
}

export default About