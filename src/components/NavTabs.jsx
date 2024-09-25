import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/React-Portfolio"
          className={currentPage === "/React-Portfolio" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/React-Portfolio/Portfolio"
          className={
            currentPage === "/React-Portfolio/Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/React-Portfolio/Contact"
          className={
            currentPage === "/React-Portfolio/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact Me
        </Link>
      </li>
      <li>
        <Link
          to="/React-Portfolio/Resume"
          className={currentPage === "/React-Portfolio/Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
