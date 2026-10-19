import { motion } from "framer-motion";
import "../main.css";

const stats = [
    {
        number: "150+",
        title: "Projects Delivered"
    },
    {
        number: "50+",
        title: "Happy Clients"
    },
    {
        number: "97%",
        title: "Client Satisfaction"
    },
    {
        number: "24/7",
        title: "Support"
    }
];

const Stats = () => {

    return (

        <section className="about-stats">

            <div className="container">

                <div className="row">

                    {
                        stats.map((item, index) => (

                            <div
                                className="col-lg-3 col-md-6"
                                key={index}
                            >

                                <motion.div
                                    className="stat-item"
                                    initial={{
                                        opacity: 0,
                                        y: 40
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    viewport={{
                                        once: true
                                    }}
                                    transition={{
                                        duration: .5,
                                        delay: index * .12
                                    }}
                                >

                                    <h2>
                                        {item.number}
                                    </h2>

                                    <p>
                                        {item.title}
                                    </p>

                                </motion.div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );

};

export default Stats;