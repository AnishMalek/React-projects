import React from "react";
import {ShieldCheck,Sparkles,Sun,Feather,} from "lucide-react";
import "./about.css";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {

    const navigate=useNavigate()
  return (
    <div className="about-page">

      {/* about */}
      <section className="about d-flex align-items-center justify-content-center text-center">
        <div className="about-overlay"></div>

        <div className="about-content container">
          <h1>
            Crafting Vision with <span>Elegance</span>
          </h1>

          <p>

Premium eyewear designed for clarity, comfort, and confidence.
Crafted to elevate your vision and define your style.
          </p>

          <button className="about-btn" onClick={()=>navigate('/product')}>
            Explore Collection
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">

            <div className="col-lg-6 col-md-12 about-text">
              <span className="tag">The Heritage</span>

              <h2 className="text-dark fs-2">
                Where Master Craftsmanship <br/> <span className="gold-text">Meets Modern Innovation.</span>
              </h2>

              <p>
               Founded on precision, craftsmanship, and timeless elegance, our journey is rooted in the art of detail and perfection. Every frame we design reflects a balance of innovation, comfort, and sophistication, created for those who value both vision and style. We believe eyewear is more than an accessory—it is a statement of identity, confidence, and personality.”

We don’t just create glasses; we design a new perspective on luxury—where every detail shapes a refined way of seeing the world.
              </p>

              <p className="quote">
                "We don't just create glasses; we design a new perspective on luxury."
              </p>
            </div>

            <div className="col-lg-6 col-md-12 about-image text-center">
              <img
                src="https://images.unsplash.com/photo-1556560957-04a8ebbc0563?w=600&auto=format&fit=crop&q=60"
                alt="eyewear"
                className="img-fluid rounded-4"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features py-5">
        <div className="container">

          <h2 className="text-center text-dark">
            Uncompromising <span className="gold-text">Standards</span>
          </h2>

          <div className="line mx-auto my-3"></div>

          <div className="row g-4 mt-3">
            {features.map((f, i) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={i}>
                <div className="feature-card text-center h-100">
                  <div className="icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PREMIUM IMAGE SECTION */}
      <section className="gold-section position-relative">
        <div
          className="gold-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1558752084-f8dd1f3067b9?w=600&auto=format&fit=crop&q=60)",
          }}
        ></div>

        <div className="gold-overlay"></div>

        <div className="container gold-container text-center">
          <h2>Redefining Luxury Eyewear</h2>

          <p>
            Every frame we create is a fusion of heritage craftsmanship and modern innovation.
          </p>

          <button className="gold-btn" onClick={()=>navigate('/')}>Discover Our Vision</button>
        </div>
      </section>

    </div>
  );
};

const features = [
  {
    icon: <Sparkles size={28} />,
    title: "Precision Crafted",
    description: "Digitally optimized lenses for edge-to-edge clarity.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Luxury Frames",
    description: "Italian acetate & aerospace-grade titanium.",
  },
  {
    icon: <Sun size={28} />,
    title: "UV Protection",
    description: "100% protection from harmful rays.",
  },
  {
    icon: <Feather size={28} />,
    title: "Lightweight Fit",
    description: "Designed for all-day comfort.",
  },
];

export default AboutPage;