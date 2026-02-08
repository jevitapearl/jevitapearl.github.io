import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

function Navbar(){
  const [openMenu, setOpenMenu] = useState(false);
  
  return(
    <nav className="h-[7rem] font-nav flex justify-between items-center relative">
      <div className="flex">
        <img className="h-[7rem]" src={logo} alt="logo" />
        <span className="text-sm self-end mb-3">coded by Jev</span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-around items-center font-extrabold gap-2">
        {["Home", "Resume", "Contact", "Projects", "Blog"].map((item) => (
          <li key={item}>
            <NavLink 
              className="text-[1.7rem] px-8 py-4 hover:bg-primary-text hover:text-primary-bg hover:rounded-[3rem] hover:scale-115 duration-20 transition-all" 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <span className="md:hidden p-4 block" onClick={() => setOpenMenu(true)}>
        <GiHamburgerMenu size="3rem" />
      </span>

      {/* Mobile Overlay */}
      <div className={`${!openMenu ? "hidden" : "flex"} fixed inset-0 bg-primary-bg z-[999] flex-col justify-center items-center gap-8 h-screen w-screen`}>
        <ul className="flex flex-col items-center gap-8 text-p">
          {["Home", "Resume", "Contact", "Projects", "Blog"].map((item) => (
            <li key={item} onClick={() => setOpenMenu(false)}>
              <NavLink className="text-[2rem]" to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</NavLink>
            </li>
          ))}
          <li onClick={() => setOpenMenu(false)} className="mt-4">
            <FaXmark size={30} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;