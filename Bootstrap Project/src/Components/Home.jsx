import React from "react";
import "./home.css";

const Home = () => {

  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6",
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            WatchStore
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

            <button className="btn btn-warning ms-3">Cart</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Luxury Watches</h1>
          <p className="lead">Timeless Style. Premium Quality.</p>
          <button className="btn btn-warning px-4">Shop Now</button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h4>Premium Quality</h4>
              <p>Top-class materials with durability.</p>
            </div>
            <div className="col-md-4">
              <h4>Modern Design</h4>
              <p>Stylish watches for every occasion.</p>
            </div>
            <div className="col-md-4">
              <h4>Fast Delivery</h4>
              <p>Quick and secure shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Best Sellers</h2>
          <div className="row">
            {images.map((img, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card product-card h-100">
                  <img src={img} className="card-img-top" alt="watch" />
                  <div className="card-body text-center">
                    <h5 className="card-title">Luxury Watch {index + 1}</h5>
                    <p className="text-muted">₹4,999</p>
                    <button className="btn btn-dark btn-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* COLLECTION SHOWCASE */}
<section className="collection-section d-flex align-items-center">
  <div className="container">
    <div className="row align-items-center">
      
      {/* LEFT CONTENT */}
      <div className="col-md-6">
        <div className="collection-content p-4">
          <h2 className="fw-bold text-warning">Premium Collection</h2>
          <p className="text-light mt-3">
            Upgrade your style with our exclusive range of luxury watches.
            Designed for elegance, built for performance.
          </p>
          <button className="btn btn-warning mt-3 px-4">
            Explore Collection
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-md-6 text-center">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          className="img-fluid rounded shadow"
          alt="watch"
        />
      </div>

    </div>
  </div>
</section>



{/* WHY CHOOSE US */}
<section className="why-section py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-5 text-warning">
      Why Choose Our Watches
    </h2>

    <div className="row">
      
      <div className="col-md-4 mb-4">
        <div className="card why-card text-center p-4 h-100">
          <div className="icon mb-3">⏱</div>
          <h5 className="fw-bold">Precision Craftsmanship</h5>
          <p className="text-muted mt-2">
            Each watch is designed with extreme precision and attention to detail.
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card why-card text-center p-4 h-100">
          <div className="icon mb-3">💎</div>
          <h5 className="fw-bold">Premium Materials</h5>
          <p className="text-muted mt-2">
            Built using high-quality materials for durability and luxury feel.
          </p>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card why-card text-center p-4 h-100">
          <div className="icon mb-3">🚚</div>
          <h5 className="fw-bold">Fast Delivery</h5>
          <p className="text-muted mt-2">
            Get your favorite watches delivered safely and quickly.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

   {/* CUSTOMER REVIEWS */}
<section className="review-section py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-5 text-warning">
      Customer Reviews
    </h2>

    <div className="row">

      {[1,2,3,4].map((item) => (
        <div className="col-md-3 mb-4" key={item}>
          <div className="card review-card h-100 p-3">
            
            {/* USER IMAGE */}
            <div className="text-center">
              <img
                src={`https://randomuser.me/api/portraits/men/${item}.jpg`}
                className="rounded-circle mb-3"
                width="70"
                height="70"
                alt="user"
              />
            </div>

            {/* REVIEW TEXT */}
            <div className="card-body text-center">
              <p className="text-muted">
                "Amazing quality watch! Stylish and comfortable. Totally worth it."
              </p>
              <h6 className="fw-bold mb-0">Customer {item}</h6>
              <small className="text-warning">★★★★★</small>
            </div>

          </div>
        </div>
      ))}

      {/* FAQ SECTION */}
<section className="faq-section py-5 text-white">
  <div className="container">
    <h2 className="text-center fw-bold mb-5 text-warning">
      Frequently Asked Questions
    </h2>

    <div className="accordion custom-accordion" id="faqAccordion">

      {/* ITEM 1 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq1"
          >
            Are your watches original and high quality?
          </button>
        </h2>
        <div
          id="faq1"
          className="accordion-collapse collapse show"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, all our watches are made with premium materials and designed for durability and style.
          </div>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq2"
          >
            Do you offer cash on delivery?
          </button>
        </h2>
        <div
          id="faq2"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, we provide cash on delivery in selected locations across India.
          </div>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq3"
          >
            What is your return policy?
          </button>
        </h2>
        <div
          id="faq3"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            We offer a 7-day return policy for unused products in original packaging.
          </div>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faq4"
          >
            How long does delivery take?
          </button>
        </h2>
        <div
          id="faq4"
          className="accordion-collapse collapse"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Delivery usually takes 3–5 business days depending on your location.
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  </div>
</section>  

    {/* FOOTER */}
<footer className="footer-section text-white pt-5 pb-3">
  <div className="container">
    <div className="row">

      {/* BRAND */}
      <div className="col-md-4 mb-4">
        <h4 className="fw-bold text-warning">WatchStore</h4>
        <p className="mt-3">
          Premium watches crafted for style, elegance, and performance.
          Elevate your personality with our exclusive collection.
        </p>
      </div>

      {/* LINKS */}
      <div className="col-md-2 mb-4">
        <h6 className="fw-bold">Quick Links</h6>
        <ul className="list-unstyled mt-3">
          <li><a href="#" className="footer-link">Home</a></li>
          <li><a href="#" className="footer-link">Shop</a></li>
          <li><a href="#" className="footer-link">Collection</a></li>
          <li><a href="#" className="footer-link">Contact</a></li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">Support</h6>
        <ul className="list-unstyled mt-3">
          <li><a href="#" className="footer-link">FAQ</a></li>
          <li><a href="#" className="footer-link">Shipping</a></li>
          <li><a href="#" className="footer-link">Returns</a></li>
          <li><a href="#" className="footer-link">Privacy Policy</a></li>
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div className="col-md-3 mb-4">
        <h6 className="fw-bold">Newsletter</h6>
        <p className="mt-3">Subscribe for latest updates</p>
        <div className="d-flex">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter email"
          />
          <button className="btn btn-warning">Go</button>
        </div>
      </div>

    </div>

    <hr className="border-secondary" />

    {/* BOTTOM */}
    <div className="text-center">
      <p className="mb-0">
        © 2026 WatchStore | All Rights Reserved
      </p>
    </div>
  </div>
</footer>
    </>
  );
};

export default Home;