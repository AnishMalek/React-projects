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
    title: "Cloud Architecture Design",
    desc: "Scalable, fault-tolerant infrastructure designed on AWS, Azure, or GCP tailored to your workload.",
  },
  {
    title: "CI/CD Pipeline Setup",
    desc: "Automated build, test, and deployment pipelines that reduce release cycles and human error.",
  },
  {
    title: "Container Orchestration",
    desc: "Docker and Kubernetes solutions for consistent environments from development to production.",
  },
  {
    title: "Infrastructure as Code",
    desc: "Terraform and Ansible scripts for reproducible, version-controlled infrastructure management.",
  },
  {
    title: "Monitoring & Alerting",
    desc: "Comprehensive observability with Prometheus, Grafana, and PagerDuty for proactive issue resolution.",
  },
  {
    title: "Cost Optimization",
    desc: "Right-sizing, reserved capacity planning, and auto-scaling to reduce your cloud spend significantly.",
  },
];

const technologies = [
  "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform",
  "Ansible", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Nginx",
];

const process = [
  { step: "01", title: "Infrastructure Audit", desc: "We assess your current setup, identify bottlenecks, and plan an optimized cloud architecture." },
  { step: "02", title: "Architecture Design", desc: "Detailed blueprints for scalable, secure, and cost-effective cloud infrastructure." },
  { step: "03", title: "Implementation", desc: "Phased migration and deployment with zero downtime and rigorous testing at each stage." },
  { step: "04", title: "Operations & Support", desc: "24/7 monitoring, incident response, and continuous improvements to your infrastructure." },
];

const CloudDevOps = () => {
  return (
    <>
      {/* ===== OVERVIEW SECTION ===== */}
      <section className="sdp-overview-section">
        <div className="sdp-bg-grid" />
        <div className="sdp-bg-glow" />
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" {...fadeUp}>
              <span className="sdp-badge">CLOUD & DEVOPS</span>
              <h2 className="sdp-section-title">
                Infrastructure That <span className="sdp-accent">Scales With You</span>
              </h2>
              <div className="sdp-divider" />
              <p className="sdp-section-text">
                We design, build, and manage cloud infrastructure and DevOps pipelines that
                give your engineering team the speed and confidence to ship great software
                continuously. Our cloud experts eliminate bottlenecks, improve reliability,
                and dramatically reduce operational overhead.
              </p>
              <p className="sdp-section-text">
                Whether you're migrating to the cloud, optimizing an existing setup, or
                building from scratch, we deliver infrastructure that grows with your ambitions
                while keeping costs under control.
              </p>
              <a href="/contact" className="sdp-cta-btn">
                Optimize Your Infrastructure <ArrowUpRight size={18} />
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
                  { value: "99.9%", label: "Uptime Guarantee" },
                  { value: "60%", label: "Average Cost Reduction" },
                  { value: "10x", label: "Faster Deployments" },
                  { value: "24/7", label: "Infrastructure Monitoring" },
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
            <span className="sdp-badge">SERVICES</span>
            <h2 className="sdp-section-title mt-3">
              Complete DevOps <span className="sdp-accent">Solutions</span>
            </h2>
            <p className="sdp-section-subtitle">
              From pipeline automation to full cloud migration — we cover every layer of your infrastructure.
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
              <span className="sdp-badge">TECHNOLOGY STACK</span>
              <h2 className="sdp-section-title mt-3">
                Multi-Cloud, <span className="sdp-accent">Platform Agnostic</span>
              </h2>
              <p className="sdp-section-text">
                Our engineers are certified across major cloud platforms and proficient with
                the full DevOps toolchain. We choose the right tools for your specific needs,
                not what's trendy.
              </p>
              <ul className="sdp-check-list">
                <li>Multi-region, high-availability deployments</li>
                <li>Automated security compliance checks</li>
                <li>Blue-green and canary deployment strategies</li>
                <li>Disaster recovery and backup automation</li>
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
            <span className="sdp-badge">HOW WE WORK</span>
            <h2 className="sdp-section-title mt-3">
              From Audit to <span className="sdp-accent">Full Automation</span>
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

export default CloudDevOps;
