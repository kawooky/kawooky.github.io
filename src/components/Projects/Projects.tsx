import React from 'react';
import styles from './Projects.module.css'



interface Props {
    projectsRef: React.RefObject<HTMLDivElement>;
  }

const Projects: React.FC<Props> = ({ projectsRef }) => {



    return (
        <div ref={projectsRef} className={styles.projects}>
            <h1>Projects</h1>
        </div>
    )
}

export default Projects