import React, { useRef } from 'react'
import "./agecceSection2.css"

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);
const agecceSection2 = () => {
    const dropReff11 = useRef(null)
    const dropReff2 = useRef(null)
    useGSAP(function () {
        gsap.to(".agenceSection2_part1_box1", {
            opacity:1,
            duration:0.3,
            scrollTrigger: {
                trigger: ".agenceSection2_part1_box1",
                start: "top 65%", 
                end: "bottom 20%",  
                toggleActions: "play reverse play reverse",
            }
        })
        gsap.to(".agenceSection2_part1_box2", {
            opacity:1,
            duration:0.3,
            scrollTrigger: {
                trigger: ".agenceSection2_part1_box2",
                start: "top 60%", 
                end: "bottom 20%",  
                toggleActions: "play reverse play reverse",
            }
        })
        gsap.to("#agenceSection2_part1_box2", {
            opacity:1,
            duration:0.3,
            scrollTrigger: {
                trigger: "#agenceSection2_part1_box2",
                start: "top 40%", 
                end: "bottom 60%",  
                toggleActions: "play reverse play reverse",
            }
        })
    })
    return (
        <>
        <div className="agenceSection2Main">
                <div ref={dropReff11} id="agence_part1_page1"></div>
            <div className="agenceSection2_part1">
                <div className="agenceSection2_part1_container" id='agenceSection2_part1_container1'>
                    <div className="agenceSection2_part1_box1" id="agenceSection2_part1_box1"><div className="agence_page_h1"><h1>Abdul Ahad</h1></div><div className="agence_page_h1"><h1>Abdul Ahad</h1></div></div>
                    <div className="agenceSection2_part1_box1" id="agenceSection2_part1_box2"><div className="agence_page_h"><h1>Abdul Ahad</h1><p>programer devoloper</p></div><div className="agence_page_h"><h1>Abdul Ahad</h1><p>programer devoloper</p></div></div>
                </div>
                <div className="agenceSection2_part1_container">
                    <div ref={dropReff2} id="agence_part1_page2"></div>
                    <div className="agenceSection2_part1_box2" id="agenceSection2_part1_box1"><div className="agence_page_h1"><h1>Abdul Ahad</h1></div><div className="agence_page_h1"><h1>Abdul Ahad</h1></div></div>
                    <div className="agenceSection2_part1_box2" id="agenceSection2_part1_box2"><div className="agence_page_h"><h1>Abdul Ahad</h1><p>programer devoloper</p></div><div className="agence_page_h"><h1>Abdul Ahad</h1><p>programer devoloper</p></div></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default agecceSection2
