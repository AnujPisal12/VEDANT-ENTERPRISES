import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Linkedin, Twitter, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

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

const Team: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const leadership: TeamMember[] = [
    {
      name: 'Rajesh Kumar Vedant',
      position: 'Managing Director',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajesh@vedantenterprises.com'
      }
    },
    {
      name: 'Priya Vedant',
      position: 'Operations Manager',
      social: {
        linkedin: '#',
        email: 'priya@vedantenterprises.com'
      }
    },
    {
      name: 'Amit Sharma',
      position: 'Technical Supervisor',
      social: {
        linkedin: '#',
        email: 'amit@vedantenterprises.com'
      }
    }
  ];

  const teamMembers: TeamMember[] = [
    { name: 'Suresh Patil', position: 'Quality Control Specialist' },
    { name: 'Anita Desai', position: 'Production Coordinator' },
    { name: 'Vikram Singh', position: 'Machine Operator' },
    { name: 'Meera Joshi', position: 'Quality Assurance' },
    { name: 'Deepak Kumar', position: 'Maintenance Engineer' },
    { name: 'Sunita Rao', position: 'Administrative Assistant' },
    { name: 'Ravi Gupta', position: 'Safety Officer' },
    { name: 'Kavita Bhatt', position: 'Inventory Manager' }
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
    <div className="min-h-screen bg-background">
      {/* Professional Header */}
      <div className="glass-card border-b border-border/20 shadow-glass">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/')}
              className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary hover:text-accent transition-all duration-300 hover:scale-110 shadow-soft hover:shadow-medium"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-4xl font-bold text-gradient-professional">
                Our Professional Team
              </h1>
              <p className="text-muted-foreground text-lg mt-2">
                Meet the experts behind Vedant Enterprises' success
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Leadership Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Leadership Team</h2>
            <div className="w-24 h-1 bg-gradient-professional mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                data-index={index}
                className={`team-card glass-card p-8 rounded-2xl text-center hover:shadow-accent transition-all duration-500 group ${
                  visibleItems.has(index) ? 'scroll-fade-in visible' : 'scroll-fade-in'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Professional Avatar */}
                <div className="relative mx-auto mb-6 w-32 h-32">
                  <div className="w-32 h-32 bg-gradient-professional rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-accent">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-background" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground font-medium mb-6">
                  {member.position}
                </p>

                {/* Professional Social Links */}
                {member.social && (
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="p-3 rounded-xl bg-primary/10 hover:bg-accent text-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-soft"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="p-3 rounded-xl bg-primary/10 hover:bg-accent text-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-soft"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-3 rounded-xl bg-primary/10 hover:bg-accent text-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-soft"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Team Members Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Team Members</h2>
            <div className="w-24 h-1 bg-gradient-professional mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-index={index + leadership.length}
                className={`team-card glass-card p-6 rounded-2xl text-center hover:shadow-accent transition-all duration-500 group ${
                  visibleItems.has(index + leadership.length) ? 'scroll-fade-in visible' : 'scroll-fade-in'
                }`}
                style={{ animationDelay: `${(index + leadership.length) * 0.1}s` }}
              >
                {/* Professional Avatar */}
                <div className="relative mx-auto mb-4 w-20 h-20">
                  <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-medium">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Team;