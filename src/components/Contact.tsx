import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "sahanako2000@gmail.com",
      link: "mailto:sahanako2000@gmail.com"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/sahanak2000",
      link: "https://linkedin.com/in/sahanak2000"
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/sahanakommalapati1009",
      link: "https://github.com/sahanakommalapati1009"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Fremont, California",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="tech-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 tech-gradient mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Let's collaborate on your next data science project or discuss how I can help 
            transform your business with AI and machine learning solutions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborations, or simply 
                chat about the latest trends in data science and AI. Feel free to reach out 
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="card-tech flex items-center space-x-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {contact.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;