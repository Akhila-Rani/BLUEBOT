import { Card } from "@/components/ui/card";
import { Cpu, Route, Eye } from "lucide-react";

const AITechnology = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-primary">AI Systems</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art computer vision and path planning algorithms optimized for underwater autonomous navigation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-10 hover:shadow-xl transition-all duration-300 bg-card border-2 hover:border-primary/50 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    YOLO Object Detection
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizing YOLOv8 (You Only Look Once) neural network architecture for real-time plastic waste detection. 
                    The model is specifically trained on underwater imagery datasets with over 500,000 annotated images of 
                    marine debris, achieving 95% precision in distinguishing plastic waste from organic materials.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Detection Speed:</span>
                      <span className="font-semibold">60 FPS</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Model Size:</span>
                      <span className="font-semibold">48 MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accuracy:</span>
                      <span className="font-semibold">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-10 hover:shadow-xl transition-all duration-300 bg-card border-2 hover:border-primary/50 group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Route className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    Path Planning Algorithm
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Implements A* pathfinding enhanced with dynamic obstacle avoidance and ocean current prediction. 
                    The algorithm continuously optimizes collection routes based on real-time waste density mapping, 
                    current patterns, and energy consumption models to maximize cleanup efficiency per mission.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Path Optimization:</span>
                      <span className="font-semibold">Real-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Coverage Area:</span>
                      <span className="font-semibold">10 km²/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Efficiency Gain:</span>
                      <span className="font-semibold">+40%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-10 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 rounded-xl bg-white/10">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Edge Deployment Architecture</h3>
                <p className="leading-relaxed mb-4 opacity-90">
                  All AI processing runs on-board using NVIDIA Jetson Orin Nano edge computing platform, 
                  eliminating latency from cloud communication and enabling true autonomous operation even 
                  in areas with limited connectivity. The system processes 8MP camera feeds in real-time 
                  while consuming only 15W of power, crucial for extended autonomous missions.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-1">100ms</div>
                    <div className="text-sm opacity-80">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">15W</div>
                    <div className="text-sm opacity-80">Power Draw</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">100%</div>
                    <div className="text-sm opacity-80">Offline Capable</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AITechnology;
