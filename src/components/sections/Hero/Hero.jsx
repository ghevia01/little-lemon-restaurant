import Button from "../../common/Button/Button";
import HeroImg from "../../../assets/og-image.jpg";

import "./hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-message">
        <div className="message-title">
          <h1 className="message-title-main">Little Lemon</h1>
          <h2 className="message-title-sub">Chicago</h2>
        </div>
        <p className="message-body">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button className="hero-cta" variant="secondary">Reserve a table</Button>
      </div>
      <div className="hero-image">
        <img src={HeroImg} alt="Delicious food at Little Lemon Chicago" />
      </div>
    </section>
  );
}

export default Hero;
