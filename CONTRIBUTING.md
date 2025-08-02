# Guide de Contribution

Merci de votre intérêt pour contribuer à ce projet ! Ce guide vous aidera à comprendre comment participer efficacement.

## 🚀 Comment Contribuer

### 1. Fork et Clone

```bash
# Fork le repository sur GitHub
# Puis clonez votre fork
git clone https://github.com/VOTRE-USERNAME/portfolio.git
cd portfolio
```

### 2. Configuration de l'Environnement

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm run dev
```

### 3. Créer une Branche

```bash
# Créer une nouvelle branche pour votre feature
git checkout -b feature/nom-de-votre-feature

# Ou pour un bugfix
git checkout -b fix/description-du-bug
```

## 📝 Types de Contributions

### 🐛 Rapporter des Bugs
- Utilisez les GitHub Issues
- Décrivez le problème clairement
- Incluez les étapes pour reproduire
- Mentionnez votre environnement (OS, navigateur, etc.)

### ✨ Proposer des Fonctionnalités
- Ouvrez une issue pour discuter de l'idée
- Expliquez le cas d'usage
- Proposez une implémentation si possible

### 🔧 Corrections de Code
- Corrigez les bugs existants
- Améliorez les performances
- Ajoutez des tests si nécessaire

### 📚 Documentation
- Améliorez le README
- Ajoutez des commentaires dans le code
- Créez des guides d'utilisation

## 🎯 Standards de Code

### Style de Code
- Utilisez ESLint pour la cohérence
- Suivez les conventions React/JavaScript
- Utilisez des noms de variables descriptifs
- Commentez le code complexe

### Structure des Commits
```
type(scope): description courte

Description plus détaillée si nécessaire

- Changement 1
- Changement 2
```

Types de commits :
- `feat`: nouvelle fonctionnalité
- `fix`: correction de bug
- `docs`: documentation
- `style`: formatage, point-virgules manquants, etc.
- `refactor`: refactoring du code
- `test`: ajout de tests
- `chore`: maintenance

### Exemple de Commit
```bash
git commit -m "feat(projects): add project filtering by technology

- Add filter buttons for each technology
- Implement filtering logic in Projects component
- Update project data structure to support filtering"
```

## 🧪 Tests

### Avant de Soumettre
```bash
# Vérifier le linting
pnpm run lint

# Construire le projet
pnpm run build

# Tester en local
pnpm run preview
```

### Tests Manuels
- Testez sur différents navigateurs
- Vérifiez la responsivité mobile
- Testez les animations et interactions
- Vérifiez l'accessibilité

## 📋 Checklist Pull Request

Avant de soumettre votre PR, assurez-vous que :

- [ ] Le code suit les standards du projet
- [ ] Les commits sont bien formatés
- [ ] La documentation est mise à jour si nécessaire
- [ ] Le code a été testé localement
- [ ] Aucune erreur ESLint
- [ ] Le build fonctionne correctement
- [ ] Les changements sont décrits clairement

## 🔄 Processus de Review

1. **Soumission** : Créez votre Pull Request
2. **Review** : L'équipe examine votre code
3. **Feedback** : Implémentez les suggestions
4. **Approbation** : Une fois approuvé, votre code sera mergé

## 📞 Besoin d'Aide ?

- Ouvrez une issue pour poser des questions
- Contactez-moi directement : tresorcharlain827@outlook.fr
- Consultez la documentation existante

## 🎉 Reconnaissance

Tous les contributeurs seront mentionnés dans le README et les release notes.

Merci pour votre contribution ! 🙏

