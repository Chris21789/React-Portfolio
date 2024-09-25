import { Link, NavLink } from "react-router-dom";

import './Header.css'

function Header() {
  return (
    <nav id='header'>
      <Link to="/React-Portfolio/" className="title">Christopher Colon</Link>
      <ul>
        <li>
          <NavLink to="/React-Portfolio/About">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/React-Portfolio/Portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/React-Portfolio/Contact">Contact Me</NavLink>
        </li>
        <li>
          <NavLink to="/React-Portfolio/Resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
