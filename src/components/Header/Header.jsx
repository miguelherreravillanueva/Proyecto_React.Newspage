import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <header>
            <h1>World Today</h1>
            <nav >
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/form">Form</Link>
                    <Link to="/list">ListNews</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;