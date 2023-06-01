import React, { useState } from 'react'
import styles from './Experience.module.css'
import { Timeline } from './Timeline';
import { expArr } from './expObj';






interface Props {
    experienceRef: React.RefObject<HTMLDivElement>;
}

const Experience: React.FC<Props> = ({ experienceRef }) => {

    const [infoIndex, setInfoIndex] = useState(0)


    return (
        <div ref={experienceRef} className={styles.experience}>
            <div className={styles['experience-header']}>
                <h1>Experience</h1>
            </div>
            <div className={styles['experience-body']}>


                <div className={styles['timeline-and-buttons-container']}>
                    <Timeline infoIndex={infoIndex} setInfoIndex={setInfoIndex}/>
                </div>









                <div className={styles.info}>
                    <h2>{expArr[infoIndex].title}</h2>
                    <h2>{expArr[infoIndex].company}</h2>
                    <h3>{expArr[infoIndex].location}</h3>
                    <h4>{expArr[infoIndex].date}</h4>
                    <p>{expArr[infoIndex].description}</p>
        
                </div>
            </div>
        </div>
    )
}

export default Experience