import React from 'react'
import "./projects.css"
import NavberProject from "../component/common/navberProject"
import ProjectSection1 from '../component/projects/projectSection1'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);
const projects = () => {
      useGSAP(function () {
            gsap.to(".side_ber1", {
              height: "6vw",
              scrollTrigger: {
                trigger: ".side_ber1",
                start: "top -10%",
                end: "top -2000%",
                toggleActions: "play reverse play reverse",
            
          }
    })
            gsap.to(".navBar_main1111", {
              backgroundColor: "white",
              scrollTrigger: {
                trigger: ".side_ber1",
                start: "top 15%",
                end: "top -2000%",
                toggleActions: "play reverse play reverse",
            
          }
    })
      })
  return (
    <div>
      <NavberProject />  
    <ProjectSection1/>
    </div>
  )
}

export default projects
