import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-dlp-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(110,68,255,0.15),_transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,_rgba(0,212,255,0.15),_transparent_60%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block mb-2 text-white">Hidden Revenue</span> 
              <span className="text-dlp-purple">— Unlocked</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl mb-8">
              AI-powered reactivation campaigns on autopilot. Turn dead leads into revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.querySelector('#book-a-demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-dlp-purple hover:bg-dlp-purple/90 text-white py-6 px-8 rounded-md text-lg"
              >
                Book a Demo
              </Button>
              <Button 
                onClick={() => document.querySelector('#how-we-bring-leads-back')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-dlp-cyan text-dlp-cyan hover:bg-dlp-cyan/10 py-6 px-8 rounded-md text-lg"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right Column - Database Visualization */}
          <div className="relative h-[600px] animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent rounded-xl overflow-hidden border border-gray-800/50">
              {/* Database Grid Background */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-[12] gap-[2px] p-4 opacity-20">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="bg-gray-700/30 rounded"></div>
                ))}
              </div>

              {/* Highlighted Rows */}
              <div className="absolute inset-0 p-4">
                <div className="h-full flex flex-col gap-[2px]">
                  {/* Active Row 1 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$12,450</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>

                  {/* Regular Row */}
                  <div className="h-8 flex gap-[2px] opacity-40">
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                  </div>

                  {/* Active Row 2 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '1.5s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$8,750</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>

                  {/* Regular Row */}
                  <div className="h-8 flex gap-[2px] opacity-40">
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                  </div>

                  {/* Active Row 3 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '2s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$15,200</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>

                  {/* Regular Row */}
                  <div className="h-8 flex gap-[2px] opacity-40">
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                  </div>

                  {/* Active Row 4 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '2.5s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$9,800</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>

                  {/* Regular Row */}
                  <div className="h-8 flex gap-[2px] opacity-40">
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                    <div className="w-1/4 h-full bg-gray-700/30 rounded"></div>
                  </div>

                  {/* Active Row 5 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '3s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$11,350</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>

                  {/* Active Row 6 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '3.5s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$13,600</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>

                  {/* Active Row 7 */}
                  <div className="h-8 flex gap-[2px] items-center animate-pulse" style={{ animationDelay: '4s' }}>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded flex items-center justify-center">
                      <span className="text-emerald-400 text-sm font-mono">$10,900</span>
                    </div>
                    <div className="w-1/4 h-full bg-emerald-500/20 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Scanning Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-32 animate-scan" 
                style={{ 
                  animation: 'scan 3s linear infinite',
                  backgroundSize: '100% 100%',
                  backgroundPosition: '0 -100%'
                }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;