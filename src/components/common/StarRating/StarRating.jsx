import PropType from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

import "./star-rating.scss";

const MAX_RATING = 5;
const MIN_RATING = 1;

const StarRating = ({ rating }) => {
  // Make sure that the rating is within the range of 1 to 5
  const normalizedRating = Math.min(MAX_RATING, Math.max(MIN_RATING, rating));

  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(normalizedRating);
  const halfStars = normalizedRating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = MAX_RATING - fullStars - halfStars;

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={`full-${index}`}
          icon={solidStar}
          className="star"
        />
      ))}
      {halfStars === 1 && (
        <FontAwesomeIcon key="half-1" icon={faStarHalfAlt} className="star" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={`empty-${index}`}
          icon={regularStar}
          className="star"
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropType.number.isRequired,
};

export default StarRating;
