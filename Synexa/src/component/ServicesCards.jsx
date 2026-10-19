import React from 'react'
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "../main.css"

const ServicesCards = () => {
    const services = [
  {
    number: "01",
    path:"web-development",
    title: "Web Development",
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
    path:"/services/mobile-app-development",
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
    path:"/services/cloud-devops",
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
    path:"/services/cyber-security",
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
    path:"/services/ui-ux-design",
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
    path:"/services/ai-ml",
    title: "AI / ML Solutions",
    description:
      "Intelligent automation and AI-powered solutions for smarter business operations.",
    points: [
      "AI Integration",
      "Automation",
      "Data Intelligence",
    ],
  },
];
  return (
      <section className="expertise-section">
     
           <div className="container">
     
             {/* Heading */}
     
             
     
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
     
                     <a
                       href={service.path}
                       className="service-link"
                     >
                       Learn More
                       <ArrowUpRight size={18} />
                     </a>
     
                   </motion.div>
     
                 </div>
     
               ))}
     
             </div>
     
           </div>
     
         </section>
  )
}

export default ServicesCards
