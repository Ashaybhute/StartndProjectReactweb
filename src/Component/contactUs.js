import React from "react";
import contactUsCSS from "../Component/contactUs.module.css";
import contactUsImage from "../assets/Contact us.png";
import { MDBInput, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';
import { useEffect } from "react";

const ContactUsScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={contactUsCSS.contactText}>
                Contact Us
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-12 ft-1 pt-5">
                            <center>
                                <h2>Get In Touch</h2>
                                <p>Reach out to our dedicated team for personalized assistance, expert guidance,<br></br>
                                     and timely support. We're here to address your questions, feedback, and<br></br>
                                      inquiries promptly and effectively. Get in touch with us now!
                                </p>
                            </center>
                        </div>
                    </div>
                        <div className="row mb-5">
                            <div className="col-md-6 col-lg-5 col-12 ft-1 pt-5">
                                <img className="img-fluid" src={contactUsImage}></img>
                            </div>
                            <div className="col-md-6 col-lg-7 col-12 ft-1 pt-5">
                                <MDBValidation noValidate id='form' className='text-center'>
                                <h2>Contact us</h2>

                                <MDBValidationItem invalid feedback='Please provide your name.'>
                                    <MDBInput placeholder='Name' v-model='name' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide your email.'>
                                <MDBInput type='email' placeholder='Email address' v-model='email' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide phone number.'>
                                    <MDBInput placeholder='Phone' v-model='phone' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide mail subject.'>
                                    <MDBInput placeholder='Subject' v-model='subject' wrapperClass='mb-4' required />
                                </MDBValidationItem>

                                <MDBValidationItem invalid feedback='Please provide a message text.'>
                                    <MDBTextArea wrapperClass='mb-4' placeholder='Message' required />
                                </MDBValidationItem>

                                <button type='submit' className={contactUsCSS.sendContactButton}>
                                    Send Message
                                </button>
                                </MDBValidation>
                            </div>
                        </div>
                </div>
        </>
    )
}

export default ContactUsScreen;