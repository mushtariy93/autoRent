const express = require("express");
const { addCar, getCars, updateCarbyId, deleteCarByid } = require("../controllers/car.controller");
const router = express.Router();

router.post("/create", addCar);
router.get("/", getCars);
router.patch("/update/:id", updateCarbyId);
router.delete("/delete/:id", deleteCarByid)

module.exports = router;