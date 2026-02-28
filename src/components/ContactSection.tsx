import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, FileText, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Demo submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Gat No. 93, Sonawane Wasti, Bhalekar Chowk, Jyotiba Nagar, Talawade, Pune – 412114',
      action: 'Get Directions',
      link: 'https://maps.app.goo.gl/n6byvzdM2e4CsWRf8'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '8975-034-567',
      action: 'Call Now',
      link: 'tel:+918975034567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'vedant_en@rediffmail.com',
      action: 'Send Email',
      link: 'mailto:vedant_en@rediffmail.com'
    },
    {
      icon: FileText,
      title: 'GSTIN',
      details: '27BAXPS7899K1Z3',
      action: 'View Details',
      link: undefined
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your plastic molding needs? Get in touch with our team
          </p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl font-semibold mb-8 text-accent">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl shadow-soft border border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {info.details}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target={info.icon === MapPin ? "_blank" : undefined}
                          rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                          className="text-primary font-medium text-sm inline-flex items-center space-x-1"
                        >
                          <span>{info.action}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground font-medium text-sm inline-flex items-center space-x-1">
                          <span>{info.action}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;