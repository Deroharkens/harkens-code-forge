
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gradient-blue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Code className="h-5 w-5 text-harkens-accent" />
            <span className="text-lg font-semibold bg-gradient-cyan text-gradient">Harkens Tech</span>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#services" className="text-foreground hover:text-harkens-accent transition-colors text-sm">Services</a>
            <a href="#technologies" className="text-foreground hover:text-harkens-accent transition-colors text-sm">Technologies</a>
            <a href="#about" className="text-foreground hover:text-harkens-accent transition-colors text-sm">About Us</a>
            <a href="#contact" className="text-foreground hover:text-harkens-accent transition-colors text-sm">Contact</a>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/50" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <div>
            &copy; {currentYear} Harkens Tech. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-harkens-accent transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-harkens-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
