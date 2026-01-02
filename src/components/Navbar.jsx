import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import "../App.css"

function Navbar(){
  return(
    <nav className="nav-bar">
      <div>
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <span>coded by Jev</span>
      </div>
      
      <ul className="nav-links">
        <li><Link className="nav-btn" to="/resume">Resume</Link></li>
        <li><Link className="nav-btn" to="/contact">Contact</Link></li>
        <li><Link className="nav-btn" to="/projects">Projects</Link></li>
        <li><Link className="nav-btn" to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;