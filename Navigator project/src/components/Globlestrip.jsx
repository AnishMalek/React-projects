import React from 'react'
import './globlestrip.css'

const Globlestrip = () => {
 

  return (
    <section className="global-strip">
      <div className="global-wrap">

        {/* 1 */}
        <div className="global-item">
          <div className="global-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M2 12h20"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M12 2c2.5 2.8 4 6.3 4 10s-1.5 7.2-4 10c-2.5-2.8-4-6.3-4-10s1.5-7.2 4-10Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          </div>
          <h3>60+ Countries</h3>
        </div>

        {/* 2 */}
        <div className="global-item">
          <div className="global-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 10V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M3 10h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M8 22v-6h8v6"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M7 13h10"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          </div>
          <h3>300+ Stores Worldwide</h3>
        </div>

        {/* 3 */}
        <div className="global-item">
          <div className="global-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M9 12.5l2 2 4-5"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
            </svg>
          </div>
          <h3>IFRA Certified</h3>
        </div>

      </div>
    </section>
  );
};


    
export default Globlestrip
