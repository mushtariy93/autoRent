const express = require("express");
const { addRent, getRents, updateRentById, deleteRentById, createRent } = require("../controllers/rent.controller");
const router = express.Router();

router.post("/create", addRent);
router.post("/", createRent);
router.get("/", getRents);
router.patch("/update/:id", updateRentById);
router.delete("/delete/:id", deleteRentById);


module.exports = router