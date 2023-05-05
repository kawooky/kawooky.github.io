import React from 'react';
import styles from './Projects.module.css'



interface Props {
    projectsRef: React.RefObject<HTMLDivElement>;
  }

const Projects: React.FC<Props> = ({ projectsRef }) => {



    return (
        <div ref={projectsRef} className={styles.projects}>
            <h1>Projects</h1>

            <div>
            <h2>Social News platform</h2>
            <h3>Languages: Express, SQL, Javascript, React</h3>
            </div>

            <div>
            <h2>Social Gym Mobile Application</h2>
            <h3>Languages: Firebase, Javascript, React Native, Socket.io</h3>
            </div>

            <div>
            <h2>Pokemon Fighter (OOP)</h2>
            <h3>Languages: Javascript, Node?, What i used to run it</h3>
            </div>

            <div>
            <h2>Project in mathematics dissertation</h2>
            <h3>Languages: Python</h3>
            </div>
        </div>
    )
}

export default Projects