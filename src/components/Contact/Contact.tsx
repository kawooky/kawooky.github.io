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
            <form>
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
                <input type='submit' value='CoNtACT mE'></input>
            </form>
            <button onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            Back to the top
            </button>
        </div>
    )
}

export default Contact