import React from 'react';
import styles from './Contact.module.css'



interface Props {
    homeRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<Props> = ({ homeRef, contactRef }) => {



    return (
        <div ref={contactRef} className={styles.contact}>
            <div className={styles['contact-header']}>
                <h1>Contact</h1>

            </div>
            <div className={styles['contact-body']}>


            <form className={styles.form}>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <label>
                    Email Address:
                    <input type='text' name='email' />
                </label>
                <label>
                    Message:
                    <input type='text' name='message' />
                </label>
                <input type='submit' value='Send Message'></input>
            </form>

            <button className={styles['top-button']} onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                Back to the top
            </button>

            </div>
        </div>
    )
}

export default Contact