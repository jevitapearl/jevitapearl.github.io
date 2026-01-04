import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";


function Navbar(){
  const [openMenu,setOpenMenu] = useState(false);
  return(
    <nav className="nav-bar">
      <div>
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <span>coded by Jev</span>
      </div>
      
      <ul className="nav-links-desktop">
        <li><Link className="nav-btn" to="/">Home</Link></li>
        <li><Link className="nav-btn" to="/resume">Resume</Link></li>
        <li><Link className="nav-btn" to="/contact">Contact</Link></li>
        <li><Link className="nav-btn" to="/projects">Projects</Link></li>
        <li><Link className="nav-btn" to="/blog">Blog</Link></li>
      </ul>
      <span onClick={() => setOpenMenu(true)}>{<GiHamburgerMenu className="hamburger-menu" />}</span>
      <div className={!openMenu&&"hidden"}>
        <ul className={"nav-links-mobile"}>
          <li onClick={() => setOpenMenu(false)}><Link className="nav-btn-mobile" to="/">Home</Link></li>
          <li onClick={() => setOpenMenu(false)}><Link className="nav-btn-mobile" to="/resume">Resume</Link></li>
          <li onClick={() => setOpenMenu(false)}><Link className="nav-btn-mobile" to="/contact">Contact</Link></li>
          <li onClick={() => setOpenMenu(false)}><Link className="nav-btn-mobile" to="/projects">Projects</Link></li>
          <li onClick={() => setOpenMenu(false)}><Link className="nav-btn-mobile" to="/blog">Blog</Link></li>
          <li onClick={() => setOpenMenu(false)} className="nav-btn-mobile"><FaXmark size={15} /></li>
        </ul>
      </div>

      
    </nav>
  );
}

export default Navbar;