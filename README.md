# 🏦 Gestion des Comptes & Transactions - Client React

Application frontend moderne développée avec **React**, **Apollo Client** et **Tailwind CSS** pour consommer une API GraphQL de gestion bancaire.


https://github.com/user-attachments/assets/0fe2cb0b-ac84-4030-90c1-08e829475550


## 🚀 Fonctionnalités

- **Gestion des Comptes** :
  - 📋 Visualisation de la liste des comptes bancaires.
  - ➕ Création de nouveaux comptes (Courant/Épargne).
  - 💰 Affichage des soldes et types de comptes.

- **Gestion des Transactions** :
  - 💸 Ajout de transactions (Dépôt/Retrait) sur un compte existant.
  - 📜 Historique complet des transactions.
  - 🔄 Mise à jour en temps réel des soldes après transaction.

## 🛠️ Stack Technique

- **Framework** : [React 18](https://reactjs.org/)
- **Client GraphQL** : [Apollo Client](https://www.apollographql.com/docs/react/)
- **Styles** : [Tailwind CSS](https://tailwindcss.com/)
- **Langage** : JavaScript (ES6+)

## ⚙️ Prérequis

Avant de lancer l'application, assurez-vous d'avoir :

1.  **Node.js** (v16 ou supérieur) et **npm** installés.
2.  Le **Backend Spring Boot** démarré et accessible sur `http://localhost:8082`.

## 📦 Installation

1.  Clonez le dépôt ou accédez au dossier du projet :
    ```bash
    cd gestion-comptes
    ```

2.  Installez les dépendances :
    ```bash
    npm install
    ```

## 🔧 Configuration

L'application est configurée pour communiquer avec le backend via un proxy pour éviter les problèmes de CORS en développement.

- Fichier : `package.json`
- Configuration : `"proxy": "http://localhost:8082"`

Si votre backend tourne sur un autre port, modifiez cette ligne dans le `package.json`.

## ▶️ Démarrage

Pour lancer l'application en mode développement :

```bash
npm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📂 Structure du Projet

```
src/
├── 📂 apollo/       # Configuration du client Apollo
├── 📂 components/   # Composants React (Vues)
│   ├── CompteList.js
│   ├── CreateCompte.js
│   ├── TransactionForm.js
│   └── TransactionList.js
├── 📂 graphql/      # Définitions des requêtes et mutations
│   ├── mutations.js
│   ├── queries.js
│   ├── types.js
│   └── interfaces.js
├── App.js          # Composant racine et mise en page
└── index.js        # Point d'entrée
```


