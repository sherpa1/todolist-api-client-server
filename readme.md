# Todo List

__API + clients web et mobile__

---
> Projet d'initiation au concept d'API Rest : développement, exposition, consommation et intéraction, avec Docker (Docker Compose), Node.js (Express.js, Ngrok), Flutter, JavaScript (Fetch / Axios).

> _Les fonctionnalités du projet ne sont pas intégralement implémentées._

> _Ce projet est une preuve de concept permettant d'illustrer les interactions client / serveur à travers une API._

> Ce projet pourrait être complété par un service de base de données, un micro service d'authentification (Token JWT), un micro service d'upload de fichiers...

---
## Architecture

- http://localhost:3000 : API,
- http://localhost:8000 : Client Web (JS + Fetch),
- http://localhost:9000 : Client Web (JS + Axios),

> L'application mobile accède à l'API exposée sur le réseau internet par Ngrok. Mettra à jour l'adresse du Endpoint dans le fichier ./mobile_app/lib/HomePage.dart

## Commandes utiles au fonctionnement du projet

### Docker

- Démarrer les services

    `docker-compose up`

- Installer les dépendances NPM dans le container Docker, adapter la valeur de l'attribut "command" du fichier docker-compose.yml : 

    `bash -c "npm i && npm start"`

- Hot reloading du serveur Node.js, adapter la valeur de l'attribut "command" du fichier docker-compose.yml : 

    `bash -c "npm i && npm run dev"`

### Ngrok

- exposer l'API sur le réseau internet : 

    `ngrok http 3000`

### NPM

- Installer les dépendances npm dans le dossier node_modules :

    - se placer à la racine du dossier webclient_axios : 

    `npm i`

### Flutter

- vérifier l'installation de Flutter : 

    `flutter doctor`
- démarrer l'application mobile : 

    - démarrer l'émulateur mobile ou brancher un terminal mobile (mode développeur activé + écran dévérouillé)
    
    - depuis la racine du dossier mobileapp

    `flutter run`

- hot reloading : 

    `r`

- hot restarting : 

    `R`

## Crédits

Icons made by Freepik from www.flaticon.com

--- 
__Ce projet est exclusivement destiné à l'enseignement.__

Remarques, suggestions, corrections... bienvenues.

---

__Alexandre Leroux__

alex@sherpa.one

_Enseignant vacataire à l'Université de Lorraine_

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)
