import React, { useState } from 'react'
import styles from './Timeline.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons'
import { expArr } from './expObj';

interface Props {
    infoIndex: number;
    setInfoIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Timeline : React.FC<Props> = ({infoIndex, setInfoIndex}) => {
    const [type, setType] = useState('All');








    return (
        <div>
            <div className={styles['button-container']}>
                <button className={styles['left-button']} style={{backgroundColor: type==='All'? '#ff0000' : 'transparent'}} onClick={() => {
                    setType('All')
                }}>
                    All
                </button>
                <button className={styles.buttons} style={{backgroundColor: type==='Work'? '#ff0000' : 'transparent'}} onClick={() => {
                    setType('Work')
                }}>
                    Work
                </button>
                <button className={styles.buttons} style={{backgroundColor: type==='Education'? '#ff0000' : 'transparent'}} onClick={() => {
                    setType('Education')
                }}>
                    Education
                </button>
                <button className={styles.buttons} style={{backgroundColor: type==='Volunteering'? '#ff0000' : 'transparent'}} onClick={() => {
                    setType('Volunteering')
                }}>
                    Volunteering
                </button>
                <button className={styles['right-button']} style={{backgroundColor: type==='Placements'? '#ff0000' : 'transparent'}} onClick={() => {
                    setType('Placements')
                }}>
                    Placements
                </button>
            </div>
            <div className={styles['timeline-container']} >
                <VerticalTimeline>
                    {expArr.map((exp, index) => {
                        if (exp.type === 'Work') {
                            return (
                                (type === 'All' || type === 'Work') &&
                                <VerticalTimelineElement 
                                    key={index}
                                    className={styles["vertical-timeline-element--work"]}
                                    position={'right'}
                                    contentStyle={
                                        { background: 'rgb(33, 150, 243)', color: '#fff' }
                                    }
                                    date={exp.date}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    onTimelineElementClick={() => {
                                        setInfoIndex(index)
                                    }}
                                icon={<FontAwesomeIcon icon={faBriefcase} />}
                                >
                                    <h3 className="vertical-timeline-element-title">{exp.title}, {exp.company}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                                </VerticalTimelineElement>
                            )
                        }

                            if (exp.type === 'Education') {
                                return (
                                    (type === 'All' || type === 'Education') &&
                                    <VerticalTimelineElement
                                    key={index}
                                        className={styles["vertical-timeline-element--work"]}
                                        position={'right'}
                                        contentStyle={
                                            { background: 'rgb(33, 150, 0)', color: '#fff' }
                                        }
                                        date={exp.date}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        onTimelineElementClick={() => {
                                            setInfoIndex(index)
                                        }}
                                    icon={<FontAwesomeIcon icon={faUserGraduate} />}
                                    >
                                        <h3 className="vertical-timeline-element-title">{exp.title}, {exp.company}</h3>
                                        <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                                    </VerticalTimelineElement>
                                )
                            }

                        if (exp.type === 'Volunteering') {
                            return (
                                (type === 'All' || type === 'Volunteering') &&
                                <VerticalTimelineElement
                                key={index}
                                    className={styles["vertical-timeline-element--work"]}
                                    position={'right'}
                                    contentStyle={
                                        { background: 'rgb(0, 0, 243)', color: '#fff' }
                                    }
                                    date={exp.date}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                    onTimelineElementClick={() => {
                                        setInfoIndex(index)
                                    }}
                                icon={<FontAwesomeIcon icon={faHandshakeAngle} />}
                                >
                                    <h3 className="vertical-timeline-element-title">{exp.title}, {exp.company}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                                </VerticalTimelineElement>
                            )
                        }

                        if (exp.type === 'Placements') {
                            return (
                                (type === 'All' || type === 'Placements') &&
                                <VerticalTimelineElement
                                key={index}
                                    className={styles["vertical-timeline-element--work"]}
                                    position={'right'}
                                    contentStyle={
                                        { background: 'rgb(0, 0, 243)', color: '#fff' }
                                    }
                                    date={exp.date}
                                    iconStyle={{ background: 'rgb(33, 150, 20)', color: '#fff' }}
                                    onTimelineElementClick={() => {
                                        setInfoIndex(index)
                                    }}
                                icon={<FontAwesomeIcon icon={faChalkboardUser} />}
                                >
                                    <h3 className="vertical-timeline-element-title">{exp.title}, {exp.company}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
                                </VerticalTimelineElement>
                            )
                        }
                    })}
                </VerticalTimeline>
            </div>



        </div>
    )
}