import React, { useEffect, useRef, useState } from 'react';
import { User, Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const leadership: TeamMember[] = [
    {
      name: 'Hanumant Shinde',
      position: 'Director',
      image: '👨‍💼',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'vedant_en@rediffmail.com'
      }
    },
    {
      name: 'Operations Manager',
      position: 'Manager',
      image: '👨‍💼'
    },
    {
      name: 'Quality Supervisor',
      position: 'Supervisor',
      image: '👨‍💼'
    }
  ];

  const teamMembers: TeamMember[] = [
    { name: 'Production Lead', position: 'Lead' },
    { name: 'Quality Inspector', position: 'Inspector' },
    { name: 'Machine Operator', position: 'Operator' },
    { name: 'Design Engineer', position: 'Engineer' },
    { name: 'Process Engineer', position: 'Engineer' },
    { name: 'Maintenance Head', position: 'Head' },
    { name: 'Safety Officer', position: 'Officer' },
    { name: 'Logistics Manager', position: 'Manager' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-gradient-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated professionals committed to excellence and innovation
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-accent">Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <div
                key={index}
                data-index={index}
                className={`team-card scroll-fade-in ${
                  visibleItems.has(index) ? 'visible' : ''
                } group`}
              >
                <div className="card-hover bg-card p-6 rounded-xl text-center relative overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  {/* Avatar */}
                  <div className="mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform">
                      {member.image || '👤'}
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-muted-foreground mb-4">{member.position}</p>

                  {/* Social Links */}
                  {member.social && (
                    <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.email && (
                        <a href={`mailto:${member.social.email}`} className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-accent">Team Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-index={index + 10}
                className={`team-card scroll-fade-in ${
                  visibleItems.has(index + 10) ? 'visible' : ''
                } group`}
              >
                <div className="card-hover bg-card p-6 rounded-xl text-center relative overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  {/* Avatar */}
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <User className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-muted-foreground">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;