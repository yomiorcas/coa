import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return (
                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item ">
                            <Link to="#" className="nav-link dropdown-toggle">About</Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
                                <li className="nav-item"><Link to="/about" className="nav-link">Mission and Vision</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Structure and Departments</Link></li>
                                <li className="nav-item"><Link to="/contact" className="nav-link">Juridiction</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle">Team Members</Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/team.html" className="nav-link">Judicial cadre</Link></li>
                                <li className="nav-item"><Link to="/team.html" className="nav-link">Management Staff</Link></li>
                                <li className="nav-item"><Link to="/team.html" className="nav-link">Past President</Link></li>
                                <li className="nav-item"><Link to="/team.html" className="nav-link">Past Judges</Link></li>
                                <li className="nav-item"><Link to="/team.html" className="nav-link">Past Chief Registrar</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle">Divisions</Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/" className="nav-link">Court Divisions</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Court Registry</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle">Litigation</Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/" className="nav-link">Judgement</Link></li>
                                <li className="nav-item"><Link to="/case-file" className="nav-link">File case</Link></li>
                                <li className="nav-item"><Link to="/cause-list" className="nav-link">Cause List</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle">Media</Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/news" className="nav-link">News and Events</Link></li>
                                <li className="nav-item"><Link to="/gallery" className="nav-link">Picture Gallery</Link></li>
                                <li className="nav-item"><Link to="/videos" className="nav-link">Videos</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle">Contact</Link>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
                                <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
                                <li className="nav-item"><Link to="/help" className="nav-link">Help</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="menu-sidebar">
                        <ul>
                            <li><Link to="/contact" className="default-button">Get in Touch</Link></li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export { Menu };