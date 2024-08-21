const { errorHandler } = require("../helpers/error_handler");
const rent = require("../schemas/rent");
const rent = require("../schemas/rent");
const rent = require("../schemas/rent");

const addRent = async (req, res) => {
  try {
    const {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      total_price,
    } = req.body;
    const newRent = await rent.create({
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      total_price,
    });
    res.status(201).send({ message: "New Rent added successfully!", newRent });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getRents = async (req, res) => {
  try {
    const rents = await rent.find();
    res.send(rents);
  } catch (error) {
    errorHandler(res, error);
  }
};

const updateRentById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      total_price,
    } = req.body;
    const updated_rent = await rent.findByIdAndUpdate(id, {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      total_price,
    });
    if (!updated_rent) {
      res
        .status(404)
        .send({ statuscode: 404, message: "Rent not founded" });
    }
    res.status(200).send({
      statuscode: 200,
      message: "Rent updated successfully!",
      date: updated_rent,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const deleteRentById = async (req, res) => {
  try {
    const {id} = req.params.id;
    const {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      total_price,
    } = req.body;
    const deleted_rent = await rent.findByIdAndDelete(id, {
      car_id,
      client_id,
      from_datetime,
      to_datetime,
      rent_status_id,
      rent_type_id,
      total_price
    });
    if(!deleted_rent){
        res
          .status(404)
          .send({ statuscode: 404, message: "Price Type not founded" });
    }
     res.status(200).send({
       statuscode: 200,
       message: "Rent deleted successfully!",
       date: deleted_rent,
     });
  } catch (error) {
    errorHandler(res, error);
  }
};

async function createRent(req, res) {
  try {
    const rentData = req.body;
    const from = new Date(rentData.from_datetime);
    const to = new Date(rentData.to_datetime);
    const durationMs = to - from;

    let totalPrice;
    if (rentData.rent_type_id === "per day") {
      const durationDays = durationMs / (1000 * 60 * 60 * 24);
      totalPrice = durationDays * rentData.price_per_unit;
    } else if (rentData.rent_type_id === "per hour") {
      const durationHours = durationMs / (1000 * 60 * 60);
      totalPrice = durationHours * rentData.price_per_unit;
    }
    rentData.total_price = totalPrice;
    const rent = new Rent(rentData);
    await rent.save();
    res.status(201).json(rent); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  addRent,
  getRents,
  updateRentById,
  deleteRentById,
  createRent
};
