import { useState } from "react";
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
    { name: "Guaranteed refund of setup fee if service doesn't recover at least $500 in 45 days", basic: true, premium: true },
    { name: "We cover all expenses: send credits, system costs, campaign tech — no hidden costs", basic: true, premium: true },
  ];

  const plans = [
    {
      name: "One Time Setup Fee + 25% Revenue Share",
      description: "Teams that want skin in the game and a hard ROI guarantee.",
      price: 500,
      ctaText: "Start Basic",
      highlighted: false,
    },
    {
      name: "Premium",
      description: "Ideal for growing businesses with up to 15,000 dormant leads.",
      price: 1997,
      ctaText: "Start Premium",
      highlighted: true,
    }
  ];
  
  return (
    <div className="section bg-dlp-darker">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Choose the plan that fits your needs. All plans include our core lead resurrection technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name} 
              className={`tech-card p-8 ${
                plan.highlighted 
                  ? "border-dlp-purple border-2 relative overflow-visible" 
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-dlp-purple text-white text-sm font-bold py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-bold">
                    ${plan.price}
                  </span>
                  {plan.price === 500 && (
                    <span className="text-gray-400 ml-2 text-sm">with refund guarantee</span>
                  )}
                </div>
              </div>
              
              <ul className="mb-8 space-y-3">
                {features.map((feature) => {
                  const isIncluded = plan.name === "One Time Setup Fee + 25% Revenue Share" 
                    ? feature.basic 
                    : feature.premium;
                      
                  return (
                    <li 
                      key={feature.name} 
                      className={`flex items-start ${isIncluded ? "text-gray-200" : "text-gray-500 line-through"}`}
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
                        className={`mr-3 h-5 w-5 flex-shrink-0 ${isIncluded ? "text-dlp-cyan" : "text-gray-500"}`}
                      >
                        {isIncluded ? (
                          <>
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <path d="m9 11 3 3L22 4"/>
                          </>
                        ) : (
                          <>
                            <circle cx="12" cy="12" r="10"/>
                            <path d="m15 9-6 6"/>
                            <path d="m9 9 6 6"/>
                          </>
                        )}
                      </svg>
                      {feature.name}
                    </li>
                  );
                })}
              </ul>
              
              <Button 
                className={`w-full py-6 text-lg ${
                  plan.highlighted 
                    ? "bg-dlp-purple hover:bg-dlp-purple/90"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;