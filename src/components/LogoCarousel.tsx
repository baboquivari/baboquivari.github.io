const LogoCarousel = () => {
  const logos = [
    {
      name: "Hill Tribe Silver Jewelry",
      url: "https://images.pexels.com/photos/hilltribe.png",
      className: "w-32 brightness-0 opacity-60 hover:opacity-100 transition-opacity"
    },
    {
      name: "Accela Sales Training",
      url: "https://images.pexels.com/photos/accela.png",
      className: "w-40 brightness-0 opacity-60 hover:opacity-100 transition-opacity"
    },
    {
      name: "Cisive",
      url: "https://images.pexels.com/photos/cisive.png",
      className: "w-36 brightness-0 opacity-60 hover:opacity-100 transition-opacity"
    },
    {
      name: "Invenia",
      url: "https://images.pexels.com/photos/invenia.png",
      className: "w-36 brightness-0 opacity-60 hover:opacity-100 transition-opacity"
    },
    {
      name: "Revios",
      url: "https://images.pexels.com/photos/revios.png", 
      className: "w-32 brightness-0 opacity-60 hover:opacity-100 transition-opacity"
    }
  ];

  return (
    <div className="bg-dlp-darker py-12">
      <div className="container mx-auto">
        <h3 className="text-center text-lg text-gray-400 mb-8">Trusted by industry leaders</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center"
            >
              <img 
                src={logo.url}
                alt={logo.name}
                className={logo.className}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;