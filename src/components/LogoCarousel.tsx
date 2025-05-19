
const LogoCarousel = () => {
  // In a real implementation, these would be actual client logos
  const logos = [
    { name: "Tech Co", },
    { name: "Marketing Agency", },
    { name: "SaaS Platform", },
    { name: "E-commerce Brand", },
    { name: "B2B Solutions", },
    { name: "Finance Corp", },
  ];

  return (
    <div className="bg-dlp-darker py-12">
      <div className="container mx-auto">
        <h3 className="text-center text-lg text-gray-400 mb-8">Trusted by industry leaders</h3>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="w-32 h-16 bg-gray-800/50 rounded flex items-center justify-center"
            >
              <span className="text-gray-400 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
