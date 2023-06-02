import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'



interface Props {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<Props> = ({ homeRef, aboutRef, experienceRef, projectsRef, contactRef }) => {

  const [showMenu, setShowMenu] = useState(false);


  return (
    <nav className={styles.navbar}>
      <div className={styles.name}>Youssef Kawook</div>
      <ul className={`${styles.menu} ${showMenu ? styles.active : ''}`}>
        <li>
          <button onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setShowMenu(!showMenu)
          }}>
            About
          </button>
        </li>
        <li>
          <button onClick={() => {
            experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setShowMenu(!showMenu)
          }}>
            Experience
          </button>
        </li>
        <li>
          <button onClick={() => {
            projectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setShowMenu(!showMenu)
          }}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setShowMenu(!showMenu)
          }}>
            Contact
          </button>
        </li>
        <li>
          <button className={styles.resume} 
          // style={{border: '1px solid #000000',
          // width: '50px',
          // height: '50px',}} 
          onClick={()=>{window.open('/pdfs/Software-Development-CV.pdf', '_blank', 'noopener')}}>
            Resume
          </button>
        </li>
      </ul>
      <button className={styles.toggler} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
    </nav>
  );
}

export default Navbar




