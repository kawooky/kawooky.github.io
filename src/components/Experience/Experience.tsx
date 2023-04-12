import React from 'react';
import styles from './Experience.module.css'



interface Props {
    experienceRef: React.RefObject<HTMLDivElement>;
  }

const Experience: React.FC<Props> = ({ experienceRef }) => {



    return (
        <div ref={experienceRef} className={styles.experience}>
            <h1>Experience</h1>
        </div>
    )
}

export default Experience