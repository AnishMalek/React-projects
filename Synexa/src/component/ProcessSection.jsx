import { motion } from "framer-motion";
import {
    ScanSearch,
    Palette,
    Blocks,
    Rocket,
} from "lucide-react";
import "../main.css";

const process = [
    {
        number: "01",
        title: "Discover",
        icon: <ScanSearch size={30} />,
        description:
            "We understand your business goals, audience, and challenges before writing a single line of code.",
    },
    {
        number: "02",
        title: "Design",
        icon: <Palette size={30} />,
        description:
            "Our team creates intuitive user experiences with modern, visually engaging interfaces.",
    },
    {
        number: "03",
        title: "Develop",
        icon: <Blocks size={30} />,
        description:
            "Using modern technologies, we build scalable, secure, and high-performance digital solutions.",
    },
    {
        number: "04",
        title: "Launch",
        icon: <Rocket size={30} />,
        description:
            "After testing and optimization, we deploy your product and provide continuous support.",
    },
];

const ProcessSection = () => {
    return (
        <section className="process-section">

            <div className="container">

                <motion.div
                    className="process-heading text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span>OUR PROCESS</span>

                    <h2>
                        From Idea To Impact
                    </h2>

                    <p>
                        Every successful product starts with a clear process.
                        Here's how Synexa transforms your vision into reality.
                    </p>
                </motion.div>

                <div className="process-timeline">

                    {process.map((item, index) => (

                        <motion.div
                            key={index}
                            className={`process-item ${index % 2 === 0 ? "left" : "right"}`}
                            initial={{
                                opacity: 0,
                                y: 80,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: .6,
                                delay: index * .15,
                            }}
                            viewport={{ once: true }}
                        >

                            <div className="process-card">

                                <div className="process-number">
                                    {item.number}
                                </div>

                                <div className="process-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default ProcessSection;