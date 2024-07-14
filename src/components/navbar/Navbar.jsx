import "./navbar.scss";

import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar({ showNav, setShowNav }) {
  return (
    <div
      className="navbar"
      style={{
        left: showNav ? 0 : -999,
      }}
      onMouseLeave={() => setShowNav(false)}
    >
      <nav className="nav">
        <ul>
          <li>
            <a href="#header">Welcome</a>
          </li>
          <li>
            <a href="#about">Who I am</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </nav>

      <div className="contact">
        <a id="email" href="mailto:dgyliang@gmail.com">
          <FaEnvelope />
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/david-liang-906b09194/"
        >
          <FaLinkedin />
        </a>
        <a id="github" href="https://github.com/dgyliang/">
          <FaGithub />
        </a>
        <a id="instagram" href="https://www.instagram.com/gromquat/">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
