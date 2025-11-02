import { Card } from "@/components/ui/card";

const conversionSteps = [
  {
    step: "Step 1",
    title: "Frozen Hydrocarbons",
    description: "Plastic is essentially frozen hydrocarbons derived from crude oil",
  },
  {
    step: "Step 2",
    title: "Pyrolysis Process",
    description: "Heat plastic to 450°C in an oxygen-free environment to crack molecular chains",
  },
  {
    step: "Step 3",
    title: "Product Breakdown",
    description: "Produces liquid fuel (0.7-0.9L per kg), combustible gas, and solid char residue",
  },
  {
    step: "Step 4",
    title: "Power Generation",
    description: "Converted fuel powers BlueBot's generator for extended autonomous missions",
  },
];

const WasteToEnergy = () => {
  return (
    <section id="conversion" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How BlueBot Turns <span className="text-primary">Trash into Power</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The closed-loop waste-to-energy conversion theory that enables completely autonomous ocean cleanup operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionSteps.map((step, index) => {
              return (
                <Card 
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up bg-card border-2 hover:border-primary/50 group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6 text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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

export default WasteToEnergy;
