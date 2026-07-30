# Backend — Examen Développement Backend 2025-2026

API REST développée avec **Express.js** et **MongoDB** (Mongoose), destinée à être connectée au frontend React existant.

## 📁 Structure du projet

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # Connexion à MongoDB
│   ├── models/
│   │   ├── User.js            # Utilisateurs (inscription/connexion)
│   │   ├── Voiture.js         # Voitures (catalogue + tarifs)
│   │   └── Contact.js         # Messages du formulaire de contact
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── voitureController.js
│   │   └── contactController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── voitureRoutes.js
│   │   └── contactRoutes.js
│   ├── middlewares/
│   │   ├── authMiddleware.js  # Vérification JWT + rôle admin
│   │   └── errorHandler.js
│   └── app.js                 # Configuration Express (middlewares, routes)
├── server.js                  # Point d'entrée (connexion DB + lancement serveur)
├── .env.example                # Modèle des variables d'environnement
├── .gitignore
└── package.json
```

## 🚀 Installation (pour chaque membre de l'équipe)

1. **Cloner le dépôt**
   ```bash
   git clone <URL_DU_DEPOT>
   cd backend
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   ```
   Puis remplir `.env` avec vos propres valeurs (voir section suivante).

4. **Lancer le serveur en mode développement**
   ```bash
   npm run dev
   ```
   L'API tourne par défaut sur `http://localhost:5000`.

## 🔑 Variables d'environnement (.env)

| Variable | Description |
|---|---|
| `PORT` | Port du serveur (5000 par défaut) |
| `MONGO_URI` | Chaîne de connexion MongoDB (Atlas recommandé pour que toute l'équipe partage la même base) |
| `JWT_SECRET` | Clé secrète pour signer les tokens JWT |
| `JWT_EXPIRES_IN` | Durée de validité du token (ex: `7d`) |
| `CLIENT_URL` | URL du frontend autorisée pour CORS |

> ⚠️ Le fichier `.env` ne doit **jamais** être commité (il est déjà dans `.gitignore`). Seul `.env.example` est versionné.

### Créer une base MongoDB gratuite (recommandé : MongoDB Atlas)
1. Aller sur https://www.mongodb.com/cloud/atlas/register
2. Créer un cluster gratuit (M0)
3. Créer un utilisateur de base de données
4. Autoriser l'accès depuis n'importe quelle IP (0.0.0.0/0) pour le développement et Render/Railway
5. Copier la chaîne de connexion dans `MONGO_URI`

## 📡 Documentation de l'API

Base URL locale : `http://localhost:5000/api`

### Auth

| Méthode | Route | Accès | Description | Body |
|---|---|---|---|---|
| POST | `/auth/register` | Public | Créer un compte | `{ "nom", "email", "telephone", "password" }` |
| POST | `/auth/login` | Public | Se connecter | `{ "email", "password" }` |
| GET | `/auth/me` | Privé (token) | Profil de l'utilisateur connecté | — |

**Réponse type (register/login) :**
```json
{
  "_id": "665f1c2e...",
  "nom": "Awa Diop",
  "email": "awa@mail.com",
  "role": "client",
  "token": "eyJhbGciOi..."
}
```

Pour les routes privées, ajouter le header :
```
Authorization: Bearer <token>
```

### Voitures

| Méthode | Route | Accès | Description |
|---|---|---|---|
| GET | `/voitures` | Public | Liste de toutes les voitures |
| GET | `/voitures/:id` | Public | Détail d'une voiture |
| POST | `/voitures` | Admin | Créer une voiture |
| PUT | `/voitures/:id` | Admin | Modifier une voiture |
| DELETE | `/voitures/:id` | Admin | Supprimer une voiture |

**Exemple body (POST /voitures) :**
```json
{
  "marque": "Toyota",
  "modele": "Corolla",
  "annee": 2023,
  "prixParJour": 25000,
  "carburant": "essence",
  "transmission": "automatique",
  "places": 5,
  "image": "https://...",
  "description": "Voiture confortable et économique"
}
```

### Contact

| Méthode | Route | Accès | Description |
|---|---|---|---|
| POST | `/contact` | Public | Envoyer un message |
| GET | `/contact` | Admin | Voir tous les messages reçus |

**Exemple body (POST /contact) :**
```json
{
  "nom": "Moussa Fall",
  "email": "moussa@mail.com",
  "sujet": "Question sur une réservation",
  "message": "Bonjour, je voudrais savoir si..."
}
```

### Santé de l'API
`GET /api/health` → `{ "status": "OK", "message": "API en ligne" }` (utile pour vérifier le déploiement).

## 🔗 Intégration avec le frontend

Dans le projet frontend (Vite), crée un fichier `.env` avec :
```
VITE_API_URL=http://localhost:5000/api
```
puis en production (après déploiement du backend) :
```
VITE_API_URL=https://ton-backend.onrender.com/api
```

Exemple d'appel avec `fetch` :
```js
const res = await fetch(`${import.meta.env.VITE_API_URL}/voitures`);
const voitures = await res.json();
```

## ☁️ Déploiement (Render)

1. Pousser ce dépôt sur GitHub
2. Sur https://render.com → **New Web Service** → connecter le repo
3. Configurer :
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
4. Ajouter les variables d'environnement (`MONGO_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `CLIENT_URL`) dans l'onglet *Environment*
5. Déployer, puis récupérer l'URL générée (ex: `https://examen-backend.onrender.com`)

## 🧪 Tester avec Postman

Importer les routes ci-dessus dans une collection Postman, ou tester directement :
```
GET  http://localhost:5000/api/health
POST http://localhost:5000/api/auth/register
GET  http://localhost:5000/api/voitures
```

## 👥 Workflow Git pour l'équipe

```bash
# Récupérer les dernières modifications
git pull origin main

# Créer une branche pour une fonctionnalité
git checkout -b feature/nom-fonctionnalite

# Après modifications
git add .
git commit -m "feat: description claire du changement"
git push origin feature/nom-fonctionnalite
# puis ouvrir une Pull Request vers main
```
