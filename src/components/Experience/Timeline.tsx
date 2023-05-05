import React, { useState } from 'react'
import styles from './Timeline.module.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Timeline = () => {
    const [type, setType] = useState('All');




    return (
        <div>
            <div className={styles['button-container']}>
                <button className={styles.buttons} onClick={() => {
                    setType('All')
                }}>
                    All
                </button>
                <button className={styles.buttons} onClick={() => {
                    setType('Work')
                }}>
                    Work
                </button>
                <button className={styles.buttons} onClick={() => {
                    setType('Education')
                }}>
                    Education
                </button>
                <button className={styles.buttons} onClick={() => {
                    setType('Volunteering')
                }}>
                    Volunteering
                </button>
                <button className={styles.buttons} onClick={() => {
                    setType('Placements')
                }}>
                    Placements
                </button>
            </div>
            <p>{type}</p>
            <div className={styles['timeline-container']}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="June 2022 - August 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        onTimelineElementClick={() => {
                        }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Summer Camp Counsellor, Windsor Mountain International</h3>
                        <h4 className="vertical-timeline-element-subtitle">New Hampshire, USA</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="March 2022 - May 2022"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Customer Accounts Admin, Pure Retirement</h3>
                        <h4 className="vertical-timeline-element-subtitle">Leeds, UK</h4>
                        <p>
                            explanation
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="October 2021 - January 2022"
                        iconStyle={{ background: 'rgb(33, 10, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Help Desk Operator, Sodexo.</h3>
                        <h4 className="vertical-timeline-element-subtitle">Leeds, UK</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="June 2020 - November 2020"
                        iconStyle={{ background: 'rgb(33, 10, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Online Assistant, Sainsburys</h3>
                        <h4 className="vertical-timeline-element-subtitle">Leeds, UK</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="December 2016 – October 2022"
                        iconStyle={{ background: 'rgb(33, 10, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Food Courier, Deliveroo</h3>
                        <h4 className="vertical-timeline-element-subtitle">Leeds, UK</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="February 2018 – April 2018"
                        iconStyle={{ background: 'rgb(33, 10, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Business Advisor, ICS (Balloon ventures)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Mbale, Uganda</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        position={'right'}
                        date="September 2015 – March 2017"
                        iconStyle={{ background: 'rgb(33, 10, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Feeding the Homeless, Feed Leeds</h3>
                        <h4 className="vertical-timeline-element-subtitle">Leeds, UK</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>



        </div>
    )
}