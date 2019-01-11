import React from 'react';
// import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {


  return (
    <nav className="white">
     <div class="container nav-wrapper">
       <ul id="nav-mobile" class="left hide-on-med-and-down">
         <li><a className="black-text" href="sass.html" style={{fontFamily: 'Hammersmith One'}}>
          Moves
        </a></li>
         <li><a className="black-text" href="badges.html" style={{fontFamily: 'Hammersmith One'}}>
          Logout
        </a></li>
       </ul>
     </div>
    </nav>

  )
}

export default NavBar

// <span class="brand-logo center">LOGO</span>
