import React from "react";
import "./contact.css";

const ContactPage = () => {
  return (
    <div className="ct-page">

      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-overlay"></div>

        <div className="ct-hero-content text-center">
          <h1>Contact <span>Us</span></h1>
          <p>We’d love to hear from you. <br />
Let us help you experience clarity, comfort, and style like never before.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="ct-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* LEFT INFO */}
            <div className="col-lg-5 ct-info">
              <h3>Get in Touch</h3>

              <div className="ct-item">
                <h6>Location</h6>
                <p>Ahmedabad, India</p>
              </div>

              <div className="ct-item">
                <h6>Phone</h6>
                <p>+91 98765 43210</p>
              </div>

              <div className="ct-item">
                <h6>Email</h6>
                <p>support@eyewear.com</p>
              </div>

              <div className="ct-item">
                <h6>Hours</h6>
                <p>Mon - Sat: 10AM - 8PM</p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-7">
              <div className="ct-form-box">

                <h3>Send Message</h3>

                <form className="row g-3">
                  <div className="col-md-6">
                    <input type="text" placeholder="Name" />
                  </div>

                  <div className="col-md-6">
                    <input type="email" placeholder="Email" />
                  </div>

                  <div className="col-12">
                    <input type="text" placeholder="Subject" />
                  </div>

                  <div className="col-12">
                    <textarea rows="4" placeholder="Message"></textarea>
                  </div>

                  <div className="col-12">
                    <button>Send Message</button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM */}
    

    </div>
  );
};

export default ContactPage;