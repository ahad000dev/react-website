import { useState, useEffect, useRef } from 'react';
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'
import { useGSAP } from '@gsap/react'
// import NavberAll from '../component/common/navberAll' // This component is not used in the provided code.
import menuIcon from './assets/menu.png'; // Assuming menu.png is in src/assets

gsap.registerPlugin(ScrollTrigger);

function App() {
  const cursorRef = useRef(null);
  const cursorBlurRef = useRef(null);
  const navRef = useRef(null);
  const mainRef = useRef(null);
  const aboutUsRef = useRef(null);
  const section1Ref = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorStyle, setCursorStyle] = useState({
    scale: 1,
    border: "1px solid #95c11e",
    backgroundColor: "#95c11e",
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&w=511&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5-768x785.jpg?strip=all&lossy=1&sharp=1&ssl=1",
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&lossy=1&sharp=1&w=511&ssl=1"
  ];

  // Cursor movement effect
  useEffect(() => {
    const handleMouseMove = (dets) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = dets.x + 30 + "px";
        cursorRef.current.style.top = dets.y + "px";
      }
      if (cursorBlurRef.current) {
        cursorBlurRef.current.style.left = dets.x + "px";
        cursorBlurRef.current.style.top = dets.y + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // GSAP Animations
  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: "#000",
      duration: 0.8,
      height: "90px",
      scrollTrigger: {
        trigger: navRef.current,
        scroller: "body", // Consider using a ref for the scroller if not body
        start: "top -30%",
        scrub: 1,
      },
    });

    gsap.to(mainRef.current, {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: mainRef.current,
        scroller: "body",
        start: "top -30%",
        end: "top -70%",
        scrub: 3,
      },
    });

    gsap.from(aboutUsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about-para", // This still uses a class selector, ideally should be a ref
        scroller: "body",
        start: 'top 60%',
        end: "top 55%",
        scrub: 3
      }
    });
  }, []); // Added empty dependency array so animations only initialize once

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleNavH1MouseEnter = () => {
    setCursorStyle({
      scale: 3,
      border: "1px solid #fff",
      backgroundColor: "transparent",
    });
  };

  const handleNavH1MouseLeave = () => {
    setCursorStyle({
      scale: 1,
      border: "1px solid #95c11e",
      backgroundColor: "#95c11e",
    });
  };

  const handleCarouselButtonClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div className="carsur" ref={cursorRef} style={cursorStyle}></div>
      <div className="carsur-blur" ref={cursorBlurRef}></div>

      <nav
        id="nav"
        ref={navRef}
        className={menuOpen ? 'nav-open' : ''}
      >
      <img
        src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
        alt="logo-img"
      />
      {['Toptracer Range', 'Golf Lessons', 'Adventure Golf', 'Café', 'Events'].map((item, index) => (
        <h1
          key={index}
          onMouseEnter={handleNavH1MouseEnter}
          onMouseLeave={handleNavH1MouseLeave}
        >
          {item}
        </h1>
      ))}
      <img
        src={menuIcon}
        alt="Menu"
        id="menu"
        onClick={handleMenuToggle}
      />
    </nav>

    <video autoPlay muted loop poster="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/video-bg.jpg?strip=all&lossy=1&sharp=1&ssl=1"></video>

    <div className="main" ref={mainRef}>
      <div className="page-1">
        <h1>Eat. Drink. Play.</h1>
        <h2>Welcome to Sidcup Family Golf!</h2>
        <p>
          Sidcup Family Golf is a Toptracer driving range and crazy golf venue
          in Sidcup, South East London. Passionate about technology, player
          development and making golf fun and accessible to everyone.
        </p>
      </div>
      <div className="page-2">
        <div className="scrolling">
          <div className="scroll-div">
            <h1>TOPTRACER RANGE</h1>
            <h1>GOLF LEASSON</h1>
            <h1>CRASY GLOF</h1>
            <h1>COFFIE SHOP</h1>
          </div>
          <div className="scroll-div">
            <h1>TOPTRACER RANGE</h1>
            <h1>GOLF LEASSON</h1>
            <h1>CRASY GLOF</h1>
            <h1>COFFIE SHOP</h1>
          </div>
        </div>
        <div className="about-us" ref={aboutUsRef}>
            <img className="about-img" id="about-img" width="300" height="200" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="About Us 1" srcSet="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1 300w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1 1024w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1 768w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1 1280w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1.jpg?strip=all&lossy=1&sharp=1&w=512&ssl=1 512w" sizes="(max-width: 300px) 100vw, 300px"/>
            <div className="about-para" id="about-para">
                <h1>About Us</h1>
                <p className="p1">Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.</p>
                <p className="p2">Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.</p>
            </div>
            <img className="about-img" id="about-img" width="300" height="200" src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1" alt="About Us 2" srcSet="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1 300w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-1024x682.jpg?strip=all&lossy=1&sharp=1&ssl=1 1024w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-768x511.jpg?strip=all&lossy=1&sharp=1&ssl=1 768w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2.jpg?strip=all&lossy=1&sharp=1&ssl=1 1280w, https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2.jpg?strip=all&lossy=1&sharp=1&w=512&ssl=1 512w" sizes="(max-width: 300px) 100vw, 300px"/>
        </div>
        <div className="card-div">
          <div className="card" id="card-1">
            <div className="overley" id="overlay-1">
              <h1>AHAD</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos consequuntur nobis fugit eos rerum corporis delectus reprehenderit autem, nulla minima.</p>
            </div>
          </div>
          <div className="card" id="card-2">
            <div className="overley" id="overlay-2">
              <h1>AAYAN</h1>      
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos consequuntur nobis fugit eos rerum corporis delectus reprehenderit autem, nulla minima.</p>
            </div>
          </div>
          <div className="card" id="card-3">
            <div className="overley" id="overlay-3">
              <h1>PORNA</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos consequuntur nobis fugit eos rerum corporis delectus reprehenderit autem, nulla minima.</p>
            </div>
          </div>
        </div>
      </div>
        <div className="page-3">
          <div className="box">
          <div className="one-img"><img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="one-img"/></div>
          <div className="one"><p>Sign up for Sidcup News and Special <br/> Offers <br/> Straight to Your Inbox</p></div>
          <div className="one-img"><img src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/dots-side.svg" alt="one-img"/></div>
          </div>
          <div className="section">
            <div className="mainsection">
              <div
                className="section-1"
                ref={section1Ref}
                style={{ backgroundImage: `url(${carouselImages[currentImageIndex]})` }}
              ></div>
              <div className="photo-btn">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    id={`s-btn-${index + 1}`}
                    className="btn"
                    title="btn"
                    onClick={() => handleCarouselButtonClick(index)}
                    style={{ backgroundColor: currentImageIndex === index ? "#c9d8a1" : "" }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="section-2"></div>
          </div>
        <div className="diolo">
          <img id="colon-1" decoding="async" loading="lazy" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg" alt="Quote Mark" width="100" height="77"/>
          <p>Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.</p>
          <img id="colon-2" decoding="async" loading="lazy" src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg" alt="Quote Mark" width="100" height="77"/>
        </div>
       </div>
       <div className="page-3">
        <div className="class1">WHAT ARE YOU WAITING FOR?</div>
        <div className="class2">
          <div className="boxa" id="boxa1">Toptracer Range</div>
          <div className="boxa" id="boxa2">Golf Lessons</div>
          <div className="boxa" id="boxa3">Adventure Golf</div>
        </div>
        <div className="footer">
          <div className="footerBox">
            <h2>contact</h2>
            <h2>about us</h2>
            <h2>join us</h2>
          </div>
          <p>we are with you</p>
        </div>
 </div></div>
    </>
  )
}

export default App
