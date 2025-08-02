import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Charlain Kouakou
            </button>
            <p className="text-muted-foreground">
              Ingénieur Data & Analytics passionné par l'automatisation industrielle 
              et l'innovation technologique.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Accueil', id: 'home' },
                { label: 'À propos', id: 'about' },
                { label: 'Projets', id: 'projects' },
                { label: 'Expérience', id: 'experience' },
                { label: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 tresorcharlain827@outlook.fr</p>
              <p>📱 +225 07 07 02 2503</p>
              <p>📍 Abidjan, Côte d'Ivoire</p>
              <a
                href="https://www.linkedin.com/in/charlain-kouakou-a16369150"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Charlain Kouakou. Tous droits réservés.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>et</span>
              <Code className="w-4 h-4 text-primary" />
              <span>+</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

