# API Cookie Contest
⚠️ *Ce projet est en cours de développement*

Cette API est développée pour l'application Cookie Contest par la CookieDevTeam. Projet réalisé avec le soutient émotionnel de Philippe.

## Sommaire
1. [API Cookie Contest](#api-cookie-contest)
   1. [Sommaire](#sommaire)
   2. [Tester l'API](#tester-lapi)
      1. [En ligne](#en-ligne)
      2. [Localement](#localement)
         1. [Installer l'API](#installer-lapi)
         2. [Définir les variables d'environnement](#définir-les-variables-denvironnement)
         3. [Lancer l'API](#lancer-lapi)
   3. [Ressources disponibles](#ressources-disponibles)
   4. [📝 TODO List](#-todo-list)


## Tester l'API
### En ligne
[Lien de l'API en ligne](https://api-cookies-5sog.onrender.com/api)
### Localement
#### Installer l'API
~~~bash
git clone https://github.com/TaupeInHambourg/api-cookies.git
npm install
cd api-cookies
~~~
#### Définir les variables d'environnement
**Sous Windows :**
~~~bash
$env:DB_HOST="host"
$env:DB_USER="user"
$env:DB_PASSWORD="password"
$env:DB_NAME="name"
$env:PORT="3306"
~~~
**Sous macOS/Linux :**
~~~bash
export DB_HOST="host"
export DB_USER="user"
export DB_PASSWORD="password"
export DB_NAME="name"
export PORT="3306"
~~~
#### Lancer l'API
~~~bash
node server.js
curl localhost:3306/api
~~~
## Ressources disponibles
| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|------------------|----------------------|--------------|---------------------------------|--------------------------------|
| Liste des évenements | `/trials` | GET, HEAD, OPTION | | |
| Permet à l'utilisateur de se connecter | `/login` | GET, POST, HEAD, OPTION | `{ identifiant, password }` | |
## 📝 TODO List
- [ ] Vérifier /login
- [ ] Créer les ressources :
  - [ ] Gallery
  - [ ] Note
  - [ ] Juré
  - [ ] Concurrent
- [ ] Ajouter les ressources au tableau
- [ ] Protéger les ressources