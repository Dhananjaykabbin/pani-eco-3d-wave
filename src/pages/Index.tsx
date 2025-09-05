import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductShowcase from "../components/ProductShowcase";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Index;
