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
    title: "Native iOS & Android",
    desc: "Platform-specific apps built with Swift and Kotlin delivering the best performance and native feel.",
  },
  {
    title: "Cross-Platform Development",
    desc: "React Native and Flutter apps that run seamlessly on both platforms from a single codebase.",
  },
  {
    title: "UI/UX Focused Design",
    desc: "Intuitive interfaces crafted following platform design guidelines for delightful user experiences.",
  },
  {
    title: "Offline Functionality",
    desc: "Apps that work flawlessly without internet connectivity using local storage and smart sync strategies.",
  },
  {
    title: "Push Notifications",
    desc: "Targeted notification systems that re-engage users and drive conversions with personalized messages.",
  },
  {
    title: "App Store Deployment",
    desc: "End-to-end support for App Store and Google Play submission, compliance, and post-launch updates.",
  },
];

const technologies = [
  "React Native", "Flutter", "Swift", "Kotlin", "Firebase",
  "Redux", "TypeScript", "REST API", "GraphQL", "Expo", "Fastlane", "TestFlight",
];

const process = [
  { step: "01", title: "Strategy & Research", desc: "User persona analysis, market research, and feature prioritization to set a strong foundation." },
  { step: "02", title: "UI/UX Design", desc: "Clickable prototypes and polished designs reviewed and approved before a single line of code." },
  { step: "03", title: "Agile Development", desc: "Iterative sprints with continuous testing on real devices to catch issues early." },
  { step: "04", title: "Launch & Growth", desc: "Store submission, beta testing, analytics setup, and ongoing feature development." },
];

const MobileAppDevelopment = () => {
  return (
    <>
      {/* ===== OVERVIEW SECTION ===== */}
      <section className="sdp-overview-section">
        <div className="sdp-bg-grid" />
        <div className="sdp-bg-glow" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp}>
              <span className="sdp-badge">MOBILE APP DEVELOPMENT</span>
              <h2 className="sdp-section-title">
                Apps That Users <span className="sdp-accent">Love to Use</span>
              </h2>
              <div className="sdp-divider" />
              <p className="sdp-section-text">
                We build high-performance mobile applications for iOS and Android that combine
                beautiful design with rock-solid engineering. Whether you need a consumer app,
                enterprise solution, or a cross-platform product, our team delivers experiences
                that drive engagement and business growth.
              </p>
              <p className="sdp-section-text">
                From concept validation to App Store launch, we handle every stage of mobile
                development with a focus on performance, reliability, and user satisfaction.
              </p>
              <a href="/contact" className="sdp-cta-btn">
                Build Your App <ArrowUpRight size={18} />
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
                  { value: "80+", label: "Apps Launched" },
                  { value: "4.8★", label: "Average Store Rating" },
                  { value: "2M+", label: "End Users Served" },
                  { value: "iOS & Android", label: "Platform Coverage" },
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
            <span className="sdp-badge">CAPABILITIES</span>
            <h2 className="sdp-section-title mt-3">
              Full-Spectrum Mobile <span className="sdp-accent">Expertise</span>
            </h2>
            <p className="sdp-section-subtitle">
              Everything your mobile product needs to succeed in competitive app markets.
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
                Cross-Platform, <span className="sdp-accent">Native Performance</span>
              </h2>
              <p className="sdp-section-text">
                Our mobile engineering team uses the latest frameworks and tools to deliver
                apps that perform like native while allowing rapid development and easy maintenance.
              </p>
              <ul className="sdp-check-list">
                <li>60fps smooth animations & transitions</li>
                <li>Optimized battery and memory usage</li>
                <li>Biometric and secure authentication</li>
                <li>Real-time data sync and offline mode</li>
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
              From Idea to <span className="sdp-accent">App Store</span>
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

export default MobileAppDevelopment;
