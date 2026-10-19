
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ArrowRight,
} from "lucide-react";
import "../main.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Web Development",
    project: "",
  });

  const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;

  // Name field: only letters and spaces
  if (name === "fullName") {
    if (!/^[A-Za-z\s]*$/.test(value)) {
      return;
    }
  }

  // Phone field: only numbers
  if (name === "phone") {
    if (!/^[0-9]*$/.test(value)) {
      return;
    }

    if (value.length > 10) {
      return;
    }
  }
  setFormData({
    ...formData,
    [name]: name === "email" ? value.toLowerCase() : value,
  });

  setErrors({
    ...errors,
    [name]: "",
  });
};
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.phone.trim()) {
  newErrors.phone = "Phone number is required";
} else if (!/^[0-9]{10}$/.test(formData.phone)) {
  newErrors.phone = "Enter a valid 10-digit phone number";
}

    if (!formData.project.trim()) {
      newErrors.project = "Project details are required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/send-email",
        formData
      );

      alert(res.data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Web Development",
        project: "",
      });

      setErrors({});
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <>
      {/* Hero */}

      <section className="contact-hero">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-8 text-center">

              <motion.span
                className="contact-badge"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
              >
                CONTACT US
              </motion.span>

              <motion.h1
                className="contact-title"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .6 }}
              >
                Let's Build Something
                <span> Amazing Together.</span>
              </motion.h1>

              <motion.p
                className="contact-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .2 }}
              >
                Whether you need a modern website, custom software,
                or digital transformation, we're ready to help turn
                your ideas into reality.
              </motion.p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5 align-items-start">

            {/* Left */}

            <motion.div
              className="col-lg-4"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            >

              <h2 className="contact-info-title">
                Get In Touch
              </h2>

              <p className="contact-info-text">
                Have a project in mind? We'd love to hear your ideas
                and discuss how Synexa Technologies can help your
                business grow.
              </p>

              <div className="info-list">

                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h5>Office</h5>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h5>Email</h5>
                    <p>hello@synexa.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h5>Phone</h5>
                    <p>+91 XXXXX XXXXX</p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* Right */}

            <motion.div
              className="col-lg-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            >

              <div className="contact-form-box">

                <form className="contact-form" onSubmit={handleSubmit}>

                  <div className="form-grid">

                    <div className="form-group">
                      <label>Full Name</label>

                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />

                      {errors.fullName && (
                        <small className="error-message">
                          {errors.fullName}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                      />

                      {errors.email && (
                        <small className="error-message">
                          {errors.email}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                      />

                      {errors.phone && (
                        <small className="error-message">
                          {errors.phone}
                        </small>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Service Needed</label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option>Web Development</option>
                        <option>Mobile App</option>
                        <option>UI / UX Design</option>
                        <option>Cloud Solutions</option>
                        <option>Custom Software</option>
                      </select>
                    </div>

                    <div className="form-group full-width">

                      <label>Project Details</label>

                      <textarea
                        rows="6"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                      ></textarea>

                      {errors.project && (
                        <small className="error-message">
                          {errors.project}
                        </small>
                      )}

                    </div>

                    <div className="full-width">

                      <button
                        type="submit"
                        className="contact-btn"
                      >
                        Send Message

                        <ArrowRight size={18} />

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Contact;



