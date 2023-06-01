import React, { useState } from 'react'
import styles from './SingleProject.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faDesktop } from '@fortawesome/free-solid-svg-icons'




interface Props {
    projectsInfoObject: info
}

interface info {
    image: string;
    name: string;
    description: string
    languages: string;
    github: string;
    website: string
}


export const SingleProject: React.FC<Props> = ({ projectsInfoObject }) => {
    return (
        <div className={styles.SingleProject} onClick={()=>{window.open(projectsInfoObject.github, '_blank')}}>
                <div className={styles['image-container']}>
                    <img className={styles.image} src={projectsInfoObject.image} alt="project" />
                </div>



            <div className={styles.info}>
                <div className={styles['name-and-links-container']}>
                <h1 className={styles.name}>{projectsInfoObject.name}</h1>

                <div className={styles['links-container']}>
                {projectsInfoObject.website !== 'N/A' && <FontAwesomeIcon icon={faDesktop} size='lg' onClick={()=>{window.open(projectsInfoObject.website, '_blank')}}/> }
                {/* <FontAwesomeIcon icon={faDesktop} size='lg' onClick={()=>{window.open(projectsInfoObject.website, '_blank')}}/>  */}

                <FontAwesomeIcon icon={faGithubSquare} size='xl' onClick={()=>{window.open(projectsInfoObject.github, '_blank')}}/>
                </div>
                </div>
                <p className={styles.description}>{projectsInfoObject.description}</p>
                <p className={styles.languages}>Languages: {projectsInfoObject.languages}</p>
                


            </div>
        </div>
    )
}