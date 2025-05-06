
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Computer, Database, ServerCog, Settings, Network } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: string;
}

const ServiceCard = ({ title, description, icon: Icon, delay }: ServiceCardProps) => {
  return (
    <Card className={`border border-border bg-background/50 backdrop-blur-sm hover:border-harkens-accent/50 transition-all duration-300 animate-fade-in ${delay}`}>
      <CardHeader className="pb-2">
        <div className="bg-harkens-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-harkens-accent" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to address your unique business challenges and requirements.',
      icon: Computer,
      delay: '',
    },
    {
      title: 'Web Application Development',
      description: 'Robust, responsive web applications built with modern frameworks and best practices.',
      icon: ServerCog,
      delay: 'animation-delay-300',
    },
    {
      title: 'Database Design & Optimization',
      description: 'Efficient database architectures that ensure data integrity, security, and performance.',
      icon: Database,
      delay: 'animation-delay-600',
    },
    {
      title: 'Network Infrastructure & Security',
      description: 'Secure, reliable, and scalable network solutions to support your business operations and growth.',
      icon: Network,
      delay: 'animation-delay-900',
    },
    {
      title: 'DevOps & Cloud Solutions',
      description: 'Streamlined deployment pipelines and cloud infrastructure to maximize operational efficiency.',
      icon: Settings,
      delay: 'animation-delay-1200',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            We deliver comprehensive software solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
