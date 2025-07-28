import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="tech-gradient bg-clip-text text-transparent">
                Sahana Kommalapati
              </span>
            </h3>
            <p className="text-muted-foreground">
              Data Scientist passionate about transforming data into meaningful impact 
              using intelligent systems and cutting-edge AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#projects', label: 'Projects' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
            <div className="space-y-3">
              <a
                href="mailto:sahanako2000@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail size={16} />
                <span>sahanako2000@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://linkedin.com/in/sahanak2000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/sahanakommalapati1009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sahana Kommalapati. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>and lots of data</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;