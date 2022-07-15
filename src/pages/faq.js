import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout2';

class FAQ extends React.Component {
	render() {
	  return (
		<>
		  <Layout>
          <section className="faq ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faq-img-area">
                            <img src="assets/images/faq-bg.jpg" alt="image"/>
                            <a className="video-popup" href="https://www.youtube.com/watch?v=ukfISpWHVWI"><i className="fas fa-play"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="faq-text-area">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item mt-0">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">How Can I Receive Municipality Services?<i className="fas fa-plus-circle"></i> <i className="fas fa-minus-circle"></i></button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim minim veniam lorem dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How Can I Book A Playground In Public Parks?<i className="fas fa-plus-circle"></i> <i className="fas fa-minus-circle"></i>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim minim veniam lorem dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How Can I apply For A Job At Municipality? <i className="fas fa-plus-circle"></i> <i className="fas fa-minus-circle"></i>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim minim veniam lorem dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Can I Make Company Schedule Change? <i className="fas fa-plus-circle"></i> <i className="fas fa-minus-circle"></i>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim minim veniam lorem dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Do You Offer A Free Initial Consultation? <i className="fas fa-plus-circle"></i> <i className="fas fa-minus-circle"></i>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam nonummy nibh sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim minim veniam lorem dolore magna aliqua.</p>
                                        </div>
                                    </div>
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

export default FAQ