import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", sectionId: "about" },
  { label: "Skills", sectionId: "skills" },
  { label: "Projects", sectionId: "projects" },
  { label: "Contact", sectionId: "contact" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">
          RR
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.sectionId}
              onClick={() => scrollToSection(link.sectionId)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-2 mx-6 rounded-xl p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => {
                  scrollToSection(link.sectionId);
                  setIsMobileMenuOpen(false);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg font-medium bg-transparent border-none cursor-pointer text-left"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }} 
              className="bg-primary hover:bg-primary/90 mt-2"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
