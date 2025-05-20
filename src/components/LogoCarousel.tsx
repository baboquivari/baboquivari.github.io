const LogoCarousel = () => {
  const logos = [
    {
      name: "Hill Tribe Silver Jewelry",
      url: "https://images.pexels.com/photos/silver-logo.png",
      className: "w-32 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Accela Sales Training",
      url: "https://images.pexels.com/photos/accela-logo.png",
      className: "w-40 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Cisive",
      url: "https://images.pexels.com/photos/cisive-logo.png",
      className: "w-36 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Invenia",
      url: "https://images.pexels.com/photos/invenia-logo.png",
      className: "w-36 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Yorkshire Electric Gates",
      url: "https://images.pexels.com/photos/yorkshire-logo.png",
      className: "w-32 brightness-[.6] hover:brightness-100 transition-all"
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