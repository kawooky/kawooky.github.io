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
                    {/* <h2>Work</h2>
                    <ol>
                        <li>
                            Summer Camp Counsellor, Windsor Mountain International. New Hampshire USA (June 2022 – August 2022)
                        </li>
                        <li>
                            Customer Accounts Admin, Pure Retirement. Leeds (March 2022 – May 2022)
                        </li>
                        <li>
                            Help Desk Operator, Sodexo. Leeds (October 2021 – January 2022)
                        </li>
                        <li>
                            Online Assistant, Sainsburys. Leeds (June 2020 – November 2020)
                        </li>
                        <li>
                            Food Courier, Deliveroo. Leeds (December 2016 – October 2022)
                        </li>
                    </ol>

                    <h2>Volunteering</h2>
                    <ol>
                        <li>
                            Business Advisor, ICS (Balloon ventures). Uganda (February 2018 – April 2018)
                        </li>
                        <li>
                            Feeding the Homeless, Feed Leeds. Leeds (September 2015 – March 2017)
                        </li>
                    </ol> */}
                </div>
            </div>
        </div>
    )
}

export default Experience