
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  image?: string;
  initials: string;
  description: string;
}

const TeamMember = ({ name, role, image, initials, description }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <Avatar className="h-24 w-24 mb-4 border-2 border-harkens-accent shadow-lg">
        {image ? (
          <AvatarImage src={image} alt={name} />
        ) : (
          <AvatarFallback className="bg-gradient-blue text-white text-xl">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-harkens-accent mb-2 font-medium">{role}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default TeamMember;
