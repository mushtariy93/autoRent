const express = require("express");
const { addClient, getClients, updateClientById, deleteClientById } = require("../controllers/client.controller");
const router = express.Router()

router.post("/create", addClient);
router.get("/", getClients);
router.patch("/update/:id", updateClientById);
router.delete("/delete/:id", deleteClientById)

module.exports = router