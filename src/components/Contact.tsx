
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible!",
      duration: 5000,
    });
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Ready to bring your software vision to life? Let's start the conversation.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border border-harkens-accent/20 animate-fade-in animation-delay-600">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={5} required />
                </div>
                
                <div className="text-right">
                  <Button type="submit" className="bg-gradient-cyan hover:opacity-90 transition-opacity">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in animation-delay-900">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@harkenstech.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
