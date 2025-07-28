import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import sahanaProfile from '@/assets/sahana-profile.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Transforming data into meaningful impact using intelligent systems.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hey, I'm{' '}
                <span className="tech-gradient bg-clip-text text-transparent glow-text">
                  Sahana
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Data Scientist | ML & GenAI Enthusiast
              </h2>
              <div className="h-16 flex items-center">
                <p className="text-lg lg:text-xl text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="btn-tech"
              >
                View My Work
              </button>
              <button
                onClick={scrollToContact}
                className="btn-tech-outline"
              >
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="mailto:sahanako2000@gmail.com"
                className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/sahanak2000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/sahanakommalapati1009"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 tech-gradient rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <img
                src={sahanaProfile}
                alt="Sahana Kommalapati"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-2 border-primary/20 floating"
              />
              {/* Floating tech elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-lg backdrop-blur-sm floating" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/20 rounded-full backdrop-blur-sm floating" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-primary/30 rounded-full backdrop-blur-sm floating" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;