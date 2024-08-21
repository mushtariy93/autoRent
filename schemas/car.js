const {Schema, model} = require("mongoose");

const carSchema = new Schema(
    {
        car_number: {
            type: Number,
            required: true,
            unique: true
        },
        make: {
            type: String,
            required: true,
            trim: true
        },
        model: {
            type: String,
            trim: true
        },
        year: {
            type: String,
            required: true
        },
        miliage: {
            type: Number,
            required: true
        }
    },

    {
        versionKey: false
    }
)

module.exports = model("Car", carSchema);