import React, { useState, useEffect, useRef } from 'react';
import './header.scss';

const Header = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [pause, setPause] = useState(false);
  const headerContentRef = useRef(null);

  const words = ['David Liang\'s', 'Software Engineer\'s', 'Gamer\'s', 'Coffee Addict\'s', 'Data Fanatic\'s', 'Keyboard Nerd\'s', 'PC Enthusiast\'s', 'Weeb\'s', 'Foodie\'s'];

  useEffect(() => {
    const i = loopNum % words.length;
    const fullText = words[i];
    let timer;

    if (pause) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setPause(false);
      }, 500);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, 50);

      if (text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    } else {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 70);

      if (text === fullText) {
        setPause(true);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, pause]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      const { current } = headerContentRef;
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
      const { current } = headerContentRef;
      if (current) {
        const xOffset = (gamma / 50).toFixed(2);
        const yOffset = (beta / 50).toFixed(2);
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

  const imageIndex = (loopNum % 9) + 1;

  return (
    <div id="header">
      <div className="header-content" ref={headerContentRef}>
        <div className="header-row">
          <img src={`../assets/images/${imageIndex}.svg`} alt="" className="header-image" />
          <h1 className="typewriter">
            {text}
            <span className="cursor" />
          </h1>
        </div>
        <h1 className="static-header">
          Web Portfolio
        </h1>
      </div>
      <a className="down-arrow" href="#about">
        <img src="../assets/down.svg" alt="" />
      </a>
    </div>
  );
};

export default Header;
