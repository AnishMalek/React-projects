import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "../main.css";
import OurExpertise from "../component/OurExpertise";
import ServicesCards from "../component/ServicesCards";
import ServicesMarquee from "../component/ServicesMarquee";

const ServicesPage = () => {
    return (
        <>
        <section className="services-hero">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-lg-9 text-center">

                        <motion.span
                            className="services-badge"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            OUR SERVICES
                        </motion.span>

                        <motion.h1
                            className="services-title"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            Digital Solutions
                            <br />
                            Built For
                            <span> Modern Businesses.</span>
                        </motion.h1>

                        <motion.div
                            className="services-divider"
                            initial={{ width: 0 }}
                            whileInView={{ width: 90 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.p
                            className="services-text"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            We provide end-to-end digital services including
                            web development, mobile applications, cloud
                            solutions, UI/UX design, AI integration and
                            enterprise software tailored to your business.
                        </motion.p>

                       
                    </div>

                </div>

            </div>

        </section>
        <ServicesCards/>
        <ServicesMarquee/>
        

        </>
    );
};

export default ServicesPage;