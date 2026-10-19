import {
    // Linkedin,
    // Instagram,
    // Twitter,
    ArrowUpRight
} from "lucide-react";

import "../main.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-top">

                    {/* Brand */}

                    <div className="footer-brand">

                        <h2>
                            Synexa<span>.</span>
                        </h2>

                        <p>
                            Building scalable digital solutions
                            that help businesses grow faster
                            through modern technology.
                        </p>

                        {/* <div className="footer-social">

                           

                            <a href="#">
                                <Linkedin size={20}/>
                            </a>

                            <a href="#">
                                <Instagram size={20}/>
                            </a>

                            <a href="#">
                                <Twitter size={20}/>
                            </a>

                        </div> */}

                    </div>


                    {/* Quick Links */}

                    <div className="footer-links">

                        <h4>
                            Company
                        </h4>

                        <a href="/about">
                            About
                        </a>

                        <a href="/services">
                            Services
                        </a>

                        <a href="/team">
                            Team
                        </a>

                        <a href="/contact">
                            Contact
                        </a>

                    </div>


                    {/* Services */}

                    <div className="footer-links">

                        <h4>
                            Services
                        </h4>

                        <a href="/web-development">
                            Web Development
                        </a>

                        <a href="/services/mobile-app-development">
                            Mobile Applications
                        </a>

                        <a href="/services/cloud-devops">
                            Cloud & DevOps
                        </a>

                        <a href="/services/ai-ml">
                            AI / ML Solutions
                        </a>

                    </div>


                    {/* Contact */}

                    <div className="footer-links footer-contact">

                        <h4>
                            Contact
                        </h4>

                        <p>
                            Ahmedabad, Gujarat
                        </p>

                        <a href="#">
                            hello@synexa.com
                        </a>

                        <a href="#">
                            +91 98765 43210
                        </a>

                    </div>


                </div>


                <div className="footer-bottom">

                    <p>
                        © 2026 Synexa Technologies. All Rights Reserved.
                    </p>


                    <a href="#">
                        Privacy Policy
                        <ArrowUpRight size={14}/>
                    </a>

                </div>


            </div>

        </footer>
    );
};

export default Footer;