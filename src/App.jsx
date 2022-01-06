import './app.scss';
import {useState} from 'react';

import Menu from './components/menu/Menu';
import Navbar from './components/navbar/Navbar';
import Sections from './components/sections/Sections';

function App() {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="app">
      <Menu showNav={showNav} setShowNav={setShowNav}/>
      <Navbar showNav={showNav} setShowNav={setShowNav}/>
      <Sections showNav={showNav} setShowNav={setShowNav}/>
      </div>
  );
}

export default App;
