import DeliveryPartners from "../components/DeliveryPartners";
import FeaturedProducts from "../components/FeaturedProducts";
import ServicesSection from "../components/ServicesSection";

const Home = () => {
  return (
    <>
      <FeaturedProducts />
      <ServicesSection />
      
      <DeliveryPartners />
    </>
  );
};

export default Home;
