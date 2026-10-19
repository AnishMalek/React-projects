import { motion } from "framer-motion";
import "../main.css";

import herobg from "../assets/images/hero_bg.jpg"
import { useNavigate } from "react-router-dom";


const HerosectionContent = () => {

  const navigate=useNavigate()



  return (
   <section
  className="hero-section pt-5"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(10,10,10,.72),
        rgba(10,10,10,.82)
      ),
      url(${herobg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Background Elements */}
      <div className="hero-grid"></div>
      <div className="hero-dots"></div>
      <div className="hero-dots-left"></div>
      <div className="hero-glow"></div>

      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-lg-10 text-center">

            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-tag"
            >
              ENGINEERING DIGITAL EXCELLENCE
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >
            Transforming Complex Ideas
<br />
Into <span>Powerful</span> Digital <br />Solutions.

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
            >
              We craft modern websites, scalable applications,
              and enterprise software that help businesses grow,
              innovate, and stay ahead in the digital world.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .5 }}
            >

              <button className="primary-btn" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"}),navigate("/contact")}} >
                Start Project
              </button>

              <button className="secondary-btn" onClick={()=>{window.scrollTo({top:0,behavior:"smooth"}),navigate("/services")}}>
                View Our Work
              </button>

            </motion.div>

          </div>

        </div>

      </div>

      {/* Trust Section */}

<motion.div
  className="scroll-indicator"
  animate={{
    y: [0, 10, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
  }}
>

  <span></span>

</motion.div>

    </section>

    
  );
};

export default HerosectionContent;