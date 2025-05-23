import { useEffect, useState, useRef } from "react";

const LogoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const logos = [
    {
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A80ad724d-0cf7-443b-905f-ebb97dbe793f%3Ahilltribe-logo-no-bg.png?table=block&id=1f9412d3-850f-806c-820f-ca9821b539be&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      alt: "Hill Tribe Silver Logo",
      width: 140
    },
    {
      url: "https://frost-lark-9ff.notion.site/image/attachment%3Ab2a89ef6-5936-4245-85a1-706ec5bbf33e%3Aaccela_logo.png?table=block&id=1f9412d3-850f-803e-b014-cc63f2e3a074&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      alt: "Accela Logo",
      width: 126
    },
    {
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A8e97fb6c-dadd-4f35-9275-39828fa04029%3Ainvenia-logo-spaced.png?table=block&id=1f9412d3-850f-80ce-a725-ea8a8065ab21&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      alt: "Invenia Logo",
      width: 154
    },
    {
      url: "https://frost-lark-9ff.notion.site/image/attachment%3A225b00f0-2b92-4830-a9ef-880dd23e7bbd%3Ayorkshire_electric_gates.png?table=block&id=1f9412d3-850f-803b-8ed3-ebaf0e4d860d&spaceId=65003a87-77d5-4e87-85b8-4cea37d670eb&width=1420&userId=&cache=v2",
      alt: "Yorkshire Electric Gates Logo",
      width: 140
    }
  ];

  return (
    <div className="section bg-dlp-darker py-12" ref={carouselRef}>
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-12 md:gap-24">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  animation: isVisible ? `fadeIn 0.5s ease-out ${index * 200}ms forwards` : 'none'
                }}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  style={{ width: logo.width }}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;