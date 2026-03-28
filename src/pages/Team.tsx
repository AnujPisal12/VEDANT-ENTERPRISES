import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Team: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="glass-card border-b border-border/20 shadow-glass">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => navigate('/')}
              className="p-3 rounded-xl bg-primary/10 text-primary shadow-soft"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-4xl font-bold text-gradient-professional">Our Team</h1>
              <p className="text-muted-foreground text-lg mt-2">
                The people behind Vedant Enterprises
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 py-16 flex justify-center">
        <div className="bg-card rounded-2xl shadow-medium border border-border p-10 text-center max-w-sm w-full">
          <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">👨‍💼</span>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-1">Harshal Hanmantrao Shinde</h3>
          <p className="text-accent font-semibold text-lg mb-6">Managing Director</p>
          <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
          <a
            href="mailto:vedant_en@rediffmail.com"
            className="inline-flex items-center space-x-2 text-muted-foreground text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>vedant_en@rediffmail.com</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Team;
