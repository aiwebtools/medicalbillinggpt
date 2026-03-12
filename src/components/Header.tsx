
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // For anchor links, close the menu and prevent default
    if (href.startsWith('#')) {
      e.preventDefault();
      closeMobileMenu();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links, just close the menu
      closeMobileMenu();
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-3 
      ${scrolled ? 'bg-cyberpunk-darker/90 backdrop-blur-md border-b border-cyberpunk-blue/20' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <div className="mr-3 md:mr-4 flex-shrink-0">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5Z" stroke="url(#paint0_linear)" strokeWidth="2"/>
              <path d="M15 15L25 25" stroke="url(#paint1_linear)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M25 15L15 25" stroke="url(#paint2_linear)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="5" y1="20" x2="35" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#33C3F0"/>
                  <stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="15" y1="20" x2="25" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#33C3F0"/>
                  <stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="15" y1="20" x2="25" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#33C3F0"/>
                  <stop offset="1" stopColor="#8B5CF6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-bold text-white">Medical Billing & Coding GPT</h1>
            <p className="text-xs text-white/70">Presented by AiWebTools.Ai</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt" 
                  className="text-white hover:text-cyberpunk-blue px-4 py-2 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Medical Billing & Coding GPT
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
                  className="text-white hover:text-cyberpunk-blue px-4 py-2 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Insurance Claims GPT
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#faq" 
                  className="text-white hover:text-cyberpunk-blue px-4 py-2 transition-colors"
                  onClick={(e) => handleNavClick(e, '#faq')}
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#disclaimer" 
                  className="text-white hover:text-cyberpunk-blue px-4 py-2 transition-colors"
                  onClick={(e) => handleNavClick(e, '#disclaimer')}
                >
                  Disclaimer
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  asChild
                  className="cyberpunk-button bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple hover:opacity-90"
                >
                  <a 
                    href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    More AI Tools
                  </a>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm" className="p-1 text-white focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2 mt-2 bg-cyberpunk-darker/95 backdrop-blur-lg border border-cyberpunk-blue/30">
            <DropdownMenuItem asChild>
              <a 
                href="https://chatgpt.com/g/g-67d9f1b2c9b881918c0fac1ca6ea38ea-medical-billing-coding-gpt" 
                className="text-white hover:text-cyberpunk-blue hover:bg-white/5 cursor-pointer py-3"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Medical Billing & Coding GPT
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href="https://insuranceclaimsgpt.lovable.app/?via=aiwebtools" 
                className="text-white hover:text-cyberpunk-blue hover:bg-white/5 cursor-pointer py-3"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Insurance Claims GPT
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href="#faq" 
                className="text-white hover:text-cyberpunk-blue hover:bg-white/5 cursor-pointer py-3"
                onClick={(e) => handleNavClick(e, '#faq')}
              >
                FAQ
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href="#disclaimer" 
                className="text-white hover:text-cyberpunk-blue hover:bg-white/5 cursor-pointer py-3"
                onClick={(e) => handleNavClick(e, '#disclaimer')}
              >
                Disclaimer
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href="https://www.aiwebtools.ai" 
                className="text-white bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple hover:opacity-90 py-3 rounded mt-2"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                More AI Tools
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
