import { Card } from "@/components/ui/card";
import { Trash2, Zap, Droplets, Radio, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Trash2,
    title: "Marine-Safe Design",
    description: "Specially engineered to navigate safely around marine life with bio-compatible materials and gentle collection mechanisms that never harm underwater ecosystems.",
  },
  {
    icon: Zap,
    title: "Self-Sustaining Power",
    description: "Converts collected plastic waste into operational fuel through pyrolysis, eliminating the need for frequent recharging and enabling extended autonomous missions.",
  },
  {
    icon: Droplets,
    title: "All-Weather Operation",
    description: "Built to withstand harsh ocean conditions including strong currents, waves, and varying water temperatures, ensuring consistent performance year-round.",
  },
  {
    icon: Radio,
    title: "AI Vision System",
    description: "Advanced computer vision with 95% accuracy identifies plastic waste while avoiding organic materials, using deep learning models trained on oceanic conditions.",
  },
  {
    icon: Trash2,
    title: "24/7 Autonomous",
    description: "Operates continuously without human intervention, using smart algorithms to optimize collection routes and automatically return for maintenance when needed.",
  },
  {
    icon: Zap,
    title: "Zero Emissions",
    description: "Completely emission-free operation that actually removes pollutants from the ocean, making it a net-positive environmental solution from day one.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Submarine-based autonomous system engineered for continuous ocean cleanup operations. 
            BlueBot navigates underwater environments, collecting plastic waste and converting it into operational fuel for indefinite autonomous missions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up bg-gradient-to-br from-card to-secondary border-2 hover:border-primary/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
