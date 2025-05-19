
import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
}

const Counter = ({ end, suffix = "", prefix = "", duration = 2000, delay = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setTimeout(() => {
            const startTime = Date.now();
            const timer = setInterval(() => {
              const timePassed = Date.now() - startTime;
              if (timePassed > duration) {
                setCount(end);
                clearInterval(timer);
              } else {
                const progress = timePassed / duration;
                setCount(Math.floor(end * progress));
              }
            }, 30);
            setHasAnimated(true);
            return () => {
              clearInterval(timer);
            };
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, delay, hasAnimated]);

  return (
    <div ref={counterRef} className="animate-count-up opacity-0">
      <span className="text-4xl md:text-5xl font-bold text-gradient animate-glow">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </div>
  );
};

const SocialProof = () => {
  return (
    <div className="section bg-dlp-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Proven Results</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="tech-card p-8 text-center">
            <Counter end={87} suffix="%" delay={200} />
            <p className="mt-4 text-gray-300 text-lg">
              Average increase in reactivated leads
            </p>
          </div>
          
          <div className="tech-card p-8 text-center">
            <Counter end={3.2} prefix="$" suffix="M" delay={400} />
            <p className="mt-4 text-gray-300 text-lg">
              Additional revenue generated for clients in 2024
            </p>
          </div>
          
          <div className="tech-card p-8 text-center">
            <Counter end={14} suffix="x" delay={600} />
            <p className="mt-4 text-gray-300 text-lg">
              Average ROI from our reactivation campaigns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
