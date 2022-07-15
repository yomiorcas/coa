import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';


function footer() {
    return (
        <section className="footer">
        <div className="container">
            <div className="footer-content ptb-100">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-logo-area">
                            <Link to="/"><img src="assets/images/logo.png" alt="image" /></Link>
                            <p>
                            The Federal Supreme Court which in pre-independence era was the intermediate appellate Court had since1963 become the final appellate Court. The jurisprudence of this country acknowledged the need for an intermediate appellate Court.
                            </p>
                            <div className="footer-social-area">
                                <ul>
                                    <li><span>Follow Us: </span></li>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-links footer-contact">
                            <h3>Get In Touch</h3>
                            <div className="footer-contact-card">
                                <i className="fas fa-map-marker-alt"></i>
                                <h5>Location: </h5>
                                <p><a href="#" target="_blank">Garki Abuja</a></p>
                            </div>
                            <div className="footer-contact-card">
                                <i className="fas fa-envelope"></i>
                                <h5>Email: </h5>
                                <p><a href="mailto:support@medzo.com">support@courtofappeal.gov.ng</a></p>
                            </div>
                            <div className="footer-contact-card">
                                <i className="fas fa-phone-alt"></i>
                                <h5>Location: </h5>
                                <p><a href="tel:+234 8046647638">+234 804 664 7638</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-links footer-quick-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><i className="fas fa-angle-right"></i> <Link to="/">Judicial Services</Link> </li>
                                <li><i className="fas fa-angle-right"></i> <Link to="/terms">Terms & Conditions</Link></li>
                                <li><i className="fas fa-angle-right"></i> <Link to="/privacy">Privacy Policies</Link></li>
                                <li><i className="fas fa-angle-right"></i> <Link to="/gallery">Gallery</Link></li>
                                <li><i className="fas fa-angle-right"></i> <Link to="/news">Recent Events</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="footer-links footer-newsletter">
                            <h3>Subscribe</h3>
                            <p>Subscribe To Our Newsletter To Get Our Update News!</p>
                            <form className="newsletter-form" data-toggle="validator">
                                <input type="email" className="input-newsletter form-control" placeholder="Your Email" name="EMAIL" required autocomplete="off" />
                                <button className="default-button news-btn">Subscribe Now</button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© 2022<strong>The Court of Appeal</strong> All Rights Reserved. Developed By <a target="_blank" href="https://mbrcomputers.net/">MBR Computer Consultants Ltd</a></p>
            </div>

        </div>
    </section>
    );
    
}

export default footer;