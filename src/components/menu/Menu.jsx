import './menu.scss'

import { FaAlignJustify } from 'react-icons/fa';

export default function Menu({showNav, setShowNav}) {
    return (
        <nav className="menu">
            <FaAlignJustify onMouseEnter={() => setShowNav(true)} 
            // onClick = {() => setShowNav(!showNav)}
            onTouchStart = {() => setShowNav(!showNav)}
            style ={{ cursor: "pointer"}}/>
        </nav>
    )
}
