# site E-commerce de produits pour animaux

Il s'agit d'un site e-commerce avec son application directement intégré avec l'API

# Langages utilisés

FRONT-END :
- HTML
- CSS

BACK-END :
- EJS : Va permettre d'intégrer du js dans du HTML
- JS
- Express
- SQL

# Modules 

- MYSQL2 : pour faire des requêtre SQL, avec une librairie différente
- body-parser : Afin d'échanger avec la base de donné
- Nodemon : pour qu'il mette à jour le site à chaque enregistrement sur l'addresse localhost (ou changement selon les réglages de VScode)
# environnement

Logiciels à installer :
- VScode (de préférence)
- Docker
- node JS


Installer nodemon:
```
npm i nodemon
```

Pour démarrer on installe express-ejs :

```
npm i -g express-ejs
```

On installe body-parser :
```
npm i body-parser
```

On installe mysql2 :

```
npm i mysql2
```

Dans un terminal on compile notre fichier docker, qui va nous permettre d'accéder à la base de donné avec :

```
docker -f compose docker-compose.yaml up
```

On peut ajouter la base de donnée (fichier .sql) dans le projet en l'important sur :

localhost:8080

# Le projet peut être lancé

Lancer 
```
npm run server
```

On peut accéder au projet à l'addresse : localhost:3000

# Base de donnée 

Contient 3 tables :
- users
- product
- orders

# Fonctionnalitées :
- Possibilité de s'inscrire



