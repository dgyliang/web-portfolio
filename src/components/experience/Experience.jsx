import './experience.scss'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "../../data/work";


export default function Experience() {

    return (
        <div id="experience">
            
            <h1>Work Experience</h1>
        <VerticalTimeline
        lineColor = {"#5b7c99"}>
            {timelineElements.map((element) => {
            return (
                <VerticalTimelineElement
                iconStyle={{ background: "#001926"}}
                >
                <h2 id="role">
                    {element.role}
                </h2>
                <h4 id="company">
                    {element.company}
                </h4>
                <h5 id="location">
                    {element.location}
                </h5>
                <ul id="description">{element.description.map(value =>{
                    return <li key={value}>{("•"+value)}</li>
                })}</ul>
                <p id="date">{element.date}</p>
                </VerticalTimelineElement>

            );
            })}
        </VerticalTimeline>
        </div>
  );
}
