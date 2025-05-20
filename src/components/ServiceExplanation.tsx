import { Button } from "@/components/ui/button";

const ServiceExplanation = () => {
  const steps = [
    {
      id: 1,
      title: "Data Analysis",
      description: "We analyze your CRM data to identify high-potential dormant leads based on past engagement, lead scoring, and demographic data.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dlp-purple">
          <path d="M3 3v18h18"/>
          <path d="m19 9-5 5-4-4-3 3"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Resurrection Strategy",
      description: "Our team develops a personalized re-engagement campaign with tailored messaging designed to spark interest in previously unresponsive leads.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dlp-purple">
          <path d="M12 8V4H8"/>
          <path d="M4 4h4"/>
          <path d="M8 12h12"/>
          <path d="M12 20v-8"/>
          <path d="M16 16h4"/>
          <path d="M20 12v8h-4"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Automated Outreach",
      description: "Using our proprietary technology, we deploy multi-channel outreach campaigns that deliver the right message at the right time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dlp-purple">
          <path d="M5 7.2A2.2 2.2 0 0 1 7.2 5h9.6A2.2 2.2 0 0 1 19 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 16.8z"/>
          <path d="m5 15 5-5"/>
          <path d="m19 9-5 5"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Monitoring & Optimization",
      description: "We continuously monitor campaign performance and optimize in real-time, ensuring maximum lead reactivation and conversion rates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dlp-purple">
          <path d="M12 20v-6"/>
          <path d="M6 20V10"/>
          <path d="M18 20V4"/>
        </svg>
      ),
    }
  ];

  return (
    <div id="how-we-bring-leads-back" className="section bg-dlp-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Bring Leads Back to Life</h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Our proven 4-step process transforms forgotten leads into valuable opportunities with minimal effort from your team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`tech-card p-8 ${index % 2 === 0 ? 'animate-slide-right' : 'animate-slide-left'} opacity-0`} 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start">
                <div className="mr-6 bg-dlp-purple/10 p-3 rounded-lg">{step.icon}</div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-dlp-cyan mr-3 text-sm font-semibold">STEP {step.id}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => document.querySelector('#book-a-demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-dlp-purple hover:bg-dlp-purple/90 text-white py-6 px-8 rounded-md text-lg"
          >
            Book Your Free Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceExplanation;