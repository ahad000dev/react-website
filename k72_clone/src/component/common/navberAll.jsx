import React, { useRef, useState } from 'react'
import "./navberAll.css"
import "./transition.css"
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import { useGSAP } from '@gsap/react'
const NavbarAll = () => { // Capitalized component name
const [displaySide, setDisplaySide] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef(null) // Added scope ref
  const transitionRefNav = useRef(null)
  const { contextSafe } = useGSAP({ scope: containerRef })

  const handleToggle = contextSafe(() => {
    if (isAnimating) return;
    setIsAnimating(true)

    let tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    })

    tl.set(transitionRefNav.current, { display: "block", top: "-150%" })
    tl.to(".transition_animation_div", {
      y: "100%", 
      duration: 0.6,
      stagger: {
        amount: 0.2,
        from: "start"
      },
      ease: "power2.inOut"
    })
    tl.call(() => {
      setDisplaySide(prev => !prev)
    })

    tl.to(".transition_animation_div", {
      y: "250%",
      duration: 0.6,
      stagger: {
        amount: 0.2,
        from: "start"
      },
      ease: "power2.inOut"
    })
    tl.set(transitionRefNav.current, { display: "none" }) 
    tl.set(".transition_animation_div", { y: "0%" })

  })
  return (
    <div ref={containerRef}> 
      {
        displaySide ? <SideBer troggle={handleToggle} /> : <Menu troggle={handleToggle} />
      }
      <div ref={transitionRefNav} className='transition_animation_main'>
        <div className="transition_animation_container">
          <div className="transition_animation_div"></div>
          <div className="transition_animation_div"></div>
          <div className="transition_animation_div"></div>
          <div className="transition_animation_div"></div>
          <div className="transition_animation_div"></div>
        </div>
      </div>
    </div>
  )
}
function Menu({ troggle }) {
  return (
    <>
      <div className="main_menu" >
        <div className="navBar_main1"  >
          <div className='logo_div'>
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
              <path fill="white" fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>
          <div className="side_ber11" onClick={troggle}> 
            <div className="side_ber_first1"></div>
            <div className="side_ber_second1"></div>
          </div>
        </div>
        <div className="menuItemMain">
           <div className="menu_item">
             <div className="menu_item_box">PROJECTs</div>
             <div className="menu_item_ber">
               <div className="menu_item_ber_container">
                 <span><Link to="/project" className='link'>Pour tout savoir</Link></span>
                 <span><img src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" /></span>
               </div>
               <div className="menu_item_ber_container">
                 <span><Link to="/project" className='link'>Pour tout savoir</Link></span>
                 <span><img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" /></span>
               </div>
             </div>
           </div>
           <div className="menu_item">
             <div className="menu_item_box">AGENCE</div>
             <div className="menu_item_ber">
                 
               <div className="menu_item_ber_container">
                 <span><Link to="/agence" className='link'>Pour tout savoir</Link></span>
                 <span><img src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" /></span>
               </div>
               <div className="menu_item_ber_container">
                 <span><Link to="/agence" className='link'>Pour tout savoir</Link></span>
                 <span><img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" /></span>
               </div>
             </div>
           </div>
        <div className="menu_item">
          <div className="menu_item_box">contact</div>
          <div className="menu_item_ber">
            <div className="menu_item_ber_container">
              <span>Pour tout savoir</span>
              <span><img src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" /></span>
            </div>
            <div className="menu_item_ber_container">
              <span>Pour tout savoir</span>
              <span><img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" /></span>
            </div>
          </div>
        </div>
        <div className="menu_item" id='menu_item_last'>
          <div className="menu_item_box"> blogue</div>
          <div className="menu_item_ber">
            <div className="menu_item_ber_container">
              <span>Pour tout savoir</span>
              <span><img src="https://k72.ca/images/teamMembers/blank_copie_2.jpg?w=640&h=290&s=b6f8d41383b2ee7821dcaec8b68295ec" alt="" /></span>
            </div>
            <div className="menu_item_ber_container">
              <span>Pour tout savoir</span>
              <span><img src="https://k72.ca/images/teamMembers/MEL_640X290.jpg?w=640&h=290&s=c18878a98fbce289bc80effb56cfbd81" alt="" /></span>
            </div>
          </div>
        </div>
        </div>


      </div>
    </>
  )
}
function SideBer({ troggle }) {
  return (
    <>
    <div className="navBerRoot">
        <Link to="/agence"  className="side_ber_project">AGENCE</Link>
        <Link to="/project" className="side_ber_agence">PROJECTS</Link>

      <div className="navBar_main1">
        <div className='logo_div'>
          <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
            <path fill="black" fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
        </div>
        <div className="side_ber1" onClick={troggle}>
          <div className="dropNav"></div>
          <div className="side_ber_first"></div>
          <div className="side_ber_second"></div>
        </div>
      </div>
    </div>
    </>
  )
}
export default NavbarAll
