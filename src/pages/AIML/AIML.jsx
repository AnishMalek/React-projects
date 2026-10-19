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
    title: "Machine Learning Models",
    desc: "Custom ML models trained on your data to generate predictions, classifications, and actionable insights.",
  },
  {
    title: "Natural Language Processing",
    desc: "Chatbots, sentiment analysis, text summarization, and language understanding capabilities for your products.",
  },
  {
    title: "Computer Vision",
    desc: "Image recognition, object detection, and visual inspection systems for quality control and automation.",
  },
  {
    title: "Intelligent Automation",
    desc: "RPA and AI-powered workflows that eliminate repetitive tasks and free your team for higher-value work.",
  },
  {
    title: "Recommendation Engines",
    desc: "Personalization algorithms that increase engagement, retention, and revenue through relevant suggestions.",
  },
  {
    title: "Data Analytics & BI",
    desc: "Dashboards and predictive analytics that turn raw data into strategic intelligence for decision-makers.",
  },
];

const technologies = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "LangChain",
  "Hugging Face", "Apache Spark", "Pandas", "NumPy", "FastAPI", "MLflow",
];

const process = [
  { step: "01", title: "Problem Definition", desc: "We translate your business challenge into a well-defined AI problem with measurable success metrics." },
  { step: "02", title: "Data Preparation", desc: "Data collection, cleaning, labeling, and feature engineering to build robust training datasets." },
  { step: "03", title: "Model Development", desc: "Iterative experimentation, training, and validation to build accurate, reliable AI models." },
  { step: "04", title: "Deployment & Monitoring", desc: "Production deployment with MLOps pipelines and continuous performance monitoring." },
];

const AIML = () => {
  return (
    <>
      {/* ===== OVERVIEW SECTION ===== */}
      <section className="sdp-overview-section">
        <div className="sdp-bg-grid" />
        <div className="sdp-bg-glow" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp}>
              <span className="sdp-badge">AI / ML SOLUTIONS</span>
              <h2 className="sdp-section-title">
                Intelligent Systems That <span className="sdp-accent">Drive Growth</span>
              </h2>
              <div className="sdp-divider" />
              <p className="sdp-section-text">
                Artificial intelligence is no longer a competitive advantage — it is a
                competitive necessity. We help businesses harness the power of machine learning,
                natural language processing, and intelligent automation to make smarter decisions,
                reduce costs, and unlock new revenue streams.
              </p>
              <p className="sdp-section-text">
                Our AI engineers bring academic rigor and industry experience to every project,
                ensuring solutions that are not just technically impressive but genuinely useful
                and aligned with your business goals.
              </p>
              <a href="/contact" className="sdp-cta-btn">
                Explore AI Solutions <ArrowUpRight size={18} />
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
                  { value: "60+", label: "AI Models in Production" },
                  { value: "35%", label: "Average Efficiency Gain" },
                  { value: "95%+", label: "Model Accuracy Rate" },
                  { value: "10+", label: "Industries Served" },
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
            <span className="sdp-badge">AI CAPABILITIES</span>
            <h2 className="sdp-section-title mt-3">
              The Full Spectrum of <span className="sdp-accent">AI Services</span>
            </h2>
            <p className="sdp-section-subtitle">
              From data strategy to production-ready AI — we cover every step of your artificial intelligence journey.
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
              <span className="sdp-badge">AI TECH STACK</span>
              <h2 className="sdp-section-title mt-3">
                Cutting-Edge <span className="sdp-accent">AI Frameworks</span>
              </h2>
              <p className="sdp-section-text">
                We leverage the most powerful open-source and commercial AI tools available,
                combined with our proprietary methodologies to deliver solutions that are
                accurate, explainable, and production-ready.
              </p>
              <ul className="sdp-check-list">
                <li>LLM integration and fine-tuning expertise</li>
                <li>Responsible AI and bias mitigation practices</li>
                <li>MLOps for scalable model management</li>
                <li>Real-time inference at production scale</li>
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
            <span className="sdp-badge">OUR METHODOLOGY</span>
            <h2 className="sdp-section-title mt-3">
              From Data to <span className="sdp-accent">Intelligence</span>
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

export default AIML;
