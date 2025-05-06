
import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      initials: 'AJ',
      description: 'With over 15 years of experience in software development, Alex leads our strategic vision and technical direction.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      initials: 'SC',
      description: 'Sarah brings deep expertise in cloud architecture and ensures our engineering teams deliver exceptional solutions.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      initials: 'MR',
      description: 'Michael specializes in full-stack development and mentors our team of talented engineers.'
    },
    {
      name: 'Priya Patel',
      role: 'UX/UI Designer',
      initials: 'PP',
      description: 'Priya crafts beautiful, intuitive interfaces that delight users while solving complex usability challenges.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-300">
            We're a group of passionate technologists dedicated to creating innovative software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in animation-delay-600">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
              role={member.role} 
              initials={member.initials}
              description={member.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
