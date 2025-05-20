import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does the solution work?",
      answer: "We use Whatsapp and Email text campaigns to re-engage your dead leads on autopilot. You need to collaborate a little at the start, to ensure Phoenix AI represents your company as you wish, but after that — it runs on autopilot"
    },
    {
      question: "How long does it take to see results?",
      answer: "Results can vary thats why we always do a free test run to see what performance is like."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously and use industry-standard encryption and security protocols to protect your data."
    },
    {
      question: "Can we monitor performance?",
      answer: "Yes, our platform offers real-time analytics, allowing you to track interactions and gain insights."
    }
  ];

  return (
    <div className="section bg-dlp-darker">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="tech-card mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium">{faq.question}</span>
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
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ${
                  openIndex === index 
                    ? "max-h-40 pb-6 opacity-100" 
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;