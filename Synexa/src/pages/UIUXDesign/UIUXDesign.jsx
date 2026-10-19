import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import "../../main.css";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const features = [
  {
    title: "User Research & Personas",
    desc: "Deep-dive research into your users' needs, behaviors, and pain points to inform every design decision.",
  },
  {
    title: "Wireframing & Prototyping",
    desc: "Low and high-fidelity prototypes that let you test concepts before committing to development.",
  },
  {
    title: "Design Systems",
    desc: "Scalable component libraries and style guides that ensure visual consistency across every touchpoint.",
  },
  {
    title: "Interaction Design",
    desc: "Micro-animations and transitions that provide meaningful feedback and elevate perceived quality.",
  },
  {
    title: "Usability Testing",
    desc: "Validated designs through structured testing sessions to eliminate friction before launch.",
  },
  {
    title: "Brand Identity & Visual Design",
    desc: "Cohesive visual languages that communicate your brand values and create memorable impressions.",
  },
];

const technologies = [
  "Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Zeplin",
  "Principle", "Lottie", "Storybook", "Maze", "Hotjar", "Miro",
];

const process = [
  { step: "01", title: "Research & Empathize", desc: "User interviews, surveys, and competitive analysis to uncover opportunities and constraints." },
  { step: "02", title: "Define & Ideate", desc: "Problem framing, user journey mapping, and collaborative ideation sessions." },
  { step: "03", title: "Design & Prototype", desc: "From rough sketches to polished, interactive prototypes ready for stakeholder review." },
  { step: "04", title: "Test & Iterate", desc: "Usability testing with real users followed by rapid iteration to achieve optimal experiences." },
];

const UIUXDesign = () => {
  return (
    <>
      {/* ===== OVERVIEW SECTION ===== */}
      <section className="sdp-overview-section">
        <div className="sdp-bg-grid" />
        <div className="sdp-bg-glow" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp}>
              <span className="sdp-badge">UI/UX DESIGN</span>
              <h2 className="sdp-section-title">
                Design That <span className="sdp-accent">Converts & Delights</span>
              </h2>
              <div className="sdp-divider" />
              <p className="sdp-section-text">
                Great design is not just about aesthetics — it is about solving real problems
                for real people. Our design team combines deep user research with stunning
                visual craft to create interfaces that are intuitive, accessible, and
                impactful across every device and platform.
              </p>
              <p className="sdp-section-text">
                We believe every pixel should have a purpose. From discovery workshops to
                final handoff, we ensure your product is not just beautiful but functionally
                superior and aligned with your business objectives.
              </p>
              <a href="/contact" className="sdp-cta-btn">
                Start Designing <ArrowUpRight size={18} />
              </a>
            </motion.div>
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="sdp-stats-grid">
                {[
                  { value: "200+", label: "Products Designed" },
                  { value: "40%", label: "Average Conversion Lift" },
                  { value: "4.9★", label: "Client Design Rating" },
                  { value: "WCAG", label: "Accessibility Compliant" },
                ].map((stat, i) => (
                  <div className="sdp-stat-box" key={i}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="sdp-features-section">
        <div className="container">
          <motion.div className="sdp-section-header text-center" {...fadeUp}>
            <span className="sdp-badge">DESIGN SERVICES</span>
            <h2 className="sdp-section-title mt-3">
              End-to-End Design <span className="sdp-accent">Expertise</span>
            </h2>
            <p className="sdp-section-subtitle">
              From initial concept to pixel-perfect handoff — we cover every phase of the design process.
            </p>
          </motion.div>
          <div className="row g-4 mt-2">
            {features.map((f, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <motion.div
                  className="sdp-feature-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="sdp-feature-icon">
                    <CheckCircle size={22} />
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES SECTION ===== */}
      <section className="sdp-tech-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-5" {...fadeUp}>
              <span className="sdp-badge">TOOLS & SOFTWARE</span>
              <h2 className="sdp-section-title mt-3">
                Industry-Leading <span className="sdp-accent">Design Tools</span>
              </h2>
              <p className="sdp-section-text">
                Our designers use the best professional tools available to create, collaborate,
                and deliver production-ready assets that integrate seamlessly into your
                development workflow.
              </p>
              <ul className="sdp-check-list">
                <li>Developer-ready design handoffs with Zeplin</li>
                <li>Interactive prototypes for stakeholder approvals</li>
                <li>Accessibility audits to WCAG 2.1 AA standards</li>
                <li>Collaborative design sprints with your team</li>
              </ul>
            </motion.div>
            <motion.div
              className="col-lg-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sdp-tech-grid">
                {technologies.map((tech, i) => (
                  <motion.div
                    className="sdp-tech-pill"
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="sdp-process-section">
        <div className="container">
          <motion.div className="sdp-section-header text-center" {...fadeUp}>
            <span className="sdp-badge">DESIGN PROCESS</span>
            <h2 className="sdp-section-title mt-3">
              Our Human-Centered <span className="sdp-accent">Approach</span>
            </h2>
          </motion.div>
          <div className="row g-4 mt-2">
            {process.map((p, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <motion.div
                  className="sdp-process-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="sdp-process-number">{p.step}</span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UIUXDesign;
