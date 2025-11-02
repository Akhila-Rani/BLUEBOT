import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, Award } from "lucide-react";

const visionValues = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Focused on measurable impact in ocean cleanup and marine conservation",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering self-sustaining robotics that transform waste into energy",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working with marine biologists, engineers, and environmental scientists",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to the highest standards in environmental technology",
  },
];

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Vision</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-10 bg-gradient-to-br from-card to-secondary border-2 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">The Future We're Building</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We envision a future where our oceans are free from plastic pollution, where technology works 
                in harmony with nature to restore marine ecosystems. BlueBot represents a paradigm shift in 
                ocean cleanup: instead of relying on human labor and fossil fuels, we've created an autonomous 
                system that turns the problem into the solution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By converting collected plastic waste into energy, BlueBot can operate indefinitely, scaling 
                the cleanup effort without increasing carbon emissions. This closed-loop system demonstrates 
                that environmental technology can be both effective and sustainable.
              </p>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-card to-secondary border-2 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">The Technology Behind It</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                BlueBot is equipped with cutting-edge AI-powered sensors that can identify and track plastic 
                waste with 95% accuracy. Our proprietary neural network has been trained on millions of images 
                to distinguish between plastic debris and marine life, ensuring safe and targeted collection.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The on-board mini-pyrolysis reactor represents a breakthrough in mobile waste-to-energy conversion. 
                Operating at 450°C in an oxygen-free chamber, it safely transforms plastic hydrocarbons into usable 
                fuel, generating enough energy to extend each mission by hours without returning to shore.
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 bg-card border-2 hover:border-primary/50 group text-center"
                >
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
