
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dlp-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(110,68,255,0.15),_transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,_rgba(0,212,255,0.15),_transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block mb-2">Resurrect Your</span> 
            <span className="text-gradient animate-glow">Dead Leads</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We transform forgotten opportunities into your most valuable asset.
            Unlock revenue that's already in your database.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-dlp-purple hover:bg-dlp-purple/90 text-white py-6 px-8 rounded-md text-lg">
              Revive My Leads
            </Button>
            <Button variant="outline" className="border-dlp-cyan text-dlp-cyan hover:bg-dlp-cyan/10 py-6 px-8 rounded-md text-lg">
              See How It Works
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full text-center">
        <div className="animate-bounce inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dlp-cyan">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
