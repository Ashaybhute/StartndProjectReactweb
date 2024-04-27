import React from "react";
import aboutUsCSS from './aboutUs.module.css';
import aboutUsImg from '../../src/assets/aboutus.png';
import { useEffect } from "react";

const AboutUsScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={aboutUsCSS.aboutText}>About Us</div>
            <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7 col-12 ft-1 pt-5">
                            <p><b>About Us</b></p>
                            <p>Welcome to StartNd, where innovation meets excellence in WhatsApp API marketing. 
                            As industry leaders, we are committed to changing the way businesses communicate, connect and succeed.</p>
                        <h3>Why Choose Us:</h3>
                        <ul>
                            <li><b>Trusted Partner:</b> Join a community of over 250,000 satisfied business owners who trust our platform for their marketing success.</li>
                            <li><b>Innovation at the heart:</b> stay ahead with our innovative features and solutions designed to meet the changing needs of your business.</li>
                            <li><b>Reliability and Security:</b> Rely on a platform that prioritizes reliability, security and compliance and provides a trusted environment for your business communications.</li>
                        </ul>
                        <h3 className="pt-2">What sets us apart:</h3>
                        <ul>
                            <li><b>Cost-effective solutions:</b> get results without breaking the bank. Our cost-effective solutions provide optimal value for your marketing budget.</li>
                            <li><b>24/7 Support: </b>We understand the importance of uninterrupted service. Our 24/7 support system ensures timely help and solutions whenever you need them.</li>
                            <li><b>Risk-Free Guarantee:  </b>Experience our service risk-free with a 30-day money-back guarantee that demonstrates our confidence in the value we bring to your business.</li>
                        </ul>

                        </div>
                        <div className="col-md-6 col-lg-5 col-12 ft-1 pt-5">
                            <img className="img-fluid"  src={aboutUsImg}></img>
                        </div>
                    </div>
            </div>
        </>
    );
}

export default AboutUsScreen;