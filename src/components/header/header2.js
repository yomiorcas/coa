import React from 'react';
import { Menu } from './Menu';
import { Link, BrowserRouter } from "react-router-dom";
function header() {
    return (
        <>
            <section className="topbar plr-100 bg-black">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="topbar-left-area">
                            <ul>
                                <li><a herf="mailto:support@courtofappeal.gov.ng" className="fg-white"><i className="fas fa-envelope"></i> support@courtofappeal.gov.ng</a></li>
                                <li><a href="javascript:;"><i className="fas fa-map-marker-alt"></i> No.1 Justice Babatunde Adejumo St. Garki Area 3, FTC Abuja</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="topbar-right-area">
                            <ul>
                                <li><a href="https://www.courtofappeal.gov.ng/emailpage/" target="_blank"><i className="fas fa-user"></i>Email Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <div className="navbar-area">

                <div className="main-responsive-nav">
                    <div className="container-fluid plr-100">
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
        </>
    );
}
export default header