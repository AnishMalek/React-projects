import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "../main.css";
import Stats from "./Stats";
import CoreValues from "./CoreValues";
import FAQSection from "./FAQSection";

const AboutSynexa = () => {
    return (
      <>
        <section className="about-hero">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-9 text-center">

                        <motion.span
                            className="about-badge"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            ABOUT US
                        </motion.span>

                        <motion.h1
                            className="about-title"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Building Digital Solutions
                            <br />
                            That Drive
                            <span> Business Growth.</span>
                        </motion.h1>

                        <motion.div
                            className="about-divider"
                            initial={{ width: 0 }}
                            whileInView={{ width: 90 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        />

                        <motion.p
                            className="about-text"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            At <strong>Synexa Technologies</strong>, we partner
                            with startups, growing businesses, and enterprises
                            to build modern websites, scalable web applications,
                            custom software, and digital solutions that solve
                            real business challenges and create long-term value.
                        </motion.p>

                     

                    </div>

                </div>

            </div>

        </section>

<Stats/>  
<CoreValues/>
<FAQSection/>
        </>

        
     
    );


};

export default AboutSynexa;