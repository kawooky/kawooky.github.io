import React from 'react';
import styles from './Contact.module.css'



interface Props {
    homeRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
  }

const Contact: React.FC<Props> = ({ homeRef, contactRef }) => {



    return (
        <div ref={contactRef} className={styles.contact}>
            <h1>Contact</h1>
            <button onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            Back to the top
            </button>
        </div>
    )
}

export default Contact