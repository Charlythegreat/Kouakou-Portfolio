# 🚀 Portfolio Personnel - Charlain Kouakou

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Portfolio professionnel moderne avec un design digital futuriste pour présenter mes compétences en Data Engineering, Automatisation Industrielle et Industrie 4.0.

## 🌟 Aperçu

Ce portfolio présente mon parcours professionnel en tant qu'**Ingénieur Data & Analytics** spécialisé dans l'automatisation industrielle et les technologies de l'Industrie 4.0. Le site web arbore un design futuriste avec des animations fluides et une expérience utilisateur optimisée.

### 🎯 Fonctionnalités Principales

- **🎨 Design Futuriste** - Interface moderne avec thème sombre et effets néon
- **📱 Responsive Design** - Compatible mobile, tablette et desktop
- **⚡ Animations Fluides** - Transitions et micro-interactions soignées
- **🌙 Mode Sombre** - Thème optimisé pour une expérience visuelle immersive
- **📊 Compétences Interactives** - Barres de progression animées
- **🎯 Navigation Intelligente** - Scroll automatique vers les sections
- **📧 Formulaire de Contact** - Interface de contact fonctionnelle
- **🔍 Filtres de Projets** - Organisation par catégories techniques

## 🛠️ Technologies Utilisées

### Frontend
- **React 18.3.1** - Framework JavaScript moderne
- **Vite 6.3.5** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/UI** - Composants UI modernes
- **Lucide React** - Icônes vectorielles
- **Framer Motion** - Animations avancées

### Outils de Développement
- **ESLint** - Linting et qualité du code
- **PostCSS** - Traitement CSS avancé
- **Git** - Contrôle de version

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou pnpm

### Installation

```bash
# Cloner le repository
git clone https://github.com/charlain-kouakou/portfolio.git
cd portfolio

# Installer les dépendances
pnpm install
# ou
npm install

# Démarrer le serveur de développement
pnpm run dev
# ou
npm run dev
```


### Scripts Disponibles

```bash
# Développement
pnpm run dev          # Démarre le serveur de développement

# Production
pnpm run build        # Construit l'application pour la production
pnpm run preview      # Prévisualise la version de production

# Qualité du code
pnpm run lint         # Vérifie la qualité du code avec ESLint
```

## 📁 Structure du Projet

```
charlain-portfolio/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React
│   │   ├── ui/           # Composants UI réutilisables
│   │   ├── About.jsx     # Section À propos
│   │   ├── Contact.jsx   # Section Contact
│   │   ├── Experience.jsx # Section Expérience
│   │   ├── Footer.jsx    # Pied de page
│   │   ├── Hero.jsx      # Section Hero
│   │   ├── Navigation.jsx # Navigation
│   │   └── Projects.jsx  # Section Projets
│   ├── hooks/            # Hooks React personnalisés
│   ├── lib/              # Utilitaires et configurations
│   ├── App.css           # Styles globaux et thème
│   ├── App.jsx           # Composant principal
│   └── main.jsx          # Point d'entrée
├── components.json        # Configuration Shadcn/UI
├── package.json          # Dépendances et scripts
├── tailwind.config.js    # Configuration Tailwind
├── vite.config.js        # Configuration Vite
└── README.md             # Documentation
```

## 🎨 Design et Thème

### Palette de Couleurs
- **Primaire** : `#3b82f6` (Bleu électrique)
- **Accent** : `#6366f1` (Violet néon)
- **Arrière-plan** : `#0a0a0f` (Noir profond)
- **Surface** : `#111118` (Gris foncé)
- **Texte** : `#e4e4e7` (Gris clair)

### Typographie
- **Police principale** : Inter, système
- **Poids** : 300 (Light), 400 (Regular), 600 (Semibold), 700 (Bold)

### Animations
- Transitions fluides (300ms ease)
- Effets de hover sophistiqués
- Barres de progression animées
- Animations de scroll

## 📊 Sections du Portfolio

### 🏠 Accueil (Hero)
- Animation de texte dynamique
- Photo de profil stylisée
- Boutons d'action principaux
- Liens vers les réseaux sociaux

### 👨‍💻 À Propos
- Biographie professionnelle détaillée
- Compétences techniques avec niveaux
- Langues parlées
- Qualités personnelles
- Téléchargement du CV

### 🚀 Projets
- 6 projets techniques détaillés
- Filtres par catégorie
- Technologies utilisées
- Statuts des projets
- Liens vers les détails

### 💼 Expérience & Formation
- Parcours professionnel complet
- Formation académique
- Onglets interactifs
- Timeline visuelle
- Réalisations clés

### 📞 Contact
- Formulaire de contact fonctionnel
- Informations de contact
- Liens vers les réseaux sociaux
- Statut de disponibilité

## 🌐 Déploiement

### Déploiement Automatique
Le site peut être déployé sur diverses plateformes :

#### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

#### Netlify
```bash
# Build du projet
pnpm run build

# Déployer le dossier dist/
```

#### GitHub Pages
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter dans package.json
"homepage": "https://charlain-kouakou.github.io/portfolio",
"scripts": {
  "predeploy": "pnpm run build",
  "deploy": "gh-pages -d dist"
}

# Déployer
pnpm run deploy
```

## 🔧 Personnalisation

### Modifier les Informations Personnelles
1. Éditer les données dans chaque composant
2. Remplacer les images dans `src/assets/`
3. Mettre à jour les liens sociaux
4. Modifier le CV dans `src/assets/`

### Ajouter de Nouveaux Projets
1. Ouvrir `src/components/Projects.jsx`
2. Ajouter un nouvel objet dans le tableau `projects`
3. Inclure l'image du projet dans `src/assets/`

### Personnaliser le Thème
1. Modifier les variables CSS dans `src/App.css`
2. Ajuster les couleurs Tailwind dans `tailwind.config.js`
3. Personnaliser les animations et transitions

## 📈 Performance

- **Lighthouse Score** : 95+ (Performance, Accessibilité, SEO)
- **Bundle Size** : Optimisé avec Vite
- **Images** : Optimisées et responsive
- **Animations** : GPU-accelerated
- **SEO** : Meta tags et structure sémantique

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

**Charlain Kouakou**
- 🌐 Portfolio : [charlain-kouakou.dev](https://charlain-kouakou.dev)
- 💼 LinkedIn : [charlain-kouakou](https://www.linkedin.com/in/charlain-kouakou-a16369150)
- 📧 Email : tresorcharlain827@outlook.fr
- 📍 Localisation : Abidjan, Côte d'Ivoire

---

## 🙏 Remerciements

- **React Team** pour le framework exceptionnel
- **Tailwind CSS** pour le système de design
- **Shadcn/UI** pour les composants élégants
- **Lucide** pour les icônes vectorielles
- **Vite** pour l'expérience de développement

---

<div align="center">
  <p>Fait avec ❤️ et ☕ par Charlain Kouakou</p>
  <p>© 2025 - Tous droits réservés</p>
</div>

