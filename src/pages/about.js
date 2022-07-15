import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout2';

class About extends React.Component {
    render() {
      return (
        <>
          <Layout>
          <section class="uni-banner"> 
            <div class="container">
                <div class="uni-banner-text-area">
                    <h1>About Us</h1>
                    <ul>
                        <li><Link to="index.html">Home</Link></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>
        </section>

          <section className="about pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-img">
                            <img className="a-img-1" src="https://www.courtofappeal.gov.ng/images/gallery/IMG-20210930-WA0012.jpg" alt="image"/>
                            <img className="a-img-2" src="https://www.courtofappeal.gov.ng/images/gallery/IMG-20210930-WA0023.jpg" alt="image"/>
                            <img className="a-img-3" src="assets/images/about/a3.jpg" alt="image"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="why-we-text-area about-text-area-2">
                            <div className="default-section-title">
                                <span>WHO WE ARE</span>
                                <h3>Note by Hon. President of the Court of Appeal</h3>
                                <p>
                                  At inception, the Court had three Judicial divisions; Lagos, Kaduna and Enugu. In June 1977, the number was increased to five with the establishment of Benin and Ibadan divisions. Jos division came on stream in 1983,Port Harcourt division in 1989 and Abuja division in 1996. Two Judicial Divisions were established at lIorin and Calabar in February 1999, and recently six more divisions were established in 2009; Sokoto, Owerri, Akure, Ekiti, Yola and Makurdi thus bringing the total number of judicial divisions to sixteen. In 1976, the number of Justices of the Court including the President was fixed at thirty-six (Act No.43 of 1976). Cap 95 of 1990 Laws of the Federation increased the number to forty-one. 1993 Amendment Act increased the number to fifty and by 2006 Court of Appeal Act, the number increased to seventy. The Court of Appeal (Amendment) Act, 2013 recently increased the number to Ninety.

                                </p>
                            </div>
                            <div className="why-we-text-list">
                                <i className="flaticon-government-building"></i>
                                <h4>Our Role Is To:</h4>
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
        </section>
	
		<section className="service-4 ptb-100">
            <div className="container">
                <div className="default-section-title default-section-title-middle">
                    <h3>Judicial Services</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
                </div>
                <div className="section-content">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Link to="service-detaisl.html"><img src="assets/images/service/s1.jpg" alt="image"/></Link>
                                    <i className="flaticon-balance"></i>
                                </div>
                                <div className="service-card-text">
                                    <h4><Link to="service-details.html">Salty And The Law</Link></h4>
                                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Link to="service-detaisl.html"><img src="assets/images/service/s2.jpg" alt="image"/></Link>
                                    <i className="flaticon-delivery"></i>
                                </div>
                                <div className="service-card-text">
                                    <h4><Link to="service-details.html">Travel & Immigration</Link></h4>
                                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Link to="service-detaisl.html"><img src="assets/images/service/s3.jpg" alt="image"/></Link>
                                    <i className="flaticon-portfolio"></i>
                                </div>
                                <div className="service-card-text">
                                    <h4><Link to="service-details.html">Business Services</Link></h4>
                                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Link to="service-detaisl.html"><img src="assets/images/service/s5.jpg" alt="image"/></Link>
                                    <i className="flaticon-process"></i>
                                </div>
                                <div className="service-card-text">
                                    <h4><Link to="service-details.html">Water Supply</Link></h4>
                                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Link to="service-detaisl.html"><img src="assets/images/service/s6.jpg" alt="image"/></Link>
                                    <i className="flaticon-refuse"></i>
                                </div>
                                <div className="service-card-text">
                                    <h4><Link to="service-details.html">Refuse Removal</Link></h4>
                                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="service-card">
                                <div className="service-card-img">
                                    <Link to="service-detaisl.html"><img src="assets/images/service/s7.jpg" alt="image"/></Link>
                                    <i className="flaticon-lightning"></i>
                                </div>
                                <div className="service-card-text">
                                    <h4><Link to="service-details.html">Electricity Supply</Link></h4>
                                    <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                    <Link className="read-more-btn" to="service-details.html">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		
		 <section className="explore explore-2 ptb-100">
            <div className="container">
                <div className="default-section-title default-section-title-middle mt-10">
                    <h3>Explore Events</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse</p>
                </div>
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about-img">
                                <img className="a-img-1" src="assets/images/Linkbout/Link4.jpg" alt="image"/>
                                <img className="a-img-2" src="assets/images/Linkbout/Link5.jpg" alt="image"/>
                                <img className="a-img-3" src="assets/images/Linkbout/Link6.jpg" alt="image"/>
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
		
		 <section className="team ptb-100 bg-f9fbfe">
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
                                    <img src="assets/images/team/t1.jpg" alt="image"/>
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
                                    <h4>Mila Wilson</h4>
                                    <p>City Secratery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="assets/images/team/t2.jpg" alt="image"/>
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
                                    <h4>Bren Stork</h4>
                                    <p>Counsil President</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="assets/images/team/t3.jpg" alt="image"/>
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
                                    <h4>Mukesh Sarkar</h4>
                                    <p>City Mayor</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                            <div className="team-card">
                                <div className="team-card-img">
                                    <img src="assets/images/team/t4.jpg" alt="image"/>
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
                                    <h4>David Jon</h4>
                                    <p>Assistant Mayor</p>
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

export default About