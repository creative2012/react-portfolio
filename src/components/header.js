import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Header(props) {

  return (

      <nav style={props.style}>
      
      <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <div id="logo"></div>
            </NavLink>
 
        <ul>
          <li id="projects">Projects</li>
          <li id="current"></li>
          <li id="about">
          <NavLink
              to="/about"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              About
            </NavLink></li>
        </ul>
      </nav>
   
  )


}


export default Header;