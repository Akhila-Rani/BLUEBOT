import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DemoVideo from "@/components/DemoVideo";
import Features from "@/components/Features";
import WasteToEnergy from "@/components/WasteToEnergy";
import Technology from "@/components/Technology";
import AITechnology from "@/components/AITechnology";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <DemoVideo />
      <div id="features">
        <Features />
      </div>
      <WasteToEnergy />
      <Technology />
      <AITechnology />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
