import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function ColorsTimeline() {
  return (
    <div className="timeline" id="Timeline">
        <div className="timeline-heading" data-aos="zoom-in-down" data-aos-duration="500">
            <h2>TIMELINE</h2>
        </div>
        <div className="timeline-main" data-aos="zoom-in-down" data-aos-duration="500">
        <VerticalTimeline animate={false}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="25th July 2024"
    iconStyle={{background: '#FFA401', color: 'white' }}
    style={{color:'white'}}
    position="right"
  >
<h4 style={{color:"white"}}>REGISTRATION OPENS</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="15th August 2024"
    iconStyle={{background: '#FFA401', color: '#fff', border:"0"}}
    style={{color:'white'}}
    position="left"
  >
<h4 style={{color:"white"}}>REGISTRATION CLOSES</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="1st September 2024"
    iconStyle={{background: '#FFA401', color: '#fff' }}
    style={{color:'white'}}
    position="right"
  >
<h4 style={{color:"white"}}>SHORTLISTED TEAMS RELEASE</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="10th September 2024"
    iconStyle={{background: '#FFA401', color: '#fff' }}
    style={{color:'white'}}
    position="left"
  >
<h4 style={{color:"white"}}>PROBLEM STATEMENT RELEASE</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="13th September 2024"
    iconStyle={{background: '#FFA401', color: '#fff' }}
    style={{color:'white'}}
    position="right"
  >
<h4 style={{color:"white"}}>OPENING CEREMONY</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="14th September 2024"
    iconStyle={{background: '#FFA401', color: '#fff' }}
    style={{color:'white'}}
    position="left"
  >
   <h4 style={{color:"white"}}>HACKATHON BEGINS</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'black', color: 'white'}}
    contentArrowStyle={{ borderRight: '7px solid  #FFA401' }}
    date="15th September 2024"
    style={{color:'white'}}
    iconStyle={{background: '#FFA401', color: '#fff' }}
    position="right"
  >
<h4 style={{color:"white"}}>HACKATHON ENDS,CLOSING CEREMONY AND PRIZE DISTRIBUTION</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
        </div>
    </div>
  );
}
