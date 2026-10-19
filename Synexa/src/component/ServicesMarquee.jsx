import { motion } from "framer-motion";
import "../main.css";

const marqueeOne = [
    "Web Applications",
    "Mobile Applications",
    "UI/UX Design",
    "Cloud & DevOps",
    "Cyber Security",
    "AI / ML Solutions",
];

const marqueeTwo = [
    "React Development",
    "Custom Software",
    "API Integration",
    "E-Commerce",
    "SaaS Products",
    "Digital Transformation",
];

const ServicesMarquee = () => {
    return (
        <section className="services-marquee">

            <div className="container">

                <motion.div
                    className="marquee-heading"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <span>OUR EXPERTISE</span>

                    <h2>
                        Building Digital Solutions <br />
                        <span>That Drive Growth</span>
                    </h2>
                </motion.div>

            </div>

            {/* Row One */}

            <div className="marquee-wrapper">

                <div className="marquee-track">

                    {[...marqueeOne, ...marqueeOne].map((item, index) => (
                        <div className="marquee-pill" key={index}>
                            <span className="dot"></span>
                            {item}
                        </div>
                    ))}

                </div>

            </div>

            {/* Row Two */}

            <div className="marquee-wrapper reverse">

                <div className="marquee-track">

                    {[...marqueeTwo, ...marqueeTwo].map((item, index) => (
                        <div className="marquee-pill" key={index}>
                            <span className="dot"></span>
                            {item}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default ServicesMarquee;