const express = require("express");
const indexRouter = express.Router();

carRouter = require("./car.routes");
clientRouter = require("./client.routes");
price_typeRouter = require("./price_type.routes");

indexRouter.use("/car", carRouter);
indexRouter.use("/client", clientRouter);
indexRouter.use("/price_type", price_typeRouter);

module.exports = indexRouter;
