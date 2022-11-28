import React from 'react';
import './Home.scss';
import logo from "../image/logo.png"
const Home = () => {
    return (
        <div className='home'>

            <br />
            <p>Welcome to <strong>World Today</strong>, where you will find the latest news around the world.
                <br />
                <br />
                Politics
                <br />
                Climatechange
                <br />
                Art
                <br />
                Gastronomy
                <br />
                Culture
                <br />
                <br />
                and more...
                <br />
                <br />
                To read the latest news go to <i>ListNews</i>.
                <br />
                <img src={logo} alt="" />

            </p>

        </div>
    )
}

export default Home