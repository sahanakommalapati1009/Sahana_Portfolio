import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Sparkles, Code2, Database } from 'lucide-react';
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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-darker-surface to-background"></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-tech-purple/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced Particle System */}
      <div className="particles">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              width: Math.random() > 0.5 ? '3px' : '2px',
              height: Math.random() > 0.5 ? '3px' : '2px',
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 border border-primary/30 rotate-45 floating" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 border border-accent/30 floating" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-tech-purple/20 rounded-full floating" style={{ animationDelay: '3s', animationDuration: '6s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Hey, I'm</span>
                <span className="tech-gradient bg-clip-text text-transparent glow-text inline-block transform hover:scale-105 transition-transform duration-500">
                  Sahana
                </span>
              </h1>
              
              {/* Enhanced subtitle with icons */}
              <div className="flex flex-wrap items-center gap-4 text-2xl lg:text-3xl font-semibold">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Database className="w-8 h-8 text-primary" />
                  <span>Data Scientist</span>
                </div>
                <span className="text-primary">|</span>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Code2 className="w-8 h-8 text-accent" />
                  <span>ML & GenAI Enthusiast</span>
                </div>
              </div>
              
              <div className="h-20 flex items-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl backdrop-blur-sm"></div>
                <p className="text-lg lg:text-xl text-muted-foreground relative z-10 p-4">
                  {displayText}
                  <span className="animate-pulse text-primary">|</span>
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider overflow-hidden bg-gradient-to-r from-tech-blue to-tech-purple text-background hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 rounded-xl font-semibold text-sm uppercase tracking-wider border-2 border-primary text-primary bg-primary/5 backdrop-blur-sm hover:bg-primary hover:text-background transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </span>
              </button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Mail, href: "mailto:sahanako2000@gmail.com", label: "Email" },
                { icon: Linkedin, href: "https://linkedin.com/in/sahanak2000", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/sahanakommalapati1009", label: "GitHub" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="group relative p-4 rounded-xl bg-secondary/30 border border-primary/10 backdrop-blur-sm hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  aria-label={label}
                >
                  <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 tech-gradient rounded-3xl blur-3xl opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-blue/20 to-tech-purple/20 rounded-3xl blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Glass morphism frame */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl p-1 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 backdrop-blur-sm">
                <img
                  src={sahanaProfile}
                  alt="Sahana Kommalapati"
                  className="w-full h-full object-cover rounded-3xl border border-primary/20 floating group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Enhanced floating tech elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl backdrop-blur-sm floating border border-primary/20 flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-br from-accent/30 to-tech-purple/30 rounded-xl backdrop-blur-sm floating border border-accent/20 flex items-center justify-center" style={{ animationDelay: '2s' }}>
                <Database className="w-5 h-5 text-accent" />
              </div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-br from-tech-blue/30 to-primary/30 rounded-full backdrop-blur-sm floating border border-primary/20 flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-primary/40"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-primary/40"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-primary/40"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-primary/40"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Scroll Down</span>
          <div className="p-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <ChevronDown size={24} className="text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;