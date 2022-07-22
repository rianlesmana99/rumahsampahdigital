import React, { Component } from "react";
import './nav.css';
import Logo from '../assets/logo.png';

class NavHome extends Component {
    render() {
        return(
            <nav>
                <div className="container">
                    {/* ini logo navbar */}
                    <div className="logo">
                        <img src={Logo} alt="Logo" height={60} />
                    </div>

                    {/* ini list navbar */}
                    <div className="nav-list">
                        <ul className="list">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* ini bagian login dan register */}
                    <div className="auth"></div>
                </div>
            </nav>
        )
    }
}

export default NavHome;