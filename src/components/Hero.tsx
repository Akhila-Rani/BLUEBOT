import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/bluebot-hero.png";

const Hero = () => {
  const scrollToVideo = () => {
    document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide">
                AUTONOMOUS INNOVATION
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Meet <span className="text-primary">BlueBot</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Revolutionary autonomous robot combining waste collection, energy conversion, 
              and water quality monitoring in one intelligent system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary-light transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={scrollToVideo}
              >
                Watch Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="BlueBot Autonomous Robot" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToVideo}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary hover:text-primary-light transition-colors"
        aria-label="Scroll to demo"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
};

export default Hero;
