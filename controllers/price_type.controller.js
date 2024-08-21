const {errorHandler} = require("../helpers/error_handler");
const price_type = require("../schemas/price_type");
const Price_type = require("../schemas/price_type");

const addPrice_type = async (req, res) => {
    try {
        const {car_id, price_per_day, price_per_hour, late_fee_per_hour} = req.body;
        const newPrice_type = await price_type.create({
          car_id,
          price_per_day,
          price_per_hour,
          late_fee_per_hour,
        });
        res.status(201).send({message: "New Price Type added successfully", newPrice_type})
    } catch (error) {
        errorHandler(res, error)
    }
}

const getPriceTypes = async (req, res) => {
    try {
         const pricetypes = await Price_type.find();
         res.send(pricetypes);
    } catch (error) {
        errorHandler(res, error)
    }
   
}

const updatePriceTypeById = async (req, res) => {
    try {
        const {id} = req.params.id;
        const {
            car_id,
          price_per_day,
          price_per_hour,
          late_fee_per_hour,
        } = req.body;
        const updated_priceType = await Price_type.findByIdAndUpdate(id, {
          car_id,
          price_per_day,
          price_per_hour,
          late_fee_per_hour
        });
        if(!updated_priceType){
            res.status(404).send({
                statuscode: 404,
                message: "Price type not founded!"
            })
        }
        res.status(200).send({
            statuscode: 200,
            message: "Price Type updated successfully",
            data: updated_priceType
        })
    } catch (error) {
        errorHandler(res, error)
    }
}

const deletePriceTypeById = async (req, res) => {
    try {
        const {id} = req.params.id;
        const {
            car_id,
          price_per_day,
          price_per_hour,
          late_fee_per_hour
        } = req.body;
        const deleted_priceType = await addPrice_type.findByIdAndUpdate(id, {
          car_id,
          price_per_day,
          price_per_hour,
          late_fee_per_hour,
        });
        if(!deleted_priceType){
            res.status(404).send({statuscode: 404, message: "Price Type not founded"})
        }
        res.status(200).send({
            statuscode: 200, 
            message: "Price Type deleted successfully!",
            date: deleted_priceType
        })
        
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = {
    addPrice_type,
    getPriceTypes,
    updatePriceTypeById,
    deletePriceTypeById
}