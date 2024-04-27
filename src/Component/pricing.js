import React from 'react';
import home from "./homeScreen.module.css";
import {TiTick} from "react-icons/ti";
import { useEffect } from "react";

const Pricing = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
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
        </>
    );
}
export default Pricing