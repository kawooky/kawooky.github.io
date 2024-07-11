import React , {useState} from 'react';
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuttleSpace } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

interface ContactMeForm {
    name: string;
    email: string;
    message: string;
  }


interface Props {
    homeRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
}

const Contact: React.FC<Props> = ({ homeRef, contactRef }) => {
    const [formValues, setFormValues] = useState<ContactMeForm>({
        name: '',
        email: '',
        message: '',
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform actions with the form values (e.g., send the data to a server)
        console.log(formValues);
        // Reset the form after submission
        setFormValues({
          name: '',
          email: '',
          message: '',
        });
      };


    return (
        <div ref={contactRef} className={styles.contact}>
            <div className={styles['contact-header']}>
                <h1>Contact</h1>

            </div>
            <div className={styles['contact-body']}>


            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    <h2>Name:</h2>
                    <input className={styles.name} type='text' name='name' placeholder="Will Jackson" value={formValues.name} onChange={handleChange}/>
                </label>
                <label className={styles.label}>
                    <h2>Email Address:</h2>
                    <input className={styles.email} type='text' name='email' placeholder="example@example.com" value={formValues.email} onChange={handleChange}/>
                </label>
                <label className={styles['message-label']}>
                    <h2>Message:</h2>
                    
                    <textarea  className={styles.message} 
                    id="message" name='message' placeholder="Your message..." value={formValues.message} onChange={handleChange}/>
                </label>
                
  

                <button className={styles.send} type='submit'>SEND<FontAwesomeIcon icon={faPaperPlane} size='xs'/></button>
            


            </form>


            </div>
            <div className={styles['top-button-container']}>

                <FontAwesomeIcon className={styles.rocket} icon={faShuttleSpace} size='2xl' rotation={270} onClick={() => homeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}/>

            </div>
        </div>
    )
}

export default Contact