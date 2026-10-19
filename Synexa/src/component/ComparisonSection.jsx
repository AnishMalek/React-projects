import React from "react";
import { motion } from "framer-motion";
import { CircleCheckBig, CircleX, Building2, Layers3 } from "lucide-react";
import "../main.css";

const leftRows = [
  "Business-Focused Software Solutions",
  "Transparent Weekly Project Updates",
  "Scalable & Future-Ready Architecture",
  "Dedicated Development Team",
  "Security-First Development",
  "Modern UI/UX Standards",
 
];

const rightRows = [
  "Generic Development Process",
  "Limited Communication",
  "Hard To Scale Applications",
  "Shared Resources & Delays",
  "Basic Security Practices",
  "Outdated User Experience",
    
];

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const tableVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.15 },
  },
};

const rowContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const rowVariantsRight = {
  hidden: { opacity: 0, x: 12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ComparisonSection() {
  return (
    <section className="comparison-section">
      <div className="container">
        <motion.div
          className="comparison-badge-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={badgeVariants}
        >
          <span className="comparison-badge">COMPARISON</span>
        </motion.div>

        <motion.h2
          className="comparison-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
        >
          What Sets Synexa Apart From
          <br />
          Other Companies
        </motion.h2>

        <motion.div
          className="comparison-table"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={tableVariants}
        >
          <div className="comparison-col comparison-col--left">
            <div className="comparison-col-header">
              <Building2 className="comparison-col-icon" size={22} strokeWidth={1.75} />
              <span>Synexa Technologies</span>
            </div>

            <motion.ul
              className="comparison-rows"
              variants={rowContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {leftRows.map((item) => (
                <motion.li
                  className="comparison-row comparison-row--left"
                  key={item}
                  variants={rowVariants}
                >
                  <CircleCheckBig className="comparison-row-icon comparison-row-icon--check" size={19} strokeWidth={2} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="comparison-divider" aria-hidden="true" />

          <div className="comparison-col comparison-col--right">
            <div className="comparison-col-header">
              <Layers3 className="comparison-col-icon" size={22} strokeWidth={1.75} />
              <span>Others</span>
            </div>

            <motion.ul
              className="comparison-rows"
              variants={rowContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {rightRows.map((item) => (
                <motion.li
                  className="comparison-row comparison-row--right"
                  key={item}
                  variants={rowVariantsRight}
                >
                  <CircleX className="comparison-row-icon comparison-row-icon--cross" size={19} strokeWidth={2} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}