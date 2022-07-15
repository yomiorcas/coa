import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './components/layout/layout';

class App extends React.Component {
  render() {
    return (
      <>
        <Layout>
          <section className="home-banner ptb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="banner-text-area">
                    <h6>The Legal System</h6>
                    <h1>Nigeria Court of Appeal</h1>
                    <p>In the Nigerian Judicial system, the Court of Appeal is the second in the hierarchy of the Courts and next to the Supreme Court of Nigeria.</p>
                    <Link className="default-button" to="/about">Learn More</Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home-banner-area">
                    <img src="https://www.courtofappeal.gov.ng/images/gallery/PHOTO-2021-09-24-11-39-08.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="precess ptb-100 mt-10">
            <div className="container">
              <div className="default-section-title default-section-title-middle">
                <h3>Tackling The Process</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
              </div>
              <div className="section-content">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="process-card process-card-2">
                      <i className="flaticon-google-docs"></i>
                      <h4><Link to="about.html">Application</Link></h4>
                      <p>There are many variations of passages of the lorem Ipsum available but this is a majority have suffered.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="process-card process-card-2">
                      <i className="flaticon-process"></i>
                      <h4><Link to="about.html">Processing</Link></h4>
                      <p>There are many variations of passages of the lorem Ipsum available but this is a majority have suffered.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="process-card process-card-2">
                      <i className="flaticon-checked-1"></i>
                      <h4><Link to="about.html">Complete</Link></h4>
                      <p>There are many variations of passages of the lorem Ipsum available but this is a majority have suffered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="about-img">
                    <img className="a-img-1" src="assets/images/about/a1.jpg" alt="image" />
                    <img className="a-img-2" src="assets/images/about/a2.jpg" alt="image" />
                    <img className="a-img-3" src="assets/images/about/a3.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="why-we-text-area about-text-area-2">
                    <div className="default-section-title">
                      <span>WHO WE ARE</span>
                      <h3>Medzo Is An Inner Metropolitan Municipality Service</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="why-we-text-list">
                      <i className="flaticon-government-building"></i>
                      <h4>Our Role Is To:</h4>
                      <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit praesent sapien massa convallis.</p>
                      <ul>
                        <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                        <li>Nulla porttitor accumsan tincidunt.</li>
                        <li>Ivamus suscipit tortor eget felis porttitor volutpat.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services service-2 ptb-100 bg-222222">
            <div className="container">
              <div className="default-section-title default-section-title-middle">
                <h3>Find Government Services</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
              </div>
              <div className="section-content">
                <div className="service-slider-area owl-carousel">
                  <div className="service-card-2">
                    <i className="flaticon-balance"></i>
                    <h4><Link to="service-details.html">Salty And The Law</Link></h4>
                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                  </div>
                  <div className="service-card-2">
                    <i className="flaticon-delivery"></i>
                    <h4><Link to="service-details.html">Travel & Immigration</Link></h4>
                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                  </div>
                  <div className="service-card-2">
                    <i className="flaticon-briefcase"></i>
                    <h4><Link to="service-details.html">Business Services</Link></h4>
                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                  </div>
                  <div className="service-card-2">
                    <i className="flaticon-google-docs"></i>
                    <h4><Link to="service-details.html">Business Analytics</Link></h4>
                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="video">
            <div className="container">
              <div className="video-area">
                <img src="assets/images/video-bg.jpg" alt="image" />
                <Link className="video-popup" to="https://www.youtube.com/watch?v=ukfISpWHVWI"><i className="fas fa-play"></i></Link>
              </div>
            </div>
          </section>

          <section className="events pt-100">
            <div className="container">
              <div className="default-section-title default-section-title-middle mt-10">
                <h3>Upcoming Events</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
              </div>
              <div className="section-content">
                <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="events-card">
                      <img src="assets/images/events/e1.jpg" alt="image" />
                      <div className="events-card-text">
                        <ul>
                          <li>Conference</li>
                          <li>Oct 12, 2022</li>
                        </ul>
                        <h4><Link to="event-details.html">Annual Conference 2022</Link></h4>
                        <p><i className="fas fa-map-marker-alt"></i> <Link to="https://goo.gl/maps/QTg39qSWoB5fdndT7">At City Center, 27 Division Street, USA</Link></p>
                        <Link className="read-more-btn" to="event-details.html">Read More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="events-card">
                      <img src="assets/images/events/e2.jpg" alt="image" />
                      <div className="events-card-text">
                        <ul>
                          <li>Conference</li>
                          <li>Oct 13, 2022</li>
                        </ul>
                        <h4><Link to="event-details.html">Negotiation In Government</Link></h4>
                        <p><i className="fas fa-map-marker-alt"></i> <Link to="https://goo.gl/maps/QTg39qSWoB5fdndT7">At City Center, 27 Division Street, USA</Link></p>
                        <Link className="read-more-btn" to="event-details.html">Read More</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="events-card">
                      <img src="assets/images/events/e3.jpg" alt="image" />
                      <div className="events-card-text">
                        <ul>
                          <li>Conference</li>
                          <li>Oct 14, 2022</li>
                        </ul>
                        <h4><Link to="event-details.html">Annual Health Conference</Link></h4>
                        <p><i className="fas fa-map-marker-alt"></i> <Link to="https://goo.gl/maps/QTg39qSWoB5fdndT7">At City Center, 27 Division Street, USA</Link></p>
                        <Link className="read-more-btn" to="event-details.html">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="explore explore-2 ptb-100 bg-f9fbfe">
            <div className="container">
              <div className="default-section-title default-section-title-middle mt-10">
                <h3>Explore Events</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
              </div>
              <div className="section-content">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="about-img">
                      <img className="a-img-1" src="assets/images/about/a4.jpg" alt="image" />
                      <img className="a-img-2" src="assets/images/about/a5.jpg" alt="image" />
                      <img className="a-img-3" src="assets/images/about/a6.jpg" alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="why-we-text-area about-text-area-2">
                      <div className="default-section-title">
                        <h3>Plan A Great City That Provides The Essence Of Success</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div className="why-we-text-list">
                        <i className="flaticon-government"></i>
                        <h4>Sustainable Innovation Is Our Pathway:</h4>
                        <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit praesent sapien massa convallis.</p>
                        <ul>
                          <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                          <li>Nulla porttitor accumsan tincidunt.</li>
                          <li>Ivamus suscipit tortor eget felis porttitor volutpat.</li>
                          <li>Donec rutrum congue leo eget malesuada.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="team ptb-100">
            <div className="container">
              <div className="default-section-title default-section-title-middle">
                <h3>Our Judges</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
              </div>
              <div className="section-content">
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="team-card">
                      <div className="team-card-img">
                        <img src="https://www.courtofappeal.gov.ng/images/gallery/PHOTO-2021-09-24-11-39-08.jpg" alt="image" />
                        <div className="team-social-icons">
                          <ul>
                            <li><Link to="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-card-text">
                        <h4>Hon. Justice Monica Bolna'an Dongban-mensem</h4>
                        <p>HON. JUSTICE</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="team-card">
                      <div className="team-card-img">
                        <img src="https://www.courtofappeal.gov.ng/images/gallery/PHOTO-2021-09-24-11-39-08.jpg" alt="image" />
                        <div className="team-social-icons">
                          <ul>
                            <li><Link to="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-card-text">
                        <h4>Hon. Justice Monica Bolna'an Dongban-mensem</h4>
                        <p>HON. JUSTICE</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="team-card">
                      <div className="team-card-img">
                        <img src="https://www.courtofappeal.gov.ng/images/gallery/PHOTO-2021-09-24-11-39-08.jpg" alt="image" />
                        <div className="team-social-icons">
                          <ul>
                            <li><Link to="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-card-text">
                        <h4>Hon. Justice Monica Bolna'an Dongban-mensem</h4>
                        <p>HON. JUSTICE</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="team-card">
                      <div className="team-card-img">
                        <img src="https://www.courtofappeal.gov.ng/images/gallery/PHOTO-2021-09-24-11-39-08.jpg" alt="image" />
                        <div className="team-social-icons">
                          <ul>
                            <li><Link to="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link to="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                          </ul>
                        </div>
                      </div>
                      <div className="team-card-text">
                        <h4>Hon. Justice Monica Bolna'an Dongban-mensem</h4>
                        <p>HON. JUSTICE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </Layout>
      </>
    );
  }
}

export default App;
