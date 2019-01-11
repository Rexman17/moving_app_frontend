import React from 'react';
import { NavLink } from 'react-router-dom'


const NavBar = () => {


  return (
    <nav className="white">
     <div class="container nav-wrapper">
       <ul id="nav-mobile" class="left hide-on-med-and-down">
         <li>
          <NavLink to="/">
            <button className="nav-btn white-text waves-effect cyan lighten-2 btn-small" style={{fontFamily: 'Hammersmith One'}}>
              Moves
            </button>
          </NavLink>
        </li>
         <li>
          <button className="nav-btn white-text waves-effect cyan lighten-2 btn-small"  style={{fontFamily: 'Hammersmith One'}}>
            Logout
          </button>
        </li>
       </ul>
     </div>
    </nav>

  )
}

export default NavBar

// <span class="brand-logo center">LOGO</span>
