import React, { useState } from 'react';
import "./agenceSection3.css";

// 1. Capitalized the component name to follow React standards
const AgenceSection3 = () => {
  const [backGround, setbackGround] = useState('');
  const backGroundDrop = document.querySelector(".agenceSection3DropBox")
  function hoverImg(e) {
    setbackGround(e.currentTarget.dataset.img);
    backGroundDrop.style.opacity =1
  }
  
  function clearImg() {
    setbackGround(''); // Optional: Clears background when not hovering over anything
    backGroundDrop.style.opacity = 0
  }

  // 2. Put team data in an array to clean up the JSX
  const teamMembers = [
    { name: "Michele", role: "Senior Software Engineer", img: "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2" },
    { name: "Mel", role: "Senior Software Engineer", img: "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6" },
    { name: "Carl", role: "Senior Software Engineer", img: "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" },
    { name: "Olivier", role: "Senior Software Engineer", img: "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64" },
    { name: "Chantal G", role: "Senior Software Engineer", img: "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991" },
    { name: "Michele 2", role: "Senior Software Engineer", img: "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2" },
  ];

  return (
    <div className='agenceSection3main'>
      {/* Dynamic background container */}
      <div 
        className="agenceSection3DropBox" 
        style={{ backgroundImage: backGround ? `url(${backGround})` : 'none' }}
      ></div>

      {/* 3. Loop through the array to display the boxes dynamically */}
      {teamMembers.map((member, index) => (
        <div 
          key={index}
          className="agenceSection3box"
          id="agenceSection3box111" 
          onMouseEnter={hoverImg} 
          onMouseLeave={clearImg}
          data-img={member.img}
        >
          <p>{member.role}</p>
          <h4>{member.name}</h4>
          <div className="dropbox111"></div>
        </div>
      ))}
      <div id='hr' ></div>
    </div>
  );
}

export default AgenceSection3;