
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Crafting <span className="text-gradient">Exceptional</span> Software Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in animation-delay-300">
            Harkens Tech transforms complex ideas into elegant code. We build scalable, 
            high-performance applications that drive businesses forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
            <Button size="lg" className="bg-gradient-cyan hover:opacity-90 transition-opacity text-white px-8">
              Our Services
            </Button>
            <Button size="lg" variant="outline" className="border-harkens-accent text-harkens-accent hover:bg-harkens-accent/10">
              Meet The Team
            </Button>
          </div>
        </div>
      </div>
      
      {/* Code snippet background */}
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-0 w-[300px] h-[200px] opacity-20 md:opacity-30 blur-sm">
        <div className="w-full h-full bg-gradient-to-r from-harkens-accent/30 to-harkens-accent-light/30 rounded-lg animate-pulse-light"></div>
      </div>
      
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-0 w-[300px] h-[200px] opacity-20 md:opacity-30 blur-sm">
        <div className="w-full h-full bg-gradient-to-l from-harkens-accent/30 to-harkens-accent-light/30 rounded-lg animate-pulse-light"></div>
      </div>
    </section>
  );
};

export default Hero;
