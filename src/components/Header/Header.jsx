import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
      <nav >
        <span >
          </span>
        <div>
          <span>
            <Link to="/home">Home</Link>
          </span>
          <span>
            <Link to="/form">Form</Link>
          </span>
          <span>
            <Link to="/list">ListNews</Link>
          </span>
        </div>
         <h2>World Today</h2>
      </nav>
    );
  };
  
  export default Header;