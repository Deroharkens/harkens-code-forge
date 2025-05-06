
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 bg-transparent backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-harkens-accent" />
          <span className="text-xl font-bold bg-gradient-cyan text-gradient">Harkens Tech</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-harkens-accent transition-colors">Services</a>
          <a href="#technologies" className="text-foreground hover:text-harkens-accent transition-colors">Technologies</a>
          <a href="#about" className="text-foreground hover:text-harkens-accent transition-colors">About Us</a>
          <a href="#contact" className="text-foreground hover:text-harkens-accent transition-colors">Contact</a>
        </div>
        
        <Button className="bg-gradient-cyan hover:opacity-90 transition-opacity">Get in Touch</Button>
      </div>
    </nav>
  );
};

export default Navbar;
