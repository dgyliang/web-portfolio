import "./app.scss";
import React, { useState, useEffect} from "react";

import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Sections from "./components/sections/Sections";

function App() {
  const [showNav, setShowNav] = useState(false);

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

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="app">
      <div className="sunlight-gradient"></div>
      <div className="ripple-container"> </div>
      <Menu showNav={showNav} setShowNav={setShowNav} />
      <Navbar showNav={showNav} setShowNav={setShowNav} />
      <Sections showNav={showNav} setShowNav={setShowNav} />
    </div>
  );
}

export default App;
