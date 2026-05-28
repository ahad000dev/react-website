import React, { useState } from 'react'
import "./projectSection1.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);
const projectSection1 = () => {
     const [box1, setbox1] = useState("")
     const [box2, setbox2] = useState("")
     const [box3, setbox3] = useState("")
    function topBox(e) {
         setbox1(e.currentTarget.dataset.box1)
        setbox2(e.currentTarget.dataset.box2)
        setbox3(e.currentTarget.dataset.box3)

    }
    function clearBox() {
    setbox1("");
    setbox2("");
    setbox3("");
}
useGSAP(() => {
const boxes = gsap.utils.toArray(".projectSection1Box");

        boxes.forEach((box) => {
            const tl = gsap.timeline()
            tl.from(box, {
                height: "80px",
                scrollTrigger: {
                    trigger: box,
                    start: "top 100%",     
                    end: "top -100%",      
                    scrub: true,             
                }
            });
        });
});
    return (
    <div>
      <div className="projectSection1Main">
        <h1>projects</h1>
     { box1 ? <BoxContainer b1={box1} b2={box2} b3={box3}/>:null}
        <div className="projectSection1Container">
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="abdul ahad" data-box2="senior software engineer" data-box3="2006">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="John Doe" data-box2="Full Stack Developer" data-box3="2024">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Sarah Jenkins" data-box2="Chief Technology Officer" data-box3="2012">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Dr. Elena Rostova" data-box2="Senior Data Scientist" data-box3="2015">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Marcus Vance" data-box2="Director of Product" data-box3="2014">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="David Kim" data-box2="Cloud Solutions Architect" data-box3="2017">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Chloe Bennett" data-box2="Staff Frontend Engineer" data-box3="2016">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Xavier Woods" data-box2="ML Ops Engineer" data-box3="2021">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)} data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)}  data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)}  data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)}  data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)}  data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)}  data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img"><img src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" /></div>
            </div>
            <div className="projectSection1Box" onMouseLeave={clearBox} onMouseEnter={(e) => topBox(e)}  data-box1="Alex Morgan" data-box2="Lead DevOps Engineer" data-box3="2018">
                <h2>see this project</h2>
                <div className="projectSection1Img" ><img src="https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022" alt="" /></div>
            </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerBox1">
            <h2>Contact</h2>   
          </div>
        </div>
      </div>
    </div>
  )
}
function BoxContainer({ b1, b2, b3 }) {
      return (
    <>
       <div className="projectSectiontitle" id='projectSectiontitle1'>
            <div className="projectSectiontitleBox1">{b1}</div>
            <div className="projectSectiontitleBox2">{b2}</div>
            <div className="projectSectiontitleBox3">{b3}</div>
        </div>
    </>
  )
}
export default projectSection1
