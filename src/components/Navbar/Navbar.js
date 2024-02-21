import React from 'react';
import "./Navbar.css";
import {Link} from 'react-scroll';
const Navbar = () => {
  return (
        <nav className='Navbar'>
            <div className='desktopMenu'>
            <Link activeClass="active" to= "Intro" spy ={true} smooth = {true} offset={-100}  duration={500} className = 'desktopMenuListItem'>Home</Link>
            <Link  activeClass="active" to= "college" spy ={true} smooth = {true} offset={-100}  duration={500} className = 'desktopMenuListItem'> About</Link>
            <Link  activeClass="active" to= "projects" spy ={true} smooth = {true} offset={-100}  duration={500} className = 'desktopMenuListItem'>Projects</Link>
            <Link  activeClass="active" to= "contact" spy ={true} smooth = {true} offset={-100}  duration={500}  className = 'desktopMenuListItem'>Contact</Link>

            </div>
        
        
        </nav>
    )
        }

export default Navbar