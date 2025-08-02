import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tresorcharlain827@outlook.fr",
      link: "mailto:tresorcharlain827@outlook.fr"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone (CI)",
      value: "+225 07 07 02 2503",
      link: "tel:+22507070225033"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone (RU)",
      value: "+7 999 495 9042",
      link: "tel:+79994959042"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/charlain-kouakou-a16369150",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      url: "mailto:tresorcharlain827@outlook.fr",
      color: "hover:text-red-500"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez-<span className="gradient-text">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prêt à collaborer sur votre prochain projet ? Discutons de vos besoins en Data Engineering et Automatisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
                Que vous ayez un projet en tête, une question technique, ou simplement 
                envie d'échanger sur les technologies de l'Industrie 4.0, n'hésitez pas à me contacter.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="tech-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/20 rounded-lg text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-card border border-border rounded-lg transition-all hover:scale-110 glow-effect ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <Card className="tech-border">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-green-400">Disponible pour de nouveaux projets</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Je réponds généralement dans les 24 heures. Pour les projets urgents, 
                  n'hésitez pas à me contacter directement par téléphone.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="tech-border">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Send className="w-5 h-5 mr-2 text-primary" />
                Envoyez-moi un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className="tech-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      className="tech-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    required
                    className="tech-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet ou votre question..."
                    rows={6}
                    required
                    className="tech-border resize-none"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">
                      {submitStatus === 'success' 
                        ? 'Message envoyé avec succès ! Je vous répondrai bientôt.' 
                        : 'Erreur lors de l\'envoi. Veuillez réessayer.'}
                    </span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full cyber-button"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Vos données sont traitées de manière confidentielle.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

