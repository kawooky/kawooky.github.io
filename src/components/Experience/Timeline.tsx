import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Timeline = () => {


    let exampleString: string = '1'


    return (
        <div>


            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    position={'right'}
                    date="June 2022 - August 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    onTimelineElementClick={() => {
                        exampleString += '1'
                        console.log(exampleString)
                    }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Summer Camp Counsellor, Windsor Mountain International</h3>
                    <h4 className="vertical-timeline-element-subtitle">New Hampshire, USA</h4>
                    <p>
                        {exampleString}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    position={'right'}
                    date="March 2022 - May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Customer Accounts Admin, Pure Retirement</h3>
                    <h4 className="vertical-timeline-element-subtitle">Leeds</h4>
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
                    <h4 className="vertical-timeline-element-subtitle">Leeds</h4>
                    <p>
                        User Experience, Visual Design
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
                    <h4 className="vertical-timeline-element-subtitle">Leeds</h4>
                    <p>
                        User Experience, Visual Design
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
                    <h4 className="vertical-timeline-element-subtitle">Leeds</h4>
                    <p>
                        User Experience, Visual Design
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
                    <h4 className="vertical-timeline-element-subtitle">Leeds</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>



        </div>
    )
}