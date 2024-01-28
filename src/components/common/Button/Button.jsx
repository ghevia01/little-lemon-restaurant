import "./button.scss";

const Button = ({ children, variant, className, onClick }) => {
  const classes = `button ${variant} ${className}`.trim();

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
