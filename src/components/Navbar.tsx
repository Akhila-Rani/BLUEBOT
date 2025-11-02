import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary group-hover:scale-110 transition-transform"
  >
    <path
      d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6Z"
      fill="currentColor"
    />
    <path
      d="M7 15.2L12 18L17 15.2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 font-bold text-lg group"
          >
            <NavLogo />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              BlueBot
            </span>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Features
            </button>
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('conversion')}
                className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-primary/10 flex items-center gap-1"
              >
                Technology <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Vision
            </button>
            <button 
              onClick={() => scrollToSection('demo-video')}
              className="text-sm font-medium hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Watch Demo
            </button>
            <button 
              onClick={() => navigate('/simulation')}
              className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-4 py-2 rounded-md"
            >
              Live Simulation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
