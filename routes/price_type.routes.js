const express = require("express");
const { addPrice_type, getPriceTypes, updatePriceTypeById, deletePriceTypeById } = require("../controllers/price_type.controller");
const router = express.Router();

router.post("/create", addPrice_type);
router.get("/", getPriceTypes);
router.patch("/update/:id", updatePriceTypeById);
router.delete("/delete/:id", deletePriceTypeById);

module.exports = router;