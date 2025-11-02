import { Card } from "@/components/ui/card";
import { Brain, Battery, Wifi, Shield } from "lucide-react";

const techSpecs = [
  {
    icon: Brain,
    label: "AI Navigation",
    value: "Advanced ML algorithms for obstacle detection and path optimization",
  },
  {
    icon: Battery,
    label: "Power System",
    value: "Self-sustaining with waste-to-energy conversion + solar backup",
  },
  {
    icon: Wifi,
    label: "Connectivity",
    value: "5G/LTE with real-time data transmission to base station",
  },
  {
    icon: Shield,
    label: "Durability",
    value: "IP67 waterproof rating, all-terrain capable design",
  },
];

const Technology = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with enterprise-grade components and cutting-edge technology 
              for maximum reliability and performance in any environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {techSpecs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up bg-card border-2 hover:border-primary/50 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {spec.label}
                      </h3>
                      <p className="text-muted-foreground">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <Card className="p-12 bg-gradient-to-br from-primary to-primary-light text-primary-foreground animate-scale-in">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Ready for Deployment</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                BlueBot is production-ready and scalable, designed to handle 
                everything from small pilot programs to large-scale environmental operations.
              </p>
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div>
                  <div className="text-4xl font-bold mb-2">8hrs+</div>
                  <div className="text-sm opacity-80">Battery Life</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50kg</div>
                  <div className="text-sm opacity-80">Waste Capacity</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-80">Monitoring</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technology;
