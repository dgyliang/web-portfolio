import './education.scss'

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "../../data/education";


export default function Education() {
    return (
        <div id="education">

            <h1>Education History</h1>
        <VerticalTimeline
        lineColor = {"#2a2e53"}>
            {timelineElements.map((element) => {

            return (
                <VerticalTimelineElement
                    iconStyle={{ background: "#2a2e53"}}
                    >
                <h2 id="institute">
                    {element.institute}
                </h2>
                <h3 id="degree">
                    {element.degree}
                </h3>
                <h4 id="location">
                    {element.location}
                </h4>
                <p>Example Coursework:</p>
                <ul id="coursework">{element.coursework.map(value =>{
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
