import React from 'react'
import Section1 from '../component/agence/section1'
import AgecceSection2 from '../component/agence/agecceSection2'
import AgenceSection3 from '../component/agence/agenceSection3'
import AgenceSection4 from '../component/agence/agenceSection4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import { useGSAP } from '@gsap/react'
import NavberAll from '../component/common/navberAll'
gsap.registerPlugin(ScrollTrigger);
const agence = () => {
    useGSAP(function () {
        gsap.to("#agenceRoot", {
          background:"#000",
            scrollTrigger: {
                trigger: "#agenceSecondRoot",
                start: "top 60%",
                toggleActions: "play reverse play reverse",
              }
            })
            gsap.to(".side_ber1", {
              height: "6vw",
              scrollTrigger: {
                trigger: ".side_ber1",
                start: "top -3%",
                end: "top -2000%",
                toggleActions: "play reverse play reverse",
            
          }
    })
      })
  return (
    <>
    <div id='agenceRoot'>
    <NavberAll/>
      <Section1/> 
      <div id="agenceSecondRoot">
      <AgecceSection2/>  
    <AgenceSection3/>
    <AgenceSection4/>
      </div>
    </div>
    </>
  )
}

export default agence
