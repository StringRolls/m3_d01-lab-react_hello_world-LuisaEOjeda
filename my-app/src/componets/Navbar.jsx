import React from 'react';

import "./Navbar.css";
import "../App.css"

import ihLogo from "../images/ironhack-logo-xs.png"
import ihMenu from "../images/menu-top-xs.png"

export default function Navbar (){
    return (
        
            <nav className= "navbar">
                <img className="imagenav"src={ihLogo} alt="IronhackLogo"></img>
                <img className= "image" src={ihMenu} alt="IronhackMenu"></img> 
            </nav>
        )}
