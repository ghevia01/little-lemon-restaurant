import Button from "../../common/Button/Button";

import AboutImg from "../../../assets/restaurant-chef-b.jpg";

import "./about.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={AboutImg} alt="about" />
      </div>
      <div className="about-message">
        <h2 className="message-header">Our Culinary Journey</h2>
        <p className="message-body">
          Embark on a journey through taste at Little Lemon, where each dish
          weaves a tale of tradition and innovation. Our chef&apos;s dedication
          to culinary excellence is reflected in the symphony of flavors
          presented on your plate. Join us as we explore the boundaries of
          cuisine, one ingredient at a time.
        </p>
        <Button className="about-cta" variant="secondary">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default About;
