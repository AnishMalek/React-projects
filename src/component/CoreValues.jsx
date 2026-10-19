import { motion } from "framer-motion";
import {
    Sparkles,
    ShieldCheck,
    Handshake,
    ArrowUpRight
} from "lucide-react";
import "../main.css";

const values = [
    {
        icon: Sparkles,
        title: "Innovation",
        description:
            "We embrace modern technologies and creative thinking to build future-ready digital solutions."
    },
    {
        icon: ShieldCheck,
        title: "Quality",
        description:
            "Every project is crafted with precision, performance and reliability to deliver lasting value."
    },
    {
        icon: Handshake,
        title: "Partnership",
        description:
            "We believe in long-term relationships built on trust, transparency and continuous support."
    }
];

const CoreValues = () => {
    return (
        <section className="core-values">

            <div className="container">

                {/* Heading */}

                <motion.div
                    className="core-header text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >

                    <span className="core-tag">
                        OUR CORE VALUES
                    </span>

                    <h2>
                        Principles That Define
                        <span> Synexa.</span>
                    </h2>

                    <p>
                        Our values guide every decision we make and every
                        solution we build, ensuring quality, innovation and
                        long-term success for our clients.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="row g-4 mt-4">

                    {values.map((value, index) => {

                        const Icon = value.icon;

                        return (

                            <div
                                className="col-lg-4 col-md-6"
                                key={index}
                            >

                                <motion.div

                                    className="core-card"

                                    initial={{
                                        opacity: 0,
                                        y: 60
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}

                                    viewport={{
                                        once: true
                                    }}

                                    transition={{
                                        duration: .6,
                                        delay: index * .15
                                    }}

                                    whileHover={{
                                        y: -10
                                    }}

                                >

                                    <div className="core-icon">

                                        <Icon
                                            size={28}
                                        />

                                    </div>

                                    <h3>
                                        {value.title}
                                    </h3>

                                    <p>
                                        {value.description}
                                    </p>

                                    <button>

                                        Learn More

                                        <ArrowUpRight
                                            size={18}
                                        />

                                    </button>

                                </motion.div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default CoreValues;