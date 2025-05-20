import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-dlp-darker/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://frost-lark-9ff.notion.site/image/attachment%3A799086c3-089e-4440-aba5-69634d9a5df0%3Adead_lead_phoenix_logo_blue_transparent.png?table=block&id=1f9412d3-850f-8075-bc6b-e2dcad9bdc8a&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2" 
              alt="Dead Lead Phoenix Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('#how-we-bring-leads-back')} className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('#simple-transparent-pricing')} className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('#book-a-demo')} 
              className="bg-dlp-purple/90 hover:bg-dlp-purple text-white"
            >
              Book a Demo
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('#how-we-bring-leads-back')} 
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('#simple-transparent-pricing')} 
                className="text-gray-300 hover:text-white transition-colors py-2"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('#book-a-demo')} 
                className="bg-dlp-purple/90 hover:bg-dlp-purple text-white w-full"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;