import Header from  "../../components/sections/Header/Header";
import Hero from "../../components/sections/Hero/Hero";
import Highlights from "../../components/sections/Highlights/Highlights";
import Testimonials from "../../components/sections/Testimonials/Testimonials";
import Footer from "../../components/sections/Footer/Footer";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
