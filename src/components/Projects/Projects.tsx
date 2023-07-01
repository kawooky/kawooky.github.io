import React, { useState } from 'react';
import styles from './Projects.module.css'
import { SingleProject } from './SingleProject';
import { projectsInfoObject } from './projectsInfoObject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp, faHandPointRight, faHandPointLeft, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'






interface Props {
    projectsRef: React.RefObject<HTMLDivElement>;
}

const Projects: React.FC<Props> = ({ projectsRef }) => {

    const [viewNumber, setViewNumber] = useState(0)
    const [viewMore, setViewMore] = useState(false)
    const numbers = [1,2,3]


    return (
        <div ref={projectsRef} className={styles.projects}>
            <div className={styles['projects-header']}>

                <h1>Projects</h1>
            </div>


            <div className={styles['projects-body']}>
                <div className={styles.left}>
                    {viewNumber > 0 && <FontAwesomeIcon icon={faHandPointLeft} size={'xl'} onClick={() => { setViewNumber(viewNumber - 1) }} />}

                </div>
                {viewMore === false && (
                    <>
                        <SingleProject projectsInfoObject={projectsInfoObject[viewNumber]} />
                        <SingleProject projectsInfoObject={projectsInfoObject[viewNumber + 1]} />
                        <SingleProject projectsInfoObject={projectsInfoObject[viewNumber + 2]} />
                    </>
                )}

                <>
                    {viewMore === true && projectsInfoObject.map((project) => <SingleProject projectsInfoObject={project}/>
                    )}
                </>

                <div className={styles.right}>
                    {viewNumber !== 1 &&
                        <FontAwesomeIcon icon={faHandPointRight} size={'xl'} onClick={() => { setViewNumber(viewNumber + 1) }} />
                    }
                </div>

            </div>
            <div className={styles.bottom}>
                {viewMore === false &&
                    <FontAwesomeIcon icon={faCircleChevronDown} size={'xl'} onClick={() => {
                        setViewMore(true)
                    }} />
                }
                {viewMore === true &&
                    <FontAwesomeIcon icon={faCircleChevronUp} size={'xl'} onClick={() => {
                        setViewMore(false)
                    }} />
                }
            </div>
        </div>
    )
}

export default Projects