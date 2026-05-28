import { useState, useEffect, useRef } from 'react'
import './App.css'
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import videoFile from "./assets/Ghost.mp4";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
;
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixedImageVisible, setFixedImageVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleElemMouseEnter = (imageUrl) => {
    setCurrentImage(imageUrl);
  };

  return (
    <>
      <div 
        className="fixed-image" 
        style={{ 
          display: fixedImageVisible ? 'block' : 'none', 
          backgroundImage: `url(${currentImage})` 
        }}
      ></div>
      <div 
        className="full-scr" 
        id="full-scr" 
        style={{ top: menuOpen ? '0' : '-100%' }}
      ></div>
      <nav>
        <div className="img_p">
          <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" id="image" alt="image" />
          <p className="menu" id="menu" onClick={handleMenuClick}>Menu</p>
        </div>
        <div 
          className={`nav-part2 ${menuOpen ? 'nav-open' : ''}`} 
          id="nav-part2" 
        >
          <h4><a href="#">Work</a></h4>
          <h4><a href="#">Studio</a></h4>
          <h4><a href="#">Contact</a></h4>
        </div>
      </nav>
      <div className="main" ref={scrollRef}>
        <div className="page1">
          <div className="center">
            <div className="left">
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                ipsam non repellendus, iste aliquid dicta velit magnam deleniti
                delectus? Dolorib
              </h3>
            </div>
            <div className="right">
              <h1>space that fire</h1>
            </div>
          </div>
         <video className='video' autoPlay loop muted><source src={videoFile} type="video/mp4" /></video>
          <div className="hero-shape">
            <div className="hero-1"></div>
            <div className="hero-2"></div>
          </div>
        </div>
        <div className="page-2">
          <div className="moving-text" id="moving-text">
            <div className="con">
              <h1>Expert</h1>
              <div className="gola"></div>
              <h1>Technical</h1>
              <div className="gola"></div>
              <h1>Mechanical</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>Expert</h1>
              <div className="gola"></div>
              <h1>Technical</h1>
              <div className="gola"></div>
              <h1>Mechanical</h1>
              <div className="gola"></div>
            </div>
            <div className="con">
              <h1>Expert</h1>
              <div className="gola"></div>
              <h1>Technical</h1>
              <div className="gola"></div>
              <h1>Mechanical</h1>
              <div className="gola"></div>
            </div>
          </div>
        </div>
        <div className="page-3">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            delectus doloremque cum ea autem voluptate ullam optio temporibus
            rerum id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, exercitationem.
          </h1>
          <div className="gooly">
            <div className="gooly-1"></div>
            <div className="gooly-2"></div>
          </div>
          <div className="part-2">
            <img src="./assets/nxntdtbsu9htndt172ha.webp" alt="Rolls-Royce" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error
              tempora, consequuntur provident eos blanditiis!
            </p>
          </div>
        </div>
        <div className="page-4">
          <div 
            className="elem-contain" 
            onMouseEnter={() => setFixedImageVisible(true)} 
            onMouseLeave={() => setFixedImageVisible(false)}
          >
            {[
              { id: 1, name: "Rolls-Royce Phantom", img: "./assets/cq5dam.web.1242(1).webp" },
              { id: 2, name: "Rolls-royce Spectre", img: "./assets/cq5dam.web.1242(2).webp" },
              { id: 3, name: "Rolls-royce Cullinan", img: "./assets/cq5dam.web.1242.webp" },
              { id: 4, name: "Rolls-Royce Phantom V", img: "./assets/cq5dam.web.1920(1).webp" },
              { id: 5, name: "Rolls-Royce Spectre Lunaflair", img: "./assets/cq5dam.web.1920.webp" },
              { id: 6, name: "Rolls-royce Ghost", img: "./assets/original.jpg" },
              { id: 7, name: "Rolls-royce Manchester Ghost", img: "./assets/original1.jpg" },
              { id: 8, name: "Rolls-Royce Spectre Lunaflair", img: "./assets/original2.jpg", last: true },
            ].map((item) => (
              <div 
                key={item.id}
                className="elem" 
                id={item.last ? "last-elem" : ""}
                onMouseEnter={() => handleElemMouseEnter(item.img)}
              >
                <div className="overplay"></div>
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="page-5"></div>
        <div className="page-6">
  <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

        </div>
      </div>
      <div className="buttom">
        <div className="animation"></div>
        <div className="container">
          <div className="part-footer">
            <div className="part-footer-div">Work</div>
            <div className="part-footer-div">Studio</div>
            <div className="part-footer-div">contact</div>
          </div>
          <div className="part2-footer">
            <h2>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, porro.
            </h2>
            <h2>Lorem, ipsum dolor</h2>
          </div>
        </div>
        <h1>Rolls-Royce</h1>
        <div className="part3-footer">
          <p>customize</p>
          <p>service</p>
          <p>product</p>
        </div>
      </div>
    </>
  )
}

export default App
