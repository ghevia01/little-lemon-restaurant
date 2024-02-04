import PropType from "prop-types";

import StarRating from "../StarRating/StarRating";

import "./testimonial-card.scss";

const TestimonialCard = ({
  className,
  image,
  name,
  profession,
  rating,
  comment,
}) => {
  return (
    <div className={`testimonial-card ${className}`}>
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-title">{profession}</p>
        <div className="testimonial-rating">
          <StarRating rating={rating} />
        </div>
        <p className="testimonial-text">{comment}</p>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  className: PropType.string,
  image: PropType.string.isRequired,
  name: PropType.string.isRequired,
  profession: PropType.string.isRequired,
  rating: PropType.number.isRequired,
  comment: PropType.string.isRequired,
};

export default TestimonialCard;
