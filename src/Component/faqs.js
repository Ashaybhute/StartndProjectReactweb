import React from 'react';
import faqCSS from "./faqs.module.css";
import {RiAddFill} from "react-icons/ri";
import faq from "../assets/FAQs.png"
import { useEffect } from "react";
const Faqs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={faqCSS.faqs}>
                <p>PRICING FAQ</p>
                <h1>Dedicated to help anything people’s<br/>needs</h1>

                <div className={faqCSS.lastBanner}>
                    <div className={faqCSS.lastBannerText}>

                        <div className=" m-4 pt-2 px-2 bg-white">
                            <div className="text-dark d-flex justify-content-between fw-bold fs-5 " type="button"
                                 data-bs-toggle="collapse" data-bs-target="#module1" aria-expanded="false"
                                 aria-controls="module1">
                                What is Whats App API Marketing?
                                <RiAddFill size={35} color="#6495EDFF"  aria-hidden="true"/>
                            </div>
                            <div className="col my-2">
                                <div className="collapse " id="module1">
                                    <span className="text-dark">
                                        WhatsApp API Marketing utilizes the WhatsApp Business API to facilitate businesses in reaching and engaging with their audience through personalized messaging
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className=" m-4 pt-2 px-2 bg-white">
                            <div className="text-dark d-flex justify-content-between fw-bold fs-5 " type="button"
                                 data-bs-toggle="collapse" data-bs-target="#module2" aria-expanded="false"
                                 aria-controls="module1">
                                How does it benefit my business?
                                <RiAddFill size={35} color="#6495EDFF"  aria-hidden="true"/>
                            </div>
                            <div className="col my-2">
                                <div className="collapse " id="module2">
                                    <span className="text-dark">
                                        Enjoy direct and instant communication, personalized campaigns, real-time analytics, and automated responses to enhance customer engagement and drive conversions.</span>
                                </div>
                            </div>
                        </div>

                        <div className=" m-4 pt-2 px-2 bg-white">
                            <div className="text-dark d-flex justify-content-between fw-bold fs-5 " type="button"
                                 data-bs-toggle="collapse" data-bs-target="#module3" aria-expanded="false"
                                 aria-controls="module1">
                                Is it compatible with my business?
                                <RiAddFill size={35} color="#6495EDFF"  aria-hidden="true"/>
                            </div>
                            <div className="col my-2">
                                <div className="collapse " id="module3">
                                    <span className="text-dark">
                                    Absolutely! WhatsApp API Marketing is scalable, catering to businesses of all sizes—from startups to enterprises.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className=" m-4 pt-2 px-2 bg-white">
                            <div className="text-dark d-flex justify-content-between fw-bold fs-5 " type="button"
                                 data-bs-toggle="collapse" data-bs-target="#module4" aria-expanded="false"
                                 aria-controls="module1">
                                Do you offer customer support?
                                <RiAddFill size={35} color="#6495EDFF"  aria-hidden="true"/>
                            </div>
                            <div className="col my-2">
                                <div className="collapse " id="module4">
                                    <span className="text-dark">
                                    Absolutely! WhatsApp API Marketing is scalable, catering to businesses of all sizes—from startups to enterprises.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={faq} className={faqCSS.lastBanrImg} alt="faq"/>
                </div>
            </div>
        </>
    )
}

export default Faqs;