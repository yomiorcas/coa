import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout2';

class NewsDetails extends React.Component {
	render() {
	  return (
		<>
		  <Layout>
          <section className="uni-banner"> 
            <div className="container">
                <div className="uni-banner-text-area">
                    <h1>News Details</h1>
                    <ul>
                        <li><Link to="/news.html">Home</Link></li>
                        <li>News Details</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="blog-details ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-details-text-area details-text-area">
                            <img src="assets/images/inner-images/bd1.jpg" alt="image"/>
                            <div className="blog-date">
                                <ul>
                                    <li><i className="fas fa-user"></i> By <a href="/news.html">Admin</a></li>
                                    <li><i className="far fa-comments"></i> No Comment</li>
                                    <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                </ul>
                            </div>
                            <h3 className="mt-0">Responds To Citizens Advice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium sed doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className="blog-quote">
                                <i className="flaticon-right-quote"></i>
                                <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore dolore magna aliqua.”</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut aliquip commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur commodo.</p>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspici unde omnis iste natus error sit voluptatem accusantium sed doloremque laudantium.</p>
                        </div>
                        <div className="blog-text-footer mt-30">
                            <div className="tag-area">
                                <ul>
                                    <li><i className="fas fa-tags"></i></li>
                                    <li><a href="category.html">Culture,</a></li>
                                    <li><a href="category.html">Business,</a></li>
                                    <li><a href="category.html">Citizen</a></li>
                                </ul>
                            </div>
                            <div className="social-icons">
                                <ul>
                                    <li><span>Share:</span></li>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bd-comments details-text-area">
                            <h3>Comments</h3>
                            <div className="comment-card">
                                <img src="assets/images/feedback/f2.jpg" alt="image"/>
                                <h5>David Makel</h5>
                                <p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                                <a href="#bd-form">Reply</a>
                            </div>
                            <div className="comment-card">
                                <img src="assets/images/feedback/f1.jpg" alt="image"/>
                                <h5>Jemmy Makel</h5>
                                <p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped.</p>
                                <a href="#bd-form">Reply</a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-area pl-20 pt-30">
                            <div className="sidebar-card search-box">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Here.." required/>
                                        <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                           
                            <div className="sidebar-card recent-news mt-30">
                                <h3>Popular Posts</h3>
                                <div className="recent-news-card">
                                    <Link to="/blog-details.html"><img src="assets/images/inner-images/bds1.jpg" alt="image"/></Link>
                                    <h5><Link to="/blog-details.html">Responds To Citizenship Advices</Link></h5>
                                    <p>1st Sep 2022</p>
                                </div>
                                <div className="recent-news-card">
                                    <Link to="/blog-details.html"><img src="assets/images/inner-images/bds2.jpg" alt="image"/></Link>
                                    <h5><Link to="/blog-details.html">Housing Advisers Program For Beginner</Link></h5>
                                    <p>4th Sep 2022</p>
                                </div>
                                <div className="recent-news-card">
                                    <Link to="/blog-details.html"><img src="assets/images/inner-images/bds3.jpg" alt="image"/></Link>
                                    <h5><Link to="/blog-details.html">Responds To a National Reports</Link></h5>
                                    <p>2nd Sep 2022</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
		
		{/* <section className="event-details ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="event-details details-text-area">
                            <img className="details-main-img" src="assets/images/inner-images/ed1.jpg" alt="image"/>
                            <div className="details-img-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-30">
                                        <img src="assets/images/service/s1.jpg" alt="image"/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-30">
                                        <img src="assets/images/service/s2.jpg" alt="image"/>
                                    </div>
                                </div>
                            </div>
                            <h3>Annual Conference 2022</h3>
                            <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deseru mollitia animi, id est laborum et dolorum fuga</p>
                            <div className="details-img-area mt-15">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
                                        <img src="assets/images/service/s3.jpg" alt="image"/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-30">
                                        <img src="assets/images/service/s4.jpg" alt="image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="details-map-area">
                                <iframe className="d-map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3024.1836133668685!2d-73.99830468459494!3d40.71397427933169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAt%20City%20Center%2C%2027%20Division%20Street%2C%20USA!5e0!3m2!1sen!2sbd!4v1635664796382!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-area pl-20 pt-30">
                            <div className="sidebar-card event-info">
                                <h3>Events Information</h3>
                                <p>It is a long established fact that a reader will be distracted the readable content of a page.</p>
                                <div className="event-info-card mt-0">
                                    <i className="far fa-calendar-alt"></i>
                                    <h5>Events Date:</h5>
                                    <span>12 October 2022</span>
                                </div>
                                <div className="event-info-card">
                                    <i className="far fa-clock"></i>
                                    <h5>Events Time:</h5>
                                    <span>08 : 00 am - 04 : 00 pm</span>
                                </div>
                                <div className="event-info-card">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h5>Events Location:</h5>
                                    <span>18 Quiet Valley Lane, USA</span>
                                </div>
                                <div className="event-info-card">
                                    <i className="fas fa-dollar-sign"></i>
                                    <h5>Event Cost:</h5>
                                    <span>160</span>
                                </div>
                                <div className="event-info-card">
                                    <i className="fas fa-phone-alt"></i>
                                    <h5>Phone Number:</h5>
                                    <span><a href="tel:+021234567894">+02 123 456 7894</a></span>
                                </div>
                                <div className="event-info-card">
                                    <i className="fas fa-envelope"></i>
                                    <h5>Email Address:</h5>
                                    <span><a href="mailto:support@medzo.com">support@medzu.com</a></span>
                                </div>
                                <div className="event-info-card">
                                    <i className="fas fa-globe"></i>
                                    <h5>Website:</h5>
                                    <span><a href="index.html">medzu.com</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}



		  </Layout>
		</>
	  );
	}
  }

export default NewsDetails