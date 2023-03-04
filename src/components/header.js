import React from "react";
import { NavLink } from 'react-router-dom';

function Header(props) {

  return (

      <nav style={props.style}>
      
      <NavLink
              to="/react-portfolio"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <div id="logo"></div>
            </NavLink>
 
        <ul>
          <li id="projects">
          <NavLink
            to="/projects"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
          </li>
          <li id="current">
          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contact
          </NavLink>
          </li>
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