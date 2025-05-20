import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Dead Lead Phoenix reactivated leads we thought were gone for good. Sales jumped 35% in just six weeks!",
      author: "Jenna Armitage",
      position: "Senior Marketing Executive",
      company: "Invenia"
    },
    {
      quote: "The simplicity and effectiveness blew us away. Within one month, we saw over $7,000 from previously unresponsive leads.",
      author: "Lina Tszyan",
      position: "Founder",
      company: "Hill Tribe Silver"
    },
    {
      quote: "We had thousands of dead leads just gathering dust. DLP turned them into instant revenue, helping us close deals effortlessly.",
      author: "Dan Emmett",
      position: "Owner",
      company: "Yorkshire Electric Gates"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="section bg-dlp-darker">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="tech-card p-8 md:p-12 glow-border">
            <div className="relative">
              <div className="absolute -top-6 -left-2 text-dlp-purple text-6xl opacity-30">"</div>
              <p className="text-xl md:text-2xl italic text-gray-200 mb-8 relative z-10">
                {testimonials[activeIndex].quote}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-dlp-purple/30 flex items-center justify-center">
                  <span className="font-bold text-lg">{testimonials[activeIndex].author[0]}</span>
                </div>
                <div className="ml-4">
                  <p className="font-bold">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-400">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev} 
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-dlp-cyan transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-dlp-cyan transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;