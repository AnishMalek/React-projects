import { motion } from "framer-motion";
import "../main.css";

const WhySynexa = () => {
    return (
        <section className="why-synexa">

            <div className="container">

                <motion.p
                    className="why-tag"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                >
                    WHY SYNEXA
                </motion.p>

                <motion.h2
                    className="big-text"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                >
                    WE DON'T BUILD
                </motion.h2>

                <motion.h2
                    className="big-text stroke"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8, delay: .15 }}
                    viewport={{ once: true }}
                >
                    WEBSITES.
                </motion.h2>

                <motion.h2
                    className="big-text"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8, delay: .3 }}
                    viewport={{ once: true }}
                >
                    WE BUILD
                </motion.h2>

                <motion.h2
                    className="big-text accent"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8, delay: .45 }}
                    viewport={{ once: true }}
                >
                    DIGITAL EXPERIENCES
                </motion.h2>

                <motion.h2
                    className="big-text"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8, delay: .6 }}
                    viewport={{ once: true }}
                >
                    THAT DRIVE
                </motion.h2>

                <motion.h2
                    className="big-text"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8, delay: .75 }}
                    viewport={{ once: true }}
                >
                    BUSINESS GROWTH.
                </motion.h2>

                <motion.p
                    className="why-desc"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                >
                    Web Development • Mobile Applications • UI/UX Design •
                    Cloud Solutions • Digital Transformation
                </motion.p>

            </div>

        </section>
    );
};

export default WhySynexa;