import { Button } from "@/components/ui/button";

const BookDemo = () => {
  return (
    <div className="section bg-dlp-dark">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book a Demo</h2>
          <p className="text-xl text-gray-300 mb-8">
            See how Dead Lead Phoenix can transform your dormant leads into revenue
          </p>
          
          <div className="tech-card p-8">
            <iframe
              src="https://cal.com/tonisian/dead-lead-phoenix-20-min-demo"
              width="100%"
              height="600px"
              frameBorder="0"
              title="Schedule a demo"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;