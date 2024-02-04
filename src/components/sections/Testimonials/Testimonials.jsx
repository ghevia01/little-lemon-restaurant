import TestimonialCard from "../../common/TestimonialCard/TestimonialCard";
import { TESTIMONIALS } from "../../../constants/testimonials";

import "./testimonials.scss";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Tales from the Table</h2>
        <p>What our customers are saying about us</p>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            className={index === 1 ? "testimonial-card-highlighted" : ""}
            key={index}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
