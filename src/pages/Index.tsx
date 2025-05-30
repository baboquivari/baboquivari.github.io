import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProof from "../components/SocialProof";
// import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import ServiceExplanation from "../components/ServiceExplanation";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import BookDemo from "../components/BookDemo";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-dlp-dark">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <SocialProof />
{/*       <Testimonials /> */}
      <Features />
      <ServiceExplanation />
      <Pricing />
      <FAQ />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default Index;
