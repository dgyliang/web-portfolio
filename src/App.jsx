import './app.scss';
import React, { useState, useEffect, useRef } from 'react';

import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Sections from './components/sections/Sections';


function App() {
  const [showNav, setShowNav] = useState(false);
  const ParallaxContentRef = useRef(null);

  //Parallax 
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const { current } = ParallaxContentRef;
      if (current) {
        const rect = current.getBoundingClientRect();
        const relX = x - rect.left;
        const relY = y - rect.top;
        const xOffset = ((relX - rect.width / 2) / 50).toFixed(2);
        const yOffset = ((relY - rect.height / 2) / 50).toFixed(2);
        current.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
      }
    };

    const handleDeviceOrientation = (event) => {
      const { beta, gamma } = event;
      const { current } = ParallaxContentRef;
      if (current) {
        const xOffset = (gamma / 25).toFixed(2);
        const yOffset = (beta / 25).toFixed(2);
        current.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
      }
    };

    // Registering the event listeners
    window.addEventListener('mousemove', handleMouseMove);

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }

    return () => {
      // Unregistering the event listeners
      window.removeEventListener('mousemove', handleMouseMove);

      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleDeviceOrientation);
      }
    };
  }, []);

  // Ripple
  useEffect(() => {

    const createRipple = (x, y) => {
      const rippleContainer = document.querySelector(".ripple-container");
      
      for (let i = 0; i < 3; i++) {
        const ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.classList.add(`ripple-${i}`);
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        rippleContainer.appendChild(ripple);
    
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      }
    };

    const handleClick = (event) => {
      const { clientX: x, clientY: y } = event;
      createRipple(x, y);
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);
  

  return (
    <div className="app">
      <div className="sunlight-gradient"></div>
      <div className="ripple-container"> </div>
      <Menu showNav={showNav} setShowNav={setShowNav} />
      <Navbar showNav={showNav} setShowNav={setShowNav}/>
      <div ref={ParallaxContentRef}>
        <Sections showNav={showNav} setShowNav={setShowNav}/>
      </div>
    </div>
  );
}

export default App;

