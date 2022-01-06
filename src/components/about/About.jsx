import './about.scss';
import {useState, useEffect, useRef} from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
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
                <h1><i>Welcome!</i></h1>    
                    <FadeInSection>
                    <p>
                    You have stumbled upon my humble little online portfolio! You are probably either an employer who found this site through my resume, or a "friend" of mine who thinks it'll be funny to use this 
                    to make fun of me. Either way, thanks for coming and make yourself at home!<br /><br />
                    If you are an employer, thank you for taking the time to checking this portfolio out! This is a little side project of mine to help people learn more about me. Here, you will be able to find all of my experiences, 
                    or anything else that I may have been unable to fit onto a dinky little one-page resume.
                    </p>
                    </FadeInSection>
                
            </div>
            <div id="more">
                <h1>About me</h1>
                <div className="wrapper">
                    <FadeInSection>
                    <p>
                    <strong>Who are you?</strong> <br/><br/>
                    I'm David Liang, a student studying Masters in Data Science at Northwestern University. 
                    Prior to this I studied Psychology at the University of California San Diego. 
                    <br/><br/>I was born in GuangZhou China, but immigrated to the United States when I was 8 years old, and have lived here
                    ever since. 
                    <br/><br/>My hobbies include playing video games, reading manga, watching animes and K-drama, 
                    cooking, building computers and keyboards, and keeping up with latest trends in technology in general.
                    </p>
                    </FadeInSection>
                    <FadeInSection>
                    <p>
                    <strong>Why did you stop using your github pages site?</strong> <br/><br/>
                    I wanted a way to change/update information about my experiences and such without directly writting
                    in HTML, so I made this site to take advantage of ReactJS to map in info like a cheap back-end server.
                    <br/>I also wanted a custom domain name :)
                    <br/><a href="https://dgyliang.github.io">my old site</a>
                    </p>
                    </FadeInSection>
                    <FadeInSection>
                    <p>
                    <strong>What the heck does gonegrom mean?</strong> <br/><br/>
                    It's actually not that intersting of a story:<br/> my Chinese name is Guang Yu, and back in high school my friends used to call me
                    "Guang", then it evolved to "Guam" and that became my nickname. I realized from video games that using "Guam" as an alias is confusing as it's the name of a US territory.
                    So I decided to just call myself "Grom" or "Gram." So when I was thinking of a domain name I figured putting "gone"
                    and "grom" together would be quirky and memorable. Apologies for having a terrible naming sense :()
                    </p>
                    </FadeInSection>
                    <FadeInSection>
                    <p>
                    <strong>How Do I contact you?</strong> <br/><br/>
                    Open the navigation bar by hovering over the "burger" icon on the top left, or tap on it if you are
                    on a touch device. You will find my contact and socials at the bottom!<br/>
                    (btw, I don't post on Instagram much, I just linked it because it fills up space.)
                    </p>
                    </FadeInSection>
                    <FadeInSection>
                    <p>
                    <strong>Do you know Candice?</strong> <br/><br/>
                    HAHAAHHA!!11! You're hilarious
                    </p>
                    </FadeInSection>
                    </div>

            </div>

        </div>


    )
}
