import React, { useState, useEffect} from 'react';
import './header.scss';

const Header = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [pause, setPause] = useState(false);
  const words = ['David Liang\'s', 'Software Engineer\'s', 'Gamer\'s', 'Coffee Addict\'s', 'Data Nerd\'s', 'Keyboard Fiend\'s', 'PC Enthusiast\'s', 'Weeb\'s', 'Foodie\'s'];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, loopNum, pause]);

  const imageIndex = (loopNum % 9) + 1;

  return (
    <div id="header">
      <div className="header-content">
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
