import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "../main.css";

const ScrollToTop = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const toggleButton = () => {

            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }

        };

        window.addEventListener("scroll", toggleButton);

        return () => window.removeEventListener("scroll", toggleButton);

    }, []);

    const scrollTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    return (

        <AnimatePresence>

            {visible && (

                <motion.button

                    className="scroll-top"

                    onClick={scrollTop}

                    initial={{
                        opacity: 0,
                        scale: 0.7,
                        y: 20
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0
                    }}

                    exit={{
                        opacity: 0,
                        scale: 0.7,
                        y: 20
                    }}

                    transition={{
                        duration: 0.25
                    }}

                    whileHover={{
                        scale: 1.08,
                        y: -4
                    }}

                    whileTap={{
                        scale: 0.95
                    }}

                >

                    <ArrowUp size={22} />

                </motion.button>

            )}

        </AnimatePresence>

    );

};

export default ScrollToTop;