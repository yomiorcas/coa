import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/layout2';

class Terms extends React.Component {
    render() {
        return (
            <>
                <Layout>
                    <section className="uni-banner">
                        <div className="container">
                            <div className="uni-banner-text-area">
                                <h1>Terms & Conditions</h1>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div className="terms ptb-100">
                        <div className="container">
                            <h1>Overview</h1>
                            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or <a href="index.html">resources</a> we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, company name. We will collect personal <strong>identification</strong> information from Users only if they voluntarily consent such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
                            <h5>General Permission To Use And Access And Use Limitations</h5>
                            <p>This site is provided by <strong>Court of Appeal</strong>. <strong>Court of Appeal</strong> collects information in several ways from different parts of this site.</p>
                            <ul>
                                <li><span>1.</span> Complimentary ground shipping within 1 to 7 business days.</li>
                                <li><span>2.</span> In-store collection available within 1 to 7 business days.</li>
                                <li><span>3.</span> Next-day and Express delivery options also available.</li>
                                <li><span>4.</span> See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                            </ul>
                            <h4>Confidential Information</h4>
                            <p><strong>Court of Appeal</strong> accepts the following payment methods:</p>
                            <ul className="payment">
                                <li>Credit Card: <strong>Visa</strong>, <strong>MasterCard</strong>, <strong>Discover</strong>, <strong>American Express</strong>. The total will be charged to your card when the order is shipped.</li>
                                <li><strong>Court of Appeal</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                            </ul>
                            <h4>Linking To This Site</h4>
                            <p>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
                            <h4>Intellectual Property</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus, maximus vel augue sed, pharetra hendrerit orci. Vivamus sed massa in nibh imperdiet mattis quis sed augue. Pellentesque erat metus, vestibulum nec nisl.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
                            <h4>Security And Storage</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget euismod erat, sit amet vulputate enim. Etiam enim tellus.</p>
                            <ul>
                                <li><span>1.</span> Credit Card: <strong>Visa</strong>, <strong>MasterCard</strong>, <strong>Discover</strong>, <strong>American Express</strong>. The total will be charged to your card when the order is shipped.</li>
                                <li><span>2.</span> <strong>Court of Appeal</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                            </ul>
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}

export default Terms