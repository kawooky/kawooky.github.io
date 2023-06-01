import React from 'react';
import styles from './Projects.module.css'
import { SingleProject } from './SingleProject';
import {projectsInfoObject} from './projectsInfoObject'
import image from './social-lift-picture.png'





interface Props {
    projectsRef: React.RefObject<HTMLDivElement>;
  }

const Projects: React.FC<Props> = ({ projectsRef }) => {



    return (
        <div ref={projectsRef} className={styles.projects}>
            <div className={styles['projects-header']}>

            <h1>Projects</h1>
            </div>

            <div className={styles['projects-body']}>

            <SingleProject projectsInfoObject={projectsInfoObject.socialLift}/>
            <SingleProject projectsInfoObject={projectsInfoObject.ncNews}/>
            <SingleProject projectsInfoObject={projectsInfoObject.personalWebsite}/>
            


            </div>
        </div>
    )
}

export default Projects