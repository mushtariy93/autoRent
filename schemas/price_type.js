const {Schema, model, version} = require("mongoose");

const price_typeSchema = new Schema({
    car_id: {
        type: Number
    },
    price_per_day:{
        type: String
    },
    price_per_hour: {
        type: String
    }
},
{
    versionkey: false
})

module.exports = model("Price_type", price_typeSchema)