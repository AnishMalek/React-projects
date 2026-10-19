import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "../main.css";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Web Development",
    path: "/web-development",
    description:
      "Fast, secure and scalable websites built with modern technologies for growing businesses.",
    points: [
      "React Applications",
      "Business Websites",
      "API Integration",
    ],
  },
  {
    number: "02",
    title: "Mobile Applications",
    path: "/services/mobile-app-development",
    description:
      "High-performance Android and iOS applications with modern UI and smooth experience.",
    points: [
      "Android & iOS",
      "Cross Platform",
      "App Maintenance",
    ],
  },
  {
    number: "03",
    title: "Cloud & DevOps",
    path: "/services/cloud-devops",
    description:
      "Cloud infrastructure and deployment pipelines designed for scalability and reliability.",
    points: [
      "AWS / Azure",
      "CI/CD Pipelines",
      "Server Management",
    ],
  },
  {
    number: "04",
    title: "Cyber Security",
    path: "/services/cyber-security",
    description:
      "Protect your digital assets with modern security practices and continuous monitoring.",
    points: [
      "Security Audits",
      "Risk Assessment",
      "Backup Strategy",
    ],
  },
  {
    number: "05",
    title: "UI / UX Design",
    path: "/services/ui-ux-design",
    description:
      "Beautiful interfaces focused on usability, accessibility and business growth.",
    points: [
      "Wireframes",
      "Design Systems",
      "Prototypes",
    ],
  },
  {
    number: "06",
    title: "AI / ML Solutions",
    path: "/services/ai-ml",
    description:
      "Intelligent automation and AI-powered solutions for smarter business operations.",
    points: [
      "AI Integration",
      "Automation",
      "Data Intelligence",
    ],
  },
];

const OurExpertise = () => {
  return (
    <section className="expertise-section">

      <div className="container">

        {/* Heading */}

        <motion.div
          className="expertise-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            OUR EXPERTISE
          </span>

          <h2>
            Digital Solutions
            <br />
            For Modern Businesses
          </h2>

          <p>
            We combine strategy, technology and creativity to build
            scalable digital products that help businesses grow faster.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="row g-4">

          {services.map((service, index) => (

            <div
              className="col-lg-4 col-md-6"
              key={index}
            >

              <motion.div
                className="service-card"

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
              >

                <div className="service-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <ArrowUpRight
                    className="service-arrow"
                    size={22}
                  />

                </div>

                <h3>
                  {service.title}
                </h3>

                <p className="service-description">
                  {service.description}
                </p>

                <ul className="service-points">

                  {service.points.map((point, i) => (

                    <li key={i}>
                      {point}
                    </li>

                  ))}

                </ul>

                <Link
                  to={service.path}
                  className="service-link"
                  onClick={() => window.scrollTo({
                    top:0,
                    behavior:"smooth"
                  })}
                >
                  Learn More
                  <ArrowUpRight size={18} />

                
                </Link>

              </motion.div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default OurExpertise;