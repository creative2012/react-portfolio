import React from "react";
import { NavLink } from 'react-router-dom';

function Header(props) {

  return (

      <nav style={props.style}>
      
      <NavLink
              to="/react-portfolio/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              <div id="logo"></div>
            </NavLink>
 
        <ul>
          <li id="/react-portfolio/projects">
          <NavLink
            to="/react-portfolio/projects"
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
            to="/react-portfolio/contact"
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
              to="/react-portfolio/about"
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