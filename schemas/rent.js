const { Schema, model } = require("mongoose");

const rentSchema = new Schema({
  car_id: {
    type: Schema.Types.ObjectId,
    ref: "Car",
  },

  client_id: {
    type: Schema.Types.ObjectId,
    ref: "Client",
  },

  from_datetime: {
    type: Date,
  },

  to_datetime: {
    type: Date,
  },

  rent_status_id: {
    type: String,
    enum: {
      values: ["started", "finished"],
      message: `{value} noto'g'ri!`,
    },
  },

  rent_type_id: {
    type: String,
    enum: {
      values: ["per day", "per hour"],
      message: `{value} noto'g'ri!`,
    },
  },

  total_price: {
    type: Number,
  },

  price_per_unit: {
    type: Number,
    required: true,
  },
});

module.exports = model("Rent", rentSchema);

