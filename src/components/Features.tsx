import { 
  Database, 
  Star, 
  TrendingUp, 
  Users, 
  Eye, 
  Award 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-dlp-cyan" />,
      title: "Cost Efficiency",
      description: "Cut lead generation expenses and improve your marketing effectiveness."
    },
    {
      icon: <Star className="w-8 h-8 text-dlp-cyan" />,
      title: "Improved Customer Engagement",
      description: "Deliver personalized customer experiences that your customers love."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-dlp-cyan" />,
      title: "Increased Revenue",
      description: "Tap into new revenue streams and expand your businesses growth."
    },
    {
      icon: <Users className="w-8 h-8 text-dlp-cyan" />,
      title: "Scalability Without Expanding Staff",
      description: "Engage thousands of leads without adding staff."
    },
    {
      icon: <Eye className="w-8 h-8 text-dlp-cyan" />,
      title: "Enhanced Customer Insights",
      description: "Get valuable customer insights to inform your business decisions."
    },
    {
      icon: <Award className="w-8 h-8 text-dlp-cyan" />,
      title: "Gain Competitive Advantage",
      description: "Stay ahead of the competition with innovative customer engagement strategies."
    }
  ];

  return (
    <div className="section bg-dlp-darker py-24">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Features</h2>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
          Breathe new life into your database and turn inactive customers into loyal advocates
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="tech-card relative overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-dlp-darker"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dlp-purple/10 to-dlp-cyan/10 opacity-20"></div>
              <div className="bg-dlp-dark/50 p-6 border-b border-gray-800" style={{ backgroundImage: "linear-gradient(45deg, rgba(30, 41, 59, 0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
                <div className="flex items-center">
                  <div className="bg-dlp-dark/80 p-4 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dlp-purple">{feature.title}</h3>
                </div>
              </div>
              <div className="bg-transparent p-6 flex-grow relative z-10">
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;