import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout2';

class News extends React.Component {
	render() {
		return (
			<>
				<Layout>
					<section className="uni-banner">
						<div className="container">
							<div className="uni-banner-text-area">
								<h1>News</h1>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li>Our News</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="blog-details pt-70 pb-100">
            <div className="container">
                <div className="row ">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <Link to="/news-details"><img src="assets/images/blog/b1.jpg" alt="image"/></Link>
                            </div>
                            <div className="blog-card-text-area">
                                <div className="blog-date">
                                    <ul>
                                        <li><i className="fas fa-user"></i> By <a href="#">Admin</a></li>
                                        <li><i className="far fa-comments"></i> No Comment</li>
                                        <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                    </ul>
                                </div>
                                <h4><Link to="/news-details">Responds To Citizens Advice</Link></h4>
                                <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                <Link className="read-more-btn" to="/news-details">Read More</Link>
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <Link to="/news-details"><img src="assets/images/blog/b1.jpg" alt="image"/></Link>
                            </div>
                            <div className="blog-card-text-area">
                                <div className="blog-date">
                                    <ul>
                                        <li><i className="fas fa-user"></i> By <a href="#">Admin</a></li>
                                        <li><i className="far fa-comments"></i> No Comment</li>
                                        <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                    </ul>
                                </div>
                                <h4><Link to="/news-details">Responds To Citizens Advice</Link></h4>
                                <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                <Link className="read-more-btn" to="/news-details">Read More</Link>
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <Link to="/news-details"><img src="assets/images/blog/b1.jpg" alt="image"/></Link>
                            </div>
                            <div className="blog-card-text-area">
                                <div className="blog-date">
                                    <ul>
                                        <li><i className="fas fa-user"></i> By <a href="#">Admin</a></li>
                                        <li><i className="far fa-comments"></i> No Comment</li>
                                        <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                    </ul>
                                </div>
                                <h4><Link to="/news-details">Responds To Citizens Advice</Link></h4>
                                <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                <Link className="read-more-btn" to="/news-details">Read More</Link>
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <Link to="/news-details"><img src="assets/images/blog/b1.jpg" alt="image"/></Link>
                            </div>
                            <div className="blog-card-text-area">
                                <div className="blog-date">
                                    <ul>
                                        <li><i className="fas fa-user"></i> By <a href="#">Admin</a></li>
                                        <li><i className="far fa-comments"></i> No Comment</li>
                                        <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                    </ul>
                                </div>
                                <h4><Link to="/news-details">Responds To Citizens Advice</Link></h4>
                                <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                <Link className="read-more-btn" to="/news-details">Read More</Link>
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <Link to="/news-details"><img src="assets/images/blog/b1.jpg" alt="image"/></Link>
                            </div>
                            <div className="blog-card-text-area">
                                <div className="blog-date">
                                    <ul>
                                        <li><i className="fas fa-user"></i> By <a href="#">Admin</a></li>
                                        <li><i className="far fa-comments"></i> No Comment</li>
                                        <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                    </ul>
                                </div>
                                <h4><Link to="/news-details">Responds To Citizens Advice</Link></h4>
                                <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                <Link className="read-more-btn" to="/news-details">Read More</Link>
                            </div>
                        </div>
                    </div>
					
					<div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="blog-card">
                            <div className="blog-card-img">
                                <Link to="/news-details"><img src="assets/images/blog/b1.jpg" alt="image"/></Link>
                            </div>
                            <div className="blog-card-text-area">
                                <div className="blog-date">
                                    <ul>
                                        <li><i className="fas fa-user"></i> By <a href="#">Admin</a></li>
                                        <li><i className="far fa-comments"></i> No Comment</li>
                                        <li><i className="far fa-calendar-alt"></i> 01 Nov 2022</li>
                                    </ul>
                                </div>
                                <h4><Link to="/news-details">Responds To Citizens Advice</Link></h4>
                                <p>Lorem ipsum dolor amet magna set dolor sit amet consectetur adipiscing do elite labore.</p>
                                <Link className="read-more-btn" to="/news-details">Read More</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

				<div className="paginations mt-30">
					<ul>
						<li><Link className="active" to="/news">1</Link></li>
						<li><a href="#">2</a></li>
						<li><a href="#">3</a></li>
						<li><a href="#"><i className="fas fa-chevron-right"></i></a></li>
					</ul>
				</div>
            </div>
        </section>
				</Layout>
			</>
		);
	}
}

export default News