import PropTypes from "prop-types";
import "./button.scss";

const Button = ({ children, type, className, variant, onClick }) => {
  const classes = `button ${variant} ${className}`.trim();

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "none"]),
  onClick: PropTypes.func,
};

export default Button;
