# Guide de déploiement Vercel - HASHTAG BOT

## 🚀 Déploiement sur Vercel

### Étape 1 : Préparation du projet

1. **Vérifiez que votre projet compile correctement :**
   ```bash
   npm run build
   ```

2. **Assurez-vous que tous les fichiers sont commités :**
   ```bash
   git add .
   git commit -m "Préparation pour déploiement Vercel"
   git push
   ```

### Étape 2 : Déploiement sur Vercel

#### Option A : Déploiement via l'interface web

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte ou connectez-vous
3. Cliquez sur "New Project"
4. Importez votre repository GitHub
5. Vercel détectera automatiquement que c'est un projet Next.js
6. Cliquez sur "Deploy"

#### Option B : Déploiement via CLI

1. **Installez Vercel CLI :**
   ```bash
   npm i -g vercel
   ```

2. **Connectez-vous à Vercel :**
   ```bash
   vercel login
   ```

3. **Déployez le projet :**
   ```bash
   vercel
   ```

### Étape 3 : Configuration post-déploiement

1. **Variables d'environnement (optionnel) :**
   - Allez dans les paramètres de votre projet Vercel
   - Ajoutez les variables d'environnement si nécessaire
   - Exemple : `NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app`

2. **Domaine personnalisé (optionnel) :**
   - Dans les paramètres du projet
   - Ajoutez votre domaine personnalisé
   - Configurez les DNS si nécessaire

### Étape 4 : Vérification

1. **Testez votre application :**
   - Vérifiez que toutes les pages se chargent
   - Testez la navigation
   - Vérifiez les performances

2. **Monitoring :**
   - Utilisez les outils de monitoring de Vercel
   - Surveillez les logs en cas de problème

## 🔧 Configuration avancée

### Optimisations de performance

Le projet est déjà configuré avec :
- ✅ Compression automatique
- ✅ Optimisation des images
- ✅ Code splitting
- ✅ Préchargement des polices
- ✅ Animations CSS optimisées

### Variables d'environnement recommandées

```env
NEXT_PUBLIC_APP_NAME=HASHTAG BOT
NEXT_PUBLIC_APP_DESCRIPTION=Boutique en ligne - Numéro 1 dans le Nord Pas de Calais
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

## 🐛 Résolution des problèmes

### Erreur 404
- Vérifiez que le fichier `vercel.json` est présent
- Assurez-vous que la configuration Next.js est correcte
- Vérifiez les logs de build dans Vercel

### Erreur de compilation
- Vérifiez que toutes les dépendances sont installées
- Assurez-vous que TypeScript compile sans erreur
- Vérifiez la syntaxe des composants React

### Problèmes de performance
- Utilisez les outils de performance de Vercel
- Optimisez les images si nécessaire
- Vérifiez la taille du bundle

## 📊 Monitoring et analytics

### Vercel Analytics
- Activez Vercel Analytics dans les paramètres
- Surveillez les performances en temps réel

### Google Analytics (optionnel)
- Ajoutez votre ID GA dans les variables d'environnement
- Configurez le tracking dans `app/layout.tsx`

## 🔄 Mises à jour

Pour déployer des mises à jour :

1. **Poussez vos changements :**
   ```bash
   git add .
   git commit -m "Mise à jour"
   git push
   ```

2. **Vercel déploiera automatiquement** si vous avez configuré l'intégration GitHub

3. **Ou déployez manuellement :**
   ```bash
   vercel --prod
   ```

## 📞 Support

En cas de problème :
1. Vérifiez les logs de build dans Vercel
2. Consultez la documentation Next.js
3. Vérifiez les issues GitHub du projet

---

**Votre boutique HASHTAG BOT est maintenant prête pour la production ! 🎉**