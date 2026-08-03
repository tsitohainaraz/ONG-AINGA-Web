# ONG AINGA — Alliance pour l'Innovation, la Gouvernance et l'Autonomisation

Site web officiel de l'**ONG AINGA**, une organisation malgache dirigée par des enseignants-chercheurs, doctorants et jeunes professionnels engagés pour le développement durable, la transition énergétique, l'éducation de qualité et l'innovation technologique à Madagascar.

---

## 📋 Table des matières

- [Présentation](#-présentation)
- [Axes Stratégiques](#-axes-stratégiques)
- [Structure du Projet](#-structure-du-projet)
- [Déploiement Gratuit](#-déploiement-gratuit)
  - [Option 1 : GitHub Pages (Recommandé - 100% Gratuit)](#option-1--github-pages-recommandé---100-gratuit)
  - [Option 2 : Vercel (Gratuit & Ultra Rapide)](#option-2--vercel-gratuit--ultra-rapide)
  - [Option 3 : Render (Gratuit avec Node.js/Express)](#option-3--render-gratuit-avec-nodejs-express)
- [Lier un Nom de Domaine Personnalisé (ex: `www.ainga.org` ou `www.ainga.com`)](#-lier-un-nom-de-domaine-personnalisé-ex-wwwaingaorg-ou-wwwaingacom)
- [Modification & Personnalisation](#-modification--personnalisation)
- [Contact & Support](#-contact--support)

---

## 🌿 Présentation

L'**ONG AINGA** œuvre pour transformer positivement les communautés locales à travers une approche scientifique, participative et basée sur les preuves. 

### Points forts du site :
- **Design Institutionnel & Épuré** : Charte graphique moderne et lisible (Vert Sapin, Or Doux, Bleu Nuit).
- **Navigation Fluidifiée** : Menu responsive, ancres de défilement doux (*smooth scroll*).
- **Galerie d'Actions** : Mise en valeur du projet SAPHIR (Lauréat du 1ᵉʳ Prix National R&D 2026 - XIIᵉ Édition des Doctoriales de l'Université d'Antananarivo).
- **Inclusion & Accessibilité** : Performance optimale sans dépendance lourde.

---

## 🎯 Axes Stratégiques

1. **Éducation, Culture & Inclusion Numérique** (ODD 4)
2. **Énergies Renouvelables, Climat & Transition Écologique** (ODD 7 & ODD 13)
3. **Recherche Applied, R&D & Innovation** (ODD 9 — IoT, Capteurs, Agriculture Intelligente)
4. **Gouvernance, Démocratie & Autonomisation** (ODD 16 & ODD 17)

---

## 📁 Structure du Projet

```text
├── index.html        # Page principale (HTML5, sémantique, métadonnées OpenGraph)
├── style.css         # Styles CSS3 (Variables, Flexbox, CSS Grid, Responsive)
├── script.js         # Scripts JS interactifs (Menu mobile, date dynamique)
├── server.js         # Serveur Node.js / Express léger
├── package.json      # Configuration Node.js / scripts
├── images/           # Images d'illustration et galerie photo
│   ├── hero.jpg
│   ├── equipe.jpg
│   ├── SARY1.JPG à SARY4.JPG
│   └── ...
└── README.md         # Documentation du projet
```

---

## 🚀 Déploiement Gratuit

Voici les 3 meilleures méthodes gratuites pour déployer votre site directement depuis GitHub.

### Option 1 : GitHub Pages (Recommandé - 100% Gratuit)

Idéal pour un site statique ultra-rapide et gratuit à vie.

1. **Créer un dépôt sur GitHub** :
   - Connectez-vous sur [GitHub.com](https://github.com)
   - Cliquez sur **New Repository** et nommez-le `ainga-site` ou `ainga-web`.
   - Laissez le dépôt en mode **Public**.

2. **Envoyer le code sur GitHub** (depuis votre ordinateur) :
   ```bash
   git init
   git add .
   git commit -m "Publication du site web ONG AINGA"
   git branch -M main
   git remote add origin https://github.com/VOTRE-COMPTE/ainga-site.git
   git push -u origin main
   ```

3. **Activer GitHub Pages** :
   - Sur votre dépôt GitHub, allez dans **Settings** > **Pages**.
   - Sous **Build and deployment**, choisissez **Source : Deploy from a branch**.
   - Sélectionnez la branche `main` et le dossier `/ (root)`, puis cliquez sur **Save**.
   - Après 1 à 2 minutes, votre site sera accessible gratuitement à l'adresse :
     `https://VOTRE-COMPTE.github.io/ainga-site/`

---

### Option 2 : Vercel (Gratuit & Ultra Rapide)

Vercel offre des déploiements automatiques à chaque commit git.

1. Rendez-vous sur [Vercel.com](https://vercel.com) et connectez-vous avec votre compte GitHub.
2. Cliquez sur **Add New** > **Project**.
3. Importez votre dépôt `ainga-site`.
4. Laissez les options par défaut et cliquez sur **Deploy**.
5. Votre site sera instantanément en ligne avec une URL du type `ainga-site.vercel.app`.

---

### Option 3 : Render (Gratuit avec Node.js/Express)

Si vous souhaitez utiliser le serveur `server.js` Express :

1. Rendez-vous sur [Render.com](https://render.com).
2. Cliquez sur **New +** > **Web Service**.
3. Connectez votre dépôt GitHub `ainga-site`.
4. Sélectionnez **Node** comme environnement de création.
5. Commande de démarrage : `npm start`
6. Cliquez sur **Create Web Service**.

---

## 🌐 Lier un Nom de Domaine Personnalisé (ex: `www.ainga.com` ou `www.ainga.org`)

Pour avoir une adresse professionnelle comme `www.ainga.com`, `www.ainga.org` ou `www.ainga.mg` :

### Step 1 : Acheter le nom de domaine
Achetez votre nom de domaine chez un registrar (ex: Namecheap, OVH, Hostinger, Cloudflare ou NIC.mg).

### Step 2 : Configurer sur GitHub Pages
1. Sur votre dépôt GitHub, allez dans **Settings** > **Pages**.
2. Dans la case **Custom domain**, entrez `www.ainga.com` (ou votre domaine).
3. Cochez la case **Enforce HTTPS** pour sécuriser votre site avec SSL (HTTPS).

### Step 3 : Configurer les DNS chez votre fournisseur de domaine
Dans la zone DNS de votre registrar, ajoutez les enregistrements suivants :

- **Pour les sous-domaines (`www.ainga.com`)** :
  - **Type** : `CNAME`
  - **Nom** : `www`
  - **Cible / Valeur** : `VOTRE-COMPTE.github.io`

- **Pour le domaine principal (`ainga.com`)** :
  - **Type** : `A`
  - **Valeurs** (Serveurs GitHub Pages) :
    - `185.199.108.153`
    - `185.199.109.153`
    - `185.199.110.153`
    - `185.199.111.153`

---

## ✏️ Modification & Personnalisation

- **Remplacer les images** : Remplacez simplement les fichiers dans le dossier `images/` tout en conservant les mêmes noms.
- **Modifier les textes** : Éditez `index.html` directement.
- **Mettre à jour le téléphone ou l'email** : Recherchez `+261 38 04 938 05` ou `rztsitohaina@gmail.com` dans `index.html`.

---

## 📞 Contact & Support

- **Email** : `rztsitohaina@gmail.com`
- **Téléphone / WhatsApp** : +261 38 04 938 05
- **Adresse** : Université d’Antananarivo, Ankatso, Antananarivo, Madagascar

*Site développé avec passion pour l'ONG AINGA.*
