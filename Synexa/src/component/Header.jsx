import { useEffect, useRef,useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ArrowUpRight
} from "lucide-react";

import "../main.css";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
        const currentScroll = window.scrollY;

        setScrolled(currentScroll > 40);

      
        if (currentScroll < 50) {
            setShowHeader(true);
            lastScroll.current = currentScroll;
            return;
        }


        if (currentScroll > lastScroll.current) {
            // Scroll Down
            setShowHeader(false);
        } else {
            // Scroll Up
            setShowHeader(true);
        }

        lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
    return (

        <>

            <motion.header

                initial={{
                    y: -100
                }}

                animate={{
                    y: showHeader ? 0 : -100
                }}

                transition={{
                  duration: 0.25,
                  ease: "easeOut"
                 }}

                className={`synexa-header ${scrolled ? "header-scrolled" : ""}`}

            >

                <div className="container">

                    <div className="header-wrapper">

                        {/* Logo */}

                        <a
                            href="/"
                            className="header-logo"
                        >

                            <div className="logo-icon">
                                S
                            </div>

                            <div className="logo-text">

                                <h2>
                                    Synexa
                                </h2>

                                <span>
                                    TECHNOLOGIES
                                </span>

                            </div>

                        </a>


                        {/* Desktop Navigation */}

                        <nav className="desktop-nav">

                            <a href="/">
                                Home
                            </a>

                             <a href="/about">
                                About
                            </a>

                            <a href="/services">
                                Services
                            </a>

                            <a href="/team">
                                Team
                            </a>

                        

                        </nav>


                        {/* Right Side */}

                        <div className="header-right">

                            <a
                                href="/contact"
                                className="header-btn"
                            >

                                Let's Talk

                                <ArrowUpRight
                                    size={18}
                                />

                            </a>


                            <button

                                className="mobile-toggle"

                                onClick={() =>
                                    setMenuOpen(!menuOpen)
                                }

                            >

                                {
                                    menuOpen
                                        ?

                                        <X size={28} />

                                        :

                                        <Menu size={28} />
                                }

                            </button>

                        </div>

                    </div>

                </div>

            </motion.header>
            {/* ===========================
                    MOBILE MENU
            ============================ */}

            <AnimatePresence>

                {
                    menuOpen && (

                        <motion.div

                            className="mobile-menu"

                            initial={{
                                opacity: 0
                            }}

                            animate={{
                                opacity: 1
                            }}

                            exit={{
                                opacity: 0
                            }}

                            transition={{
                                duration: .35
                            }}

                        >

                            <motion.div

                                className="mobile-menu-inner"

                                initial={{
                                    y: 60
                                }}

                                animate={{
                                    y: 0
                                }}

                                exit={{
                                    y: 60
                                }}

                                transition={{
                                    duration: .45
                                }}

                            >

                                <a
                                    href="/"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    
                                    Home
                                </a>

                                <a
                                    href="/about"
                                    onClick={() => setMenuOpen(false)}
                                >
                                   About
                                </a>

                                  <a
                                    href="/services"
                                    onClick={() => setMenuOpen(false)}
                                >
                                   Services
                                </a>

                              

                                <a
                                    href="/team"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Team
                                </a>

                                <a
                                    href="/contact"
                                    className="mobile-btn"
                                    onClick={() => setMenuOpen(false)}
                                >

                                    Let's Talk

                                    <ArrowUpRight
                                        size={18}
                                    />

                                </a>

                            </motion.div>

                        </motion.div>

                    )
                }

            </AnimatePresence>

        </>

    );

};

export default Header;