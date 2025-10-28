import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PricingCards from "@/components/PricingCards";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PricingCards />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
