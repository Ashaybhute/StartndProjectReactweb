import React from 'react';
import footerCSS from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <div className={footerCSS.Footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-12 ft-1">
                            <h3><span>STARTND</span></h3>
                           <p> Choose StartNd - where your success is our priority</p>
                            <div className={footerCSS.footerIcons}>
                               <a target="_blank" href="https://www.facebook.com/startnd.official"> <i class="fa fa-facebook"></i></a>
                               <a target="_blank" href="https://www.youtube.com/@startnd"> <i class="fa fa-youtube"></i></a>
                            </div>
                        </div>
                       

                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Services</h5>
                            <ul className={footerCSS.navItem}>
                                <li >
                                    <a className="" href="/">Real-Time Engagement</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Automated Campaigns</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Multi-Channel Integration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Customizable Templates</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Secure Communication</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul className={footerCSS.navItem}>
                                <li className="nav-item">
                                <Link className="nav-link ps-0" to="/about-us">About Us</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link ps-0" to="/contact-us">Contact</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link ps-0" to="/faqs">FAQ</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link ps-0" to="/pricing">Pricing</Link>
                                </li>
                            </ul>
                        </div>

                        <div className={"col-md-6 col-lg-3 col-12 ft-3" + ' ' + footerCSS.linkDivision}>
                            <h5>Contacts</h5>
                            <p>Address: Shop No. 2, 60, Sarkaripally, Bansberia, Hooghly 712502 West Bengal, India<br></br>
                            Email: <a href="mailto:info@startnd.com">info@startnd.com</a><br />
                            Email: <a href="mailto:support@startnd.com">support@startnd.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footerCSS.copyrightText}>
                <p>© StartNd Owned by Atlantis Newtech Private Limited</p>
            </div>
        </>
    )
}
export default Footer