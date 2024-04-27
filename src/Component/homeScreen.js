import React from 'react';
import home from "./homeScreen.module.css"
import BanrImg1 from "../assets/banrImg1.png"
import chat from "../assets/Chat-pana.png"
import faq from "../assets/FAQs.png"
import stats from "../assets/Statistics-pana.png"
import team from "../assets/Team.png"
import onlineShop from "../assets/shop.png"
import {TiTick} from "react-icons/ti";
import {RiAddFill} from "react-icons/ri";
import { useEffect } from 'react';

const HomeScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <div className={home.mainBanner}>
                <div className={home.bannerText}>
                    WhatsApp API marketing
                    <h1>Boost Your Advertising</h1>
                    Introducing StartNd, our state-of-the-art WhatsApp API Marketing platform for companies! By using
                    creative solutions and seamless integration, you can fully realize the promise of direct consumer
                    connection. Discover the capabilities of our platform.
                    <br/><br/>
                    <button type="Submit" className={home.bannerBtn}><a href="https://app.startnd.com/?src=landing">Start Your Trail</a></button>
                </div>
                <div className={home.bannerImg}>
                    <img src={BanrImg1} className={home.banrImg1} alt="homeBanner"/>
                </div>
            </div>


            <div className={home.highlights}>
                <h1>Our Highlighted Solutions</h1>
                <div className={home.solutionRow}>
                    <div className={home.solution}>
                        <img src={chat} className={home.solImg} alt="chat"/>
                        <p>
                            <h2>Customizable Templates</h2>
                            Tailor your message effortlessly with our customizable templates – precision,
                            personalization, and efficiency at your fingertips for impactful communication.
                        </p>
                    </div>
                    <div className={home.solution}>
                        <img src={stats} className={home.solImg} alt="homeBanner"/>
                        <p>
                            <h2>Reliability & Cost-Effectiveness</h2>
                            Unmatched reliability meets cost-effectiveness. Trust in seamless solutions that deliver
                            excellence without breaking the bank. Your success, our priority.
                        </p>
                    </div>
                    <div className={home.solution}>
                        <img src={team} className={home.solImg} alt="homeBanner"/>
                        <p>
                            <h2>Unlimited Agent</h2>
                            Empower your team with Unlimited Agent. Streamline communication, boost efficiency, and
                            elevate customer support with limitless possibilities. Transform today!
                        </p>
                    </div>
                </div>
            </div>


            <div className={home.div3}>

                    <img src={onlineShop} className={home.onlineShop} alt="homeBanner"/>

                <div className={home.div3Content}>
                    <p>
                        <h2>Unwavering Support at Your Service—We've Got Your Back</h2>
                        <br/>
                        Get unmatched assistance from us, your dependable and economical partner. Our round-the-clock help desk guarantees maximum effectiveness and helps you whenever you need it. Enjoy our 30-day money-back guarantee and piece of mind. Goodbye to setup fees—we'll cover them all! Additionally, take use of our free API to open up a world of opportunities for your company.
                    </p>
                    <div style={{display: "flex", justifyContent:"space-evenly"}}>
                        <ul className={home.div3List}>
                            <li>
                                <TiTick size={20} color="#000000" /> &nbsp;
                                Fully Support</li>
                            <li>
                                <TiTick size={20} color="#000000" /> &nbsp;
                                Cost Effectiveness</li>
                            <li>
                                <TiTick size={20} color="#000000" /> &nbsp;
                                High Efficiency</li>
                        </ul>
                        <ul className={home.div3List}>
                            <li>
                                <TiTick size={20} color="#000000" /> &nbsp;
                                Reliability</li>
                            <li>
                                <TiTick size={20} color="#000000" /> &nbsp;
                                24/7 Support System</li>
                            <li>
                                <TiTick size={20} color="#000000" /> &nbsp;
                                Days Money Back Policy</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className={home.mainBanner}>
                <div>
                    <p className={home.banner2Text}>
                        <h1>Join a community of success!
                            <br/>
                            Our platform is trusted by business owners
                            <br/>
                            worldwide.</h1>
                        <br/>
                        Experience the confidence that comes with a proven track record, as countless entrepreneurs rely on our solutions for their growth and success. Your business deserves a partner you can trust – choose a platform backed by a quarter of a million satisfied business owners.
                    </p>
                </div>
            </div>

            <div className={home.pricingBlock}>
                <p>
                    <h1>Our Pricing Plan</h1><br/>
                    Transparent pricing for every budget. Choose a plan that suits your needs. No
                    <br/>hidden fees, just straightforward value and flexibility.
                </p>

                <div className={home.packages}>
                    <div className={home.pack}>
                        <p><h2>StartUp</h2>
                            Get your business up and running<br/>
                            <h1>₹ 699</h1>/Months</p>
                        <br/>
                        <button type="submit" className={home.bannerBtn}>Get Started Free</button>
                        <br/><br/>
                        <ul className={home.packList}>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Official WhatsApp API</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Unlimited Agent Logins</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Template Message APIs</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Broadcasting Message</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Multi-Agent Live Chat</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Unlimited Tags</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Green Tick Verification & Assistance</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;User-friendly Mobile Apps (Android & iOS)</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Quick Responses</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Campaign Click Tracking</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Project APIs</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Webhooks</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Multiple Business Account (₹299/m)</li>
                        </ul>
                    </div>
                    <div className={home.pack}>
                        <p><h2>Pro</h2>
                            Get your business up and running<br/>
                            <h1>₹ 699</h1> per Months</p>
                        <br/>
                        <button type="submit" className={home.bannerBtn}>Get Started Free</button>
                        <br/><br/>
                        <ul className={home.packList}>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Official WhatsApp API</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Unlimited Agent Logins</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Template Message APIs</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Broadcasting Message</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Multi-Agent Live Chat</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Unlimited Tags</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Green Tick Verification & Assistance</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;User-friendly Mobile Apps (Android & iOS)</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Quick Responses</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Campaign Click Tracking</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Project APIs</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Webhooks</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Multiple Business Account (₹299/m)</li>
                        </ul>
                    </div>
                    <div className={home.pack}>
                        <p><h2>Enterprise & Developer</h2>
                            Get your business up and running<br/>
                            <h1>₹ _ _</h1> per Months</p>
                        <br/>
                        <button type="submit" className={home.bannerBtn}>Get Started Free</button>
                        <br/><br/>
                        <ul className={home.packList}>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Official WhatsApp API</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Unlimited Agent Logins</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Template Message APIs</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Broadcasting Message</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Multi-Agent Live Chat</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Unlimited Tags</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Green Tick Verification & Assistance</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;User-friendly Mobile Apps (Android & iOS)</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Quick Responses</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Campaign Click Tracking</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Project APIs</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Webhooks</li>
                            <li><TiTick size={20} color="#6495EDFF" /> &nbsp;Multiple Business Account (₹299/m)</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={home.faqs}>
                <p>PRICING FAQ</p>
                <h1>Dedicated to help anything people’s<br/>needs</h1>

                <div className={home.lastBanner}>
                    <div className={home.lastBannerText}>

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
                    <img src={faq} className={home.lastBanrImg} alt="faq"/>
                </div>
            </div>
        </>
    );

}

export default HomeScreen;