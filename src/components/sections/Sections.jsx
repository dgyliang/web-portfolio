import "./sections.scss";
import { useState, useEffect, useRef } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
import Experience from "../../components/experience/Experience";
import Education from "../../components/education/Education";

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Sections({ showNav, setShowNav }) {
  return (
    <div className={"sections " + (showNav && "active")}>
      <Header />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Education />
      </FadeInSection>
      <FadeInSection>
        <Experience />
      </FadeInSection>
      <Footer />
    </div>
  );
}
