import React from 'react';
import logo from "../1.png"

export default function Navbar () {
    return (
        <nav>
            <img src={logo} alt='react logo' className='nav-icon'/>
            <h3>ReactFact</h3>
            <h4>Project 1</h4> 
        </nav>
    )
}