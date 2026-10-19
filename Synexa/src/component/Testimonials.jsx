import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../main.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechNova Solutions",
    review:
      "Synexa transformed our outdated website into a modern, high-performing platform. Their attention to detail, communication, and technical expertise exceeded our expectations.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Head, Nexora",
    review:
      "The team delivered exactly what we needed. The website is fast, responsive, and has significantly improved our online presence and lead generation.",
  },
  {
    name: "Amit Verma",
    role: "Director, VisionEdge",
    review:
      "From planning to deployment, everything was handled professionally. Synexa truly feels like a long-term technology partner.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      <div className="container">

        <motion.div
          className="testimonial-heading text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>CLIENT STORIES</span>

          <h2>
            What Our clients Say
          </h2>

          <p>
            Real feedback from businesses we've partnered with to build
            impactful digital solutions.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          speed={900}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, scale: .95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
              >

                <Quote className="quote-icon" size={42} />

                <div className="stars">
                  {[1,2,3,4,5].map((star)=>(
                    <Star
                      key={star}
                      size={18}
                      fill="#FC3B00"
                      color="#FC3B00"
                    />
                  ))}
                </div>

                <p className="review">
                  "{item.review}"
                </p>

                <div className="client">

                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>

                </div>

              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;