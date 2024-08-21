const {Schema, model} = require("mongoose");

const clientSchema = new Schema ({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required:false,
        trim: true
    },
    birthday: {
        type: Date,
        required: false
    },
    passport: {
        type: String,
        required: true,
        unique: true
    },
    driver_license: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: false,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
},
{
    versonkey: false
}
)

module.exports = model("Client", clientSchema);
