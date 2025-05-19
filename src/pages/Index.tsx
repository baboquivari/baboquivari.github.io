
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LogoCarousel from "../components/LogoCarousel";
import SocialProof from "../components/SocialProof";
import Testimonials from "../components/Testimonials";
import ServiceExplanation from "../components/ServiceExplanation";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dlp-dark">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <SocialProof />
      <Testimonials />
      <ServiceExplanation />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
