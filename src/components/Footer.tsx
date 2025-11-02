import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Bot } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <Bot className="w-8 h-8 text-primary" />
                <p className="text-2xl font-bold text-primary">BlueBot</p>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Next-generation autonomous ocean cleanup technology powered by AI and sustainable energy conversion.
              </p>
            </div>
            
            {/* Technology Section */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4">Technology</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Vision System</li>
                <li>Waste-to-Energy Conversion</li>
                <li>Autonomous Navigation</li>
                <li>Real-time Monitoring</li>
              </ul>
            </div>
            
            {/* Connect Section */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex gap-3 justify-center md:justify-start mb-4">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 transition-colors">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Join us in making our oceans cleaner
              </p>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 BlueBot. All rights reserved. | Hackathon Expo Project
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
