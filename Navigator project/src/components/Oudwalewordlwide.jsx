import React from "react";
import "./oudwalewordlwide.css";

const Oudwalewordlwide = () => {
  return (
    <section className="global-one">
      <div className="global-inner">
        <div className="globe-strip">
          <svg
            className="globe-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
            <path
              d="M12 2C9.5 4.7 8 8.2 8 12C8 15.8 9.5 19.3 12 22"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M12 2C14.5 4.7 16 8.2 16 12C16 15.8 14.5 19.3 12 22"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>

          <span>OudWale Worldwide</span>
        </div>

        <h2>
          Present in <span>60+</span> Countries Worldwide
        </h2>

        <p>
          OudWale fragrances are loved across the globe — delivering premium
          long-lasting perfumes with a bold luxury experience.
        </p>

        <button className="global-btn">Explore Our Story</button>
      </div>
    </section>
  );
};

export default Oudwalewordlwide;
