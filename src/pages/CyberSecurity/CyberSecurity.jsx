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
    title: "Security Audits & Penetration Testing",
    desc: "Comprehensive assessments to identify vulnerabilities before malicious actors can exploit them.",
  },
  {
    title: "Risk Assessment & Management",
    desc: "Systematic identification, evaluation, and prioritization of security risks across your organization.",
  },
  {
    title: "Threat Detection & Response",
    desc: "Real-time monitoring and automated incident response to neutralize threats as they emerge.",
  },
  {
    title: "Compliance & Governance",
    desc: "Ensuring your systems meet ISO 27001, GDPR, HIPAA, SOC 2, and other regulatory standards.",
  },
  {
    title: "Data Encryption & Protection",
    desc: "End-to-end encryption strategies for data at rest and in transit across all your systems.",
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Robust recovery plans and automated backup strategies that minimize downtime after any incident.",
  },
];

const technologies = [
  "OWASP", "Nessus", "Metasploit", "Wireshark", "Splunk", "CrowdStrike",
  "Burp Suite", "Snort", "HashiCorp Vault", "ISO 27001", "GDPR", "SOC 2",
];

const process = [
  { step: "01", title: "Threat Modeling", desc: "We map your attack surface, identify entry points, and model potential threat scenarios." },
  { step: "02", title: "Vulnerability Assessment", desc: "Automated and manual testing to discover security gaps in your infrastructure and applications." },
  { step: "03", title: "Remediation Planning", desc: "Prioritized action plans with clear timelines to address every identified vulnerability." },
  { step: "04", title: "Continuous Monitoring", desc: "Ongoing surveillance, quarterly audits, and immediate response to emerging threats." },
];

const CyberSecurity = () => {
  return (
    <>
      {/* ===== OVERVIEW SECTION ===== */}
      <section className="sdp-overview-section">
        <div className="sdp-bg-grid" />
        <div className="sdp-bg-glow" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp}>
              <span className="sdp-badge">CYBER SECURITY</span>
              <h2 className="sdp-section-title">
                Defend What <span className="sdp-accent">Matters Most</span>
              </h2>
              <div className="sdp-divider" />
              <p className="sdp-section-text">
                In an era where cyber threats evolve daily, your business needs a proactive
                security partner, not a reactive one. We provide enterprise-grade cybersecurity
                services that protect your digital assets, customer data, and business reputation
                through continuous monitoring, rigorous testing, and strategic defense.
              </p>
              <p className="sdp-section-text">
                Our certified security experts use the latest methodologies and tools to
                identify vulnerabilities before attackers do, ensuring your organization stays
                compliant, secure, and resilient.
              </p>
              <a href="/contact" className="sdp-cta-btn">
                Secure Your Business <ArrowUpRight size={18} />
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
                  { value: "500+", label: "Security Audits Completed" },
                  { value: "0", label: "Successful Breaches Post-Audit" },
                  { value: "100%", label: "Compliance Achievement Rate" },
                  { value: "24/7", label: "Threat Monitoring" },
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
            <span className="sdp-badge">SECURITY SERVICES</span>
            <h2 className="sdp-section-title mt-3">
              Complete Security <span className="sdp-accent">Coverage</span>
            </h2>
            <p className="sdp-section-subtitle">
              Layered defenses and proactive strategies to protect your business from all angles.
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
              <span className="sdp-badge">TOOLS & FRAMEWORKS</span>
              <h2 className="sdp-section-title mt-3">
                Industry-Standard <span className="sdp-accent">Security Tools</span>
              </h2>
              <p className="sdp-section-text">
                Our security professionals are certified in leading industry frameworks and
                hold credentials such as CEH, OSCP, CISSP, and CISM. We use the same tools
                that attackers use — but to protect, not exploit.
              </p>
              <ul className="sdp-check-list">
                <li>Certified ethical hackers on every engagement</li>
                <li>Zero-trust architecture design</li>
                <li>Detailed remediation reports with proof-of-concept</li>
                <li>Employee security awareness training</li>
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
            <span className="sdp-badge">OUR APPROACH</span>
            <h2 className="sdp-section-title mt-3">
              Systematic Security <span className="sdp-accent">Methodology</span>
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

export default CyberSecurity;
