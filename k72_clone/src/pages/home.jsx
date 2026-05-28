import React from 'react'
import Agence from './agence'
import Projects from './projects'
import { Link } from 'react-router-dom'
import "./home.css"
import Navber from '../component/common/navber'
const home = () => {
    return (
        <div>
            <Navber/> 
            <div className='screenVideo'>
            <Video/>
            </div>
            <Text/>
        </div>
    )
}
const Text = () => {
    return (
        <>
        <div className="homeBody">
            <div className="textBox">
                <div className="topText">
                    <div>L'étincelle </div><div className='videoDiv'>qui <div className="smVideo"><Video /></div>génère </div><div>la créativité</div>
                </div>
                <div className="botomText">
                    <Link to="/agence" className='bar'>AGENCE</Link>
                    <Link to="/project" className='bar'>PROJECTS</Link>
                </div>
            </div>
        </div>
        </>
    )
}
const Video = () => {
    return (
        <>
            <video muted autoPlay loop className='video' src="https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6" ></video>
        </>
    )
}
export default home