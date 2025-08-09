import { useState } from 'react';
import { ExternalLink, Github, Database, BarChart3, Cpu, Cloud, Zap, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Système de Monitoring Environnemental IoT",
      description: "Développement d'une solution complète pour l'analyse de données massives issues de capteurs environnementaux. Création de dashboards interactifs pour le suivi de la qualité de l'air en temps réel.",
      image: "/images/htGMfn8vMZ0G.jpg", // Abstract tech background
      technologies: ["Python", "IoT Sensors", "Real-time Processing", "Dashboard", "Big Data"],
      category: "Big Data & IoT",
      icon: <Cloud className="w-6 h-6" />,
      features: [
        "Traitement de flux de données en temps réel",
        "Détection automatique de tendances",
        "Algorithmes de nettoyage de données",
        "Visualisation interactive"
      ],
      status: "En production",
      company: "United Metallurgical Company (OMK)"
    },
    {
      id: 2,
      title: "Plateforme d'Automatisation des Processus ETL",
      description: "Conception et implémentation d'une solution d'automatisation des processus ETL utilisant Talend pour optimiser les flux de données entre différents systèmes d'information.",
      image: "/images/Y9zRJxCc4fF0.jpg", // Futuristic digital background
      technologies: ["Talend", "SQL", "Oracle", "MySQL", "Process Automation"],
      category: "Automatisation",
      icon: <Settings className="w-6 h-6" />,
      features: [
        "Automatisation complète des flux ETL",
        "Intégration multi-bases de données",
        "Monitoring et alertes",
        "Optimisation des performances"
      ],
      status: "Déployé",
      company: "Projet Personnel"
    },
    {
      id: 3,
      title: "Système de Gestion de Bases de Données Relationnelles",
      description: "Conception, modélisation et optimisation de bases de données relationnelles avec focus sur l'intégrité des données et les performances. Développement de requêtes SQL complexes.",
      image: "/images/qlz9xlVuoD4j.jpg", // Vector futuristic background
      technologies: ["SQL", "MySQL", "SQL Server", "Oracle", "Database Design"],
      category: "Base de Données",
      icon: <Database className="w-6 h-6" />,
      features: [
        "Modélisation de bases de données",
        "Optimisation de requêtes SQL",
        "Tests et débogage",
        "Documentation technique"
      ],
      status: "Complété",
      company: "Université d'État de Koursk"
    },
    {
      id: 4,
      title: "Dashboard Analytics Industriel",
      description: "Création de tableaux de bord interactifs pour l'analyse de données industrielles utilisant Power BI et Tableau. Visualisation de KPIs critiques pour la prise de décision.",
      image: "/images/EDfiecX3fOTk.jpg", // High tech abstract background
      technologies: ["Power BI", "Tableau", "Excel", "Data Visualization", "KPI"],
      category: "Visualisation",
      icon: <BarChart3 className="w-6 h-6" />,
      features: [
        "Dashboards interactifs",
        "Visualisation de KPIs",
        "Rapports automatisés",
        "Analyse prédictive"
      ],
      status: "En développement",
      company: "Projet Personnel"
    },
    {
      id: 5,
      title: "Système de Contrôle Automatisé (ACS TP)",
      description: "Développement de systèmes de contrôle automatisés pour l'industrie 4.0. Intégration de capteurs IoT et algorithmes de contrôle pour l'optimisation des processus industriels.",
      image: "/images/jmsyfHTSofsr.jpg", // Futuristic digital background
      technologies: ["Control Systems", "IoT", "BPMN", "UML", "Industrial Automation"],
      category: "Automatisation Industrielle",
      icon: <Cpu className="w-6 h-6" />,
      features: [
        "Contrôle automatisé des processus",
        "Intégration IoT",
        "Optimisation en temps réel",
        "Interface de monitoring"
      ],
      status: "Prototype",
      company: "Recherche Académique"
    },
    {
      id: 6,
      title: "Solution de Monitoring Temps Réel",
      description: "Développement d'une solution de monitoring technique en temps réel pour renforcer la fiabilité des systèmes. Focus sur la Data Quality et la détection d'anomalies.",
      image: "/images/l3npxiBNgZg0.jpg", // Abstract technology background
      technologies: ["Python", "Real-time Monitoring", "Data Quality", "Anomaly Detection"],
      category: "Monitoring",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Monitoring en temps réel",
        "Détection d'anomalies",
        "Alertes automatiques",
        "Rapports de fiabilité"
      ],
      status: "En cours",
      company: "United Metallurgical Company (OMK)"
    }
  ];

  const categories = ["Tous", ...new Set(projects.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const filteredProjects = selectedCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case "En production": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Déployé": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Complété": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "En développement": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Prototype": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "En cours": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations en Data Engineering, Automatisation et Industrie 4.0
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${selectedCategory === category ? 'cyber-button' : 'tech-border'} text-sm`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="project-card group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} border`}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{project.company}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Features (shown on hover) */}
                {hoveredProject === project.id && (
                  <div className="space-y-2 animate-in slide-in-from-bottom-2 duration-300">
                    <h4 className="text-sm font-medium text-primary">Fonctionnalités clés:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 tech-border">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Détails
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Intéressé par mes projets ? Discutons de vos besoins en Data Engineering et Automatisation.
          </p>
          <Button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button"
            size="lg"
          >
            Démarrer un projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

