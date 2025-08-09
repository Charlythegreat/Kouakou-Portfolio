import { useState, useEffect, useRef } from 'react';
import { Download, MapPin, Languages, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import cvUrl from '@/assets/CharlainkouakouCVGeneral.pdf';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { category: 'Bases de Données', skills: ['SQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB'], level: 90 },
    { category: 'Analyse de Données', skills: ['Python', 'Data Cleaning', 'Real-time Processing'], level: 85 },
    { category: 'Visualisation', skills: ['Excel', 'Power BI', 'Tableau'], level: 80 },
    { category: 'Big Data & IoT', skills: ['IoT Sensors', 'Time Series Data'], level: 75 },
    { category: 'Automatisation', skills: ['Control Systems', 'Process Automation', 'UML', 'BPMN'], level: 85 }
  ];

  const languages = [
    { name: 'Français', level: 'Langue maternelle', flag: '🇫🇷' },
    { name: 'Anglais', level: 'Avancé', flag: '🇬🇧' },
    { name: 'Russe', level: 'Avancé', flag: '🇷🇺' }
  ];

  const softSkills = [
    'Autonomie et proactivité',
    'Adaptabilité et apprentissage rapide',
    'Capacité d\'analyse et de synthèse',
    'Communication claire et efficace',
    'Rigueur et attention aux détails'
  ];

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

   const downloadCV = () => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Charlain_Kouakou_CV.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour l'innovation technologique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio and Info */}
          <div className="space-y-8">
            {/* Biography */}
            <Card className="tech-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Profil Professionnel
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Passionné par l'impact des données, j'ai développé une expertise solide en conception 
                  et administration de bases de données (Oracle, SQL Server, MySQL) ainsi qu'en 
                  automatisation des processus ETL via Talend.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mon expertise inclut la gestion de données massives et temps réel avec SQL (avancé) 
                  et Python (intermédiaire), complétée par des compétences en modélisation NoSQL 
                  (MongoDB) et visualisation (Tableau).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Doté d'un esprit analytique et d'une grande adaptabilité, j'excelle dans le 
                  monitoring technique et la collaboration d'équipe pour renforcer la fiabilité 
                  des systèmes.
                </p>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="tech-border">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">Localisation</span>
                  </div>
                  <p className="text-muted-foreground">Abidjan, Côte d'Ivoire</p>
                </CardContent>
              </Card>

              <Card className="tech-border">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <Languages className="w-4 h-4 mr-2 text-primary" />
                    <span className="font-medium">Langues</span>
                  </div>
                  <div className="space-y-1">
                    {languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="flex items-center">
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </span>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Soft Skills */}
            <Card className="tech-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Qualités Personnelles</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CV Download */}
            <div className="text-center">
              <Button onClick={downloadCV} className="cyber-button" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Télécharger mon CV complet
              </Button>
            </div>
          </div>

          {/* Right Column - Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Compétences Techniques</h3>
            {skills.map((skillGroup, index) => (
              <Card key={index} className="tech-border">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-medium">{skillGroup.category}</h4>
                    <span className="text-sm text-primary font-medium">{skillGroup.level}%</span>
                  </div>
                  
                  {/* Skill Bar */}
                  <div className="skill-bar mb-4">
                    <div 
                      className="skill-progress"
                      style={{
                        width: isVisible ? `${skillGroup.level}%` : '0%'
                      }}
                    ></div>
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

