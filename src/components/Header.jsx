import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Learn code</h1>
      <ul>
        <li>
                  <NavLink to="/" end>home</NavLink> 
                  {/* NavLink => add active class to the clicked Link */}
        </li>
        <li>
          <NavLink to="faq">faq</NavLink>
        </li>
        <li>
          <NavLink to="contact">contact</NavLink>
              </li>
              <li>
          <NavLink to="user">user</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
