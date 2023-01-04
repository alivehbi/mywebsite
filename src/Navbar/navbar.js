import React,{useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import "./navbar.css"

export const Navbar = ()=>{
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <header>
            <h3>AVG</h3>
            <nav className = "nav"ref={navRef}>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/#">Contact</a>
                <a href="/#">Mr.G's Game</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                 <FaTimes/>
                </button>
            
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
    
    
}