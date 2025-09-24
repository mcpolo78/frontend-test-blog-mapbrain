# Blog Posts App - Test Technique Frontend

Application Next.js 15 développée pour un test technique, démontrant la maîtrise de l'App Router, du cache/revalidation et des bonnes pratiques React.

## 🚀 Fonctionnalités

### Pages implémentées
- **Page d'accueil (/)** : Landing page avec navigation vers les articles
- **Liste des articles (/posts)** : Affichage de tous les articles avec recherche et refresh
- **Détail d'un article (/posts/[id])** : Vue détaillée avec modal JSON comme extra UX

### Fonctionnalités clés
- ✅ **Recherche en temps réel** : Filtrage côté client dans le titre et contenu des articles
- ✅ **Cache intelligent** : Stratégie de cache Next.js avec revalidation
- ✅ **Refresh manuel** : Bouton pour actualiser les données via revalidation
- ✅ **Extra UX** : Modal affichant le JSON brut de l'article avec bouton de copie
- ✅ **Gestion d'erreurs** : Loading states et error handling complets
- ✅ **Design responsive** : Interface adaptée mobile/desktop avec Tailwind CSS

## 🛠️ Technologies utilisées

- **Next.js 15** : Framework React avec App Router
- **TypeScript** : Typage pour une meilleure robustesse
- **Tailwind CSS** : Framework CSS utilitaire pour le styling
- **React Server Components** : Composants serveur par défaut pour les performances

## 📦 Installation et lancement

```bash
# Cloner le projet
git clone [url-du-repo]
cd blog-posts-app

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Lancer en production
npm run build
npm start
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture et choix techniques

### Stratégie de rendu

**SSG (Static Site Generation) avec ISR (Incremental Static Regeneration)**

- **Pourquoi ce choix ?** : Les articles de blog sont relativement statiques et bénéficient grandement du cache pour les performances
- **Configuration** : `revalidate: 3600` (1 heure) pour un bon équilibre entre fraîcheur des données et performance
- **Avantages** :
  - Temps de chargement ultra-rapides (pages pré-générées)
  - SEO optimisé avec génération automatique des métadonnées
  - Réduction de la charge serveur

### Système de cache et revalidation

**Implémentation de la stratégie de cache Next.js :**

```typescript
// Cache avec tags pour revalidation ciblée
const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  cache: 'force-cache',
  next: { revalidate: 3600, tags: ['posts'] }
});
```

**Revalidation manuelle :**
- API Route `/api/revalidate` pour invalider le cache sur demande
- Utilisation de `revalidateTag()` pour revalidation ciblée
- Bouton "Actualiser" qui trigger la revalidation et recharge la page

### Organisation du code

```
src/
├── app/                    # App Router
│   ├── layout.tsx         # Layout global avec navigation
│   ├── page.tsx          # Page d'accueil
│   ├── posts/            # Pages articles
│   │   ├── page.tsx      # Liste des articles (Server Component)
│   │   ├── posts-client.tsx # Logique client (recherche, refresh)
│   │   └── [id]/         # Page détail dynamique
│   │       ├── page.tsx  # Détail article (Server Component)
│   │       ├── post-detail.tsx # Logique client (modal)
│   │       └── not-found.tsx # Page 404 personnalisée
│   └── api/
│       └── revalidate/   # API pour revalidation
└── types/
    └── post.ts          # Types TypeScript
```

### Choix d'architecture

1. **Séparation Server/Client Components** :
   - Server Components pour le fetch des données
   - Client Components pour l'interactivité (recherche, modals)

2. **Gestion d'état minimaliste** :
   - `useState` pour l'état local (recherche, modal)
   - Pas de librairie externe (respect de la contrainte)

3. **Types TypeScript** :
   - Interface `Post` pour la cohérence des données
   - Typage strict des props et paramètres

## 🎨 Fonctionnalités UX

### Extra UX implémenté : Modal JSON
- Affichage du JSON brut de l'article dans une modal
- Bouton de copie pour développeurs/testeurs
- Design soigné avec overlay et animations

### Autres améliorations UX
- **Loading states** : Indicateurs visuels pendant les chargements
- **Error handling** : Messages d'erreur clairs avec boutons de retry
- **Responsive design** : Adaptation mobile/tablet/desktop
- **Compteur de résultats** : Feedback sur le nombre d'articles trouvés
- **Navigation intuitive** : Breadcrumbs et liens de retour

## 🔄 Ce qui pourrait être amélioré avec plus de temps

### Fonctionnalités

- **Filtres avancés** : Filtrage par utilisateur, tri par date
- **Pagination** : Implémenter une pagination côté serveur pour de gros volumes
- **Favoris** : Système de bookmarks avec localStorage
- **Partage social** : Boutons de partage sur les articles
- **Mode sombre** : Toggle dark/light mode


---

*Application développée dans le cadre d'un test technique frontend - Durée : 3 heures*