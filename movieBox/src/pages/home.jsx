import React from 'react'
import "./style.css"
const home = () => {
  return (
    <>
      <nav>
          <div className="navLogo">
            <div className='logo'></div>
          </div>
          <div className="nav_title">Explore Movie</div>
      </nav>
      <div className="container">
        <div className="container_shadow"></div>
        <div className="container_title">DISCOVER MOVIES</div>
        <div className="container_box"> Explore and discover your favorite <br /> movies from around the world. </div>
        <button className='container_btn'>Explore Movies</button>
      </div>
      <footer>
        <div className="footerHeading">
          <div className="fooerTitle">MovieExplorer</div>
          <div className="footerContainer">Explore the latest movies, trending releases, and curated watchlists all in one place. Your ultimate guide to cinema.</div>
        </div>
        <div className="footerLink">
            <a href="https://www.instagram.com/_mr.z._/" target='_blank'>Insta</a>
            <a href="https://www.facebook.com/profile.php?id=100070039994331" >Facebook</a>
            <a href="https://github.com/ahad000dev" target='_blank'>GitHub</a>
        </div>
      </footer>
    </>
  )
}

export default home
