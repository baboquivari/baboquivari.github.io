const LogoCarousel = () => {
  const logos = [
    {
      name: "Hill Tribe Silver Jewelry",
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A80ad724d-0cf7-443b-905f-ebb97dbe793f%3Ahilltribe-logo-no-bg.png?table=block&id=1f9412d3-850f-806c-820f-ca9821b539be&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      className: "w-32 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Accela Sales Training",
      url: "https://frost-lark-9ff.notion.site/image/attachment%3Ab2a89ef6-5936-4245-85a1-706ec5bbf33e%3Aaccela_logo.png?table=block&id=1f9412d3-850f-803e-b014-cc63f2e3a074&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      className: "w-40 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Effectiv",
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A74fb25a4-c429-46e3-b748-7b85b630e77d%3Aeffectiv-logo.svg?table=block&id=1f9412d3-850f-80a6-8757-f372d9929adf&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&userId=&cache=v2",
      className: "w-36 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Invenia",
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A8e97fb6c-dadd-4f35-9275-39828fa04029%3Ainvenia-logo-spaced.png?table=block&id=1f9412d3-850f-80ce-a725-ea8a8065ab21&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      className: "w-36 brightness-[.6] hover:brightness-100 transition-all"
    },
    {
      name: "Yorkshire Electric Gates",
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A225b00f0-2b92-4830-a9ef-880dd23e7bbd%3Ayorkshire_electric_gates.png?table=block&id=1f9412d3-850f-803b-8ed3-ebaf0e4d860d&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
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