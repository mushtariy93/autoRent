const {errorHandler} = require("../helpers/error_handler");
const { updateMany } = require("../schemas/car");
const car = require("../schemas/car");

const addCar = async (req, res) => {
  try {
    const { car_number, make, model, year, mileage } = req.body;
    const newCar = await car.create({
      car_number,
      make,
      model,
      year,
      mileage,
    });
    res.status(201).send({ message: "New Car Added Successfully", newCar });
  } catch (error) {
    errorHandler(res, error);
  }
};

const getCars = async (req, res) => {
    try {
        const cars = await car.find();
        res.send(cars)
    } catch (error) {
        errorHandler(res, error)
    }
}

const updateCarbyId = async(req, res) => {
    try {
        const {id} = req.params;
        const {car_number, make, model, year, mileage} = req.body
        const updated_car = await car.findByIdAndUpdate(
            id, 
            {car_number, make, model, year, mileage},
            {new: true, runvalidators: true}
        )
        if(!updated_car){
            res.status(404).send({statuscode: 404, message: "Car not founded!"})
        }
        return res.status(200).send({
            statuscode: 200,
            message: "Car updated successfully",
            data: updated_car
        })
    } catch (error) {
        errorHandler(res, error)
    }
}

const deleteCarByid = async (req, res) => {
    try {
        const {id} = req.params;
        const {car_number, make, model, year, mileage} = req.body;
        const deleted_car = await car.findbyIdAndDelete(
            id, {
          car_number,
          make,
          model,
          year,
          mileage,
        },
        {new: true, runvalidators: true}
    );
    if(!deleted_car){
        res.status(404).send({statuscode: 404, message: "Car not founded!"})
    }
    res.status(200).send({
        statuscode: 200,
        message: "Car deleted successfully!",
        data: deleted_car
    })
    } catch (error) {
        errorHandler(res, error)
    }
}


module.exports = {
  addCar,
  getCars,
  updateCarbyId,
  deleteCarByid
};
