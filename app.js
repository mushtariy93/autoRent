
const express = require("express")
const mongoose = require("mongoose");
const config = require("config");
const { errorHandler } = require("./helpers/error_handler");
const port = config.get("port");
const mainRouter = require("./routes/index.routes");

const app = express();
app.use(express.json());
app.use("/api", mainRouter);

async function start() {
    try {
        await mongoose.connect(config.get("autoRentUri"));
        app.listen(port, () =>{
            console.log(`Server started at ${port}`)
        })
    } catch (error) {
        errorHandler(res, error)
    }
}
start()