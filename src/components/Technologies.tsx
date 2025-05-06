
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Frontend',
      techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
      delay: '',
    },
    {
      title: 'Backend',
      techs: ['Node.js', 'Python', 'Java', 'C#/.NET', 'Go', 'Ruby on Rails'],
      delay: 'animation-delay-300',
    },
    {
      title: 'Database',
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB'],
      delay: 'animation-delay-600',
    },
    {
      title: 'DevOps & Cloud',
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
      delay: 'animation-delay-900',
    },
  ];
  
  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Our Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {techCategories.map((category, index) => (
            <div key={index} className={`animate-fade-in ${category.delay}`}>
              <h3 className="text-xl font-semibold mb-6 text-gradient">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, techIndex) => (
                  <Badge key={techIndex} className="bg-harkens-light text-foreground hover:bg-harkens-accent hover:text-white">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
