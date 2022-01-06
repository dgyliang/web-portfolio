import './header.scss';
import Typewriter from 'typewriter-effect';

export default function Header() {
    return (
        <div id="header">
            <h1><Typewriter
            options={{
            strings: ['David Liang', 'Web-Portfolio'],
            autoStart: true,
            pauseFor: 1000,
            loop: true,
            }}
            /></h1>
            <a href="#about">
            <img src="../assets/down.svg" alt=""/>
            </a>
        </div>
    )
}
