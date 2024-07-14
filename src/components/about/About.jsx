import "./about.scss";
import { useState, useEffect, useRef } from "react";

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

export default function About() {
  return (
    <div id="about">
      <div id="intro">
        <h1>
          <i>Welcome!</i>
        </h1>
        <FadeInSection>
          <p>
            You have stumbled upon my humble little online portfolio! You are
            probably either an employer who found this site through my resume,
            or a "friend" of mine who thinks it'll be funny to use this to make
            fun of me. Either way, thanks for coming and make yourself at home!
            <br />
            <br />
            If you are an employer, thank you for taking the time to checking
            this portfolio out! This is a little side project of mine to help
            people learn more about me. Here, you will be able to find all of my
            experiences, or anything else that I may have been unable to fit
            onto a dinky little one-page resume. <br />
            <br />
            I'm no graphic designer, but I tried my best to make this look good
            :)
          </p>
        </FadeInSection>
      </div>
      <div id="more">
        <h1>About me</h1>
        <div className="wrapper">
          <FadeInSection>
            <p>
              <strong>Who are you?</strong> <br />
              <br />
              It's always "who are you" and never "how are you" :( <br />
              <br />
              Kidding- I'm David Liang, currently working as a software
              engineer. I studied Psychology at the University of California San
              Diego, and obtained a Masters degree in Data Science at
              Northwestern University.
              <br />
              <br />I was born in GuangZhou China, but immigrated to the United
              States when I was 8 years old, and have lived here ever since.
              <br />
              <br />I like playing video games, reading manga, cooking, brewing
              and drinking artisan coffee, as well as all things tech- most
              notably computers and keyboards.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              <strong>Who's grom?</strong> <br />
              <br />
              It me
              <br />
              <br /> My Chinese name is Guang Yu (广宇), and back in high school
              my friends used to call me "Guang." It eventually evolved to
              "Guam," and that became my nickname. I realized later that using
              "Guam" as an alias is confusing as it's the name of a US
              territory. Thus I decided to use "Grom." Now you know the story
              behind this site's URL!
            </p>
          </FadeInSection>
          <FadeInSection>
            <p>
              <strong>How Do I contact you?</strong> <br />
              <br />
              My email is dgyliang@gmail.com, which is my preferred contact
              method.
              <br />
              <br />
              You can also find other methods by opening the navigation bar by
              hovering over the "burger" icon on the top left, or tap on it if
              you are on a touch device. You will find my contact and socials at
              the bottom!
              <br />
            </p>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
