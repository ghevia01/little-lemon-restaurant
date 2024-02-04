import PropType from "prop-types";
import "./special-item-card.scss";

const SpecialItemCard = ({ name, price, description, image, alt }) => {
  return (
    <div className="special-item-card">
      <img className="special-item-image" src={image} alt={alt} />
      <div className="special-item-details">
        <div className="special-item-header">
          <h3 className="special-item-name">{name}</h3>
          <p className="special-item-price">{price}</p>
        </div>
        <p className="special-item-description">{description}</p>
      </div>
    </div>
  );
};

SpecialItemCard.propTypes = {
  name: PropType.string.isRequired,
  price: PropType.string.isRequired,
  description: PropType.string.isRequired,
  image: PropType.string.isRequired,
  alt: PropType.string.isRequired,
};

export default SpecialItemCard;
