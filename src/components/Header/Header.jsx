import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (
        <header>
            <nav >
                <h2>World Today</h2>
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
            </nav>
        </header>
    );
};

export default Header;