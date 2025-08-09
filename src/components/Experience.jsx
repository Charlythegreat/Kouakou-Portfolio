import { useState } from 'react';
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      id: 1,
      title: "Junior Analytics Engineer",
      company: "United Metallurgical Company (OMK)",
      location: "Moscou, Russie",
      period: "Décembre 2023 - Février 2025",
      type: "CDI",
      description: "Spécialiste en analyse de données massives et monitoring environnemental pour l'industrie métallurgique.",
      missions: [
        "Analyse de données massives issues de capteurs environnementaux pour le suivi de la qualité de l'air",
        "Développement d'algorithmes de nettoyage de données et création de dashboards interactifs",
        "Traitement de flux de données en temps réel et détection de tendances liées à la pollution de l'air",
        "Contribution à l'approfondissement des compétences en Big Data industriel et IoT environnemental",
        "Focus sur la Data Quality et le monitoring temps réel"
      ],
      technologies: ["Python", "Big Data", "IoT", "Real-time Processing", "Environmental Monitoring"],
      achievements: [
        "Amélioration de 40% de la précision des prédictions de qualité de l'air",
        "Réduction de 60% du temps de traitement des données",
        "Mise en place d'un système d'alertes automatiques"
      ]
    },
    {
      id: 2,
      title: "Développeur de base de données (Stage)",
      company: "Université d'État de Koursk",
      location: "Koursk, Russie",
      period: "Juin - Août 2021",
      type: "Stage",
      description: "Stage de développement et administration de bases de données relationnelles.",
      missions: [
        "Conception et modélisation de bases de données relationnelles",
        "Écriture et optimisation de requêtes SQL complexes",
        "Maintenance et gestion quotidienne des données, assurant leur intégrité et disponibilité",
        "Réalisation de tests et débogage pour garantir la fiabilité des systèmes de bases de données",
        "Documentation technique et reporting sur l'état des bases de données"
      ],
      technologies: ["SQL", "MySQL", "Database Design", "Data Modeling", "Testing"],
      achievements: [
        "Optimisation de 30% des performances des requêtes",
        "Création d'une documentation technique complète",
        "Zéro incident de perte de données pendant le stage"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Diplôme de Master",
      field: "Gestion dans les systèmes techniques : Numérisation et automatisation des processus technologiques",
      school: "Université Nationale des Sciences et de la technologie MISIS",
      location: "Moscou, Russie",
      period: "2023 - 2025",
      status: "Complété",
      description: "Formation avancée en automatisation industrielle et transformation numérique des processus technologiques.",
      specializations: [
        "Automatisation des processus industriels",
        "Systèmes de contrôle numérique",
        "Industrie 4.0 et IoT industriel",
        "Optimisation des processus technologiques"
      ]
    },
    {
      id: 2,
      degree: "Master 1",
      field: "Mathématiques appliquées et informatiques : Modélisation Mathématique et Informatique",
      school: "Université d'État de Koursk",
      location: "Koursk, Russie",
      period: "2022 - 2023",
      status: "Complété",
      description: "Formation en modélisation mathématique et développement informatique.",
      specializations: [
        "Modélisation mathématique",
        "Algorithmes et structures de données",
        "Analyse numérique",
        "Programmation avancée"
      ]
    },
    {
      id: 3,
      degree: "Diplôme de Bachelor",
      field: "Support Mathématique et Administration des Systèmes d'Information : Conception de systèmes d'information et de bases de données",
      school: "Université d'État de Koursk",
      location: "Koursk, Russie",
      period: "2018 - 2022",
      status: "Complété",
      description: "Formation fondamentale en systèmes d'information et gestion de bases de données.",
      specializations: [
        "Conception de systèmes d'information",
        "Administration de bases de données",
        "Développement d'applications",
        "Architecture des systèmes"
      ]
    },
    {
      id: 4,
      degree: "Certificat de Formation pré-universitaire",
      field: "Sciences de l'ingénieur et d'apprentissage de la langue Russe",
      school: "Université Polytechnique de Tomsk",
      location: "Tomsk, Russie",
      period: "2017 - 2018",
      status: "Complété",
      description: "Formation préparatoire en sciences de l'ingénieur et apprentissage linguistique.",
      specializations: [
        "Sciences de l'ingénieur",
        "Langue russe académique",
        "Mathématiques appliquées",
        "Physique technique"
      ]
    },
    {
      id: 5,
      degree: "Diplôme de Bachelier de Technicien (F7)",
      field: "Formation technique",
      school: "Lycée technique de Yopougon",
      location: "Abidjan, Côte d'Ivoire",
      period: "2013 - 2016",
      status: "Complété",
      description: "Formation technique en sciences Biochimique.",
      specializations: [
        "Sciences techniques",
        "Physique",
        "sciences Biologique",
        "Chimie & Biochimie",
        "Informatique de base"
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Complété": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "CDI": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Stage": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expérience & <span className="gradient-text">Formation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours professionnel et académique dans le domaine de la Data Engineering et de l'Automatisation
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Expérience Professionnelle
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Formation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={exp.id} className="tech-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(exp.type)} border w-fit`}>
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Missions */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Missions principales
                    </h4>
                    <ul className="space-y-2">
                      {exp.missions.map((mission, missionIndex) => (
                        <li key={missionIndex} className="flex items-start timeline-item">
                          <span className="text-sm text-muted-foreground leading-relaxed pl-6">
                            {mission}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-3">Technologies utilisées</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-medium mb-3 text-primary">Réalisations clés</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            {education.map((edu, index) => (
              <Card key={edu.id} className="tech-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <p className="text-primary font-medium mb-2">{edu.field}</p>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="w-4 h-4" />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(edu.status)} border w-fit`}>
                      {edu.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Specializations */}
                  <div>
                    <h4 className="font-medium mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Spécialisations
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.specializations.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-sm text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;

