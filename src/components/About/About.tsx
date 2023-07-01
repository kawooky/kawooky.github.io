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
                    <img src={profileImg} alt="profile pic" width="60%" height="auto" />
                </div>
                <div className={styles['about-me']}>
                    <h2>Who am I?</h2>
                    <p> In 2021, I graduated from The University of
                        Leeds with a first in Mathematics. <br /><br />

                        February 2023, I completed the Northcoders
                        full-time, 13-week software development bootcamp. <br /> <br />

                        I'm at the start of my professional career, looking for work that will allow me to develop
                        both my technical and soft skills.<br /> <br />

                        In the distant future, I wish to be an expert of
                        my craft and a leader working towards making a
                        positive change.<br /> <br />

                        Strengths - drive, teamwork and problem
                        solving<br /> <br />

                        Values - compassion, integrity and development.<br /> <br />

                        Some of my hobbies away from the screens are
                        runnning, tennis, traveling and cooking.</p>
                </div>
                <div className={styles.skills}>
                    <h2>Skills: </h2>
                    <div className={styles["skill-box-container"]}>
                        <div className={styles["skill-box"]}>
                            <h3>Javascript</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>Typescript</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>Node.js</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>React</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>React Native</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>HTML</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>CSS</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>Express</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>SQL</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>Jest</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>Python</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>Github</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>OOP</h3>
                        </div>
                        <div className={styles["skill-box"]}>
                            <h3>TDD</h3>
                        </div>

                    </div>



                    {/* <h3>Javascript<br />
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
                        Github<br />
                        OOP<br />
                        TDD<br />
                    </h3> */}
                </div>
            </div>

        </div>
    )
}

export default About