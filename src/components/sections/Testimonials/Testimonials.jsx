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
      <div className="specials-grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
