# API Cookie Contest
Cette API est développée pour l'application Cookie Contest par la CookieDevTeam avec le soutient émotionnel de Philippe.
## Tester l'API localement
### Installer l'API
~~~bash
git clone https://github.com/TaupeInHambourg/api-cookies.git
npm install
cd api-cookies
~~~
### Définir les variables d'environnement
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
### Lancer l'API
~~~bash
node server.js
curl localhost:3306/api
~~~
## Ressources disponibles
| Ressource | URL | Méthode HTTP | Paramètres et variations | Commentaires |
|------------------|----------------------|--------------|---------------------------------|--------------------------------|
| Liste des évenements | `/trials` | GET, HEAD, OPTION | | |
| Permet à l'utilisateur de se connecter | `/login` | GET, POST, HEAD, OPTION | `{ identifiant, password }` | |
