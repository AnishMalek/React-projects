import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  Sparkles,
  Zap,
  Target,
  Users,
  Code,
  Globe,
  Cpu
} from "lucide-react";
import "../main.css";
import "./Team.css";

// SVG Brand Icons for high reliability
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Core Leadership Data
const leadershipMembers = [
  {
    name: "Emily Anderson",
    role: "Founder & Chief Executive Officer",
    badge: "FOUNDER",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Visionary leader with 12+ years of experience transforming enterprise software and steering tech startups toward rapid scale.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:vikram@synexa.com"
    }
  },
  {
    name: "Oliver Bennett",
    role: "Co-Founder & Chief Technology Officer",
    badge: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Cloud architect and AI specialist passionate about high-concurrency microservices, robust infrastructure, and developer experience.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:ananya@synexa.com"
    }
  },
  {
    name: "Evan Brooks",
    role: "Head of Product & Design Strategy",
    badge: "PRODUCT LEAD",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Design strategist specializing in human-centered UI/UX design systems and seamless product experiences across mobile & web.",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "mailto:rohan@synexa.com"
    }
  }
];

// Team Members Data
const teamMembers = [
  {
    name: "Daniel Carter",
    role: "Lead Full Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    description: "Expert in React, Node.js, and modern Web APIs. Specialized in building ultra-responsive web applications.",
    tags: ["React", "Node.js", "TypeScript", "GraphQL"],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Grace Thompson",
    role: "Senior UI/UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    description: "Crafting intuitive digital interfaces, interactive prototypes, and scalable design tokens for web and mobile.",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Alex Morgan",
    role: "DevOps & Cloud Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    description: "Automating cloud infrastructure on AWS & GCP. Kubernetes, Docker containerization, and zero-downtime CI/CD pipelines.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Naomi Williams",
    role: "AI & ML Specialist",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    description: "Developing intelligent recommendation engines, NLP models, and integrating LLMs into modern web platforms.",
    tags: ["Python", "PyTorch", "LLMs", "FastAPI"],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "James Wilson",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    description: "Building cross-platform mobile apps with React Native & Flutter, delivering native performance and sleek animations.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  },
  {
    name: "Sophia Carter",
    role: "Digital Marketing & Growth Lead",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    description: "Structuring performance analytics, SEO strategies, and content growth campaigns to scale product acquisition.",
    tags: ["Growth Marketing", "SEO", "Analytics", "Brand Strategy"],
    socials: { linkedin: "#", github: "#", twitter: "#" }
  }
];

// Philosophy Data
const philosophyItems = [
  {
    icon: Users,
    title: "Collaborative Synergy",
    description: "We believe the best technological solutions emerge when engineering, design, and strategic business goals work in complete harmony."
  },
  {
    icon: Sparkles,
    title: "Relentless Innovation",
    description: "We continuously explore emerging tech stacks, AI capabilities, and modern architectures to keep our clients ahead of the curve."
  },
  {
    icon: Zap,
    title: "Performance & Quality",
    description: "Speed, security, and scalable infrastructure are baked into every line of code we write, ensuring long-term software health."
  },
  {
    icon: Target,
    title: "Impact-Driven Mindset",
    description: "We build digital products that deliver real, measurable business outcomes and create meaningful user engagement."
  }
];

const Team = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="team-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <motion.span
                className="team-badge"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                OUR TEAM
              </motion.span>

              <motion.h1
                className="team-hero-title"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
              >
                Meet the Minds Behind
                <br />
                <span>Synexa Technologies.</span>
              </motion.h1>

              <motion.div
                className="team-divider"
                initial={{ width: 0 }}
                whileInView={{ width: 90 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              <motion.p
                className="team-hero-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We are a passionate team of engineers, designers, architects, and strategists
                dedicated to building modern software, custom digital products, and high-performance
                solutions that empower forward-thinking businesses.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LEADERSHIP SECTION */}
      <section className="team-section">
        <div className="container">
          <motion.div
            className="team-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="team-tag">LEADERSHIP</span>
            <h2 className="team-section-title">
              Guided by <span>Vision & Expertise.</span>
            </h2>
            <p className="team-section-desc">
              Our core leadership brings decades of combined experience across software architecture, digital strategy, and product innovation.
            </p>
          </motion.div>

          <div className="row g-4 justify-content-center">
            {leadershipMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="leadership-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="leadership-img-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="leadership-img"
                      loading="lazy"
                    />
                    <span className="leadership-badge">{member.badge}</span>
                  </div>

                  <div className="leadership-info">
                    <h3 className="leadership-name">{member.name}</h3>
                    <div className="leadership-role">{member.role}</div>
                    <p className="leadership-bio">{member.bio}</p>

                    <div className="leadership-socials">
                      <a href={member.socials.linkedin} className="social-icon" aria-label="LinkedIn">
                        <LinkedinIcon size={18} />
                      </a>
                      <a href={member.socials.twitter} className="social-icon" aria-label="Twitter">
                        <TwitterIcon size={18} />
                      </a>
                      <a href={member.socials.github} className="social-icon" aria-label="GitHub">
                        <GithubIcon size={18} />
                      </a>
                      <a href={member.socials.email} className="social-icon" aria-label="Email">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEAM MEMBERS GRID SECTION */}
      <section className="team-section team-section-alt">
        <div className="container">
          <motion.div
            className="team-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="team-tag">OUR SPECIALISTS</span>
            <h2 className="team-section-title">
              Engineers, Designers & <span>Creators.</span>
            </h2>
            <p className="team-section-desc">
              Every project is backed by talented specialists delivering clean code, robust backends, and striking UI/UX.
            </p>
          </motion.div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="team-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="team-card-img-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-card-img"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="team-card-name">{member.name}</h3>
                  <div className="team-card-role">{member.role}</div>
                  <p className="team-card-desc">{member.description}</p>

                  <div className="team-card-tags">
                    {member.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="team-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="team-card-socials">
                    <a href={member.socials.linkedin} className="team-social-btn" aria-label={`${member.name} LinkedIn`}>
                      <LinkedinIcon size={16} />
                    </a>
                    <a href={member.socials.github} className="team-social-btn" aria-label={`${member.name} GitHub`}>
                      <GithubIcon size={16} />
                    </a>
                    <a href={member.socials.twitter} className="team-social-btn" aria-label={`${member.name} Twitter`}>
                      <TwitterIcon size={16} />
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAM PHILOSOPHY SECTION */}
      <section className="team-section">
        <div className="container">
          <motion.div
            className="team-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="team-tag">OUR PHILOSOPHY</span>
            <h2 className="team-section-title">
              Great Technology Starts With <span>Great People.</span>
            </h2>
            <p className="team-section-desc">
              We cultivate a culture of innovation, continuous learning, and client success. Here is what drives our daily work.
            </p>
          </motion.div>

          <div className="row g-4">
            {philosophyItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div className="col-lg-3 col-md-6" key={index}>
                  <motion.div
                    className="philosophy-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="philosophy-icon">
                      <IconComponent size={26} />
                    </div>
                    <h3 className="philosophy-title">{item.title}</h3>
                    <p className="philosophy-desc">{item.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="team-cta-section">
        <div className="container">
          <motion.div
            className="team-cta-box"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="team-cta-title">
              Let's Build Something <span>Great Together.</span>
            </h2>
            <p className="team-cta-desc">
              Looking for a dedicated tech team to turn your ideas into high-performing digital products? We are ready to partner with you.
            </p>
            <a href="/contact" className="team-cta-btn">
              Get In Touch
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
