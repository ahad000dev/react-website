import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import "./agenceSection1.css"
gsap.registerPlugin(ScrollTrigger)
const section1 = () => {
  const agencePageimg = useRef(null);
  const imageReff = useRef(null)
  const imageArr=[
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847"
  ]
  useGSAP(function () {
    gsap.to(agencePageimg.current,{
      scrollTrigger:{
        trigger:agencePageimg.current,
        start:"top 25%",
        end:"bottom -40%",
        // pin:true,
        // pinSpacing: true,
        onUpdate:(elem)=>{
          let imageindex ;
          if (elem.progress<1) {
             imageindex = Math.floor(elem.progress* imageArr.length);
             
            }
            else{
              
              imageindex = imageArr.length-1;
          }
          imageReff.current.src = imageArr[imageindex]
        
        }
      }
    })
  })

  return (
    <>
     <div className="agence_page1">
      < div className="agence_page1_img" ref={agencePageimg}>
      <img ref={imageReff} src="https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2" alt="" />
      </div>
          <div className="agence_page1_h">
            <div className='h1'>Soixan7e </div><div className='h1'>Douze</div> 
          </div>
          <div className="agence_page1_p">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
        <div className="agence_page2">
          <div className="agence_page2_container">
            <h5>expertise</h5>
            <p>Lorem ipsum dolor sit amet  maiores assumenda tempora sequi ad architecto, accusamus necessitatibus?</p>
          </div>
          <div className="agence_page2_container">
            <h5>Lorem ipsum dolor sit amet.</h5>
            <p>Lorem ipsum dolor sit amet s ab eius rerum maiores assumenda tempora sequi ad architecto, accusamus necessitatibus?</p>
          </div>
          <div className="agence_page2_container">
            <h5></h5>
            <p>Lorem ipsum dolor sit amet s ab eius rerum maiores assumenda tempora sequi ad architecto, accusamus necessitatibus?</p>
          </div>
        </div>
    </>
  )
}

export default section1