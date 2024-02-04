import Header from "../../components/layout/Header/Header";
import Hero from "../../components/sections/Hero/Hero";
import Specials from "../../components/sections/Specials/Specials";
import About from "../../components/sections/About/About";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Footer from "../../components/layout/Footer/Footer";

import "./home.scss";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
