import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import "../main.css";

const faqs = [
    {
        question: "How long does a website project take?",
        answer:
            "Most websites are completed within 2–6 weeks depending on the project scope, features, and revisions.",
    },
    {
        question: "Do you develop custom web applications?",
        answer:
            "Yes. We build scalable web applications tailored to your business requirements using modern technologies.",
    },
    {
        question: "Can you build mobile applications?",
        answer:
            "Absolutely. We create responsive Android, iOS, and cross-platform mobile applications with a seamless user experience.",
    },
    {
        question: "Do you provide maintenance and support?",
        answer:
            "Yes. We offer continuous maintenance, security updates, performance optimization, and technical support after launch.",
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes. We modernize outdated websites with better UI/UX, improved performance, and the latest technologies.",
    },
];

const FAQSection = () => {
    const [active, setActive] = useState(0);

    const toggleFAQ = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="faq-section">

            <div className="container">

                <motion.div
                    className="faq-heading text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                >
                    <span>LET'S CLEAR THINGS UP</span>

                    <h2>
                       Answers Before We Build
                    </h2>

                    <p>
                        Everything you need to know before starting your project with Synexa Technologies.
                    </p>
                </motion.div>

                <div className="faq-wrapper">

                    {faqs.map((faq, index) => (

                        <motion.div
                            key={index}
                            className={`faq-item ${active === index ? "active" : ""}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * .1 }}
                            viewport={{ once: true }}
                        >

                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >

                                <h3>{faq.question}</h3>

                                <motion.div
                                    animate={{
                                        rotate: active === index ? 45 : 0,
                                    }}
                                    transition={{ duration: .3 }}
                                    className="faq-icon"
                                >
                                    <Plus size={22} />
                                </motion.div>

                            </button>

                            <AnimatePresence>

                                {active === index && (

                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: .35 }}
                                        className="faq-answer"
                                    >
                                        <p>{faq.answer}</p>
                                    </motion.div>

                                )}

                            </AnimatePresence>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default FAQSection;