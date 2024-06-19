const express = require("express");
const cors = require("cors");

// import des routes qui viennent du dossier /routes/...
const billRoutes = require("./routes/bills.js");
const clientRoutes = require("./routes/clients.js");

const app = express();

app.use(express.json()); // ici on définit que les body des requêtes seront automatiquement convertiens en format json dans nos contrôleurs de routes
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true
  })
);

// utilisation des routes dans l'application
app.use("/bills", billRoutes);
app.use("/clients", clientRoutes);

// route de base de l'api
app.get("/", (req, res) => {
  res.send({
    api: "Bill app API",
    version: "0.1.0",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// run with `node server.mjs`
//se mettre dans le terminal pour démarrer le serveur -> node backend-node/index.mjs
// utilisation https://expressjs.com/fr/starter/installing.html pour installer Express.js
//détail de l'installation
// noemierosenkranz@MacBook-Pro-de-Nemie exercice-ajout-back % npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (exercice-ajout-back) backend-billapp
// version: (1.0.0)
// description: serveur express qui sert d'API pour notre app frontend en vuejs
// entry point: (index.js) index.mjs
// test command:
// git repository:
// keywords: express, api, factures
// author: Noémie ROSEN
// license: (ISC)
// About to write to /Users/noemierosenkranz/Sites/VueJS/TP/exercice-ajout-back/package.json:

// {
//   "name": "backend-billapp",
//   "version": "1.0.0",
//   "description": "serveur express qui sert d'API pour notre app frontend en vuejs",
//   "main": "index.mjs",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [
//     "express",
//     "api",
//     "factures"
//   ],
//   "author": "Noémie ROSEN",
//   "license": "ISC"
// }
// Is this OK? (yes) yes
