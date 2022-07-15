import React from 'react';
import { Menu } from './Menu';
import { Link, BrowserRouter } from "react-router-dom";
function header() {
    return (
        <div className="navbar-area">

        <div className="main-responsive-nav">
            <div className="container">
                <div className="mobile-nav">
                    <Link to="/" className="logo"><img src="assets/images/small-logo.png" alt="logo" /></Link>
                    <ul className="menu-sidebar menu-small-device">
                        <li><Link className="default-button" to="/contact">Contact <i className="fas fa-angle-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src="assets/images/logo.png" alt="logo" />
                    </Link>
                    <Menu />
                </nav>
            </div>
        </div>
    </div>
    );
}
export default header