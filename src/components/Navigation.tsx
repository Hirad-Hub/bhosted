import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/bhosted-logo.svg" alt="bHosted" className="w-[200px]" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#bhosted" className="text-foreground hover:text-primary transition-colors">
              bHosted
            </a>
            <a href="#domeinen" className="text-foreground hover:text-primary transition-colors">
              Domeinen
            </a>
            <a href="#webhosting" className="text-foreground hover:text-primary transition-colors">
              Webhosting
            </a>
            <a href="#sitebuilder" className="text-foreground hover:text-primary transition-colors">
              Sitebuilder
            </a>
            <a href="#vps" className="text-foreground hover:text-primary transition-colors">
              VPS
            </a>
            <Button variant="default" size="sm">
              Controleer
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#bhosted"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              bHosted
            </a>
            <a
              href="#domeinen"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Domeinen
            </a>
            <a
              href="#webhosting"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Webhosting
            </a>
            <a
              href="#sitebuilder"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Sitebuilder
            </a>
            <a
              href="#vps"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              VPS
            </a>
            <Button variant="default" className="w-full">
              Controleer
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
