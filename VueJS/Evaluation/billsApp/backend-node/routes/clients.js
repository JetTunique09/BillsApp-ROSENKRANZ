//routes pour l'API

//framework backend
const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/clients.js");

//déclaration des routes pour les factures soit /bills
//toute les bills ici
router.get("/", ctrl.getAll);

//recupère une seule facture en fonction de son id
router.get("/:id", ctrl.getOne);

//nouvelle bill
router.post("/", ctrl.postOne);

//modifier facture existante en fonction de son id
router.patch("/:id", ctrl.patchOne);

//supprime une facture en fonction de son id
router.delete("/:id", ctrl.deleteOne);

module.exports = router;
