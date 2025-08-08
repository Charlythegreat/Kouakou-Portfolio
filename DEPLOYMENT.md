# Guide de Déploiement

Ce guide vous explique comment déployer le portfolio sur différentes plateformes.

## 🚀 Options de Déploiement

### 1. GitHub Pages (Recommandé)

#### Configuration Automatique
Le repository est configuré avec GitHub Actions pour un déploiement automatique.

1. **Fork le repository** sur votre compte GitHub
2. **Activez GitHub Pages** :
   - Allez dans Settings > Pages
   - Source : "Deploy from a branch"
   - Branch : `gh-pages`
3. **Push vers main** déclenche automatiquement le déploiement

#### Configuration Manuelle
```bash
# Installer gh-pages
npm install --save-dev gh-pages

# Déployer
npm run deploy
```

### 2. Vercel (Très Simple)

1. **Connectez votre repository** à [Vercel](https://vercel.com)
2. **Configuration automatique** détectée
3. **Déploiement instantané** à chaque push

#### Via CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déploiement en production
vercel --prod
```

### 3. Netlify

#### Via Interface Web
1. **Glissez-déposez** le dossier `dist/` sur [Netlify](https://netlify.com)
2. **Ou connectez** votre repository GitHub

#### Via CLI
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Build et déploiement
npm run build
netlify deploy --prod --dir=dist
```

### 4. Firebase Hosting

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter
firebase login

# Initialiser
firebase init hosting

# Build et déploiement
npm run build
firebase deploy
```

## ⚙️ Configuration Spécifique

### Variables d'Environnement

Créez un fichier `.env.local` pour les variables sensibles :

```env
# Analytics (optionnel)
VITE_GA_TRACKING_ID=your_google_analytics_id

# Contact Form (optionnel)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Domaine Personnalisé

#### GitHub Pages
1. Ajoutez un fichier `CNAME` dans `/public/` avec votre domaine
2. Configurez les DNS chez votre registrar

#### Vercel/Netlify
1. Ajoutez le domaine dans les paramètres du projet
2. Configurez les DNS selon les instructions

## 🔧 Optimisations de Production

### Performance
```bash
# Analyser le bundle
npm run build
npx vite-bundle-analyzer dist
```

### SEO
- Meta tags configurés dans `index.html`
- Sitemap généré automatiquement
- Robots.txt inclus

### PWA (Optionnel)
Pour transformer en Progressive Web App :

```bash
# Installer Vite PWA
npm install -D vite-plugin-pwa

# Configurer dans vite.config.js
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
}
```

## 🔍 Vérification Post-Déploiement

### Checklist
- [ ] Site accessible via l'URL
- [ ] Navigation fonctionne
- [ ] Images se chargent
- [ ] Formulaire de contact opérationnel
- [ ] Responsive sur mobile
- [ ] Performance Lighthouse > 90
- [ ] SEO optimisé

### Outils de Test
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🚨 Dépannage

### Problèmes Courants

#### Images ne se chargent pas
```javascript
// Vérifiez les chemins dans vite.config.js
export default {
  base: '/portfolio/', // Pour GitHub Pages
  // ou
  base: '/', // Pour domaine personnalisé
}
```

#### Erreur 404 sur les routes
```javascript
// Ajoutez dans vite.config.js pour SPA
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html')
      }
    }
  }
}
```

#### Build échoue
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install

# Vérifier les versions Node
node --version # >= 18.0.0
npm --version  # >= 8.0.0
```

## 📊 Monitoring

### Analytics
- Google Analytics configuré
- Suivi des performances
- Monitoring des erreurs

### Maintenance
- Mises à jour automatiques des dépendances
- Surveillance de la sécurité
- Backups réguliers

## 🔄 Mise à Jour

### Processus
1. **Développement** en local
2. **Test** sur branche feature
3. **Merge** vers main
4. **Déploiement** automatique
5. **Vérification** en production

### Rollback
```bash
# Revenir à la version précédente
git revert HEAD
git push origin main
```

---

Pour toute question sur le déploiement, consultez la documentation ou ouvrez une issue.

