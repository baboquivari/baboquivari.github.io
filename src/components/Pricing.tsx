import { Button } from "@/components/ui/button";

interface PricingFeature {
  name: string;
  basic: boolean;
  premium: boolean;
}

const Pricing = () => {
  const features: PricingFeature[] = [
    { name: "Lead Database Analysis", basic: true, premium: true },
    { name: "Whatsapp or Email Campaign", basic: true, premium: true },
    { name: "Personalized Outreach", basic: true, premium: true },
    { name: "Campaign Performance Dashboard", basic: true, premium: true },
    { name: "Human Handoff", basic: true, premium: true },
    { name: "25% revenue share on cash collected (1st invoice only)", basic: true, premium: true },
    { name: "We cover all expenses: send credits, system costs, campaign tech — no hidden costs", basic: true, premium: true },
  ];

  const plan = {
    name: "No Setup Fee + 25% Revenue Share",
    description: "Ideal for growing businesses with up to 15,000 dormant leads.",
    price: 0,
    ctaText: "Book a Demo",
  };
  
  return (
    <div id="simple-transparent-pricing" className="section bg-dlp-darker">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Choose the plan that fits your needs. All plans include our core lead resurrection technology.
        </p>
        
        <div className="flex justify-center">
          <div className="tech-card p-8 max-w-xl w-full border-dlp-purple border-2 relative overflow-visible">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dlp-purple text-white text-sm font-bold py-1 px-4 rounded-full">
              Revenue Guarantee
            </div>
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-400 mb-6">{plan.description}</p>
            
            <div className="mb-6">
              <div className="flex items-end">
                <span className="text-4xl font-bold">
                  ${plan.price}
                </span>
              </div>
            </div>
            
            <ul className="mb-8 space-y-3">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start text-gray-200"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="mr-3 h-5 w-5 flex-shrink-0 text-dlp-cyan"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m9 11 3 3L22 4"/>
                  </svg>
                  {feature.name}
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={() => document.querySelector('#book-a-demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-6 text-lg bg-dlp-purple hover:bg-dlp-purple/90"
            >
              {plan.ctaText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;