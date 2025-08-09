import { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Mail, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = useMemo(() => [
    'Ingénieur Data & Analytics',
    'Spécialiste Automatisation',
    'Expert Big Data & IoT',
    'Développeur de Solutions'
  ], []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CharlainkouakouCVGeneral.pdf';
    link.download = 'Charlain_Kouakou_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 hexagon-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 border border-accent/30 rounded-lg floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-neon-green/30 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 pulse-glow">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-4xl font-bold gradient-text">CK</span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Charlain <span className="gradient-text">Kouakou</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Passionné par l'impact des données et l'automatisation industrielle, 
            je conçois des solutions innovantes pour l'Industrie 4.0. 
            Expert en Big Data, IoT et systèmes de contrôle automatisés.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={downloadCV}
              className="cyber-button group"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Télécharger mon CV
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="tech-border group"
              size="lg"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Me contacter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/charlain-kouakou-a16369150"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all hover:scale-110 glow-effect"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:tresorcharlain827@outlook.fr"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all hover:scale-110 glow-effect"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all hover:scale-110 glow-effect"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

