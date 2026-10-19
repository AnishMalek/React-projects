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
    title: "Custom Web Applications",
    desc: "Tailored full-stack solutions built to match your exact business requirements with clean, maintainable code.",
  },
  {
    title: "React & Modern Frameworks",
    desc: "High-performance SPAs and SSR applications using React, Next.js and cutting-edge frontend tools.",
  },
  {
    title: "API Development & Integration",
    desc: "Robust REST and GraphQL APIs connecting your app to third-party services, databases, and platforms.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Scalable online stores with secure payment gateways, inventory management, and seamless UX.",
  },
  {
    title: "Performance Optimization",
    desc: "Core Web Vitals improvements, lazy loading, code splitting, and caching strategies for blazing-fast loads.",
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "Dedicated post-launch support, security patches, feature updates, and continuous monitoring.",
  },
];

const technologies = [
  "React.js", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "TypeScript", "REST API", "GraphQL", "Docker", "AWS", "Git",
];

const process = [
  { step: "01", title: "Discovery & Planning", desc: "We analyze your goals, audience and competitors to craft a clear project roadmap." },
  { step: "02", title: "Design & Prototyping", desc: "Wireframes and interactive prototypes reviewed with you before development begins." },
  { step: "03", title: "Development", desc: "Agile sprints with regular demos ensure you stay informed at every milestone." },
  { step: "04", title: "Launch & Support", desc: "Thorough QA, smooth deployment, and ongoing support keep your product running perfectly." },
];

const WebDevelopment = () => {
  return (
    <>
      {/* ===== OVERVIEW SECTION ===== */}
      <section className="sdp-overview-section">
        <div className="sdp-bg-grid" />
        <div className="sdp-bg-glow" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp}>
              <span className="sdp-badge">WEB DEVELOPMENT</span>
              <h2 className="sdp-section-title">
                Scalable Web Solutions <span className="sdp-accent">Built to Perform</span>
              </h2>
              <div className="sdp-divider" />
              <p className="sdp-section-text">
                We design and develop high-performance websites and web applications tailored
                to your business objectives. From sleek marketing sites to complex enterprise
                platforms, our engineering team delivers clean, maintainable code with
                exceptional user experiences at every screen size.
              </p>
              <p className="sdp-section-text">
                Our approach combines strategic thinking with modern technology stacks to
                ensure your digital presence not only looks great but converts visitors into
                loyal customers.
              </p>
              <a href="/contact" className="sdp-cta-btn">
                Start Your Project <ArrowUpRight size={18} />
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
                  { value: "150+", label: "Web Projects Delivered" },
                  { value: "99%", label: "Client Satisfaction" },
                  { value: "3x", label: "Faster Load Times" },
                  { value: "24/7", label: "Support Available" },
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
            <span className="sdp-badge">WHAT WE OFFER</span>
            <h2 className="sdp-section-title mt-3">
              Everything You Need to <span className="sdp-accent">Succeed Online</span>
            </h2>
            <p className="sdp-section-subtitle">
              Comprehensive web development services covering every phase from concept to launch.
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
              <span className="sdp-badge">TECHNOLOGIES</span>
              <h2 className="sdp-section-title mt-3">
                Modern Stack, <span className="sdp-accent">Proven Results</span>
              </h2>
              <p className="sdp-section-text">
                We work with industry-leading technologies chosen for performance, scalability,
                and long-term maintainability. Every tool in our stack is battle-tested on
                real-world projects across diverse industries.
              </p>
              <ul className="sdp-check-list">
                <li>Component-based architecture for reusability</li>
                <li>CI/CD pipelines for reliable deployments</li>
                <li>Security-first development practices</li>
                <li>Mobile-first responsive design</li>
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
            <span className="sdp-badge">OUR PROCESS</span>
            <h2 className="sdp-section-title mt-3">
              How We <span className="sdp-accent">Deliver Excellence</span>
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

export default WebDevelopment;
