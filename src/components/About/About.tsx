import React from 'react';
import styles from './About.module.css'
import profileImg from './10442350_8503992191299832-modified.png'

interface Props {
    aboutRef: React.RefObject<HTMLDivElement>;
}

const About: React.FC<Props> = ({ aboutRef }) => {



    return (
        <div ref={aboutRef} className={styles.about}>
            <div className={styles['about-header']}>
                <h1>About Me</h1>
            </div>
            <div className={styles['about-body']}>
                <div className={styles.picture}>
                    <img src={profileImg} alt="profile pic" width='300' height="300" />
                </div>
                <div className={styles['about-me']}>
                    <h2>Who am I?</h2>
                    <h3>Hi! In 2021, I graduated from The University of
                        Leeds with a first in Mathematics. <br /><br />

                        In February 2023, I completed the Northcoders
                        full-time, 13-week software development bootcamp. <br /> <br />

                        I'm at the start of my professional career. I'm
                        looking for work that will allow me to develop
                        both my technical and soft skills.<br /> <br />

                        In the distant future, I wish to be an expert of
                        my craft and a leader working towards making a
                        positive change.<br /> <br />

                        Strengths - drive, teamwork and problem
                        solving<br /> <br />

                        Values - compassion, integrity and development.<br /> <br />

                        Some of my hobbies away from the screens are
                        runnning, tennis, traveling and cooking.</h3>
                </div>
                <div className={styles.skills}>
                    <h2>Languages:</h2>
                    <h3>Javascript<br />
                        Typescript<br />
                        Node<br />
                        React<br />
                        React Native<br />
                        HTML<br />
                        CSS<br />
                        Express<br />
                        SQL<br />
                        Jest<br />
                        Python
                        </h3>

                        <h2>Other skills:</h2>
                        <h3>
                            Github<br />
                            OOP<br />
                            TDD<br />
                        </h3>
                </div>
            </div>

        </div>
    )
}

export default About