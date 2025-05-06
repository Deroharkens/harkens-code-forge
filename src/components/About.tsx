
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in every line of code, every design decision, and every client interaction.',
      delay: '',
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methodologies to stay at the cutting edge of software development.',
      delay: 'animation-delay-300',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, treating their challenges as our own and their success as our mission.',
      delay: 'animation-delay-600',
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and a commitment to ethical business practices.',
      delay: 'animation-delay-900',
    },
  ];
  
  return (
    <section id="about" className="py-20 code-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">About Harkens Tech</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            Founded by passionate software engineers, Harkens Tech is driven by a simple philosophy: exceptional code creates exceptional experiences.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className={`bg-harkens-light/10 border-harkens-accent/20 backdrop-blur-md hover:border-harkens-accent/50 transition-all animate-fade-in ${value.delay}`}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 text-gradient">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-harkens-light/10 border border-harkens-accent/20 rounded-lg p-6 backdrop-blur-md animate-fade-in animation-delay-900">
            <p className="text-lg italic text-muted-foreground">
              "At Harkens Tech, we don't just write code – we craft digital experiences that empower businesses to thrive in the modern world."
            </p>
            <p className="mt-4 text-right text-harkens-accent">– The Harkens Tech Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
