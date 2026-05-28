import React, { useRef } from 'react'
import "./transition.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useLocation } from 'react-router-dom'

const Transition = (props) => {
    const currentLocation = useLocation().pathname
    const pageRef = useRef(null)
    const transitionRaf = useRef(null)

    useGSAP(function() {
        // Create a master timeline for the entrance and exit sequence
        let tl = gsap.timeline()

        // 1. Immediately ensure the container is visible and blocks start above the screen
        tl.set(transitionRaf.current, { display: "block" })
        tl.set(".transition_animation_div", { y: "0%" })
        
        // Hide the incoming page content subtly while curtain falls
        tl.set(pageRef.current, { opacity: 0, scale: 0.95 })

        // 2. Animate the curtain blocks DOWN to completely cover the viewport
        tl.to(".transition_animation_div", {
            y: "100%",
            duration: 0.6,
            ease: "power3.inOut",
            stagger: {
                amount: 0.2
            }
        })

        // 3. Reveal and scale up the new page content while covered
        tl.to(pageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "all" // Clears transform/opacity to allow position: sticky to work
        })

        // 4. Slide the curtain blocks completely out of the viewport downwards
        tl.to(".transition_animation_div", {
            y: "200%",
            duration: 0.6,
            ease: "power3.inOut",
            stagger: {
                amount: 0.2
            }
        })

        // 5. Hide the transition container completely so it doesn't block mouse clicks
        tl.to(transitionRaf.current, {
            display: "none",
            duration: 0
        })

    }, [currentLocation]) // Fires beautifully every time the route changes

    return (
        <>
            <div ref={transitionRaf} className='transition_animation_main'>
                <div className="transition_animation_container">
                    <div className="transition_animation_div"></div>
                    <div className="transition_animation_div"></div>
                    <div className="transition_animation_div"></div>
                    <div className="transition_animation_div"></div>
                    <div className="transition_animation_div"></div>
                </div>
            </div>

            <div ref={pageRef} className="page_content_wrapper">
                {props.children}
            </div>
        </>
    )
}

export default Transition